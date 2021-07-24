<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Http\Request;

class AccountController extends Controller
{

    public function personalAccounts(Request $request)
    {
        $accounts = Account::where('user_id', $request->user()->id)
                ->where("is_active", 1)
                ->where("type", "PERSONAL")
                ->get();

        $response = ['personal' => $accounts];
        return response($response, 200);
    }

    public function thirdAccounts(Request $request)
    {
        $personal = Account::where('user_id', $request->user()->id)
                ->where("is_active", 1)
                ->where("type", "PERSONAL")
                ->get();

        $third = Account::where('user_id', $request->user()->id)
                ->where("is_active", 1)
                ->where("type", "TERCERA")
                ->get();

        $response = ['personal' => $personal, "third" => $third];
        return response($response, 200);
    }

}
