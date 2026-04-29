"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Cloud, Building2, Store, RefreshCw, Plug, ArrowRight } from "lucide-react";

const services = [
  { icon: Smartphone, title: "AI-Powered Mobile Apps", desc: "Native iOS, Android, and cross-platform apps with AI personalization, predictive analytics, and intelligent automation built in.", tags: ["iOS", "Android", "React Native", "Flutter"] },
  { icon: Globe, title: "Intelligent Web Applications", desc: "AI-enhanced web apps with real-time dashboards, predictive insights, automated workflows, and seamless ERP/CRM integration.", tags: ["React", "Next.js", "AI Integration", "PWA"] },
  { icon: Cloud, title: "SaaS & Platform Engineering", desc: "Multi-tenant, subscription-ready SaaS with AI-driven features, automated scaling, and cloud-native architecture for rapid growth.", tags: ["Multi-Tenant", "AI Features", "Cloud-First"] },
  { icon: Building2, title: "Enterprise AI Applications", desc: "Mission-critical enterprise software with AI decision intelligence, predictive analytics, and integration with ERP and business systems.", tags: ["ERP Integration", "AI Analytics", "Compliance"] },
  { icon: Store, title: "Marketplace & On-Demand Platforms", desc: "AI-powered matching engines, dynamic pricing, real-time logistics, and automated operations for two-sided marketplace models.", tags: ["AI Matching", "Dynamic Pricing", "Real-Time"] },
  { icon: RefreshCw, title: "Legacy Modernization & AI Enablement", desc: "Modernize legacy systems with cloud-native architecture and AI capabilities, without disrupting current operations.", tags: ["Migration", "AI Enablement", "Cloud-Native"] },
  { icon: Plug, title: "API & Ecosystem Integration", desc: "Seamlessly connect AI, ERP, CRM, marketing, and third-party systems with custom APIs and intelligent middleware.", tags: ["REST", "GraphQL", "iPaaS", "AI Middleware"] },
];

const AppDevServices = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">AI-Enabled Product Engineering</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">
              Full-Spectrum AI Product<br />Engineering
            </h2>
          </div>
          <p className="text-hero-foreground/40 max-w-md text-sm leading-relaxed">
            From AI-powered mobile apps to enterprise platforms, we build, launch, and scale digital products that drive automation, revenue, and operational efficiency.
          </p>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group grid md:grid-cols-[1fr_2fr_1fr] gap-6 items-center p-6 md:p-8 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.02] transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-hero-foreground">{service.title}</h3>
              </div>
              <p className="text-sm text-hero-foreground/40 leading-relaxed">{service.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((t) => (
                  <span key={t} className="text-sm px-2.5 py-1 rounded-full bg-hero-foreground/[0.05] text-hero-foreground/40 border border-hero-foreground/[0.06]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="#lead-capture" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Discuss Your Product Idea <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDevServices;
