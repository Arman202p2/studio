'use client';

import { useEffect, useState } from 'react';
import { Menu, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo from '@/components/logo';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#classes', label: 'Classes' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, isMobile }: { href: string; label: string; isMobile?: boolean }) => (
    <a
      href={href}
      onClick={isMobile ? () => setMobileMenuOpen(false) : undefined}
      className="font-medium text-foreground/80 transition-colors hover:text-primary"
    >
      {label}
    </a>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/40 bg-background/95 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center">
        <a href="#home" className="mr-8 flex items-center">
          <Logo className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center space-x-6 text-sm md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="#pricing">Join Now</a>
          </Button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col p-6">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="mb-8">
                  <Logo className="h-8 w-auto" />
                </a>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} isMobile />
                  ))}
                  <Button asChild className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Join Now</a>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
