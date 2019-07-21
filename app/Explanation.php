<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Explanation extends Model
{
    //
    protected $table = 'explanations';

    public $primaryKey = 'id';

    public $timestamps = true;
}
