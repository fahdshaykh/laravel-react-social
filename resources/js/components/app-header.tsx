import { Link, usePage } from "@inertiajs/react";
import AppHeaderLogo from "./app-header-logo";
import AppHeaderLinks from "./app-header-links";


export default function AppHeader() {

    return (
        <header>
            <div className="max-w-4xl mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <AppHeaderLogo />

                    <div className="flex space-x-6 items-center">
                        <Link href="/posts/create" className="text-gray-800 hover:text-gray-600">
                            Create Post
                        </Link>
                        <AppHeaderLinks href="/">Home</AppHeaderLinks>
                        <AppHeaderLinks href="/about">About</AppHeaderLinks>
                        <AppHeaderLinks href="/posts">Posts</AppHeaderLinks>
                    </div>
                </nav>
            </div>
        </header>
    );
}