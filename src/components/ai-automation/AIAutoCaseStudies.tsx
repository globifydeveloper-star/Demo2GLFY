"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    tag: "Conversational AI",
    title: "Chatbot for Lead Generation",
    desc: "Deployed AI-powered WhatsApp and website chatbots for a B2B services company, automating lead qualification and routing.",
    metrics: [
      { value: "40%", label: "More Qualified Leads" },
      { value: "60%", label: "Reduced Manual Support" },
      { value: "24/7", label: "Availability" },
    ],
  },
  {
    tag: "HR Automation",
    title: "CV Screening for Enterprise HR",
    desc: "Built an AI resume parsing and candidate matching system for a recruitment firm processing 10,000+ applications monthly.",
    metrics: [
      { value: "50%", label: "Faster Hiring" },
      { value: "80%", label: "Less Manual Screening" },
      { value: "3x", label: "Better Match Quality" },
    ],
  },
  {
    tag: "Process Automation",
    title: "Microsoft Flow for Finance",
    desc: "Implemented Power Automate workflows for a multinational's finance team, automating invoice approvals and reconciliation.",
    metrics: [
      { value: "70%", label: "Faster Processing" },
      { value: "99%", label: "Compliance Rate" },
      { value: "5x", label: "Throughput Increase" },
    ],
  },
  {
    tag: "Predictive AI",
    title: "E-Commerce Demand Forecasting",
    desc: "Deployed ML models for demand prediction and inventory optimization for a fashion e-commerce brand across 3 regions.",
    metrics: [
      { value: "35%", label: "Fewer Stockouts" },
      { value: "25%", label: "Revenue Increase" },
      { value: "40%", label: "Less Overstock" },
    ],
  },
];

const AIAutoCaseStudies = () => {
  return (
    <section className="py-28 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Results</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
            Case Studies & Success Stories
          </h2>
          <p className="text-hero-foreground/50 max-w-2xl mx-auto">
            Real automation projects. Real business outcomes. See how AI transformed operations for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.03] transition-all"
            >
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                {cs.tag}
              </span>
              <h3 className="text-xl font-semibold text-hero-foreground mt-4 mb-3">{cs.title}</h3>
              <p className="text-sm text-hero-foreground/40 leading-relaxed mb-6">{cs.desc}</p>
              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-hero-foreground/[0.06]">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-xl font-bold text-primary">{m.value}</div>
                    <div className="text-sm text-hero-foreground/30 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#lead-capture"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Get Similar Results for Your Business <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIAutoCaseStudies;
