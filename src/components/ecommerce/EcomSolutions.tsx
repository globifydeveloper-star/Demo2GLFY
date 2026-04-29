"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Building2, Store, RefreshCw, Layers, Smartphone, Globe, ArrowRight } from "lucide-react";

const solutions = [
  { icon: ShoppingCart, title: "D2C & B2C Commerce", desc: "AI-personalized direct-to-consumer stores with predictive recommendations, dynamic pricing, loyalty automation, and subscription capabilities.", tags: ["Shopify", "Custom", "AI Personalization"] },
  { icon: Building2, title: "B2B Commerce Platforms", desc: "Intelligent B2B portals with AI-powered pricing tiers, automated bulk ordering, quote workflows, and integrated ERP connectivity.", tags: ["Tiered Pricing", "ERP Integration", "Approval Automation"] },
  { icon: Store, title: "Marketplace & Omnichannel", desc: "Launch on Amazon, Noon, Trendyol, and Namshi with AI inventory sync, automated listing optimization, and unified omnichannel management.", tags: ["Amazon", "Noon", "Trendyol", "Omnichannel"] },
  { icon: RefreshCw, title: "Subscription & Recurring Revenue", desc: "AI-optimized subscription commerce with predictive churn prevention, dynamic billing, and lifetime value maximization strategies.", tags: ["Recurring Revenue", "Churn AI", "LTV Optimization"] },
  { icon: Layers, title: "Headless & Composable Commerce", desc: "API-first, headless architectures that decouple frontend and backend, enabling AI personalization, faster performance, and unlimited scalability.", tags: ["Hydrogen", "Next.js", "Composable"] },
  { icon: Smartphone, title: "Mobile Commerce & PWA", desc: "AI-powered mobile shopping with predictive search, one-tap checkout, push notification intelligence, and app-like progressive web experiences.", tags: ["PWA", "Mobile-First", "AI Search"] },
  { icon: Globe, title: "Cross-Border & Global Expansion", desc: "Multi-currency, multi-language stores with AI-powered localization, automated tax compliance, and global fulfillment orchestration.", tags: ["Multi-Currency", "AI Localization", "Global Fulfillment"] },
];

const EcomSolutions = () => (
  <section className="py-24 bg-hero">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
        <div>
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">AI-Powered Commerce Solutions</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">Revenue-Engineered Commerce<br />Across Every Channel</h2>
        </div>
        <p className="text-hero-foreground/40 max-w-md text-sm leading-relaxed">From D2C to global marketplaces, every solution is powered by AI and engineered for measurable revenue growth and operational efficiency.</p>
      </motion.div>
      <div className="space-y-4">
        {solutions.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            className="group grid md:grid-cols-[1fr_2fr_1fr] gap-6 items-center p-6 md:p-8 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.02] transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-hero-foreground">{s.title}</h3>
            </div>
            <p className="text-sm text-hero-foreground/40 leading-relaxed">{s.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {s.tags.map((t) => (
                <span key={t} className="text-sm px-2.5 py-1 rounded-full bg-hero-foreground/[0.05] text-hero-foreground/40 border border-hero-foreground/[0.06]">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
        <a href="#lead-capture" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">Discuss Your Commerce Strategy <ArrowRight className="w-4 h-4" /></a>
      </motion.div>
    </div>
  </section>
);

export default EcomSolutions;
