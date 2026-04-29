"use client";

import { motion } from "framer-motion";
import { Search, Map, Code2, TestTube, Rocket, RefreshCw } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Discovery & Analysis", desc: "Deep-dive into your current processes, pain points, data flows, and business objectives." },
  { icon: Map, step: "02", title: "Solution Design", desc: "Blueprint your ERP architecture, module selection, integration plan, and migration strategy." },
  { icon: Code2, step: "03", title: "Development & Configuration", desc: "Build, customize, and configure modules with iterative demos and stakeholder sign-offs." },
  { icon: TestTube, step: "04", title: "Testing & QA", desc: "Rigorous UAT, performance testing, data validation, and security audits before go-live." },
  { icon: Rocket, step: "05", title: "Deployment & Training", desc: "Phased rollout with hands-on training, documentation, and change management support." },
  { icon: RefreshCw, step: "06", title: "Support & Evolution", desc: "Ongoing maintenance, feature enhancements, performance tuning, and scaling support." },
];

const ERPProcess = () => {
  return (
    <section className="py-28 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Our Approach</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">Implementation Methodology</h2>
          <p className="text-hero-foreground/50 max-w-2xl mx-auto">A proven, low-risk approach to ERP implementation, from discovery to continuous improvement.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative p-7 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 transition-all">
              <span className="text-5xl font-bold text-hero-foreground/[0.04] absolute top-4 right-6">{step.step}</span>
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-hero-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-hero-foreground/40 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERPProcess;
