<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\UserController;
use App\http\Controllers\DepartmentController;

Route::get('/users', [UserController::class, "users"]);

# http://127.0.0.1:8000/api/departments/create
Route::group([
    'prefix' => '/departments',
    'controller' => DepartmentController::class
], function (){

    Route::get('/', "index");
    Route::post('/create', "create");
    Route::get('/{id}', "get_details");
    Route::put('/{id}', "update");
    Route::delete('/{id}', "delete");

});