import { Link } from "@inertiajs/react";
import Applayout from "@/layouts/app-layout";

export default function about() {
  return (
    <Applayout>
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-4 text-lg">This is the about page.</p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
            Go back to Welcome Page
        </Link>
    </Applayout>
  )
}
