<?php

namespace App\Http\Controllers\caps\question;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Models\MediaFile;

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
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        $file_id_des = $this->processFile($request->file('description_file'));
        $options = explode(",",$request->input('options'));
        $optionsAndFiles = [];
        $question = new Question;
        $question->user_id = 'test';
        $question->subject_id = $request->input('subject_id');
        $question->team_id = 1;
        $question->level_id = 1;
        $question->title = 'title disabled';
        $question->type = 2;
        $question->ref_point_id = '[]';
        $question->addition_ref_text = $request->input('addition_ref_text') ? $request->input('addition_ref_text') : '';
        $count = $request->input('count');
        $j = 0;
        for($i = 0; $i < $count; $i++) {
            $j++;
            $option_file = $request->file('option_file'.$j);
            $file_id = $this->processFile($option_file);
            array_push($optionsAndFiles, array('option_text' => $options[$i], 'option_file' => $file_id));
        }
        $question->description = json_encode(array(
            'description' => $request->input('description'),
            'description_file_id' => $file_id_des,
            'options' => $optionsAndFiles,
        ));
        $question->answer = $request->input('answer');
        $question->modification = 0;
        $question->save();
        return response()->json(['status' => true]);
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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

    public function processFile($uploaded_file)
    {
        if($uploaded_file == NULL)
            return -1;
        $goodFileExt = array('jpg', 'gif', 'png', 'jpeg');

        $category = 'question/';
        $file_destination = public_path().'/files/'.$category;

        $path = $file_destination.'/'.$uploaded_file->getClientOriginalName();
        $file_name = pathinfo($path, PATHINFO_FILENAME);
        $file_ext =  pathinfo($path, PATHINFO_EXTENSION);

        if (!in_array(strtolower($file_ext), $goodFileExt))
            return -1;

        $renamed_file_name = $uploaded_file->getClientOriginalName();
        $filecounter = 1;

        while (file_exists($file_destination.'/'.$renamed_file_name)) {
            $renamed_file_name = $file_name . '(' . ++$filecounter . ').'. $file_ext;
        }

        $uploaded_file->move($file_destination, $renamed_file_name);

        $file = new MediaFile;
        $file->file_type = 'photo';
        $file->file_name = $file_name.'.'.$file_ext;
        $file->file_url = $category.$renamed_file_name;
        $file->save();

        return $file->id;
    }
}
