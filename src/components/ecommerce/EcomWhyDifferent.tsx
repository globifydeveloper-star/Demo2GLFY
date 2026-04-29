"use client";

import { motion } from "framer-motion";
import { Layers, Cpu, Handshake, BarChart3, Shield } from "lucide-react";

const differentiators = [
  { icon: Layers, title: "End-to-End Enablement", desc: "Strategy, platform, design, development, marketing, and marketplace operations — all under one roof." },
  { icon: Cpu, title: "Technology + Growth", desc: "We combine engineering excellence with growth marketing — building stores that sell and scale, not just look good." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "We're invested in your commerce success beyond launch — continuous optimization, scaling, and strategic consulting." },
  { icon: BarChart3, title: "Data & Performance", desc: "Every decision backed by analytics, attribution, and conversion data. We optimize for revenue, not vanity metrics." },
  { icon: Shield, title: "Transparency & Security", desc: "Real-time dashboards, weekly reports, PCI compliance, and enterprise-grade security across all platforms." },
];

const EcomWhyDifferent = () => (
  <section className="py-24 bg-hero">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Why We're Different</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">Your Complete Commerce<br />Growth Partner</h2>
      </motion.div>
      <div className="max-w-4xl mx-auto space-y-4">
        {differentiators.map((item, i) => (
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

export default EcomWhyDifferent;
