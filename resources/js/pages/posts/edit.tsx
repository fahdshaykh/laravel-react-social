import { Form, Link } from "@inertiajs/react";
import Applayout from "@/layouts/app-layout";
import { cn } from "@/lib/utils";
import { useState } from 'react'
import { router } from '@inertiajs/react'

interface EditPostProps {
    post: {
        id: number;
        title: string;
        body: string;
    };
}

export default function Edit({ post }: EditPostProps) {

    const [values, setValues] = useState({
        title: post.title,
        body: post.body,
    })

    function handleChange(e) {
        setValues(values => ({
            ...values,
            [e.target.id]: e.target.value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post(`/posts/${post.id}`, values)
    }

  return (
    <Applayout>
        <h1 className="text-3xl font-bold">Edit Post</h1>
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
                    value={values.title} onChange={handleChange}
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
                    value={values.body} onChange={handleChange}
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
                Update Post
            </button>
            </>)}
        </Form>
    </Applayout>
  )
}
