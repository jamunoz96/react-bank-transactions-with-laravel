<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function saveTransaction(Request $request)
    {
        $origin = Account::where("id", $request->origin)
                ->first();

        $destine = Account::where("id", $request->destine)
                ->first();

        if($request->value > (int)$origin->money) {
            $response = ['message' => "El valor de la transferencia supera el fondo de la cuenta"];
            return response($response, 400);
        }

        $origin->money = (int)$origin->money - (int)$request->value;
        $origin->save();

        $destine->money = (int)$destine->money + (int)$request->value;
        $destine->save();

        $transaction = Transaction::create([
            "reference" => time().'-'.$request->user()->id.rand(1, 999999999),
            "value" => $request->value,
            "account_origin_id" => $request->origin,
            "account_destine_id" => $request->destine,
            "user_id" => $request->user()->id,
        ]);

        $response = ['transaction' => $transaction];
        return response($response, 200);
    }

    public function getTransactionAccount(Request $request) {
        $transactions = Transaction::where("transactions.user_id", $request->user()->id)
                ->join("accounts as origin", "transactions.account_origin_id", "origin.id")
                ->join("accounts as destine", "transactions.account_destine_id", "destine.id")
                ->select(
                    "transactions.reference",
                    "origin.number as origin",
                    "destine.number as destine",
                    "transactions.value as value",
                    \DB::raw("DATE_FORMAT(transactions.created_at, '%Y-%m-%d') as date"),
                )
                ->get();

        $accounts = Account::where('user_id', $request->user()->id)
                    ->where("is_active", 1)
                    ->where("type", "PERSONAL")
                    ->get();


        $response = ['transactions' => $transactions, "accounts" => $accounts];
        return response($response, 200);
    }
}
