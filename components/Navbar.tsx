import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Concepto', href: '#about' },
    { name: 'Clases', href: '#schedule' },
    { name: 'Paquetes', href: '#pricing' },
    { name: 'Equipo', href: '#team' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    // Function to scroll to element
    const scrollToElement = () => {
      const element = document.getElementById(targetId);
      if (element) {
        // Offset for fixed header
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(scrollToElement, 300);
    } else {
      scrollToElement();
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <nav 
          className={`transition-all duration-700 ease-out flex justify-between items-center px-8 py-4 rounded-full ${
            isScrolled || isMenuOpen || location.pathname !== '/'
              ? 'glass-panel-dark w-full max-w-5xl shadow-2xl' 
              : 'w-full max-w-7xl bg-transparent'
          }`}
        >
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-bold text-xl tracking-[0.1em] text-stone-900 dark:text-white z-50 transition-colors duration-500">
            FITFORM
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors relative group cursor-pointer ${
                  isScrolled || location.pathname !== '/' ? 'text-stone-600 dark:text-white/70 hover:text-stone-900 dark:hover:text-white' : 'text-stone-500 dark:text-white/70 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-stone-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-white/10 transition-colors text-stone-900 dark:text-white"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
               onClick={(e) => handleNavClick(e as any, '#schedule')}
              className="bg-stone-900 text-white dark:bg-white dark:text-black px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full hover:bg-stone-700 dark:hover:bg-stone-200 transition-colors"
            >
              Reservar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden z-50">
            <button 
              onClick={toggleTheme}
              className="text-stone-900 dark:text-white"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className="text-stone-900 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-xl transform transition-transform duration-700 cubic-bezier(0.7, 0, 0.3, 1) ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-screen space-y-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-3xl font-light tracking-tight text-stone-900 dark:text-white hover:opacity-50 transition-opacity"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={(e) => handleNavClick(e as any, '#schedule')}
            className="mt-8 px-12 py-4 border border-stone-200 dark:border-white/20 rounded-full text-stone-900 dark:text-white uppercase tracking-[0.2em] text-xs hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            Reservar Ahora
          </button>
        </div>
      </div>
    </>
  );
};