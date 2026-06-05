import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Book', href: '#booking' },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-sm bg-[#FAF8F4]/30 ${
        isScrolled ? 'py-1 shadow-md' : 'py-2'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between relative">
        {/* Logo Section */}
        <div className="relative group cursor-pointer flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="/IZAN_LUXE_Logo_Cut.png" 
            alt="IZĀN LUXE Logo" 
            className={`transition-all duration-500 object-contain mix-blend-multiply ${isScrolled ? 'h-24' : 'h-36'}`}
          />
        </div>

        {/* Center Text Section */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
          <span className="font-display text-[#C9A84C] text-xl md:text-2xl tracking-[0.25em] uppercase font-medium whitespace-nowrap drop-shadow-sm">
            One Stop Event Solution
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-[11px] uppercase tracking-[0.15em] text-text-medium hover:text-gold-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
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
              src="/IZAN_LUXE_Logo_Cut.png" 
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
      
    </nav>
  );
}
