import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Users, HeartPulse } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const values = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description:
      "We provide a wide range of modern and high-quality fitness equipment to help you achieve your goals effectively.",
    imageId: "value-strength",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description:
      "Our certified and experienced trainers are dedicated to providing personalized guidance and support.",
    imageId: "value-community",
  },
  {
    icon: HeartPulse,
    title: "Vibrant Community",
    description:
      "Join a welcoming and motivating community that fosters a positive and healthy lifestyle.",
    imageId: "value-tech",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            About Flex Fit Gym
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Welcome to Flex Fit Gym, your ultimate destination for fitness and
            well-being. Our mission is to provide a supportive and dynamic
            environment where you can challenge yourself, achieve your goals,
            and transform your life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => {
            const image = PlaceHolderImages.find((p) => p.id === value.imageId);
            return (
              <Card
                key={value.title}
                className="text-center overflow-hidden transition-transform hover:-translate-y-2 duration-300"
              >
                {image && (
                  <div className="w-full h-48 relative">
                    <Image
                      src={image.imageUrl || ""}
                      alt={image.description || ""}
                      data-ai-hint={image.imageHint}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
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
