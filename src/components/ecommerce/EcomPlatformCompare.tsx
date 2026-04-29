"use client";

import { motion } from "framer-motion";

const criteria = [
  { feature: "Best For", shopify: "D2C, SMBs, fast-scaling brands", magento: "Enterprise, complex catalogs, B2B", custom: "Unique models, full control", winner: "tie" },
  { feature: "Speed to Launch", shopify: "Days to weeks, fastest option", magento: "Months, complex setup required", custom: "Months, built from scratch", winner: "shopify" },
  { feature: "Scalability", shopify: "Shopify Plus scales to 8 figures", magento: "Unlimited with proper infrastructure", custom: "Unlimited, fully controlled", winner: "tie" },
  { feature: "Customization", shopify: "Theme + app ecosystem, Liquid", magento: "Highly customizable, PHP-based", custom: "100% bespoke, no limitations", winner: "custom" },
  { feature: "Total Cost", shopify: "Predictable SaaS pricing, low upfront", magento: "High upfront, ongoing hosting costs", custom: "Highest upfront, optimized long-term", winner: "shopify" },
  { feature: "Performance", shopify: "Managed CDN, auto-optimized", magento: "Requires optimization tuning", custom: "Fully optimized to your needs", winner: "shopify" },
  { feature: "B2B Capabilities", shopify: "Shopify Plus B2B features", magento: "Industry-leading B2B suite", custom: "Built to exact B2B requirements", winner: "magento" },
  { feature: "Long-Term Growth", shopify: "Ecosystem + Hydrogen for headless", magento: "Adobe Commerce cloud", custom: "Full ownership and flexibility", winner: "tie" },
];

const EcomPlatformCompare = () => (
  <section className="py-24 bg-hero">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Platform Comparison</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">Shopify vs Magento vs Custom:<br />Which Platform Fits?</h2>
        <p className="text-hero-foreground/40 text-sm max-w-2xl mx-auto">The right platform depends on your business model, scale, and growth goals. Here's an honest comparison to help you decide.</p>
      </motion.div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] gap-4 pb-4 border-b border-hero-foreground/10 mb-2">
          <div className="text-sm font-bold tracking-[0.2em] uppercase text-hero-foreground/30">Feature</div>
          <div className="text-center"><span className="text-sm font-bold text-primary">Shopify</span></div>
          <div className="text-center"><span className="text-sm font-bold text-hero-foreground/80">Magento</span></div>
          <div className="text-center"><span className="text-sm font-bold text-hero-foreground/80">Custom</span></div>
        </div>
        {criteria.map((row, i) => (
          <motion.div key={row.feature} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="grid grid-cols-[1.2fr_1fr_1fr_1fr] gap-4 py-5 border-b border-hero-foreground/[0.05] items-start">
            <div className="text-sm font-semibold text-hero-foreground">{row.feature}</div>
            <div className={`text-sm leading-relaxed ${row.winner === "shopify" || row.winner === "tie" ? "text-primary/80" : "text-hero-foreground/35"}`}>{row.shopify}</div>
            <div className={`text-sm leading-relaxed ${row.winner === "magento" || row.winner === "tie" ? "text-primary/80" : "text-hero-foreground/35"}`}>{row.magento}</div>
            <div className={`text-sm leading-relaxed ${row.winner === "custom" || row.winner === "tie" ? "text-primary/80" : "text-hero-foreground/35"}`}>{row.custom}</div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
        <div className="inline-block p-8 rounded-2xl border border-hero-foreground/[0.06] bg-hero-foreground/[0.02]">
          <p className="text-hero-foreground/60 text-sm mb-4 max-w-lg">Not sure which platform is right? Our commerce consultants will analyze your requirements and recommend the optimal solution.</p>
          <a href="#lead-capture" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">Get a Platform Recommendation</a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EcomPlatformCompare;
