"use client";

import { motion } from "framer-motion";
import { Brain, Workflow, MessageSquare, FileSearch, TrendingUp, Cpu, Link2 } from "lucide-react";

const services = [
  { icon: Brain, title: "AI Strategy & Transformation Consulting", desc: "Assess operational maturity, identify high-ROI automation opportunities, and build a prioritized AI roadmap aligned with business KPIs and revenue goals." },
  { icon: Workflow, title: "Intelligent Business Process Automation", desc: "Automate invoicing, approvals, onboarding, compliance, and reporting — reducing manual work by 80% and operational costs by 60% with intelligent workflows." },
  { icon: MessageSquare, title: "Conversational AI & Commerce Bots", desc: "Deploy GPT-powered chatbots on WhatsApp, web, and social for 24/7 lead qualification, customer support, and conversational commerce at enterprise scale." },
  { icon: FileSearch, title: "Intelligent Document & CV Processing", desc: "AI-powered OCR and NLP to extract, classify, and route data from invoices, contracts, CVs, and compliance documents, eliminating manual data entry entirely." },
  { icon: TrendingUp, title: "Predictive Analytics & Demand Forecasting", desc: "ML-powered demand forecasting, anomaly detection, dynamic pricing, and predictive maintenance models built on your proprietary data for competitive advantage." },
  { icon: Cpu, title: "Custom AI & Machine Learning Models", desc: "Purpose-built ML for recommendation engines, image recognition, sentiment analysis, NLP, and domain-specific challenges that off-the-shelf AI can't solve." },
  { icon: Link2, title: "Microsoft Power Platform & Enterprise Integration", desc: "Power Automate, Power Apps, and Power BI implementations that connect AI seamlessly with your ERP, CRM, HRIS, and legacy systems, no rip-and-replace." },
];

const AIAutoServices = () => {
  return (
    <section className="py-28 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Enterprise AI Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
            AI & Automation Solutions That<br />Deliver Measurable Impact
          </h2>
          <p className="text-hero-foreground/50 max-w-2xl mx-auto">
            From strategy to production deployment, we deliver enterprise-grade AI and automation that cuts costs, accelerates decisions, and creates sustainable competitive advantages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group p-7 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.03] transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-hero-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-hero-foreground/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAutoServices;
