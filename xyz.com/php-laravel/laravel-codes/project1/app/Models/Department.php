<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    //
    protected $table = "lms_departments";
    protected $fillable = [
        'name'
    ];
}
