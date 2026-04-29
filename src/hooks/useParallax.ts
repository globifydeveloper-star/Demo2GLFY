"use client";

import { useRef, useEffect, useCallback } from "react";

/**
 * Ref-based parallax hook — directly mutates DOM style.transform
 * to avoid React re-renders on scroll. Returns a ref to attach to
 * the element that should move.
 *
 * @param speed - multiplier for the parallax offset (default 0.15)
 */
export function useParallax(speed = 0.15) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef(0);

  const handleScroll = useCallback(() => {
    if (rafId.current) return; // already scheduled
    rafId.current = requestAnimationFrame(() => {
      rafId.current = 0;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = 1 - (rect.top + rect.height) / (windowH + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      const offset = (clamped - 0.5) * rect.height * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  }, [speed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  return { ref: containerRef };
}
