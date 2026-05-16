import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2670&auto=format&fit=crop")',
        }}
      />
      <div className="absolute inset-0 bg-bg-primary/80 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          {/* Top Flourish */}
          <div className="flex items-center gap-4 text-gold-primary">
            <Sparkles size={16} />
            <Sparkles size={20} />
            <Sparkles size={16} />
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-display font-light text-text-dark tracking-wide leading-none">
              Curated Celebrations.
            </h1>
            <h2 className="text-3xl md:text-5xl font-display italic text-gold-dark">
              Timeless Memories.
            </h2>
          </div>

          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-text-muted mt-4">
            One stop event solution — Surrey & Greater Vancouver
          </p>

          {/* Decorative Divider */}
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-gold-primary"></span>
            <span className="text-gold-primary text-xl">✦</span>
            <span className="h-[1px] w-12 bg-gold-primary"></span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 gold-gradient text-white text-xs uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-gold-primary/20"
            >
              Plan Your Event
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 border border-gold-primary text-gold-primary text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-primary/5 transition-all duration-300"
            >
              View Our Services
            </button>
          </div>

          {/* Bottom Flourish */}
          <div className="flex items-center gap-4 text-gold-primary mt-8">
            <Sparkles size={16} />
            <Sparkles size={20} />
            <Sparkles size={16} />
          </div>
        </motion.div>
      </div>

      {/* Floating Sparkles Ornaments */}
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 text-gold-primary/20 hidden md:block"
      >
        <Sparkles size={32} />
      </motion.div>
    </section>
  );
}
