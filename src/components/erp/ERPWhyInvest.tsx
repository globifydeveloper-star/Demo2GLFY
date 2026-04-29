"use client";

import { motion } from "framer-motion";
import { Eye, TrendingUp, Zap, Shield, Users, DollarSign } from "lucide-react";

const reasons = [
  { icon: Eye, title: "AI-Powered Decision Intelligence", desc: "Real-time dashboards with predictive analytics — see what's happening now and forecast what's next across every department." },
  { icon: TrendingUp, title: "Scalable Growth Architecture", desc: "An ERP that evolves with your business — add AI modules, new markets, and users without re-platforming or downtime." },
  { icon: Zap, title: "Automated Workflow Orchestration", desc: "Eliminate 80% of manual data entry, approvals, and reporting with AI-driven workflow automation across operations." },
  { icon: Shield, title: "Enterprise Security & Compliance", desc: "Built-in audit trails, role-based access, GDPR/VAT compliance, and ISO-certified security for regulated industries." },
  { icon: Users, title: "Workforce Productivity Amplification", desc: "Empower teams with AI-assisted insights, self-service dashboards, mobile access, and intelligent approval routing." },
  { icon: DollarSign, title: "Measurable Cost Optimization", desc: "Reduce IT overhead by 40%, eliminate redundant processes, and optimize resource allocation with AI-driven cost analytics." },
];

const ERPWhyInvest = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Why AI-Powered ERP</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">Why Forward-Thinking Enterprises<br />Invest in Intelligent ERP</h2>
          <p className="text-muted max-w-2xl mx-auto">The right ERP isn't just software, it's the AI-powered operating system that transforms your entire business into a data-driven, automated enterprise.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group p-8 rounded-2xl border border-border hover:border-primary/20 hover:bg-card transition-all">
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

export default ERPWhyInvest;
