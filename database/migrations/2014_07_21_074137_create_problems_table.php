<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProblemsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{	
		Schema::create('problems', function($table)
		{
		    $table->increments('id');
		    $table->string('user_id')->foreign('id', 'users');
		    $table->string('subject_id')->foreign('id', 'subjects');
		    $table->string('level_id')->foreign('id', 'problem_levels');
		    $table->string('title');

		    $table->enum('type', array('yes_no', 'choice', 'fill', 'essay'));
		    $table->string('ref_point_id');
		    $table->text('description');
		    $table->text('answer'); 
		    $table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('problems');	
	}

}
