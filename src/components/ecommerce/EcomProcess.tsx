"use client";

import { motion } from "framer-motion";
import { Search, Layers, Palette, Code2, TestTube, RefreshCw } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Discovery & Growth Strategy", desc: "Market analysis, competitor audit, customer research, and revenue goal alignment to define the optimal commerce strategy." },
  { icon: Layers, step: "02", title: "Platform Selection", desc: "Data-driven platform recommendation based on your business model, scale, budget, and long-term growth trajectory." },
  { icon: Palette, step: "03", title: "UX & Journey Mapping", desc: "Conversion-optimized wireframes, user flows, and high-fidelity designs validated with stakeholder and user feedback." },
  { icon: Code2, step: "04", title: "Development & Integration", desc: "Agile sprints with CI/CD, ERP/CRM integrations, payment gateways, and third-party system connections." },
  { icon: TestTube, step: "05", title: "Testing & Optimization", desc: "Cross-device testing, performance benchmarking, security audits, and conversion optimization before launch." },
  { icon: RefreshCw, step: "06", title: "Continuous Growth", desc: "Post-launch A/B testing, CRO iterations, feature enhancements, and scaling optimization for sustained growth." },
];

const EcomProcess = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Our Process</p>
        <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">A Proven Commerce<br />Growth Methodology</h2>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">Six phases that take your store from strategy to scale, with transparency, quality gates, and measurable milestones.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((item, i) => (
          <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group">
            <div className="p-7 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">{item.step}</span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EcomProcess;
