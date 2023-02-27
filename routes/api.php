<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\LocationController;
use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/




Route::middleware('auth:sanctum')->prefix('v1')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/users', UserController::class);
});

Route::controller(AuthController::class)->prefix('v1')->group(function () {
    Route::post('/register', 'register');
    Route::post('/login', 'login');
});

Route::apiResource('/postcodes', LocationController::class);

Route::middleware('auth.postcode')->prefix('v1')->group(function () {
    Route::controller(LocationController::class)->group(function () {
        Route::get('list/postcodes',  'allpostcodes');
        Route::post('postcodes','queryPostcode');
    });
});

## Check api key before rendering Anything
Route::middleware('check.api_key')->prefix('v1')->group(function () {
    Route::controller(LocationController::class)->group(function () {
        Route::get('postcodes/{postcode}','specificLocation');
    });
});



