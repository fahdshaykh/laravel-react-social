<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/about', 'about')->name('about');

Route::get('/posts/{id}', [\App\Http\Controllers\PostController::class, 'show'])->name('posts.show');