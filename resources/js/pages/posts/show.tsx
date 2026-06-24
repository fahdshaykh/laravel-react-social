import { Link } from "@inertiajs/react";
import Applayout from "@/layouts/app-layout";
import { Post } from "@/types/post";

interface showPostProps {
    post: Post;
}

export default function show({ post }: showPostProps) {
  return (
    <Applayout>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="mt-4 text-lg">{post.body}</p>
        <p className="mt-2">By {post.user.name} On {new Date(post.created_at).toLocaleDateString()}</p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
            Go back to Welcome Page
        </Link>
    </Applayout>
  )
}
