import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Clock, User } from 'lucide-react';

const classesData = [
  {
    category: 'Mind & Body',
    name: 'Sunrise Yoga',
    instructor: 'Anna K.',
    time: '7:00 AM - 8:00 AM',
    description: 'Start your day with energizing yoga flows to improve flexibility and mindfulness.',
    imageId: 'class-yoga'
  },
  {
    category: 'Cardio',
    name: 'HIIT Blast',
    instructor: 'Mike R.',
    time: '6:00 PM - 6:45 PM',
    description: 'A high-intensity interval training session to maximize calorie burn and boost metabolism.',
    imageId: 'class-hiit'
  },
  {
    category: 'Strength',
    name: 'Total Body Strength',
    instructor: 'Sarah T.',
    time: '7:00 PM - 8:00 PM',
    description: 'Build lean muscle and increase your strength with this full-body workout.',
    imageId: 'class-strength'
  },
  {
    category: 'Cardio',
    name: 'Cycle Fusion',
    instructor: 'David L.',
    time: '5:30 PM - 6:15 PM',
    description: 'An energetic indoor cycling class with great music and motivating coaching.',
    imageId: 'class-cycling'
  },
   {
    category: 'Mind & Body',
    name: 'Evening Pilates',
    instructor: 'Anna K.',
    time: '8:00 PM - 9:00 PM',
    description: 'Strengthen your core and improve posture with controlled movements.',
    imageId: 'class-yoga'
  },
  {
    category: 'Strength',
    name: 'Powerlifting Prep',
    instructor: 'Sarah T.',
    time: '9:00 AM - 10:00 AM',
    description: 'Focus on the big three lifts: squat, bench, and deadlift with expert coaching.',
    imageId: 'class-strength'
  }
];

const categories = ['All', 'Mind & Body', 'Cardio', 'Strength'];

export default function Classes() {
  return (
    <section id="classes" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Find Your Class</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We offer a wide variety of classes to suit all fitness levels and interests. Find your favorite and book your spot!
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {(category === 'All' ? classesData : classesData.filter(c => c.category === category)).map(cls => {
                  const image = PlaceHolderImages.find(p => p.id === cls.imageId);
                  return (
                    <Card key={cls.name} className="flex flex-col overflow-hidden">
                      <CardHeader className="p-0">
                        {image && (
                          <div className="relative h-56 w-full">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              data-ai-hint={image.imageHint}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="p-6 flex-grow">
                        <CardTitle className="font-headline mb-2">{cls.name}</CardTitle>
                        <p className="text-muted-foreground text-sm">{cls.description}</p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start gap-4 p-6 pt-0">
                        <div className="w-full border-t pt-4 space-y-2 text-sm text-muted-foreground">
                            <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {cls.time}</p>
                            <p className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /> {cls.instructor}</p>
                        </div>
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Book Now</Button>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
