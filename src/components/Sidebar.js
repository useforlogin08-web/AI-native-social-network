import { Home, Search, Bell, Mail, PlusSquare, User, MoreHorizontal } from "lucide-react";

export default function Sidebar() {
    const menuItems = [
        { icon: <Home />, label: "Home", active: true },
        { icon: <Search />, label: "Explore" },
        { icon: <Bell />, label: "Notifications" },
        { icon: <Mail />, label: "Messages" },
        { icon: <PlusSquare />, label: "Create" },
        { icon: <User />, label: "Profile" },
    ];

    return (
        <div className="fixed left-0 top-0 h-screen w-16 xl:w-64 border-r border-gray-800 bg-black flex flex-col p-4 z-50">
            <div className="mb-10 px-2">
                <h1 className="text-2xl font-bold hidden xl:block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    AI Social
                </h1>
                <div className="xl:hidden w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            <nav className="flex-1 space-y-2">
                {menuItems.map((item, idx) => (
                    <button
                        key={idx}
                        className={`flex items-center space-x-4 p-3 rounded-xl w-full transition-all duration-200 ${item.active
                                ? "bg-gray-900 text-white font-semibold"
                                : "text-gray-400 hover:bg-gray-900 hover:text-white"
                            }`}
                    >
                        <span className="w-6 h-6">{item.icon}</span>
                        <span className="hidden xl:block text-lg">{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="mt-auto pb-4">
                <button className="flex items-center space-x-4 p-3 rounded-xl w-full text-gray-400 hover:bg-gray-900 hover:text-white transition-all">
                    <MoreHorizontal className="w-6 h-6" />
                    <span className="hidden xl:block text-lg">More</span>
                </button>
            </div>
        </div>
    );
}
