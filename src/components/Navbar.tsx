
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="#" 
              className="flex items-center"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-slate-800">
                <span className="text-white text-sm font-bold">MS</span>
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-slate-800">Monalisa Salib</span>
                <span className="block text-xs text-slate-600 tracking-wider">Strategic Thought Partner and Make It Happen Maestro</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-teal-500 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-teal-500 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-slate-700 hover:text-teal-500 transition-colors font-medium"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-teal-500 transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-teal-500 hover:bg-teal-600 text-white"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile navigation toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 text-slate-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="py-2 px-4 text-slate-700 hover:bg-slate-50 rounded-md transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="py-2 px-4 text-slate-700 hover:bg-slate-50 rounded-md transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="py-2 px-4 text-slate-700 hover:bg-slate-50 rounded-md transition-colors text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="py-2 px-4 text-slate-700 hover:bg-slate-50 rounded-md transition-colors text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="mx-4 bg-teal-500 hover:bg-teal-600 text-white"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
