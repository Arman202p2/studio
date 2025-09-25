'use server';

import { aiChatbotAssistant } from '@/ai/flows/ai-chatbot-assistant';
import { generateWorkoutPlan } from '@/ai/flows/personalized-workout-plans';
import { z } from 'zod';

const workoutPlanSchema = z.object({
  fitnessGoals: z.string().min(3, { message: "Fitness goals must be at least 3 characters." }),
  experienceLevel: z.string(),
  availableEquipment: z.string().min(3, { message: "Please list available equipment." }),
  gymClasses: z.string(),
});

export type WorkoutFormState = {
  message: 'success' | 'error' | 'idle';
  plan?: string;
  errors?: {
    fitnessGoals?: string[];
    experienceLevel?: string[];
    availableEquipment?: string[];
    gymClasses?: string[];
  };
}

export async function handleWorkoutPlanGeneration(
  prevState: WorkoutFormState, 
  formData: FormData
): Promise<WorkoutFormState> {
  const validatedFields = workoutPlanSchema.safeParse({
    fitnessGoals: formData.get('fitnessGoals'),
    experienceLevel: formData.get('experienceLevel'),
    availableEquipment: formData.get('availableEquipment'),
    gymClasses: formData.get('gymClasses'),
  });

  if (!validatedFields.success) {
    return {
      message: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateWorkoutPlan(validatedFields.data);
    return {
      message: 'success',
      plan: result.workoutPlan,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'error',
      errors: { fitnessGoals: ['An unexpected error occurred. Please try again.'] },
    };
  }
}

const chatbotSchema = z.object({
  query: z.string().min(1, "Message cannot be empty."),
});

export async function handleChatbotQuery(query: string) {
    const validatedFields = chatbotSchema.safeParse({ query });

    if (!validatedFields.success) {
        return { error: "Invalid query." };
    }

    try {
        const result = await aiChatbotAssistant({ query: validatedFields.data.query });
        return { response: result.response };
    } catch (error) {
        return { error: "Sorry, I'm having trouble connecting. Please try again later." };
    }
}
