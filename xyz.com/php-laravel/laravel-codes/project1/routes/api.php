<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\UserController;
use App\http\Controllers\DepartmentController;

Route::get('/users', [UserController::class, "users"]);
Route::get('/departments', [DepartmentController::class, "index"]);
