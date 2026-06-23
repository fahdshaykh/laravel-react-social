<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/about', 'about')->name('about');

Route::resources([
    'posts' => \App\Http\Controllers\PostController::class,
]);