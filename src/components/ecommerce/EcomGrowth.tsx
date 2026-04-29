"use client";

import { motion } from "framer-motion";
import { Target, Search, RefreshCw, BarChart3, DollarSign } from "lucide-react";

const growthItems = [
  { icon: Target, title: "Paid & Organic Growth", desc: "Integrated Google Shopping, Meta Ads, and marketplace advertising combined with SEO for compounding returns." },
  { icon: Search, title: "SEO & Performance Marketing", desc: "E-commerce SEO, product feed optimization, and performance campaigns that drive qualified traffic at scale." },
  { icon: RefreshCw, title: "Retention & Lifecycle", desc: "Email flows, SMS campaigns, loyalty programs, and win-back strategies that maximize customer lifetime value." },
  { icon: BarChart3, title: "Customer Analytics", desc: "Cohort analysis, RFM segmentation, predictive analytics, and real-time dashboards for smarter decisions." },
  { icon: DollarSign, title: "LTV & CAC Optimization", desc: "Strategies that systematically increase lifetime value while reducing customer acquisition costs across all channels." },
];

const EcomGrowth = () => (
  <section className="py-24 bg-hero">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Digital Growth & Performance</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">Growth That<br />Compounds Over Time</h2>
      </motion.div>
      <div className="max-w-4xl mx-auto space-y-4">
        {growthItems.map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="group flex items-start gap-5 p-6 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.02] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-hero-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-hero-foreground/40 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EcomGrowth;
