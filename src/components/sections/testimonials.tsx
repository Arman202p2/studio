import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Priya S.',
    title: 'Lost 10 Kgs!',
    quote: "Flex Fit Gym's personalized plan was a game-changer! I finally broke through my plateau and feel more energetic than ever. The community here is so supportive.",
    imageId: 'testimonial-1',
  },
  {
    name: 'Rohan M.',
    title: 'Gained Muscle & Confidence',
    quote: "The strength training programs and the expert trainers helped me train smarter, not just harder. I've seen more progress in 3 months than I did in a year elsewhere.",
    imageId: 'testimonial-2',
  },
  {
    name: 'Anjali D.',
    title: 'Found My Zen',
    quote: 'I love the variety of classes, especially the yoga sessions. It\'s my perfect escape after a long day at work. The instructors are amazing and attentive.',
    imageId: 'testimonial-3',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Success Stories</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Hear what our members have to say about their journey with Flex Fit Gym.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const image = PlaceHolderImages.find(p => p.id === testimonial.imageId);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center text-center p-6">
                        {image && (
                          <Avatar className="w-20 h-20 mb-4">
                            <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                        <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                        <div className="font-bold font-headline">{testimonial.name}</div>
                        <div className="text-sm text-primary">{testimonial.title}</div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
