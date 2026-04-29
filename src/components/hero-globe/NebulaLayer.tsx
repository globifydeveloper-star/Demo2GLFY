// @ts-nocheck
"use client";

import { useIsMobile } from "@/hooks/use-mobile";

const NebulaLayer = () => {
  const isMobile = useIsMobile();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {!isMobile && (
        <style>{`
          @keyframes auroraPulse1 {
            0%, 100% { opacity: 0.3; transform: translateY(0) scale(1); }
            50% { opacity: 0.5; transform: translateY(-20px) scale(1.05); }
          }
          @keyframes auroraPulse2 {
            0%, 100% { opacity: 0.2; transform: translateX(0) scale(1); }
            50% { opacity: 0.4; transform: translateX(30px) scale(1.08); }
          }
          @keyframes auroraPulse3 {
            0%, 100% { opacity: 0.15; transform: translate(0, 0) rotate(0deg); }
            33% { opacity: 0.35; transform: translate(-15px, 10px) rotate(1deg); }
            66% { opacity: 0.25; transform: translate(20px, -15px) rotate(-1deg); }
          }
        `}</style>
      )}

      {/* Deep orange-magenta core nebula */}
      <div
        className="absolute"
        style={{
          width: "120%",
          height: "120%",
          top: "-10%",
          left: "-10%",
          background:
            "radial-gradient(ellipse at 60% 40%, hsl(25 90% 30% / 0.35) 0%, hsl(280 60% 15% / 0.2) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Top-right warm glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: "70%",
          height: "60%",
          top: "0%",
          right: "-15%",
          background:
            "radial-gradient(ellipse, hsl(20 95% 50% / 0.12) 0%, hsl(35 90% 45% / 0.06) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Desktop-only: additional nebula layers + aurora animations */}
      {!isMobile && (
        <>
          {/* Bottom-left deep orange */}
          <div
            className="absolute rounded-full"
            style={{
              width: "60%",
              height: "55%",
              bottom: "-5%",
              left: "-10%",
              background:
                "radial-gradient(ellipse, hsl(15 85% 45% / 0.14) 0%, hsl(350 60% 30% / 0.06) 50%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />
          {/* Center magenta-orange accent */}
          <div
            className="absolute rounded-full"
            style={{
              width: "50%",
              height: "50%",
              top: "30%",
              left: "25%",
              background:
                "radial-gradient(ellipse, hsl(30 80% 55% / 0.08) 0%, hsl(320 50% 40% / 0.04) 50%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          {/* Scattered warm dust */}
          <div
            className="absolute"
            style={{
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
              background:
                "radial-gradient(ellipse at 20% 70%, hsl(25 80% 40% / 0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, hsl(35 90% 50% / 0.05) 0%, transparent 45%)",
              filter: "blur(40px)",
            }}
          />

          {/* ── Pulsing Aurora Waves ── */}
          <div
            className="absolute rounded-full"
            style={{
              width: "90%",
              height: "50%",
              top: "15%",
              left: "5%",
              background:
                "radial-gradient(ellipse at 40% 50%, hsl(20 95% 45% / 0.25) 0%, hsl(30 85% 55% / 0.1) 35%, transparent 70%)",
              filter: "blur(60px)",
              animation: "auroraPulse1 10s ease-in-out infinite",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: "80%",
              height: "45%",
              bottom: "10%",
              right: "0%",
              background:
                "radial-gradient(ellipse at 60% 50%, hsl(15 90% 50% / 0.18) 0%, hsl(340 70% 40% / 0.08) 40%, transparent 70%)",
              filter: "blur(70px)",
              animation: "auroraPulse2 12s ease-in-out 2s infinite",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: "70%",
              height: "60%",
              top: "20%",
              left: "15%",
              background:
                "radial-gradient(ellipse at 50% 40%, hsl(25 80% 60% / 0.12) 0%, hsl(300 50% 35% / 0.06) 45%, transparent 70%)",
              filter: "blur(55px)",
              animation: "auroraPulse3 8s ease-in-out 4s infinite",
            }}
          />
        </>
      )}
    </div>
  );
};

export default NebulaLayer;
