import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Basic Fit',
    price: '₹1500',
    period: 'month',
    description: 'Perfect for getting started on your fitness journey.',
    features: [
      'Gym Floor Access',
      'Locker Rooms',
      'AI Workout Planner (Basic)',
    ],
    isPopular: false,
  },
  {
    name: 'Pro Flex',
    price: '₹2500',
    period: 'month',
    description: 'Our most popular plan for the dedicated gym-goer.',
    features: [
      'Everything in Basic Fit',
      'Unlimited Group Classes',
      'AI Workout Planner (Advanced)',
      'Monthly Body Composition Analysis',
    ],
    isPopular: true,
  },
  {
    name: 'AI Premium',
    price: '₹4000',
    period: 'month',
    description: 'The ultimate experience with personalized coaching.',
    features: [
      'Everything in Pro Flex',
      '2 Personal Training Sessions/Month',
      'Personalized Nutrition Plan',
      'Priority Booking',
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Choose Your Plan</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Simple, transparent pricing. No hidden fees. Choose the plan that's right for you and start today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col ${tier.isPopular ? 'border-primary ring-2 ring-primary shadow-lg' : ''}`}>
              {tier.isPopular && (
                <div className="bg-primary text-primary-foreground text-center text-sm font-bold py-1 rounded-t-lg">MOST POPULAR</div>
              )}
              <CardHeader className="items-center text-center">
                <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold tracking-tighter">{tier.price}</span>
                  <span className="text-muted-foreground">/{tier.period}</span>
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${tier.isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-accent hover:bg-accent/90 text-accent-foreground'}`}>
                  Sign Up Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
