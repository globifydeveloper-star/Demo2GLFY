// @ts-nocheck
"use client";

const HUDGridLayer = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hud-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="hsl(25 90% 50% / 0.06)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hud-grid)" />
      </svg>

      {/* Horizontal HUD lines */}
      <div
        className="absolute left-0 right-0 h-px bg-glow/10"
        style={{ top: "25%" }}
      />
      <div
        className="absolute left-0 right-0 h-px bg-glow/5"
        style={{ top: "55%" }}
      />
      <div
        className="absolute left-0 right-0 h-px bg-glow/8"
        style={{ top: "80%" }}
      />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-glow/20" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-glow/20" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-glow/20" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-glow/20" />
    </div>
  );
};

export default HUDGridLayer;
