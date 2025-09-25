'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleWorkoutPlanGeneration, type WorkoutFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Dumbbell, Zap } from 'lucide-react';

const initialState: WorkoutFormState = {
  message: 'idle',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? 'Generating Your Plan...' : 'Generate Plan'}
      <Zap className="ml-2 h-4 w-4" />
    </Button>
  );
}

export default function WorkoutPlanner() {
  const [state, formAction] = useFormState(handleWorkoutPlanGeneration, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'error' && state.errors) {
        const errorMessages = Object.values(state.errors).flat().join('\n');
        if(errorMessages) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: errorMessages,
            });
        }
    }
  }, [state, toast]);

  return (
    <section id="planner" className="py-16 md:py-24 bg-card">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Your Personal AI Trainer</h2>
            <p className="text-muted-foreground text-lg">
                Tell us about your goals, and our AI will craft a unique workout plan just for you, incorporating classes and equipment available at FlexAI Gym.
            </p>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Dumbbell className="text-primary"/>AI Plan Features</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Tailored to your specific fitness goals.</li>
                        <li>Adapts to your experience level, from beginner to advanced.</li>
                        <li>Utilizes the equipment and classes you have access to.</li>
                        <li>Provides clear instructions for a structured workout.</li>
                    </ul>
                </CardContent>
            </Card>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">Create Your Workout Plan</CardTitle>
            <CardDescription>Fill out the form below to get started.</CardDescription>
          </CardHeader>
          <form action={formAction}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fitnessGoals">What are your main fitness goals?</Label>
                <Textarea id="fitnessGoals" name="fitnessGoals" placeholder="e.g., lose weight, build muscle, improve cardio" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experienceLevel">What is your experience level?</Label>
                <Select name="experienceLevel" defaultValue="beginner">
                  <SelectTrigger id="experienceLevel">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="availableEquipment">What equipment do you have access to?</Label>
                <Input id="availableEquipment" name="availableEquipment" placeholder="e.g., dumbbells, treadmill, yoga mat" defaultValue="Full gym equipment access" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gymClasses">Any preferred gym classes?</Label>
                <Input id="gymClasses" name="gymClasses" placeholder="e.g., Yoga, HIIT, Strength Training" />
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>
        
        {state.message === 'success' && state.plan && (
          <div className="md:col-span-2 mt-8">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Your Personalized Workout Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm md:prose-base max-w-none dark:prose-invert whitespace-pre-wrap font-body">
                  {state.plan}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
