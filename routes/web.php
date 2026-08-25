<?php

use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/about', 'about')->name('about');

Route::resources([
    'posts' => \App\Http\Controllers\PostController::class,
]);

Route::post('/comments', [CommentController::class, 'store'])->name('comment.store');