"use client";

import { motion } from "framer-motion";
import { Lightbulb, DollarSign, Link2, Shield, Handshake, Award } from "lucide-react";

const differentiators = [
  { icon: Lightbulb, title: "Practical AI, Not Hype", desc: "We focus on AI that solves real business problems today, not theoretical moonshots that never ship." },
  { icon: DollarSign, title: "ROI-First Approach", desc: "Every solution is designed to deliver measurable returns, cost savings, time saved, revenue gained." },
  { icon: Link2, title: "Works With Your Systems", desc: "We integrate with your existing ERP, CRM, and tools, no disruptive rip-and-replace migrations." },
  { icon: Shield, title: "Security & Compliance", desc: "Enterprise-grade security, data privacy, and regulatory compliance built into every solution." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "We're not a vendor, we're your AI partner for continuous improvement and strategic growth." },
  { icon: Award, title: "Industry Expertise", desc: "Deep domain knowledge across healthcare, finance, retail, manufacturing, and technology." },
];

const AIAutoWhyDifferent = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Why Globify</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">
            Why We Are Different
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We don't just build AI, we deliver business outcomes. Here's what sets us apart.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-border hover:border-primary/20 hover:bg-card transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAutoWhyDifferent;
