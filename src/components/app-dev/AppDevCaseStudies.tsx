"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, DollarSign, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    industry: "Fintech",
    title: "Digital Banking App Launch",
    desc: "Built a full-featured mobile banking app with biometric auth, real-time transactions, and regulatory compliance, from zero to 100K users in 6 months.",
    metrics: [
      { icon: Users, value: "100K+", label: "Users in 6 Months" },
      { icon: DollarSign, value: "5.2x", label: "ROI in Year 1" },
      { icon: Zap, value: "99.99%", label: "Uptime" },
    ],
  },
  {
    industry: "Healthcare",
    title: "Patient Engagement Platform",
    desc: "Cross-platform app connecting patients with providers via telemedicine, appointment scheduling, and health tracking, HIPAA compliant.",
    metrics: [
      { icon: Users, value: "200K", label: "Active Patients" },
      { icon: TrendingUp, value: "78%", label: "Engagement Rate" },
      { icon: Zap, value: "3 Months", label: "Time to Launch" },
    ],
  },
  {
    industry: "E-Commerce",
    title: "On-Demand Marketplace App",
    desc: "Two-sided marketplace app with real-time matching, in-app payments, and logistics tracking, scaling to 15 cities.",
    metrics: [
      { icon: DollarSign, value: "$3M+", label: "Monthly GMV" },
      { icon: Users, value: "85%", label: "Retention Rate" },
      { icon: TrendingUp, value: "15", label: "Cities Live" },
    ],
  },
];

const AppDevCaseStudies = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Case Studies & Outcomes</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            Products We've Built,<br />Results We've Delivered
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            We measure success in user growth, revenue impact, and operational efficiency, not lines of code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300"
            >
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary/70 mb-4 block">{study.industry}</span>
              <h3 className="text-lg font-semibold mb-3">{study.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">{study.desc}</p>
              <div className="space-y-4">
                {study.metrics.map((m) => (
                  <div key={m.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <m.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-primary">{m.value}</span>
                      <span className="text-sm text-muted-foreground ml-2">{m.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            View All Projects <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDevCaseStudies;
