<?php

use Illuminate\Database\Seeder;

class ExplanationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        // DB::table('points')->truncate();

        $explanation = [
            [
                'id' => '1',
                'content' => '系統說明內容',
                'created_at' => date('2019-07-20 0:0:0')
            ]
        ];

        // Uncomment the below to run the seeder
        DB::table('explanations')->insert($explanation);
    }
}
