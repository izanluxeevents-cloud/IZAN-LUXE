import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageSquare, MessageCircle } from 'lucide-react';
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FAF8F4]">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-5xl mx-auto shadow-2xl rounded-sm overflow-hidden flex flex-col lg:flex-row bg-white"
        >
          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3 bg-white text-text-dark p-12 space-y-12 relative overflow-hidden border-r border-gold-primary/10">
             {/* Abstract Decor */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary opacity-5 translate-x-1/2 -translate-y-1/2 rounded-full" />
             
             <div className="space-y-4 relative z-10">
               <h3 className="text-3xl font-display text-gold-primary">Get in Touch</h3>
               <p className="text-text-medium text-sm leading-relaxed">
                 Based in Surrey | Serving Vancouver & Greater Vancouver
               </p>
             </div>

             <div className="space-y-8 relative z-10">
               <div className="flex items-start gap-4">
                 <MapPin className="text-gold-primary shrink-0" size={24} />
                 <div>
                   <p className="text-xs uppercase tracking-widest text-gold-primary mb-1">Our Location</p>
                   <p className="text-sm">Surrey, BC, Canada</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <Phone className="text-gold-primary shrink-0" size={24} />
                 <div>
                   <p className="text-xs uppercase tracking-widest text-gold-primary mb-1">Call Us</p>
                   <p className="text-sm">+1 (604) 908-7829</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <Mail className="text-gold-primary shrink-0" size={24} />
                 <div>
                   <p className="text-xs uppercase tracking-widest text-gold-primary mb-1">Email Us</p>
                   <p className="text-sm">izanluxe.event@gmail.com</p>
                 </div>
               </div>
             </div>

          </div>

          {/* Contact Actions Section */}
          <div className="lg:w-2/3 p-12 md:p-16 flex flex-col justify-center bg-white">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-display text-text-dark mb-4">
                Connect With Us
              </h2>
              <p className="text-text-medium font-serif italic text-lg leading-relaxed max-w-2xl">
                Ready to bring your vision to life? Choose your preferred way to reach out. We're responsive and ready to discuss your next big event.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mobile/Phone Call */}
              <a 
                href="tel:+16049087829"
                className="group flex flex-col items-center justify-center p-8 bg-white border border-gold-primary/20 hover:border-gold-primary hover:shadow-xl hover:shadow-gold-primary/10 transition-all duration-500 rounded-sm text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gold-primary flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold-primary/20">
                  <Phone size={24} />
                </div>
                <h4 className="text-gold-dark text-xs uppercase tracking-[0.2em] font-bold mb-1">Call Us</h4>
                <p className="text-text-dark font-display text-lg">Mobile</p>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/16049087829"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-8 bg-white border border-gold-primary/20 hover:border-gold-primary hover:shadow-xl hover:shadow-gold-primary/10 transition-all duration-500 rounded-sm text-center"
              >
                <div className="w-14 h-14 rounded-full bg-white border-2 border-gold-primary flex items-center justify-center text-gold-primary mb-4 group-hover:bg-gold-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-gold-primary/5">
                  <MessageCircle size={24} />
                </div>
                <h4 className="text-gold-dark text-xs uppercase tracking-[0.2em] font-bold mb-1">Message</h4>
                <p className="text-text-dark font-display text-lg">WhatsApp</p>
              </a>

              {/* Email */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=izanluxe.event@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-8 bg-white border border-gold-primary/20 hover:border-gold-primary hover:shadow-xl hover:shadow-gold-primary/10 transition-all duration-500 rounded-sm text-center"
              >
                <div className="w-14 h-14 rounded-full bg-white border-2 border-gold-primary flex items-center justify-center text-gold-primary mb-4 group-hover:bg-gold-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-gold-primary/5">
                  <Mail size={24} />
                </div>
                <h4 className="text-gold-dark text-xs uppercase tracking-[0.2em] font-bold mb-1">Write To Us</h4>
                <p className="text-text-dark font-display text-lg">Email</p>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/people/IZ%C4%80N-Luxe-Event/61589532906033/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-8 bg-white border border-gold-primary/20 hover:border-gold-primary hover:shadow-xl hover:shadow-gold-primary/10 transition-all duration-500 rounded-sm text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gold-primary flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold-primary/20">
                  <Facebook size={24} />
                </div>
                <h4 className="text-gold-dark text-xs uppercase tracking-[0.2em] font-bold mb-1">Follow Us</h4>
                <p className="text-text-dark font-display text-lg">Facebook</p>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
