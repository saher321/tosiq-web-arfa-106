<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Department;

class DepartmentController extends Controller
{
    //
    function index(){
        // $depts = [
        //     [ "id" => 1023, "name" => "Finace" ],
        //     [ "id" => 2032, "name" => "Human resource" ],
        //     [ "id" => 5042, "name" => "English" ],
        // ];

        $depts = Department::get(['id', 'name']);
        return response()->json($depts);
    }

    function get_details($id) {
        $depts = Department::find( $id, ['id', 'name']);
        return response()->json($depts);
    }
}
