import { genkit } from "genkit";
import { googleAI } from "@genkit-ai/googleai";

// Ensure the API key is set in the environment
if (!process.env.GOOGLE_API_KEY) {
  throw new Error("GOOGLE_API_KEY environment variable is not set");
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_API_KEY,
    }),
  ],
  model: "googleai/gemini-2.5-flash",
});
