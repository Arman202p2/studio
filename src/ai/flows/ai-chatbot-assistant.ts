'use server';

/**
 * @fileOverview Implements an AI-powered chatbot assistant for FlexAI Gym.
 *
 * - aiChatbotAssistant - The main function to interact with the chatbot.
 * - AiChatbotAssistantInput - The input type for the aiChatbotAssistant function.
 * - AiChatbotAssistantOutput - The return type for the aiChatbotAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiChatbotAssistantInputSchema = z.object({
  query: z.string().describe('The user query or question.'),
});
export type AiChatbotAssistantInput = z.infer<typeof AiChatbotAssistantInputSchema>;

const AiChatbotAssistantOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
});
export type AiChatbotAssistantOutput = z.infer<typeof AiChatbotAssistantOutputSchema>;

export async function aiChatbotAssistant(input: AiChatbotAssistantInput): Promise<AiChatbotAssistantOutput> {
  return aiChatbotAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatbotAssistantPrompt',
  input: {schema: AiChatbotAssistantInputSchema},
  output: {schema: AiChatbotAssistantOutputSchema},
  prompt: `You are a helpful AI chatbot assistant for FlexAI Gym.

  Your goal is to answer user queries about the gym, classes, membership options, and provide personalized guidance.

  Use the following information about FlexAI Gym to answer the user's question:
  - Flex Fit Gym is located in Bangalore, India.
  - It offers a variety of fitness classes and modern amenities.
  - Visit https://www.flexfitgym.in/ for more information.

  Now, respond to the following user query:
  {{query}}`,
});

const aiChatbotAssistantFlow = ai.defineFlow(
  {
    name: 'aiChatbotAssistantFlow',
    inputSchema: AiChatbotAssistantInputSchema,
    outputSchema: AiChatbotAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
