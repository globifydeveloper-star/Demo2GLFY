"use client";

import { useParallax } from "@/hooks/useParallax";
import { ReactNode } from "react";

export interface OrbProps {
  position: string;
  color: string;
  size: string;
  speed?: number;
}

interface ParallaxLayerProps {
  children: ReactNode;
  orbs?: OrbProps[];
  className?: string;
}

const ParallaxOrb = ({
  position,
  color,
  size,
  speed = 0.2,
}: OrbProps) => {
  const { ref } = useParallax(speed);

  return (
    <div
      ref={ref}
      className={`absolute ${position} ${size} rounded-full blur-[100px] pointer-events-none will-change-transform`}
      style={{ background: color }}
    />
  );
};

const ParallaxLayer = ({ children, orbs = [], className = "" }: ParallaxLayerProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {orbs.map((orb, i) => (
        <ParallaxOrb key={i} {...orb} />
      ))}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxLayer;
