import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <AppLayout>
            <Head title="Welcome" />
            <div>
                <h1 className="text-3xl font-bold">Welcome to Laravel with React!</h1>
                <p className="mt-4 text-lg">This is the welcome page.</p>
                <Link href="/about" className="text-blue-500 hover:underline mt-4 inline-block">
                    Go to About Page
                </Link>
            </div>
        </AppLayout>
    );
}
