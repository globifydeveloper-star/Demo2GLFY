// @ts-nocheck
"use client";

const particles = [
  { x1: 5, y1: 20, x2: 45, y2: 60, x3: 85, y3: 30, dur: 18, delay: 0, size: 3, opacity: 0.6 },
  { x1: 90, y1: 10, x2: 50, y2: 50, x3: 10, y3: 80, dur: 22, delay: 2, size: 2.5, opacity: 0.5 },
  { x1: 20, y1: 80, x2: 60, y2: 30, x3: 30, y3: 10, dur: 25, delay: 4, size: 2, opacity: 0.4 },
  { x1: 70, y1: 5, x2: 30, y2: 70, x3: 80, y3: 90, dur: 20, delay: 1, size: 3.5, opacity: 0.5 },
  { x1: 15, y1: 50, x2: 80, y2: 20, x3: 50, y3: 75, dur: 28, delay: 6, size: 2, opacity: 0.35 },
  { x1: 85, y1: 70, x2: 20, y2: 40, x3: 60, y3: 15, dur: 24, delay: 3, size: 2.5, opacity: 0.45 },
  { x1: 50, y1: 5, x2: 10, y2: 60, x3: 70, y3: 85, dur: 30, delay: 8, size: 1.8, opacity: 0.3 },
  { x1: 40, y1: 90, x2: 75, y2: 45, x3: 15, y3: 25, dur: 19, delay: 5, size: 3, opacity: 0.55 },
  { x1: 95, y1: 40, x2: 40, y2: 85, x3: 5, y3: 50, dur: 26, delay: 7, size: 2, opacity: 0.4 },
  { x1: 30, y1: 15, x2: 65, y2: 75, x3: 90, y3: 45, dur: 21, delay: 9, size: 2.8, opacity: 0.5 },
];

const ParticleTrails = () => {
  const keyframes = particles
    .map(
      (p, i) => `
    @keyframes particleDrift${i} {
      0%   { left: ${p.x1}%; top: ${p.y1}%; opacity: 0; }
      10%  { opacity: ${p.opacity}; }
      50%  { left: ${p.x2}%; top: ${p.y2}%; opacity: ${p.opacity}; }
      90%  { opacity: ${p.opacity}; }
      100% { left: ${p.x3}%; top: ${p.y3}%; opacity: 0; }
    }`
    )
    .join("\n");

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{keyframes}</style>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, hsl(25 90% 65% / ${p.opacity}) 0%, hsl(30 80% 50% / ${p.opacity * 0.5}) 60%, transparent 100%)`,
            boxShadow: `0 0 ${p.size * 3}px ${p.size}px hsl(20 90% 55% / ${p.opacity * 0.4})`,
            animation: `particleDrift${i} ${p.dur}s ease-in-out ${p.delay}s infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleTrails;
