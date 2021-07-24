<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/v1/login', [UserController::class, 'login'])->middleware(['CORS']);
Route::post('/v1/register', [UserController::class, 'register'])->middleware(['CORS']);
Route::post('/v1/logout', [UserController::class, 'register'])->middleware(['CORS']);


Route::group(['middleware' => ['CORS','auth:api']], function () {
    
    Route::get('/v1/user/personal/accounts', [AccountController::class, 'personalAccounts']);
    Route::get('/v1/user/third/accounts', [AccountController::class, 'thirdAccounts']);
    Route::post('/v1/user/save/transaction', [TransactionController::class, 'saveTransaction']);
    Route::get('/v1/user/get/transaction/account', [TransactionController::class, 'getTransactionAccount']);

    Route::post('/v1/logout', function (Request $request) {
        $request->user()->token()->revoke();
    });

});