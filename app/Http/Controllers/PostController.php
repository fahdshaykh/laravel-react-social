<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index() : Response
    {
        return Inertia::render('posts/index', [
            'posts' => Post::latest()->get(),
        ]);
    }

    public function show(string $id) : Response
    {
        return Inertia::render('posts/show', [
            'post' => Post::findOrFail($id),
        ]);
    }

    public function create()
    {
        return Inertia::render('posts/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        Post::create($request->only('title', 'body'));

        return redirect()->route('posts.index');
    }
}
