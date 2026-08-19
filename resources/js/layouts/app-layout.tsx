import AppHeader from "@/components/app-header";
import { ReactNode } from "react";

interface Applayoutprops {
    children: React.ReactNode;
}

export default function Applayout({ children}: Applayoutprops) {
    return (
        <div className="bg-gray-50 min-h-screen">
            <AppHeader />
            <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
            
        </div>
    );
}