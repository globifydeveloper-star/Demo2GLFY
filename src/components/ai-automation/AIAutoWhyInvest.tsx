"use client";

import { motion } from "framer-motion";
import { TrendingDown, Users, Zap, Shield, BarChart3, Trophy } from "lucide-react";

const reasons = [
  { icon: TrendingDown, title: "Cost Savings & Efficiency", desc: "Reduce operational costs by up to 60% by automating repetitive tasks and eliminating manual errors." },
  { icon: Users, title: "Improved Customer Experience", desc: "Deliver instant, personalized support with AI-powered chatbots and intelligent routing." },
  { icon: Zap, title: "Faster Workflows", desc: "Accelerate decision-making with real-time data processing and automated approval workflows." },
  { icon: Shield, title: "Scalable & Future-Ready", desc: "Build automation that grows with your business, from 10 users to 10,000 without breaking." },
  { icon: BarChart3, title: "Data-Driven Insights", desc: "Turn raw data into actionable intelligence with predictive analytics and smart dashboards." },
  { icon: Trophy, title: "Competitive Advantage", desc: "Stay ahead of competitors by leveraging AI to innovate faster and operate leaner." },
];

const AIAutoWhyInvest = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Why AI & Automation</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">
            Why Businesses Invest in AI & Automation
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            AI isn't hype, it's the most practical investment for reducing costs, accelerating growth, and building a future-proof operation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-8 rounded-2xl border border-border hover:border-primary/20 hover:bg-card transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAutoWhyInvest;
