import { Link } from "@inertiajs/react";
import { Post } from "@/types/post";
import Applayout from "@/layouts/app-layout";
import { router } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
                        <Card key={post.id} className="rounded-none border-b-0 last:border-0">
                            <CardHeader>
                                <CardTitle>
                                    <Link href={`/posts/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </CardTitle>
                                <CardDescription>
                                    By: {post.user.name} on: {new Date(post.created_at).toLocaleDateString()}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body}
                            </CardContent>
                            <div className="ml-5 mt-4">
                                <Link href={`/posts/${post.id}/edit`} className="text-blue-500 hover:underline mr-4">
                                    Edit
                                </Link>
                                <button className="text-red-500 hover:underline mr-4" onClick={() => handleDelete(post.id)}>
                                    Delete
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    </Applayout>
  )
}

export default index