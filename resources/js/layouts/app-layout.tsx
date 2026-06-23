import AppHeader from "@/components/app-header";
import { ReactNode } from "react";

interface Applayoutprops {
    children: React.ReactNode;
}

export default function Applayout({ children}: Applayoutprops) {
    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader />
            <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-md rounded-lg p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}