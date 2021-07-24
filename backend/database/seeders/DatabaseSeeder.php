<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('accounts')->insert([
            'number' => "00002222020202022020",
            'type' => "PERSONAL",
            'money' => "5000",
            'user_id' => 0,
            'is_active' => 1
        ]);
        DB::table('accounts')->insert([
            'number' => "9848774747388383777",
            'type' => "PERSONAL",
            'money' => "9000",
            'user_id' => 0,
            'is_active' => 1
        ]);
        DB::table('accounts')->insert([
            'number' => "84766284848447464",
            'type' => "PERSONAL",
            'money' => "1000",
            'user_id' => 0,
            'is_active' => 1
        ]);
        DB::table('accounts')->insert([
            'number' => "0938474643627737",
            'type' => "PERSONAL",
            'money' => "9000",
            'user_id' => 0,
            'is_active' => 1
        ]);
        DB::table('accounts')->insert([
            'number' => "11292373537288383",
            'type' => "TERCERA",
            'money' => "5000",
            'user_id' => 0,
            'is_active' => 1
        ]);
        DB::table('accounts')->insert([
            'number' => "04048726623930303",
            'type' => "TERCERA",
            'money' => "0",
            'user_id' => 0,
            'is_active' => 1
        ]);
        DB::table('accounts')->insert([
            'number' => "0000736637442",
            'type' => "TERCERA",
            'money' => "5000",
            'user_id' => 0,
            'is_active' => 1
        ]);
        DB::table('accounts')->insert([
            'number' => "11118738933746",
            'type' => "TERCERA",
            'money' => "5000",
            'user_id' => 0,
            'is_active' => 1
        ]);
        DB::table('accounts')->insert([
            'number' => "0039373522384763",
            'type' => "TERCERA",
            'money' => "112393",
            'user_id' => 0,
            'is_active' => 1
        ]);
    }
}
