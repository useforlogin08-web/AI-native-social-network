import { Bell, Search, Mail } from "lucide-react";

export default function Navbar() {
    return (
        <div className="md:hidden sticky top-0 bg-black/80 backdrop-blur-md border-bottom border-gray-800 px-4 py-3 flex justify-between items-center z-50">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI Social
            </h1>
            <div className="flex items-center space-x-4 text-gray-400">
                <Search className="w-5 h-5" />
                <Bell className="w-5 h-5" />
                <Mail className="w-5 h-5" />
            </div>
        </div>
    );
}
