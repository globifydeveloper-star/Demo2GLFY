"use client";

import { motion } from "framer-motion";
import { Cpu, Handshake, RefreshCw, MessageSquare, Layers } from "lucide-react";

const differentiators = [
  { icon: Cpu, title: "Technology-Driven Marketing", desc: "We combine marketing expertise with engineering, custom tracking, automation, AI-powered optimization, and data pipelines that most agencies can't build." },
  { icon: Handshake, title: "Growth Partnership, Not Agency", desc: "We embed into your team as a strategic growth partner, aligned with your revenue goals, not just campaign metrics." },
  { icon: RefreshCw, title: "Continuous Optimization", desc: "Weekly testing cycles, creative refreshes, audience refinement, and bid optimization, we never set it and forget it." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Real-time dashboards, weekly strategy calls, and detailed monthly reports. You always know what's happening and why." },
  { icon: Layers, title: "Integrated Digital Strategy", desc: "SEO, paid, social, content, and CRO working as one cohesive system, not siloed channels competing for credit." },
];

const DMWhyDifferent = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Why We're Different</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            Not Just an Agency,<br />Your Revenue Growth Partner
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {differentiators.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group flex items-start gap-5 p-6 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300">
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

export default DMWhyDifferent;
