import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, Users, BrainCircuit } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const values = [
  {
    icon: Dumbbell,
    title: 'Unleash Strength',
    description: 'We provide state-of-the-art equipment and expert trainers to help you build physical and mental strength.',
    imageId: 'value-strength',
  },
  {
    icon: Users,
    title: 'Build Community',
    description: 'Join a supportive and motivating community of fitness enthusiasts who cheer for your success.',
    imageId: 'value-community',
  },
  {
    icon: BrainCircuit,
    title: 'Embrace Technology',
    description: 'Our AI-powered tools offer personalized insights and plans to optimize your workout and accelerate results.',
    imageId: 'value-tech',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">More Than Just a Gym</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            At FlexAI, we blend cutting-edge technology with a passion for fitness to create a truly personalized experience. Our mission is to empower you to achieve your best self.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => {
            const image = PlaceHolderImages.find(p => p.id === value.imageId);
            return (
              <Card key={value.title} className="text-center overflow-hidden transition-transform hover:-translate-y-2 duration-300">
                {image && (
                   <div className="w-full h-48 relative">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                    />
                   </div>
                )}
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-headline">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
