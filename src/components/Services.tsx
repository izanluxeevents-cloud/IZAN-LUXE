import { motion } from 'motion/react';
import { Sparkles, Camera, Utensils, Palette, Calendar, Users, Heart } from 'lucide-react';

const SERVICES = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Makeup & Glam",
    description: "Professional glam for every bride, guest and celebration. Our artists bring out your inner radiance.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2671&auto=format&fit=crop"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Luxury Décor",
    description: "Stunning floral and luxury décor tailored to your vision. Transform any venue into a dreamscape.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop"
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Catering",
    description: "Beautifully presented menus curated for every occasion. A feast for the eyes and the palate.",
    image: "https://images.unsplash.com/photo-1533144893879-c110c4362164?q=80&w=2670&auto=format&fit=crop"
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Photography & Entertainment",
    description: "Capturing every beautiful moment. From high-end photography to live music, we set the stage.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Full Event Planning",
    description: "End-to-end coordination so you can simply enjoy. We handle the stress, you handle the memories.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2612&auto=format&fit=crop"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Vendor Collaboration",
    description: "Connecting with small businesses & creatives to build a community of excellence.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-serif italic text-gold-dark text-xl">
            Everything your event needs. All in one place.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative luxury-card flex flex-col h-full bg-bg-primary"
            >
              <div className="text-gold-primary text-3xl mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-medium text-text-dark mb-3">
                {service.title}
              </h3>
              <p className="font-sans text-[13px] text-text-medium leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="mt-auto">
                 <button className="text-[10px] uppercase tracking-widest font-bold text-gold-primary flex items-center gap-2 group-hover:translate-x-2 transition-all duration-300">
                   Enquire Now <span>→</span>
                 </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-gold-primary text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold-dark transition-all duration-300 shadow-xl shadow-gold-primary/20 flex items-center gap-4 mx-auto group">
            Enquire About Our Services
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
