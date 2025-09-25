import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Classes from '@/components/sections/classes';
import WorkoutPlanner from '@/components/sections/workout-planner';
import Pricing from '@/components/sections/pricing';
import Testimonials from '@/components/sections/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Classes />
        <WorkoutPlanner />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
