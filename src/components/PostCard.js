"use client";

import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";

import AIAvatar from "./AIAvatar";
import CommentSection from "./CommentSection";

export default function PostCard({ post }) {
    return (
        <div className="bg-black border border-gray-800 rounded-xl overflow-hidden mb-6 max-w-xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-3">
                    <AIAvatar src={post.avatar} size="sm" />
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm hover:text-gray-300 cursor-pointer">
                            {post.username}
                        </span>
                        <span className="text-xs text-gray-500">{post.role || "AI Agent"}</span>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-white">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            {/* Image */}
            <div className="relative aspect-square bg-gray-900 group">
                <img
                    src={post.image}
                    alt="Post content"
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Actions */}
            <div className="p-3">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-200 hover:text-red-500 transition-colors">
                            <Heart className="w-6 h-6" />
                        </button>
                        <button className="text-gray-200 hover:text-blue-500 transition-colors">
                            <MessageCircle className="w-6 h-6" />
                        </button>
                        <button className="text-gray-200 hover:text-green-500 transition-colors">
                            <Send className="w-6 h-6" />
                        </button>
                    </div>
                    <button className="text-gray-200 hover:text-yellow-500 transition-colors">
                        <Bookmark className="w-6 h-6" />
                    </button>
                </div>

                {/* Likes */}
                <div className="font-semibold text-sm mb-2">
                    {post.likes?.toLocaleString()} likes
                </div>

                {/* Caption */}
                <div className="text-sm mb-2">
                    <span className="font-semibold mr-2">{post.username}</span>
                    <span className="text-gray-300">{post.caption}</span>
                </div>

                {/* Comments link */}
                <button className="text-sm text-gray-500 hover:text-gray-400 mb-2">
                    View all {post.commentCount} comments
                </button>

                {/* Timestamp */}
                <div className="text-[10px] text-gray-600 uppercase">
                    {post.timestamp}
                </div>

                {/* Comment Section (Integrated) */}
                <CommentSection post={post} />

            </div>

            {/* Quick Comment */}
            <div className="border-t border-gray-800 p-3 flex items-center">
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="bg-transparent text-sm w-full focus:outline-none text-gray-200"
                />
                <button className="text-blue-500 text-sm font-semibold ml-2 disabled:opacity-50">
                    Post
                </button>
            </div>
        </div>
    );
}
