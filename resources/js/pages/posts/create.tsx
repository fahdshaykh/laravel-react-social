import { Form, Link } from "@inertiajs/react";
import Applayout from "@/layouts/app-layout";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InputError } from "@/components/input-erros";

export default function Create() {
  return (
    <Applayout>
        <Card>
            <CardTitle>
                Create Post
            </CardTitle>
            <CardDescription>
                Create a new post
            </CardDescription>
            <CardContent>
                <Form className="mt-4" action="/posts" method="POST">
                {({errors}) => (<>
                <div className="mb-4">
                    <Label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                        Title
                    </Label>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        aria-invalid={!!errors.title}
                        // className={cn('shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', errors.title && 'border-red-500')}
                        placeholder="Enter post title"
                    />
                    <InputError message={errors.title} />
                    {/* {errors.title && <p className="text-red-500 text-xs italic mt-2">{errors.title}</p>} */}
                </div>
                <div className="mb-4">
                    <Label htmlFor="body" className="block text-gray-700 font-bold mb-2">
                        Body
                    </Label>
                    <Textarea
                        id="body"
                        name="body"
                        rows={4}
                        aria-invalid={!!errors.body}
                        // className={cn('shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', errors.body && 'border-red-500')}
                        placeholder="Enter post body"
                    ></Textarea>
                    <InputError message={errors.body} />
                </div>
                <Button type="submit">
                    Create
                </Button>
                </>)}
            </Form>
            </CardContent>
        </Card>
    </Applayout>
  )
}
