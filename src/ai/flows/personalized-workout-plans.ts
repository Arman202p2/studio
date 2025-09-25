'use server';

/**
 * @fileOverview Personalized workout plan generator based on user input.
 *
 * - generateWorkoutPlan - A function that generates a workout plan.
 * - WorkoutPlanInput - The input type for the generateWorkoutPlan function.
 * - WorkoutPlanOutput - The return type for the generateWorkoutPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WorkoutPlanInputSchema = z.object({
  fitnessGoals: z
    .string()
    .describe('The user\'s fitness goals (e.g., weight loss, muscle gain).'),
  experienceLevel: z
    .string()
    .describe('The user\'s experience level (beginner, intermediate, advanced).'),
  availableEquipment: z
    .string()
    .describe('The equipment available to the user (e.g., dumbbells, machines, bodyweight only).'),
  gymClasses: z
    .string()
    .describe('Classes offered at Flex Fit Gym that the user may want to include (e.g. Yoga, HIIT, Strength Training).'),
});
export type WorkoutPlanInput = z.infer<typeof WorkoutPlanInputSchema>;

const WorkoutPlanOutputSchema = z.object({
  workoutPlan: z.string().describe('The personalized workout plan.'),
});
export type WorkoutPlanOutput = z.infer<typeof WorkoutPlanOutputSchema>;

export async function generateWorkoutPlan(
  input: WorkoutPlanInput
): Promise<WorkoutPlanOutput> {
  return generateWorkoutPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'workoutPlanPrompt',
  input: {schema: WorkoutPlanInputSchema},
  output: {schema: WorkoutPlanOutputSchema},
  prompt: `You are a personal trainer. Generate a personalized workout plan based on the user's fitness goals, experience level, available equipment, and the classes offered at Flex Fit Gym.

Fitness Goals: {{{fitnessGoals}}}
Experience Level: {{{experienceLevel}}}
Available Equipment: {{{availableEquipment}}}
Gym Classes: {{{gymClasses}}}

Workout Plan:`,
});

const generateWorkoutPlanFlow = ai.defineFlow(
  {
    name: 'generateWorkoutPlanFlow',
    inputSchema: WorkoutPlanInputSchema,
    outputSchema: WorkoutPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
