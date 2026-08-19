import { Link, usePage } from "@inertiajs/react";
import AppHeaderLogo from "./app-header-logo";
import AppHeaderLinks from "./app-header-links";
import { Button } from "./ui/button";


export default function AppHeader() {

    return (
        <header>
            <div className="max-w-4xl mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <AppHeaderLogo />

                    <div className="flex space-x-6 items-center">
                        <Button>
                            <Link href="/posts/create">
                                Create Post
                            </Link>
                        </Button>
                        <AppHeaderLinks href="/">Home</AppHeaderLinks>
                        <AppHeaderLinks href="/about">About</AppHeaderLinks>
                        <AppHeaderLinks href="/posts">Posts</AppHeaderLinks>
                    </div>
                </nav>
            </div>
        </header>
    );
}