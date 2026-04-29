"use client";

import { motion } from "framer-motion";
import { TrendingUp, Server, Settings } from "lucide-react";

const audiences = [
  {
    icon: TrendingUp,
    role: "CEOs & Founders",
    focus: "Growth, Profitability & Scalability",
    desc: "We help you identify digital revenue streams, reduce operational overhead, and build scalable systems that grow with your ambition, delivering measurable ROI at every stage.",
    outcomes: ["Revenue growth roadmap", "Cost optimization strategy", "Competitive differentiation"],
  },
  {
    icon: Server,
    role: "CTOs & Tech Leaders",
    focus: "Architecture, Stack & Security",
    desc: "We architect modern, secure technology stacks that replace legacy bottlenecks, enabling your team to ship faster, scale reliably, and maintain enterprise-grade security.",
    outcomes: ["Cloud-native architecture", "API-first integration", "Security & compliance"],
  },
  {
    icon: Settings,
    role: "IT Managers & Operations",
    focus: "Process Optimization & Automation",
    desc: "We streamline your workflows, automate repetitive tasks, and integrate disconnected systems, freeing your team to focus on high-value work instead of firefighting.",
    outcomes: ["Workflow automation", "System integration", "Real-time reporting"],
  },
];

const DTAudience = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Who This Is For</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Decision Makers</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <motion.div key={a.role} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <a.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-hero-foreground mb-1">{a.role}</h3>
              <p className="text-sm text-primary font-medium mb-3">{a.focus}</p>
              <p className="text-sm text-hero-foreground/40 leading-relaxed mb-5">{a.desc}</p>
              <ul className="space-y-2">
                {a.outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-sm text-hero-foreground/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DTAudience;
