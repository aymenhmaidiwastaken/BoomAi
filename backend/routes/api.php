<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\UserSettingsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded within the "api" middleware group.
|
*/

// -----------------------------------------------------------------------
// Public Routes
// -----------------------------------------------------------------------

// Authentication
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Blog (public)
Route::get('/blog', [BlogController::class, 'index']);
Route::get('/blog/{slug}', [BlogController::class, 'show']);

// Plans (public)
Route::get('/plans', [PlanController::class, 'index']);
Route::get('/plans/{id}', [PlanController::class, 'show']);

// Contact (public)
Route::post('/contact', [ContactController::class, 'store']);

// -----------------------------------------------------------------------
// Protected Routes (require auth:sanctum)
// -----------------------------------------------------------------------

Route::middleware('auth:sanctum')->group(function () {
    // Auth
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);

    // Blog Management (authenticated)
    Route::post('/blog', [BlogController::class, 'store']);
    Route::put('/blog/{post}', [BlogController::class, 'update']);
    Route::delete('/blog/{post}', [BlogController::class, 'destroy']);

    // User Settings
    Route::get('/settings', [UserSettingsController::class, 'show']);
    Route::put('/settings/profile', [UserSettingsController::class, 'updateProfile']);
    Route::put('/settings/password', [UserSettingsController::class, 'updatePassword']);
    Route::put('/settings/appearance', [UserSettingsController::class, 'updateAppearance']);
});
