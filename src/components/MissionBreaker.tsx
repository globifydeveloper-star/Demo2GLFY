"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MissionBreaker = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0.1, 0.5], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 bg-white relative overflow-hidden">
      {/* Animated background shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(20 90% 48% / 0.03), transparent)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="max-w-4xl mx-auto text-center"
        >
          {/* Animated top line */}
          <div className="relative h-[2px] w-12 mx-auto mb-8 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-primary"
              style={{ width: lineWidth }}
            />
          </div>

          <motion.blockquote
            style={{ y: textY, opacity: textOpacity }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.3] text-foreground"
          >
            "We don't build software,
            <br />
            <span className="text-muted-foreground">we engineer AI-powered growth systems</span>{" "}
            that transform how enterprises operate, automate, and scale."
          </motion.blockquote>

          {/* Animated bottom line */}
          <div className="relative h-[2px] w-12 mx-auto mt-8 mb-8 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-primary"
              style={{ width: lineWidth }}
            />
          </div>

          <motion.a
            href="/digital-transformation"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3"
          >
            Start Your AI Transformation →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionBreaker;
