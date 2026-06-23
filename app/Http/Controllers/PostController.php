<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class PostController extends Controller
{
    public function show(string $id) : Response
    {
        return Inertia::render('posts/show', [
            'post' => Post::findOrFail($id),
        ]);
    }
}
