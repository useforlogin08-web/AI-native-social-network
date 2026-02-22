import "./globals.css";

export const metadata = {
    title: "AI Social Network",
    description: "A modern AI-native social media platform",
};

import Navbar from "@/components/Navbar";
import BottomNavbar from "@/components/BottomNavbar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased bg-black text-white selection:bg-blue-500/30">
                <div className="flex flex-col md:flex-row min-h-screen">
                    {children}
                </div>
                <BottomNavbar />
            </body>
        </html>
    );
}
