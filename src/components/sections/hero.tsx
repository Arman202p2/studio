import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-gym');

  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-lg">
          Forge Your Future with AI Precision
        </h1>
        <p className="mt-4 max-w-3xl text-lg md:text-xl text-neutral-200 drop-shadow-md">
          Welcome to FlexAI, where your fitness journey is supercharged by artificial intelligence. Personalized plans, smart tracking, and expert guidance await.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#classes">Explore Classes</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <a href="#pricing">Join Today</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
