"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const criteria = [
  { feature: "Speed to Launch", shopify: "Days to weeks, pre-built infrastructure", wordpress: "Weeks to months, requires hosting, plugins, theme setup", winner: "shopify" },
  { feature: "Scalability", shopify: "Auto-scales with Shopify Plus for enterprise", wordpress: "Requires managed hosting and optimization tuning", winner: "shopify" },
  { feature: "Flexibility & Customization", shopify: "App ecosystem, Liquid templating, headless via Hydrogen", wordpress: "Unlimited, full code access, 60,000+ plugins", winner: "wordpress" },
  { feature: "SEO Capabilities", shopify: "Good built-in SEO, limited URL control", wordpress: "Industry-leading SEO with Yoast, Rank Math, full control", winner: "wordpress" },
  { feature: "Cost-Effectiveness", shopify: "Predictable monthly pricing, lower upfront", wordpress: "Lower long-term costs, higher initial setup", winner: "tie" },
  { feature: "Content Marketing", shopify: "Basic blogging, limited content features", wordpress: "Best-in-class CMS, ideal for content-driven strategies", winner: "wordpress" },
  { feature: "Security & Maintenance", shopify: "Fully managed, PCI-compliant out of the box", wordpress: "Requires regular updates, security plugins, SSL setup", winner: "shopify" },
  { feature: "Integrations", shopify: "8,000+ apps in Shopify App Store", wordpress: "60,000+ plugins, unlimited API integrations", winner: "wordpress" },
];

const WebDevShopifyVsWordPress = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Platform Comparison</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
            Shopify vs WordPress:<br />Which One is Right for You?
          </h2>
          <p className="text-hero-foreground/40 text-sm max-w-2xl mx-auto">
            Both are powerful platforms. The right choice depends on your business model, growth goals, and content strategy. Here's an honest comparison to help you decide.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-4 pb-4 border-b border-hero-foreground/10 mb-2">
            <div className="text-sm font-bold tracking-[0.2em] uppercase text-hero-foreground/30">Feature</div>
            <div className="text-center">
              <span className="text-sm font-bold text-primary">Shopify</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-bold text-hero-foreground/80">WordPress</span>
            </div>
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
              <div className={`text-sm leading-relaxed ${row.winner === "shopify" || row.winner === "tie" ? "text-primary/80" : "text-hero-foreground/35"}`}>
                {row.shopify}
              </div>
              <div className={`text-sm leading-relaxed ${row.winner === "wordpress" || row.winner === "tie" ? "text-primary/80" : "text-hero-foreground/35"}`}>
                {row.wordpress}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-2xl border border-hero-foreground/[0.06] bg-hero-foreground/[0.02]">
            <p className="text-hero-foreground/60 text-sm mb-4 max-w-lg">
              Not sure which platform fits your business? Our consultants will analyze your requirements and recommend the optimal solution.
            </p>
            <a
              href="#lead-capture"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all"
            >
              Get a Platform Recommendation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDevShopifyVsWordPress;
