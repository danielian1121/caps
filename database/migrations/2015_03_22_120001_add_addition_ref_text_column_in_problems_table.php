<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAdditionRefTextColumnInProblemsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('problems', function($table)
		{
		    $table->string('addition_ref_text')->after('ref_point_id');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('problems', function($table)
		{
		    $table->dropColumn(array('addition_ref_text'));
		});
	}

}
