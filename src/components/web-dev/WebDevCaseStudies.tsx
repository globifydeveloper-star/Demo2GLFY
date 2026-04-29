"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Users, DollarSign, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    industry: "E-Commerce",
    title: "Fashion Retailer Revenue Surge",
    desc: "Redesigned and rebuilt a legacy Shopify store with conversion-optimized UX, resulting in dramatic revenue growth.",
    metrics: [
      { icon: TrendingUp, value: "340%", label: "Revenue Growth" },
      { icon: Zap, value: "1.2s", label: "Load Time" },
      { icon: Users, value: "65%", label: "Conversion Lift" },
    ],
  },
  {
    industry: "Healthcare",
    title: "Telemedicine Platform Launch",
    desc: "Built a HIPAA-compliant telemedicine platform with video consultations, patient portals, and EHR integration.",
    metrics: [
      { icon: Users, value: "50K+", label: "Monthly Users" },
      { icon: DollarSign, value: "4.2x", label: "ROI in Year 1" },
      { icon: Zap, value: "99.99%", label: "Uptime" },
    ],
  },
  {
    industry: "Fintech",
    title: "Payment Processing Dashboard",
    desc: "Developed a real-time analytics dashboard for a fintech startup, processing millions in transactions daily.",
    metrics: [
      { icon: DollarSign, value: "$2M+", label: "Daily Volume" },
      { icon: Zap, value: "< 100ms", label: "Response Time" },
      { icon: TrendingUp, value: "85%", label: "Faster Reporting" },
    ],
  },
];

const WebDevCaseStudies = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Case Studies & Results</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
            Real Results for<br />Real Businesses
          </h2>
          <p className="text-hero-foreground/40 text-sm max-w-2xl mx-auto">
            We measure success in revenue, conversions, and growth, not vanity metrics. Here's what our work delivers.
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
              className="group p-8 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 bg-hero-foreground/[0.02] hover:bg-hero-foreground/[0.04] transition-all duration-300"
            >
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDevCaseStudies;
