"use client";

import { motion } from "framer-motion";
import { Lightbulb, DollarSign, Link2, Shield, Handshake, Award } from "lucide-react";

const diffs = [
  { icon: Lightbulb, title: "Business-First Thinking", desc: "We don't just implement software, we engineer solutions around your actual business processes and goals." },
  { icon: DollarSign, title: "ROI-Driven Delivery", desc: "Every module and feature is justified by measurable business impact, no bloatware, no unnecessary complexity." },
  { icon: Link2, title: "Seamless Integration", desc: "We connect your ERP with existing tools, e-commerce, CRM, payments, logistics, for a truly unified system." },
  { icon: Shield, title: "Security & Compliance", desc: "Enterprise-grade security, data encryption, role-based access, and regulatory compliance built into every layer." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "From implementation to evolution, we support, enhance, and scale your ERP as your business grows." },
  { icon: Award, title: "Domain Expertise", desc: "Deep industry knowledge in manufacturing, retail, healthcare, logistics, and education — not generic consultants." },
];

const ERPWhyDifferent = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Why Globify</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">Why We Are Different</h2>
          <p className="text-muted max-w-2xl mx-auto">We don't just deploy ERP, we transform how your business operates.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diffs.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group flex items-start gap-4 p-6 rounded-2xl border border-border hover:border-primary/20 hover:bg-card transition-all">
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

export default ERPWhyDifferent;
