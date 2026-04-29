"use client";

import { motion } from "framer-motion";
import { Lightbulb, Cog, Cloud, Monitor, Bot, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "AI Strategy & Digital Maturity Assessment",
    desc: "Comprehensive digital maturity audits, AI readiness assessments, and ROI-driven transformation roadmaps that align technology investments with measurable business outcomes.",
    tags: ["Digital Maturity Audit", "AI Readiness", "ROI Roadmap"],
  },
  {
    icon: Cog,
    title: "AI-Powered ERP & Business Automation",
    desc: "Unify finance, operations, HR, and supply chain with intelligent ERP solutions, including EKASYS, MEDOC, and custom AI-driven platforms that automate decision-making.",
    tags: ["EKASYS", "MEDOC", "Predictive Analytics"],
  },
  {
    icon: Cloud,
    title: "Cloud Migration & Scalable Infrastructure",
    desc: "Migrate to cloud-native architectures with AI-optimized performance, auto-scaling, and infrastructure that grows from startup to enterprise without re-platforming.",
    tags: ["AWS · Azure · GCP", "Auto-Scaling", "Cost Optimization"],
  },
  {
    icon: Monitor,
    title: "Platform Modernization & AI Enablement",
    desc: "Replace legacy applications with AI-enabled enterprise platforms using microservices, API-first architecture, and intelligent automation layers.",
    tags: ["Legacy Migration", "API-First", "AI Integration"],
  },
  {
    icon: Bot,
    title: "Conversational AI & Intelligent Automation",
    desc: "Deploy enterprise chatbots, workflow automation via Microsoft Power Platform, and predictive analytics that transform manual processes into intelligent systems.",
    tags: ["GPT Chatbots", "Power Platform", "Process Mining"],
  },
  {
    icon: BarChart3,
    title: "Data Intelligence & AI Analytics",
    desc: "Build AI-powered business intelligence pipelines, predictive dashboards, and automated decision frameworks that turn raw data into strategic competitive advantage.",
    tags: ["Predictive BI", "Real-Time Data", "Decision Intelligence"],
  },
];

const DTServices = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">AI-First Transformation Services</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">
              End-to-End AI-Powered<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Digital Enablement</span>
            </h2>
          </div>
          <p className="text-hero-foreground/40 max-w-md text-sm leading-relaxed">
            From AI strategy to full-scale implementation, every capability you need to automate, modernize, and transform your enterprise into a data-driven, AI-powered organization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="p-8 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-hero-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-hero-foreground/40 leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="text-sm px-2.5 py-1 rounded-full bg-hero-foreground/[0.05] text-hero-foreground/40 border border-hero-foreground/[0.06]">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="#lead-capture" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Get Your Custom Roadmap <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DTServices;
