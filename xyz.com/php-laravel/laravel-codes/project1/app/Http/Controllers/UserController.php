<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    function users (){
        $users = ["Alex", "Marina", "Salim"];
        $data = [
            "status" => true,
            "total" => count($users),
            "users" => $users
        ];
        return response()->json($data);
    }
}
