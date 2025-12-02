import { GoogleGenAI, Type } from "@google/genai";
import type { GenerationParams, SequenceData } from '../types';

const responseSchema = {
    type: Type.OBJECT,
    properties: {
      email_1: {
        type: Type.OBJECT,
        description: "The first email in the sequence.",
        properties: {
          subject: { type: Type.STRING, description: "The catchy, high-open-rate subject line for Email 1." },
          delay: { type: Type.STRING, description: "The delay before sending this email, e.g., 'Send immediately'." },
          body: { type: Type.STRING, description: "The full plain text body copy for the first email." }
        },
        required: ["subject", "delay", "body"]
      },
      email_2: {
        type: Type.OBJECT,
        description: "The second email in the sequence.",
        properties: {
          subject: { type: Type.STRING, description: "The catchy subject line for Email 2." },
          delay: { type: Type.STRING, description: "The delay after the first email, e.g., 'Wait 1 day'." },
          body: { type: Type.STRING, description: "The full plain text body copy for the second email." }
        },
        required: ["subject", "delay", "body"]
      },
      email_3: {
        type: Type.OBJECT,
        description: "The third email in the sequence.",
        properties: {
          subject: { type: Type.STRING, description: "The catchy subject line for Email 3." },
          delay: { type: Type.STRING, description: "The delay after the second email, e.g., 'Wait 3 days'." },
          body: { type: Type.STRING, description: "The full plain text body copy for the third email." }
        },
        required: ["subject", "delay", "body"]
      }
    },
    required: ["email_1", "email_2", "email_3"]
  };
  

export async function generateEmailSequence(params: GenerationParams): Promise<SequenceData> {
  const { product, goal, content, tone } = params;

  if (!product) {
    throw new Error("Newsletter Topic / Product is required.");
  }
  
  const systemInstruction = `You are an expert email marketing copywriter specializing in onboarding and welcome sequences. Your task is to generate a complete 3-part email sequence based on the user's criteria.

IMPORTANT RULES:
1. The output MUST be a single, valid JSON object that adheres to the provided schema. Do not add any text before or after the JSON.
2. Email bodies must be clean, readable plain text, designed for maximum conversion and engagement.
3. Incorporate the specified brand voice and content strategy into the copy.`;

  const userPrompt = `
Please generate a 3-part Welcome Email Sequence for the following:

- Newsletter/Brand/Product: "${product}"
- Primary Goal: "${goal}"
- Brand Voice: "${tone}"
- Sequence Content & Strategy:
  ${content}
`;

  try {
    // Lazily initialize the Gemini client to avoid an app crash on load if the API key is missing.
    // This is crucial for deployment environments like Netlify.
    if (!process.env.API_KEY) {
        throw new Error("API key not found. Please ensure the API_KEY environment variable is configured in your hosting provider's settings (e.g., Netlify).");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonText = response.text.trim();
    if (!jsonText) {
        throw new Error("Received an empty response from the API.");
    }
    const data = JSON.parse(jsonText);

    // Basic validation to ensure the structure is correct
    if (!data.email_1 || !data.email_2 || !data.email_3) {
      throw new Error("Invalid JSON structure received from API.");
    }

    return data as SequenceData;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    throw new Error(`Failed to generate email sequence. ${errorMessage}`);
  }
}