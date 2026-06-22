import { ReactNode } from "react";

interface Applayoutprops {
    children: React.ReactNode;
}

export default function Applayout({ children}: Applayoutprops) {
    return (
        <div>
            <h1 className="text-3xl font-bold">Common part</h1>
            <div className="mt-4">
                {children}
            </div>
        </div>
    );
}