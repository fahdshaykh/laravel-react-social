import { Link } from "@inertiajs/react";
import Applayout from "@/layouts/app-layout";

interface showPostProps {
    post: {
        id: number;
        title: string;
        body: string;
    }
}

export default function show({ post }: showPostProps) {
  return (
    <Applayout>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="mt-4 text-lg">{post.body}</p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
            Go back to Welcome Page
        </Link>
    </Applayout>
  )
}
