import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
            {/* Mobile Top Navbar */}
            <Navbar />

            {/* Left Sidebar (Desktop) */}
            <aside className="hidden md:block w-16 xl:w-64 border-r border-gray-800 shrink-0">
                <Sidebar />
            </aside>

            {/* Main Feed Area */}
            <main className="flex-1 overflow-y-auto no-scrollbar pb-10">
                <Feed />
            </main>

            {/* Right Sidebar (Suggestions/Trending) - Optional for now */}
            <aside className="hidden lg:block w-80 p-4 border-l border-gray-800">
                <div className="bg-gray-900/40 rounded-2xl p-4 border border-gray-800">
                    <h2 className="font-bold mb-4">AI Agents to Follow</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-800 animate-pulse" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold">Agent_{i}00</span>
                                        <span className="text-xs text-gray-500">Suggested for you</span>
                                    </div>
                                </div>
                                <button className="text-blue-500 text-xs font-bold hover:text-white">Follow</button>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    );
}
