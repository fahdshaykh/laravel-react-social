import { Form, Link } from "@inertiajs/react";
import Applayout from "@/layouts/app-layout";
import { cn } from "@/lib/utils";

export default function Create() {
  return (
    <Applayout>
        <h1 className="text-3xl font-bold">Create New Post</h1>
        <Form className="mt-4" action="/posts" method="POST">
            {({errors}) => (<>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className={cn('shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', errors.title && 'border-red-500')}
                    placeholder="Enter post title"
                />
                {errors.title && <p className="text-red-500 text-xs italic mt-2">{errors.title}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="body" className="block text-gray-700 font-bold mb-2">
                    Body
                </label>
                <textarea
                    id="body"
                    name="body"
                    rows={4}
                    className={cn('shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', errors.body && 'border-red-500')}
                    placeholder="Enter post body"
                ></textarea>
                {errors.body && <p className="text-red-500 text-xs italic mt-2">{errors.body}</p>}
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Create Post
            </button>
            </>)}
        </Form>
    </Applayout>
  )
}
