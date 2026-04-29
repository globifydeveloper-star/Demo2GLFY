"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Zap, ArrowRight } from "lucide-react";

const cases = [
  {
    industry: "E-Commerce",
    title: "DTC Brand Revenue Explosion",
    desc: "Scaled a direct-to-consumer fashion brand from $50K to $500K monthly revenue through full-funnel Meta and Google campaigns.",
    metrics: [
      { icon: DollarSign, value: "10x", label: "Revenue Growth" },
      { icon: TrendingUp, value: "8.5x", label: "ROAS" },
      { icon: Users, value: "45%", label: "Lower CAC" },
    ],
  },
  {
    industry: "B2B SaaS",
    title: "Enterprise Lead Generation Engine",
    desc: "Built a multi-channel B2B lead gen engine combining LinkedIn, Google, and content marketing, 3x qualified pipeline in 6 months.",
    metrics: [
      { icon: Users, value: "3x", label: "Qualified Leads" },
      { icon: DollarSign, value: "60%", label: "Lower CPL" },
      { icon: Zap, value: "6 Months", label: "To Results" },
    ],
  },
  {
    industry: "Healthcare",
    title: "Patient Acquisition at Scale",
    desc: "Drove 200% increase in patient bookings for a multi-location healthcare provider through local SEO, Google Ads, and CRO.",
    metrics: [
      { icon: TrendingUp, value: "200%", label: "More Bookings" },
      { icon: DollarSign, value: "$12", label: "Cost Per Lead" },
      { icon: Zap, value: "#1", label: "Local Rankings" },
    ],
  },
];

const DMCaseStudies = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Case Studies & Results</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
            The Numbers Speak<br />for Themselves
          </h2>
          <p className="text-hero-foreground/40 text-sm max-w-2xl mx-auto">
            Real campaigns. Real results. Here's what data-driven growth marketing looks like in practice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((study, i) => (
            <motion.div key={study.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 bg-hero-foreground/[0.02] hover:bg-hero-foreground/[0.04] transition-all duration-300">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary/70 mb-4 block">{study.industry}</span>
              <h3 className="text-lg font-semibold text-hero-foreground mb-3">{study.title}</h3>
              <p className="text-sm text-hero-foreground/35 leading-relaxed mb-8">{study.desc}</p>
              <div className="space-y-4">
                {study.metrics.map((m) => (
                  <div key={m.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <m.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-primary">{m.value}</span>
                      <span className="text-sm text-hero-foreground/40 ml-2">{m.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DMCaseStudies;
