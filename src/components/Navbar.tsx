
import { useState, useEffect, Fragment } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { useTheme } from '@/context/ThemeContext';
import TemplateLink from './TemplateLink';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on the homepage
  const isHomePage = location.pathname === '/';

  // Navigation links - Removed duplicate Templates link
  const navLinks = [
    { text: "Features", href: "/features" },
    { text: "About Us", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Pricing", href: "/pricing" },
    { text: "FAQ", href: "/faq" }
  ];

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
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-display font-bold dark:text-white">LitPages</span>
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Fragment key={index}>
              <Link 
                to={link.href} 
                className="text-sm font-medium hover:text-black/70 transition-custom dark:text-gray-200 dark:hover:text-white/70"
              >
                {link.text}
              </Link>
            </Fragment>
          ))}
          <TemplateLink className="hidden md:flex" />
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile template link - positioned before theme toggle */}
          {isMobile && (
            <TemplateLink className="md:hidden" />
          )}
          
          {/* Theme toggle */}
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
          
          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger className="md:hidden p-2">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="md:hidden w-[80%]">
              <div className="flex flex-col space-y-6 mt-10">
                {navLinks.map((link, index) => (
                  <Fragment key={index}>
                    <Link 
                      to={link.href}
                      className="text-base font-medium px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-custom"
                    >
                      {link.text}
                    </Link>
                  </Fragment>
                ))}
                <Link 
                  to="/contact"
                  className="text-base font-medium px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-custom"
                >
                  Contact
                </Link>
                <div className="px-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col space-y-4">
                    <Link to="/login" className="text-base font-medium">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Login/Register buttons on non-mobile */}
          <Link 
            to="/login" 
            className="text-sm font-medium hover:text-black/70 transition-custom hidden sm:inline-block dark:text-gray-200 dark:hover:text-white/70"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="button-primary text-sm font-medium dark:bg-white dark:text-black dark:hover:bg-gray-200 hidden md:inline-flex"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
