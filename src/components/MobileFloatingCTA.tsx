"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import ContactFormDialog from "@/components/ContactFormDialog";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const MobileFloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <>
            {/* Sticky Bottom CTA Bar */}
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-hero/95 backdrop-blur-md border-t border-hero-foreground/10 px-4 py-3 safe-area-bottom"
            >
              <div className="flex items-center gap-2 w-full">
                <a
                  href="https://wa.me/971547308673?text=Hi%20Globify%2C%20I%27m%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-hero-foreground/30 flex items-center justify-center active:bg-hero-foreground/10 transition-colors flex-shrink-0 overflow-hidden"
                  aria-label="Chat on WhatsApp"
                 onClick={() => typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'contact_whatsapp')}>
                  <img src={whatsappIcon.src} alt="WhatsApp" className="w-full h-full object-cover" />
                </a>
                <button
                  onClick={() => setContactOpen(true)}
                  className="flex-1 min-w-0 bg-primary text-primary-foreground py-3 sm:py-3.5 rounded-full text-sm sm:text-sm font-semibold text-center active:scale-[0.98] transition-transform"
                >
                  Get Free Consultation
                </button>
                <a
                  href="tel:+971547308673"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-foreground border-2 border-hero-foreground/30 flex items-center justify-center active:opacity-80 transition-opacity flex-shrink-0"
                  aria-label="Call us"
                 onClick={() => {
                   if (typeof window !== "undefined" && (window as any).gtag) {
                     (window as any).gtag('event', 'contact_call');
                     (window as any).gtag('event', 'conversion', {
                       send_to: 'AW-17163382693/470NCM_1kqEcEKXfkfg_',
                       value: 1.0,
                       currency: 'AED'
                     });
                   }
                 }}>
                  <Phone className="w-5 h-5 text-background" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default MobileFloatingCTA;
