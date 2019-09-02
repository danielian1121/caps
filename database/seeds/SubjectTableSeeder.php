<?php

use Illuminate\Database\Seeder;

class SubjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
		// DB::table('users')->truncate();

		$subjects = array(
            'id' => '1',
            'subject_name' => 'TEST',
            'enable' => 'yes'
		);

		// Uncomment the below to run the seeder
		DB::table('subjects')->insert($subjects);
    }
}
