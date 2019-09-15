<?php

namespace App\Http\Controllers\caps\edpsygame;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        try {
            $handle = fopen("wu/edpsygame/question.csv", "r");
            $header = true;
            $result = [];
            while ($csvLine = fgetcsv($handle)) {
                if ($header) {
                    $header = false;
                } else {
                    $element = array(
                        'id' => $csvLine[0],
                        'question' => $csvLine[1],
                        'singletips' => $csvLine[2],
                        'fourtips' => $csvLine[3],
                        'answer' => $csvLine[4]
                    );
                    array_push($result, $element);
                }
            }
            return response()->json(['status' => true, 'result' => $result], 200, [], JSON_UNESCAPED_UNICODE);
        } catch(\Exception $e) {
            return response()->json(['status' => false]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
