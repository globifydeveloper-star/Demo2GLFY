"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import { useRef } from "react";

const CTASection = () => {
  const { openContactDialog } = useContactDialog();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.02]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ scale: bgScale }}
          className="relative p-8 sm:p-14 md:p-20 rounded-[1.5rem] sm:rounded-[2rem] bg-[#0a0a1a] overflow-hidden"
        >
          {/* Animated orbs */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[120px]"
            style={{ rotate: orbRotate }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Animated border ring */}
          <motion.div
            className="absolute top-8 right-8 w-20 h-20 border border-primary/20 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Shimmer line across */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[1px]"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(20 90% 48% / 0.4), transparent)",
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <TrendingUp className="w-5 h-5 text-primary" />
                </motion.div>
                <p className="text-sm font-semibold tracking-[0.15em] uppercase text-primary">
                  Your AI Transformation Starts Here
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] mb-4 sm:mb-6">
                Ready to automate, scale,
                <br />
                and outperform?
              </h2>
              <p className="text-white/50 max-w-lg text-base sm:text-lg font-light">
                Join 300+ enterprises that have transformed operations, cut costs by 60%, and engineered predictable revenue growth with Globify's AI-powered solutions.
              </p>
            </div>
            <button onClick={openContactDialog}>
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all hover:gap-3 flex-shrink-0 shadow-[0_0_40px_-8px_hsl(var(--primary)/0.6)] w-full sm:w-auto active:scale-[0.98]"
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
