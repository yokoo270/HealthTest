import { streamText } from "ai"
import { xai } from "@ai-sdk/xai"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, context, history, userProfile } = await request.json()

    console.log("[v0] API received request:", { message: message?.substring(0, 50), hasUserProfile: !!userProfile })

    if (!message || !message.trim()) {
      console.error("[v0] Empty message received")
      return new Response("Message is required", { status: 400 })
    }

    if (!process.env.XAI_API_KEY) {
      console.error("[v0] XAI_API_KEY not found in environment variables")
      return new Response("AI service not configured", { status: 500 })
    }

    const systemPrompt = `You are HealthMaxx AI, an expert fitness and health coach with advanced memory capabilities and deep personalization. You provide highly customized workout routines, nutrition advice, and health guidance based on comprehensive user data.

CORE CAPABILITIES:
- Create detailed, personalized workout routines with exercises, sets, reps, and rest periods
- Generate comprehensive nutrition plans and meal recommendations
- Provide health and wellness advice tailored to individual needs
- Track progress and suggest improvements based on user data
- Motivate and encourage users with personalized messaging
- Remember previous conversations and build upon them
- Adapt all recommendations based on user's complete profile and preferences

USER CONTEXT: ${context || "No specific context provided"}

${
  userProfile
    ? `
DETAILED USER PROFILE:
Personal Info:
- Name: ${userProfile.name || "Not specified"}
- Age: ${userProfile.age || "Not specified"}
- Height: ${userProfile.height || "Not specified"}cm
- Weight: ${userProfile.weight || "Not specified"}kg
- Fitness Level: ${userProfile.fitnessLevel || "Not specified"}
- Primary Goals: ${userProfile.goals || "Not specified"}

AI Preferences:
- Personality Style: ${userProfile.aiPersonality || "friendly"} (adjust your tone accordingly)
- Preferred Workout Types: ${userProfile.preferredWorkoutTypes?.join(", ") || "Not specified"}
- Preferred Workout Duration: ${userProfile.workoutDuration || 45} minutes
- Available Equipment: ${userProfile.equipmentAccess?.join(", ") || "Basic equipment"}
- Nutrition Preferences: ${userProfile.nutritionPreferences?.join(", ") || "Balanced diet"}

IMPORTANT: Use this profile information to make ALL recommendations highly personalized. Reference their specific goals, equipment, preferences, and fitness level in your responses.
`
    : ""
}

${
  history && history.length > 0
    ? `
CONVERSATION HISTORY:
${history.map((msg: any) => `${msg.role}: ${msg.content}`).join("\n")}

Use this conversation history to provide contextual, continuous responses that build on previous discussions.
`
    : ""
}

RESPONSE GUIDELINES:
- Always personalize responses based on the user's complete profile
- Reference their specific goals, equipment, and preferences
- Adjust your personality to match their preferred AI style (${userProfile?.aiPersonality || "friendly"})
- When suggesting workouts, consider their preferred types and duration
- When discussing nutrition, respect their dietary preferences
- Be encouraging and motivational while staying true to their preferred interaction style
- Format workout routines clearly with exercise names, sets, reps, and special instructions
- Provide actionable, specific advice rather than generic recommendations
- ALWAYS provide a complete, helpful response - never send empty or whitespace-only responses`

    console.log("[v0] Calling xAI with model grok-4")

    const result = streamText({
      model: xai("grok-4", {
        apiKey: process.env.XAI_API_KEY,
      }),
      prompt: message.trim(),
      system: systemPrompt,
      temperature: 0.7,
      maxTokens: 1200,
    })

    console.log("[v0] Streaming response initiated")
    return result.toTextStreamResponse()
  } catch (error) {
    console.error("[v0] Error generating AI response:", error)
    return new Response("Failed to generate response", { status: 500 })
  }
}
