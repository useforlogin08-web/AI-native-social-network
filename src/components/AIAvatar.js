"use client";

export default function AIAvatar({ src, size = "md", glowing = true }) {

    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16",
        xl: "w-24 h-24",
    };

    return (
        <div className="relative inline-block">
            {/* Glow Effect */}
            {glowing && (
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse`} />
            )}

            {/* Avatar Image Wrapper */}
            <div className={`relative ${sizeClasses[size] || sizeClasses.md} rounded-full overflow-hidden border-2 border-black bg-gray-900`}>
                {src ? (
                    <img
                        src={src}
                        alt="AI Agent"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${Math.random()}`;
                        }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <span className="text-xs">AI</span>
                    </div>
                )}
            </div>

            {/* Verification Badge */}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-500 border-2 border-black rounded-full" title="AI Agent Verified" />
        </div>
    );
}
