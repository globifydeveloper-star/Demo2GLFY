"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Zap, ArrowRight } from "lucide-react";

const cases = [
  {
    industry: "Fashion D2C",
    title: "Shopify Plus Revenue Surge",
    desc: "Migrated a fashion brand to Shopify Plus with conversion-optimized UX, resulting in 340% revenue growth in 12 months.",
    metrics: [
      { icon: DollarSign, value: "340%", label: "Revenue Growth" },
      { icon: TrendingUp, value: "65%", label: "Conversion Lift" },
      { icon: Zap, value: "1.2s", label: "Load Time" },
    ],
  },
  {
    industry: "Marketplace",
    title: "Multi-Region Marketplace Launch",
    desc: "Enabled a FMCG brand on Amazon, Noon, and Flipkart, scaling from 1 to 5 regions with centralized inventory management.",
    metrics: [
      { icon: DollarSign, value: "$5M+", label: "Annual GMV" },
      { icon: Users, value: "5", label: "Regions Live" },
      { icon: TrendingUp, value: "45%", label: "Lower OpEx" },
    ],
  },
  {
    industry: "B2B Commerce",
    title: "Enterprise B2B Portal",
    desc: "Built a custom B2B e-commerce portal with tiered pricing, bulk ordering, and ERP integration for a manufacturing giant.",
    metrics: [
      { icon: Users, value: "2,000+", label: "B2B Buyers" },
      { icon: DollarSign, value: "4.8x", label: "ROI Year 1" },
      { icon: Zap, value: "60%", label: "Faster Orders" },
    ],
  },
];

const EcomCaseStudies = () => (
  <section className="py-24 bg-hero">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Case Studies & Outcomes</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">Commerce Results<br />That Speak Volumes</h2>
      </motion.div>
      <div className="grid lg:grid-cols-3 gap-6">
        {cases.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 bg-hero-foreground/[0.02] hover:bg-hero-foreground/[0.04] transition-all duration-300">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary/70 mb-4 block">{s.industry}</span>
            <h3 className="text-lg font-semibold text-hero-foreground mb-3">{s.title}</h3>
            <p className="text-sm text-hero-foreground/35 leading-relaxed mb-8">{s.desc}</p>
            <div className="space-y-4">
              {s.metrics.map((m) => (
                <div key={m.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><m.icon className="w-4 h-4 text-primary" /></div>
                  <div><span className="text-lg font-bold text-primary">{m.value}</span><span className="text-sm text-hero-foreground/40 ml-2">{m.label}</span></div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
        <a href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">View All Projects <ArrowRight className="w-4 h-4" /></a>
      </motion.div>
    </div>
  </section>
);

export default EcomCaseStudies;
