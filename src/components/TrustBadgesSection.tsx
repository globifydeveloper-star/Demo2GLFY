"use client";

import { motion } from "framer-motion";
import { Award, Star, Shield, BadgeCheck, Trophy, Globe, CheckCircle } from "lucide-react";

const badges = [
  { icon: Star, label: "Best B2B Digital Marketing Agency", sub: "DesignRush" },
  { icon: Trophy, label: "Top Interactive Agencies", sub: "TIA" },
  { icon: BadgeCheck, label: "Google Partner", sub: "Certified" },
  { icon: Award, label: "Top Digital Agencies", sub: "The Manifest" },
  { icon: Star, label: "Trustpilot", sub: "★★★★★ Rated" },
  { icon: Shield, label: "The Drum Recommended", sub: "Verified" },
  { icon: Globe, label: "Digital Agency Network", sub: "Member" },
  { icon: CheckCircle, label: "ISO 27001 Certified", sub: "Security" },
];

const TrustBadgesSection = () => {
  return (
    <section className="relative py-8 bg-hero border-b border-hero-foreground/10 overflow-hidden">
      {/* Mobile: static grid */}
      <div className="grid grid-cols-2 gap-3 px-4 md:hidden">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-hero-foreground/10 bg-hero-foreground/[0.04]"
          >
            <badge.icon className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-hero-foreground/90 leading-tight">{badge.label}</p>
              <p className="text-xs text-hero-foreground/40">{badge.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: marquee */}
      <div className="hidden md:block">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-hero to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-hero to-transparent z-10" />
        <div className="flex animate-marquee gap-12 items-center">
          {[...badges, ...badges].map((badge, i) => (
            <div
              key={`${badge.label}-${i}`}
              className="flex items-center gap-3 flex-shrink-0 px-5 py-3 rounded-xl border border-hero-foreground/10 bg-hero-foreground/[0.04]"
            >
              <badge.icon className="w-6 h-6 text-primary flex-shrink-0" />
              <div className="whitespace-nowrap">
                <p className="text-sm font-semibold text-hero-foreground/90 leading-tight">{badge.label}</p>
                <p className="text-sm text-hero-foreground/40">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
