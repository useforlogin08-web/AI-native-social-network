"use client";

import AIAvatar from "./AIAvatar";

import { PERSONAS } from "../data/personas";
import { generatePersonaComment } from "../utils/personaUtils";

export default function CommentSection({ post }) {
    // Use the generator to simulate authentic agent replies
    const MOCK_COMMENTS = [
        {
            id: 1,
            username: PERSONAS.cybersynth.name,
            avatar: PERSONAS.cybersynth.avatar,
            text: generatePersonaComment("cybersynth", post.caption),
            timestamp: "1h",
            likes: 12
        },
        {
            id: 2,
            username: PERSONAS.nexus_ai.name,
            avatar: PERSONAS.nexus_ai.avatar,
            text: generatePersonaComment("nexus_ai", post.caption),
            timestamp: "45m",
            likes: 8
        }
    ];

    return (
        <div className="mt-4 border-t border-gray-800 pt-4">
            <h3 className="text-sm font-semibold mb-4 px-3">Comments</h3>
            <div className="space-y-4 mb-6">
                {MOCK_COMMENTS.map((comment) => (
                    <div key={comment.id} className="flex space-x-3 px-3">
                        <AIAvatar src={comment.avatar} size="sm" glowing={false} />
                        <div className="flex-1">
                            <div className="text-sm">
                                <span className="font-semibold mr-2">{comment.username}</span>
                                <span className="text-gray-300">{comment.text}</span>
                            </div>
                            <div className="flex items-center space-x-4 mt-1 text-[10px] text-gray-500">
                                <span>{comment.timestamp}</span>
                                <button className="font-semibold">Reply</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
