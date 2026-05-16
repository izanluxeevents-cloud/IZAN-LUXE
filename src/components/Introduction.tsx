import { motion } from 'motion/react';

export default function Introduction() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-10"
        >
          {/* Section Header with Logo flourish */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-gold-primary text-2xl">✦</span>
            <h2 className="text-4xl md:text-5xl font-display text-text-dark tracking-wide">
              Welcome to IZĀN Luxe
            </h2>
            <div className="w-16 h-[1px] bg-gold-primary/40" />
          </div>

          <p className="text-xl md:text-2xl font-serif text-gold-dark italic leading-relaxed">
            "Every celebration deserves to feel special — no matter the size of the event."
          </p>

          <div className="space-y-6 text-text-medium leading-loose md:text-lg">
            <p>
              IZĀN Luxe was born from a passion for creating beautiful, stress-free, 
              and unforgettable events tailored to every client's vision and budget. 
              From the very first consultation to the final moment of your celebration, 
              we are with you every step of the way.
            </p>
            <p>
              Based in Surrey and proudly serving Vancouver and the Greater Vancouver area, 
              we are your one-stop event solution for every milestone that matters.
            </p>
          </div>

          <button className="flex items-center gap-3 text-gold-primary text-sm uppercase tracking-[0.2em] font-medium group mt-6 transition-all duration-300">
            Meet the Team
            <motion.span 
              className="w-8 h-[1px] bg-gold-primary group-hover:w-12 transition-all duration-300"
              layout
            />
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </motion.div>
      </div>

      {/* Decorative logo watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03] -z-10 translate-x-1/2 -translate-y-1/2">
        <img 
          src="/IZAN_LUXE_Logo.png" 
          alt="" 
          className="w-full h-full object-contain grayscale"
        />
      </div>
    </section>
  );
}
