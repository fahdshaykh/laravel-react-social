import { Link } from "@inertiajs/react";
import { Post } from "@/types/post";
import Applayout from "@/layouts/app-layout";
import { router } from '@inertiajs/react';

interface indexPostProps {
    posts: Post[];
}

function index({ posts }: indexPostProps) {

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this post?')) {
            router.delete(`/posts/${id}`);
        }
    };

  return (
    <Applayout>
        
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Posts</h1>
            {posts.length === 0 ? (
                <div className="flex items-center justify-center h-24">
                    <p className="mt-4 text-lg text-gray-500">No posts available.</p>
                </div>
            ) : (
                <div>
                    {posts.map((post) => (
                        <article key={post.id} className="mb-6 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h2 key={post.id} className="text-2xl font-semibold">
                                <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="mt-2 text-lg">
                                {post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body}
                            </p>

                            <div className="mt-4">
                                <Link href={`/posts/${post.id}/edit`} className="text-blue-500 hover:underline mr-4">
                                    Edit
                                </Link>
                                <button className="text-red-500 hover:underline mr-4" onClick={() => handleDelete(post.id)}>
                                    Delete
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    </Applayout>
  )
}

export default index