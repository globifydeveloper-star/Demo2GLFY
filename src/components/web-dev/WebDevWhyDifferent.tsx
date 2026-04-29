"use client";

import { motion } from "framer-motion";
import { Layers, BarChart3, Shield, Handshake, MessageSquare } from "lucide-react";

const differentiators = [
  { icon: Layers, title: "End-to-End Capabilities", desc: "Strategy, design, development, QA, launch, and ongoing optimization, all under one roof. No fragmented vendors." },
  { icon: BarChart3, title: "Data-Driven Approach", desc: "Every decision backed by analytics, user research, and conversion data. We don't guess, we measure and optimize." },
  { icon: Shield, title: "Quality & Security First", desc: "ISO 27001 practices, automated testing, code reviews, and regular security audits built into every project lifecycle." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "We're not a hire-and-fire agency. We invest in understanding your business and growing with you over years." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Dedicated project managers, weekly sprint demos, real-time Slack channels, and no surprise invoices, ever." },
];

const WebDevWhyDifferent = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Why We're Different</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
            Not Just a Dev Agency,<br />Your Growth Partner
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
              className="group flex items-start gap-5 p-6 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.02] transition-all duration-300"
            >
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
};

export default WebDevWhyDifferent;
