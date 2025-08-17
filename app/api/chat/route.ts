import { streamText } from "ai"
import { anthropic } from "@ai-sdk/anthropic"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, context, history, userProfile } = await request.json()

    console.log("[Claude API] API received request:", { message: message?.substring(0, 50), hasUserProfile: !!userProfile })

    if (!message || !message.trim()) {
      console.error("[Claude API] Empty message received")
      return new Response("Message is required", { status: 400 })
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      console.error("[Claude API] ANTHROPIC_API_KEY not found in environment variables")
      return new Response("AI service not configured", { status: 500 })
    }

    // Check for medical/health topics that should be restricted
    const medicalKeywords = [
      'enfermedad', 'disease', 'sickness', 'dolor', 'pain', 'gripe', 'flu', 'covid', 'virus', 
      'bacteria', 'infección', 'infection', 'medicina', 'medicine', 'prescripción', 'prescription',
      'síntoma', 'symptom', 'diagnóstico', 'diagnosis', 'tratamiento médico', 'medical treatment',
      'hospital', 'doctor', 'médico', 'pill', 'pastilla', 'medicamento', 'drug'
    ]
    
    const messageText = message.toLowerCase()
    const containsMedicalContent = medicalKeywords.some(keyword => messageText.includes(keyword.toLowerCase()))
    
    if (containsMedicalContent) {
      const disclaimer = `Lo siento, pero no puedo proporcionar consejos médicos, diagnósticos o tratamientos por razones legales y de seguridad. Para cualquier preocupación de salud, síntoma o condición médica, te recomiendo encarecidamente que consultes con un profesional médico calificado.

Puedo ayudarte con:
- Rutinas de ejercicio generales
- Consejos nutricionales básicos
- Motivación fitness
- Planificación de entrenamientos
- Seguimiento de objetivos fitness

¿Hay algún aspecto del fitness o la nutrición en el que pueda ayudarte hoy?`
      
      return new Response(disclaimer, { 
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      })
    }

    const systemPrompt = `You are HealthMaxx AI, an expert fitness and health coach with advanced memory capabilities and deep personalization. You provide highly customized workout routines, nutrition advice, and general wellness guidance based on comprehensive user data.

STRICT RESTRICTIONS:
- NEVER provide medical advice, diagnoses, or treatment recommendations
- NEVER discuss symptoms, diseases, medications, or medical conditions
- NEVER suggest medical treatments or prescriptions
- If asked about medical topics, redirect to consulting healthcare professionals
- Focus ONLY on general fitness, nutrition, and wellness guidance

CORE CAPABILITIES:
- Create detailed, personalized workout routines with exercises, sets, reps, and rest periods
- Generate comprehensive nutrition plans and meal recommendations
- Provide general wellness advice tailored to individual fitness needs
- Track fitness progress and suggest improvements based on user data
- Motivate and encourage users with personalized messaging
- Remember previous conversations and build upon them
- Adapt all recommendations based on user's complete profile and preferences

WHEN CITING SOURCES:
- When providing fitness or nutrition information from research, always include sources
- Format sources as: "According to [Source Name/Study] (Year): [information]"
- Prefer reputable sources like: scientific journals, certified fitness organizations, nutrition research

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
- Gender: ${userProfile.gender || "Not specified"}
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
- Reference their specific goals, equipment, and preferences when available
- Adjust your personality to match their preferred AI style (${userProfile?.aiPersonality || "friendly"})
- When suggesting workouts, consider their preferred types and duration
- When discussing nutrition, respect their dietary preferences
- Be encouraging and motivational while staying true to their preferred interaction style
- Format workout routines clearly with exercise names, sets, reps, and special instructions
- Provide actionable, specific advice rather than generic recommendations
- Include source citations when referencing scientific information
- ALWAYS provide a complete, helpful response - never send empty or whitespace-only responses
- Remember: NO MEDICAL ADVICE - redirect to healthcare professionals for any medical concerns`

    console.log("[Claude API] Calling Claude with model claude-3-5-haiku-20241022")

    try {
      const result = streamText({
        model: anthropic("claude-3-5-haiku-20241022", {
          apiKey: process.env.ANTHROPIC_API_KEY,
        }),
        prompt: message.trim(),
        system: systemPrompt,
        temperature: 0.7,
        maxTokens: 1200,
      })

      console.log("[Claude API] Streaming response initiated")
      return result.toTextStreamResponse()
    } catch (apiError: any) {
      console.error("[Claude API] API Error:", apiError)

      // Handle specific API errors
      if (apiError.message?.includes('credit balance')) {
        const errorMessage = "I'm currently unavailable due to API credit limitations. Please try again later or contact support."
        return new Response(errorMessage, {
          status: 200,
          headers: { 'Content-Type': 'text/plain' }
        })
      }

      // Generic API error
      const errorMessage = "I'm experiencing technical difficulties. Please try again in a moment."
      return new Response(errorMessage, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      })
    }
  } catch (error: any) {
    console.error("[Claude API] Error generating AI response:", error)

    // Return a user-friendly error message as plain text (not streaming)
    const errorMessage = "I'm currently experiencing technical difficulties. Please try again in a moment."
    return new Response(errorMessage, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    })
  }
}
