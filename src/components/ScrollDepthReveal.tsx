"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface ScrollDepthRevealProps {
  children: ReactNode;
  /** Depth layer: "foreground" (fast), "midground" (normal), "background" (slow) */
  depth?: "foreground" | "midground" | "background";
  /** Direction of entry */
  direction?: "up" | "left" | "right";
  /** Delay in seconds */
  delay?: number;
  className?: string;
}

const depthConfig = {
  foreground: { distance: 30, duration: 0.5, scale: 0.98 },
  midground: { distance: 50, duration: 0.7, scale: 0.95 },
  background: { distance: 80, duration: 0.9, scale: 0.92 },
};

/**
 * Wraps content to reveal with a depth-based scroll animation.
 * Elements at different depths enter at different speeds, creating parallax.
 */
const ScrollDepthReveal = ({
  children,
  depth = "midground",
  direction = "up",
  delay = 0,
  className = "",
}: ScrollDepthRevealProps) => {
  const config = depthConfig[depth];

  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: config.distance, scale: config.scale };
      case "left":
        return { opacity: 0, x: config.distance, scale: config.scale };
      case "right":
        return { opacity: 0, x: -config.distance, scale: config.scale };
      default:
        return { opacity: 0, y: config.distance, scale: config.scale };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: config.duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollDepthReveal;
