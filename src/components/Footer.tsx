import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-48 md:h-24 bg-text-dark text-white w-full flex flex-col md:flex-row items-center justify-between px-16 shrink-0 gap-6 py-6 md:py-0">
      <div className="flex flex-col items-center md:items-start">
        <img 
          src="/IZAN_LUXE_Logo.png" 
          alt="IZĀN LUXE Logo" 
          className="h-12 w-auto object-contain brightness-0 invert" 
        />
        <span className="font-sans text-[10px] text-text-muted uppercase tracking-widest mt-1">© {currentYear} Surrey, BC</span>
      </div>
      
      <div className="flex items-center gap-12 flex-col md:flex-row">
        <div className="flex flex-col items-center md:items-end">
          <span className="font-sans text-[10px] text-gold-primary uppercase tracking-[0.1em]">Inquire At</span>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=izanluxe.event@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-serif text-white text-sm italic hover:text-gold-primary transition-colors"
          >
            izanluxe.event@gmail.com
          </a>
          <a href="tel:+16049087829" className="font-serif text-white text-sm italic hover:text-gold-primary transition-colors">+1 (604) 908-7829</a>
        </div>
        <div className="flex gap-4">
          <a 
            href="https://www.facebook.com/people/IZ%C4%80N-Luxe-Event/61589532906033/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary text-[10px] hover:bg-gold-primary hover:text-white transition-all"
          >
            FB
          </a>
        </div>
      </div>
    </footer>
  );
}
