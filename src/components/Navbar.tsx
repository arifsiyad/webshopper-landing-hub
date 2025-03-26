
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-4 sm:px-6 md:px-8",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-display font-bold">WebCraft</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#templates" className="text-sm font-medium hover:text-black/70 transition-custom">
            Templates
          </a>
          <a href="#features" className="text-sm font-medium hover:text-black/70 transition-custom">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-black/70 transition-custom">
            Pricing
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-black/70 transition-custom">
            FAQ
          </a>
        </div>

        <a 
          href="#contact" 
          className="button-primary text-sm font-medium"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
