"use client";

import { motion } from "framer-motion";
import { Layers, Brain, Handshake, Lightbulb, Shield } from "lucide-react";

const differentiators = [
  { icon: Layers, title: "End-to-End Product Ownership", desc: "From ideation to scaling, strategy, design, engineering, QA, launch, and growth optimization all under one roof." },
  { icon: Brain, title: "Business-First Thinking", desc: "We don't just code features, we solve business problems. Every decision is filtered through ROI and user impact." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "We're invested in your product's success beyond launch. Ongoing optimization, feature development, and strategic consulting." },
  { icon: Lightbulb, title: "Innovation & Research", desc: "Dedicated R&D team exploring emerging tech, AI, AR/VR, IoT, blockchain, to keep your product ahead of the curve." },
  { icon: Shield, title: "Quality, Security & Scalability", desc: "Automated testing, security-first architecture, SOC 2 practices, and infrastructure that scales from 1K to 10M+ users." },
];

const AppDevWhyDifferent = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Why We're Different</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            Not Just Developers,<br />Your Product Growth Partner
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex items-start gap-5 p-6 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDevWhyDifferent;
