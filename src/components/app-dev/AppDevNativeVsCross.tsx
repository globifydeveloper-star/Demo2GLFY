"use client";

import { motion } from "framer-motion";

const criteria = [
  { feature: "Performance", native: "Maximum, full hardware access, 60fps animations", cross: "Near-native, 95%+ performance with shared codebase", winner: "native" },
  { feature: "Development Cost", native: "Higher, separate iOS & Android codebases", cross: "40-60% lower, single codebase, dual platform", winner: "cross" },
  { feature: "Speed to Market", native: "Slower, parallel teams needed", cross: "30-40% faster, one team, both platforms", winner: "cross" },
  { feature: "Scalability", native: "Excellent, platform-specific optimizations", cross: "Excellent, with proper architecture patterns", winner: "tie" },
  { feature: "Complex Animations", native: "Best, direct access to platform APIs", cross: "Good, improving rapidly with Flutter/RN Reanimated", winner: "native" },
  { feature: "Hardware Access", native: "Full, camera, sensors, Bluetooth, AR/VR", cross: "Most features, some edge cases need native bridges", winner: "native" },
  { feature: "Maintenance", native: "Higher, two codebases to update", cross: "Simpler, single codebase updates both platforms", winner: "cross" },
  { feature: "Best For", native: "Gaming, AR/VR, performance-critical apps", cross: "Business apps, marketplaces, social, e-commerce", winner: "tie" },
];

const AppDevNativeVsCross = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Platform Strategy</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
            Native vs Cross-Platform:<br />The Right Choice for Your Product
          </h2>
          <p className="text-hero-foreground/40 text-sm max-w-2xl mx-auto">
            Both approaches have clear advantages. The best choice depends on your product requirements, budget, timeline, and long-term vision. Here's an honest breakdown.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-4 pb-4 border-b border-hero-foreground/10 mb-2">
            <div className="text-sm font-bold tracking-[0.2em] uppercase text-hero-foreground/30">Criteria</div>
            <div className="text-center"><span className="text-sm font-bold text-primary">Native</span></div>
            <div className="text-center"><span className="text-sm font-bold text-hero-foreground/80">Cross-Platform</span></div>
          </div>

          {criteria.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-[1.5fr_1fr_1fr] gap-4 py-5 border-b border-hero-foreground/[0.05] items-start"
            >
              <div className="text-sm font-semibold text-hero-foreground">{row.feature}</div>
              <div className={`text-sm leading-relaxed ${row.winner === "native" || row.winner === "tie" ? "text-primary/80" : "text-hero-foreground/35"}`}>
                {row.native}
              </div>
              <div className={`text-sm leading-relaxed ${row.winner === "cross" || row.winner === "tie" ? "text-primary/80" : "text-hero-foreground/35"}`}>
                {row.cross}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl border border-hero-foreground/[0.06] bg-hero-foreground/[0.02]">
            <p className="text-hero-foreground/60 text-sm mb-4 max-w-lg">
              Not sure which approach fits your product? Our architects will analyze your requirements and recommend the optimal strategy.
            </p>
            <a href="#lead-capture" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
              Get a Platform Recommendation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDevNativeVsCross;
