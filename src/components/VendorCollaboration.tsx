import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';

export default function VendorCollaboration() {
  return (
    <section className="py-32 bg-bg-primary overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="bg-white border border-border-gold p-12 md:p-24 text-center space-y-10 relative shadow-2xl shadow-gold-primary/5"
        >
          {/* Ornamental Frame Decor */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-gold-primary/30" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-gold-primary/30" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-gold-primary/30" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-gold-primary/30" />

          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 bg-gold-primary/10 rounded-full flex items-center justify-center text-gold-primary">
              <Handshake size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-dark">
              ✦ Let's Create Together ✦
            </h2>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-text-medium leading-relaxed font-serif italic text-gold-dark">
              We are always excited to connect with talented vendors, small businesses, and creatives who share our passion for beautiful events.
            </p>
            <p className="text-text-medium leading-loose">
              Whether you are a florist, photographer, caterer, or entertainment provider — 
              we would love to explore how we can collaborate and grow together. Our goal 
              is to build a curated network of excellence for our clients.
            </p>
          </div>

          <div className="pt-6">
            <a 
              href="#contact"
              className="inline-flex items-center gap-4 px-12 py-4 bg-gold-primary text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold-dark transition-all duration-300 shadow-xl shadow-gold-primary/20"
            >
              Get In Touch
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/5 rotate-45 translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-primary/5 rotate-45 -translate-x-1/2 translate-y-1/2 -z-10" />
    </section>
  );
}
