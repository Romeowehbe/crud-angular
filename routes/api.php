<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MotoristasController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/motorista/novo', [MotoristasController::class,'store']);
Route::get('/motorista/show', [MotoristasController::class,'show']);
Route::get('/motorista/edit/{id}', [MotoristasController::class,'edit']);
Route::delete('/motorista/delete/{id}', [MotoristasController::class,'destroy']);
