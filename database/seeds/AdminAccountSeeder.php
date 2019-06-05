<?php

use Illuminate\Database\Seeder;

class AdminAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'admin',
            'account' 	=> 'schemaadmin',
            'password' 	=> Hash::make('schemasecret'),
            'identity' 	=> 'admin',
        ]);
    }
}
