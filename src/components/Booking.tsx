import { useEffect } from 'react';
import { motion } from 'motion/react';
import { CalendarCheck } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/izanluxe-events/30min';

export default function Booking() {
  useEffect(() => {
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="booking" className="py-24 bg-white scroll-mt-24 md:scroll-mt-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="w-14 h-14 rounded-full bg-gold-primary text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold-primary/20">
              <CalendarCheck size={26} />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-dark font-bold mb-4">
              Book a Consultation
            </p>
            <h2 className="text-4xl md:text-6xl font-display text-text-dark mb-5">
              Schedule Your Event Planning Call
            </h2>
            <p className="text-text-medium font-serif italic text-lg leading-relaxed">
              Choose a time that works for you and tell us what you are celebrating. We will use this call to understand your vision, timeline, guest count, and the services you need.
            </p>
          </div>

          <div className="bg-bg-primary border border-gold-primary/20 shadow-2xl shadow-gold-primary/10 rounded-sm overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
