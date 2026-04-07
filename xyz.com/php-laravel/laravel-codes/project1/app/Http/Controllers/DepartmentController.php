<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    //
    function index(){
        $depts = [
            [ "id" => 1023, "name" => "Finace" ],
            [ "id" => 2032, "name" => "Human resource" ],
            [ "id" => 5042, "name" => "English" ],
        ];
        return response()->json($depts);
    }
}
