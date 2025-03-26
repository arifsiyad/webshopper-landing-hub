
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90 dark:backdrop-blur-md dark:shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-display font-bold dark:text-white">LitPages</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#templates" className="text-sm font-medium hover:text-black/70 transition-custom dark:text-gray-200 dark:hover:text-white/70">
            Templates
          </a>
          <a href="#features" className="text-sm font-medium hover:text-black/70 transition-custom dark:text-gray-200 dark:hover:text-white/70">
            Features
          </a>
          <a href="#about" className="text-sm font-medium hover:text-black/70 transition-custom dark:text-gray-200 dark:hover:text-white/70">
            About Us
          </a>
          <a href="#services" className="text-sm font-medium hover:text-black/70 transition-custom dark:text-gray-200 dark:hover:text-white/70">
            Services
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-black/70 transition-custom dark:text-gray-200 dark:hover:text-white/70">
            Pricing
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-black/70 transition-custom dark:text-gray-200 dark:hover:text-white/70">
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Toggle 
            pressed={theme === 'dark'} 
            onPressedChange={toggleTheme}
            aria-label="Toggle dark mode"
            className="bg-transparent border border-gray-200 dark:border-gray-700"
          >
            {theme === 'dark' ? (
              <Moon className="h-4 w-4 text-gray-200" />
            ) : (
              <Sun className="h-4 w-4 text-gray-700" />
            )}
          </Toggle>
          
          <Link 
            to="/login" 
            className="text-sm font-medium hover:text-black/70 transition-custom hidden sm:inline-block dark:text-gray-200 dark:hover:text-white/70"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="button-primary text-sm font-medium dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
