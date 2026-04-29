// @ts-nocheck
"use client";

import { useMemo, useState, useCallback } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animDelay: number;
  animDuration: number;
}

const ShootingStars = () => (
  <>
    <style>{`
      @keyframes shootingStar {
        0% { transform: translateX(0) translateY(0); opacity: 0; width: 0; }
        5% { opacity: 1; }
        30% { opacity: 1; width: 80px; }
        100% { transform: translateX(300px) translateY(200px); opacity: 0; width: 0; }
      }
    `}</style>
    {[
      { top: '12%', left: '15%', delay: '2s', duration: '1.8s', rotate: '215deg', interval: '8s' },
      { top: '25%', left: '60%', delay: '6s', duration: '1.5s', rotate: '200deg', interval: '12s' },
      { top: '8%', left: '80%', delay: '10s', duration: '2s', rotate: '230deg', interval: '15s' },
    ].map((m, i) => (
      <div
        key={i}
        className="absolute"
        style={{
          top: m.top,
          left: m.left,
          width: 0,
          height: '2px',
          background: 'linear-gradient(90deg, hsl(20 90% 70% / 0.9), hsl(30 95% 80% / 0.5), transparent)',
          borderRadius: '2px',
          transform: `rotate(${m.rotate})`,
          animation: `shootingStar ${m.duration} ease-out ${m.delay} infinite`,
          animationDelay: m.delay,
          filter: 'blur(0.5px)',
          boxShadow: '0 0 6px 2px hsl(25 90% 60% / 0.4)',
        }}
      />
    ))}
  </>
);

const StarfieldLayer = () => {
  const initialStars = useMemo<Star[]>(
    () =>
      Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        animDelay: Math.random() * 6,
        animDuration: Math.random() * 2 + 1.5,
      })),
    []
  );

  const [clickedStars, setClickedStars] = useState<Star[]>([]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const count = Math.floor(Math.random() * 3) + 3;
    const newStars: Star[] = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 4,
      y: y + (Math.random() - 0.5) * 4,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.5,
      animDelay: 0,
      animDuration: Math.random() * 1.5 + 1,
    }));

    setClickedStars((prev) => [...prev, ...newStars]);
  }, []);

  const allStars = [...initialStars, ...clickedStars];

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: var(--star-opacity); transform: scale(1); filter: brightness(1); }
          50% { opacity: 0.08; transform: scale(0.5); filter: brightness(1.5); }
        }
        @keyframes starBurst {
          0% { opacity: 0; transform: scale(0); }
          30% { opacity: 1; transform: scale(1.8); }
          100% { opacity: var(--star-opacity); transform: scale(1); }
        }
      `}</style>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ cursor: "crosshair" }}
        onClick={handleClick}
      >
        {allStars.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-hero-foreground"
            style={{
              width: s.size,
              height: s.size,
              left: `${s.x}%`,
              top: `${s.y}%`,
              ["--star-opacity" as any]: s.opacity,
              opacity: s.opacity,
              animation: s.id >= 1000
                ? `starBurst 0.4s ease-out forwards, twinkle ${s.animDuration}s ease-in-out 0.4s infinite`
                : `twinkle ${s.animDuration}s ease-in-out ${s.animDelay}s infinite`,
            }}
          />
        ))}
        <ShootingStars />
      </div>
    </>
  );
};

export default StarfieldLayer;
