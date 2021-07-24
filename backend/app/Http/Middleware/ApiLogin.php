<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ApiLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $client = DB::table('oauth_clients')
            ->where('provider', 'users')
            ->select('secret', 'id')
            ->first();

        $request->merge([
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
        ]);

        return $next($request);
    }
}