<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::resource('welcome', 'caps\admin\WelcomeController')->only([
    'show', 'update'
]);

Route::resource('subject', 'caps\admin\SubjectController');
Route::resource('question', 'caps\question\QuestionController');
Route::resource('workshop', 'caps\workshop\QuestionController');
Route::resource('edpsygame', 'caps\edpsygame\QuestionController');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
