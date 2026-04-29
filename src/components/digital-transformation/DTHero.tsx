"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Award, Star } from "lucide-react";

const stats = [
  { value: "300+", label: "Transformations Delivered" },
  { value: "10+", label: "Countries Served" },
  { value: "45%", label: "Avg Efficiency Gain" },
  { value: "98%", label: "Client Satisfaction" },
];

const trustBadges = [
  { icon: Shield, label: "ISO 9001 Certified" },
  { icon: Award, label: "Google, Shopify & Meta Partner" },
  { icon: Star, label: "Clutch Top Agency" },
];

const DTHero = () => {
  return (
    <>
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--hero-foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-5 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-5">
                AI-First Digital Transformation
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Transform Your Business Into an{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                  AI-Powered Enterprise
                </span>
              </h1>
              <p className="text-hero-foreground/50 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto">
                End-to-end digital transformation that goes beyond technology, we re-engineer operations, automate decision-making, and build data-driven growth engines that deliver measurable ROI for enterprises across the UAE and globally.
              </p>

              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
                {["Reduce costs by 40% through automation", "AI-driven real-time decision intelligence", "Unified ERP · CRM · Commerce ecosystems", "Scalable cloud-native architecture"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-hero-foreground/60">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                  Get Your Transformation Roadmap <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 border border-hero-foreground/20 text-hero-foreground/70 px-8 py-4 rounded-full font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all">
                  Book a Free Digital Maturity Audit
                </a>
              </div>

              <div className="flex flex-wrap gap-6 justify-center">
                {trustBadges.map((badge) => (
                  <span key={badge.label} className="flex items-center gap-2 text-sm text-hero-foreground/40">
                    <badge.icon className="w-4 h-4 text-primary" />
                    {badge.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       <section className="bg-section-dark border-y border-section-dark-foreground/[0.06] py-6 sm:py-8">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-section-dark-foreground/40 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DTHero;
