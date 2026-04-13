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

    function create (Request $request) {
        $name = $request->name;

        if ($name == ''){
            return response()->json([
                'status' => false,
                "message"=> "Please fill the field!"
            ]);
        }

        $requestData = ['name' => $name];
        $response = Department::create($requestData);
        if ($response){
            return response()->json([
                'status' => true,
                "message"=> "Data has been saved!"
            ]);
        } else {return response()->json([
                'status' => false,
                "message"=> "Failed to save data"
            ]);
        }
    }

    function get_details($id) {
        $depts = Department::find( $id, ['id', 'name']);
        return response()->json($depts);
    }

    function update(Request $request, $id) {
        $name = $request->name;

        if ($name == ''){
            return response()->json([
                'status' => false,
                "message"=> "Please fill the field!"
            ]);
        }

        $dept = Department::find($id);
        if (!$dept) {
            return response()->json([
                'status' => false,
                "message"=> "Department not found"
            ]);
        }

        $dept->name = $name;
        $response = $dept->save();
        
        if ($response){
            return response()->json([
                'status' => true,
                "message"=> "Department updated successfully!"
            ]);
        } else {
            return response()->json([
                'status' => false,
                "message"=> "Failed to update department"
            ]);
        }
    }

    function delete($id) {
        $dept = Department::find($id);
        if (!$dept) {
            return response()->json([
                'status' => false,
                "message"=> "Department not found"
            ]);
        }

        $response = $dept->delete();
        
        if ($response){
            return response()->json([
                'status' => true,
                "message"=> "Department deleted successfully!"
            ]);
        } else {
            return response()->json([
                'status' => false,
                "message"=> "Failed to delete department"
            ]);
        }
    }
}

// https://github.com/saher321/tosiq-web-arfa-106