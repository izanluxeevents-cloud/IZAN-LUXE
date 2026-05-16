import { motion } from 'motion/react';

const EVENTS = [
  "Weddings", "Birthdays", "Baby Showers", 
  "Bridal Showers", "Graduations", "Special Celebrations",
  "Cultural Events", "Anniversaries", "Milestone Moments"
];

export default function EventTypes() {
  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <img 
          src="/IZAN_LUXE_Logo.png" 
          alt="" 
          className="w-[50vw] h-[50vw] object-contain grayscale"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display text-text-dark">
              ✦ Every Occasion. Every Vision. ✦
            </h2>
            <div className="w-16 h-[1px] bg-gold-primary mx-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {EVENTS.map((event, index) => (
              <motion.div
                key={event}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="px-8 py-3 bg-white border border-border-gold text-text-medium rounded-full text-sm font-medium hover:border-gold-primary hover:text-gold-primary hover:shadow-md transition-all duration-300 cursor-default"
              >
                {event}
              </motion.div>
            ))}
          </div>

          <p className="text-xl font-serif text-gold-dark italic pt-4">
            From intimate gatherings to grand celebrations — if it matters to you, it matters to us.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
