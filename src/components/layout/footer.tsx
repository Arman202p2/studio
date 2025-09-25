import { Phone, Mail, MapPin, Twitter, Instagram, Facebook } from 'lucide-react';
import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer id="contact" className="bg-card text-card-foreground border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Logo className="h-8 w-auto" />
            <p className="text-muted-foreground">
              The ultimate fitness destination, powered by AI to help you achieve your goals faster.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><Twitter /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Instagram /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Facebook /></a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-headline">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>#123, Fitness Avenue, Indiranagar, Bangalore - 560038</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>contact@flexaigym.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-headline">Opening Hours</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Mon - Fri: 5:00 AM - 11:00 PM</li>
              <li>Sat - Sun: 6:00 AM - 10:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} FlexAI Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
