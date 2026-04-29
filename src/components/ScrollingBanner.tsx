"use client";

import { motion } from "framer-motion";

const items = [
  "TRUSTED BY 200+ BUSINESSES WORLDWIDE",
  "AWARD-WINNING DIGITAL SOLUTIONS",
  "CERTIFIED SHOPIFY PLUS PARTNER",
  "ISO 27001 COMPLIANT DEVELOPMENT",
  "TOP-RATED ON CLUTCH & GOODFIRMS",
  "DELIVERING EXCELLENCE SINCE 2015",
];

const ScrollingBanner = () => {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-white overflow-hidden py-3.5 border-y-2 border-primary">
      <motion.div
        className="flex whitespace-nowrap gap-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-foreground text-sm font-bold tracking-[0.2em] mx-8 flex-shrink-0"
          >
            {item}
            <span className="ml-8 text-muted-foreground/50">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingBanner;
