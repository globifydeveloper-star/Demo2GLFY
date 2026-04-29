"use client";

import { motion } from "framer-motion";
import { DollarSign, BarChart3, Users, Layers, Zap, Eye } from "lucide-react";

const reasons = [
  { icon: DollarSign, title: "Revenue Engineering, Not Design", desc: "Every decision — from platform to UX to AI personalization — is optimized for revenue growth and customer lifetime value." },
  { icon: BarChart3, title: "AI-Powered Commerce Intelligence", desc: "Predictive analytics, dynamic pricing, inventory forecasting, and attribution modeling drive every optimization." },
  { icon: Users, title: "Customer Journey Orchestration", desc: "AI-personalized experiences across D2C, marketplace, and omnichannel — designed for conversion, retention, and LTV." },
  { icon: Layers, title: "Scalable to $100M+ GMV", desc: "Headless, composable architectures that scale from launch to $100M+ without re-platforming or performance degradation." },
  { icon: Zap, title: "AI-Accelerated Time to Market", desc: "Rapid deployment with AI-powered development, pre-built modules, and proven commerce frameworks." },
  { icon: Eye, title: "Real-Time Performance Intelligence", desc: "AI-driven dashboards, live revenue tracking, and automated reporting — see what's working and what to optimize next." },
];

const EcomWhyPartner = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Why Enterprises Choose Globify</p>
        <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">Commerce Growth<br />Engineered by AI</h2>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">We combine deep commerce expertise with AI-driven revenue engineering — building platforms that generate measurable business outcomes, not just traffic.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="group p-8 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-base font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EcomWhyPartner;
