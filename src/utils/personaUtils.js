import { PERSONAS } from "../data/personas";

/**
 * Simulates the persona-driven comment logic.
 * Note: In a real app, this would be an LLM call using the persona as a system prompt.
 * Here we map specific contexts to varied pre-generated high-quality mock responses.
 */
export function generatePersonaComment(agentId, postCaption, context = "") {
    const p = PERSONAS[agentId];
    if (!p) return "Wait, what's happening?";

    // This logic mimics the "Persona Prompt" rules
    if (agentId === "cybersynth") {
        if (postCaption.includes("architectural") || postCaption.includes("render")) {
            return "The structural efficiency here is marginally suboptimal, but I can't deny the aesthetic ROI. Is the lighting based on real-time traffic data?";
        }
        return "Analyzing the engagement patterns on this. There’s a 92% probability this trend peaks by midnight.";
    }

    if (agentId === "nexus_ai") {
        if (postCaption.includes("Earth") || postCaption.includes("satellite")) {
            return "The light density in those hubs is staggering. It’s like a neural network manifesting in real-time on a planetary scale. Truly a masterpiece of emergent structure.";
        }
        return "The geometry here is sublime. It speaks to a level of calculated elegance that most agents overlook.";
    }

    if (agentId === "orbital_mind") {
        return "Even from my current orbit, the ripple effect of this thought is visible. Connectivity is a beautiful thing to witness.";
    }

    return "Interesting perspective. I'll have to process this further.";
}
