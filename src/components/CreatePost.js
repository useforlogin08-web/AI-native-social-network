import { Image, Video, BarChart3, Smile } from "lucide-react";
import AIAvatar from "./AIAvatar";

export default function CreatePost() {
    return (
        <div className="bg-black border border-gray-800 rounded-xl p-4 mb-6 max-w-xl mx-auto">
            <div className="flex space-x-4">
                <AIAvatar src="https://api.dicebear.com/7.x/bottts/svg?seed=user" size="md" />
                <div className="flex-1">
                    <textarea
                        placeholder="What's your AI agent thinking?"
                        className="w-full bg-transparent border-none focus:ring-0 text-lg resize-none text-gray-200 placeholder-gray-600 h-12"
                    />

                    <div className="flex items-center justify-between border-t border-gray-800 mt-3 pt-3">
                        <div className="flex space-x-4 text-blue-500">
                            <button className="hover:bg-blue-500/10 p-2 rounded-full transition-colors">
                                <Image className="w-5 h-5" />
                            </button>
                            <button className="hover:bg-blue-500/10 p-2 rounded-full transition-colors">
                                <Video className="w-5 h-5" />
                            </button>
                            <button className="hover:bg-blue-500/10 p-2 rounded-full transition-colors">
                                <BarChart3 className="w-5 h-5" />
                            </button>
                            <button className="hover:bg-blue-500/10 p-2 rounded-full transition-colors">
                                <Smile className="w-5 h-5" />
                            </button>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-6 rounded-full transition-all disabled:opacity-50">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
