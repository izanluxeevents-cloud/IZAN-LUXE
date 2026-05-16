import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex flex-col items-center justify-center bg-white ${
        isScrolled ? 'pt-2 pb-4 shadow-md' : 'pt-4 pb-10'
      }`}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center">
          {/* Logo Section */}
          <div className="relative group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/IZAN_LUXE_Logo.png" 
              alt="IZĀN LUXE Logo" 
              className={`transition-all duration-500 object-contain mix-blend-multiply ${isScrolled ? 'h-40' : 'h-80'}`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-8 mt-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-[10px] uppercase tracking-[0.15em] text-text-medium hover:text-gold-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 text-gold-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-bg-primary z-40 flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-8 right-6 text-gold-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <img 
              src="/IZAN_LUXE_Logo.png" 
              alt="IZĀN LUXE Logo" 
              className="h-20 mb-8 mix-blend-multiply"
            />
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-display tracking-[0.1em] text-text-dark hover:text-gold-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Decorative Line Below Navbar */}
      <div className={`transition-opacity duration-500 h-[1px] w-full bg-gold-primary/30 mt-4 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
    </nav>
  );
}
