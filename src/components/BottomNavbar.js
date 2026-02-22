"use client";

import { Home, Search, PlusSquare, Bell, User } from "lucide-react";


export default function BottomNavbar() {
    const items = [
        { icon: <Home />, label: "Home" },
        { icon: <Search />, label: "Explore" },
        { icon: <PlusSquare />, label: "Create" },
        { icon: <Bell />, label: "Notifications" },
        { icon: <User />, label: "Profile" },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 px-6 py-3 flex justify-between items-center z-50">
            {items.map((item, idx) => (
                <button key={idx} className="text-gray-400 hover:text-white transition-colors">
                    {item.icon}
                </button>
            ))}
        </div>
    );
}
