<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function login(Request $request)
    {
        $user = User::where('identification', $request->identification)->first();
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $response = ['token' => $token, 'user' => $user];
                return response($response, 200);
            }
        }

        $response = ["message" => 'Usuario o clave incorrecto'];
        return response($response, 400);
    }

    public function register(Request $request)
    {
        $valide = User::where("identification", $request->identification)->first();
        if ($valide) {
            $response = ["message" => 'Este usuario ya se encuentra registrado'];
            return response($response, 400);
        }

        $request["password"] = Hash::make($request->password);
        $user = User::create($request->toArray());
        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $response = ['token' => $token, "user" => $user];
        return response($response, 200);
    }

    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();
        return response("ok", 200);
    }
}
