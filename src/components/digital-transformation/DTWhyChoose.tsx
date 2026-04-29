"use client";

import { motion } from "framer-motion";
import { Target, Zap, Shield, Users, Globe, Award } from "lucide-react";

const differentiators = [
  { icon: Target, title: "360° Digital Enablement", desc: "Strategy, technology, marketing, and operations, all under one roof for seamless transformation." },
  { icon: Zap, title: "Agile or Waterfall Delivery", desc: "We adapt to your pace. Choose the methodology that fits your team, timeline, and risk appetite." },
  { icon: Shield, title: "Quality, Security & Transparency", desc: "Every project follows strict security protocols, quality gates, and transparent communication at every milestone." },
  { icon: Users, title: "End-to-End Ownership", desc: "We don't just consult, we design, build, deploy, and support. Full accountability from start to scale." },
  { icon: Globe, title: "Industry Expertise", desc: "Deep domain knowledge across e-commerce, healthcare, manufacturing, fintech, and more." },
  { icon: Award, title: "ROI-Focused Solutions", desc: "Every recommendation we make is tied to measurable business impact, not vanity metrics." },
];

const DTWhyChoose = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Why Globify</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1]">
            Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Transformation Partner</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentiators.map((d, i) => (
            <motion.div key={d.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="flex gap-4 p-6 rounded-2xl border border-border hover:border-primary/30 bg-card transition-all group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <d.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DTWhyChoose;
