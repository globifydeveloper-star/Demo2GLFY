"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, Code2, Layout, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "AI-Powered Corporate Platforms",
    desc: "Premium digital platforms with AI-driven personalization, automated lead qualification, and conversion-optimized experiences that generate qualified pipeline.",
    features: ["AI Personalization", "Automated Lead Scoring", "CMS Integration", "Analytics Intelligence", "CRO Built-In"],
  },
  {
    icon: ShoppingCart,
    title: "Commerce & Revenue Platforms",
    desc: "High-converting commerce experiences with AI-powered product recommendations, dynamic pricing, and seamless integration with ERP and fulfillment systems.",
    features: ["Shopify & Headless", "AI Recommendations", "ERP Integration", "Inventory Sync", "Revenue Tracking"],
  },
  {
    icon: Code2,
    title: "Custom Enterprise Applications",
    desc: "Bespoke web applications with AI automation, microservices architecture, and seamless integration with your existing ERP, CRM, and marketing ecosystem.",
    features: ["AI Workflow Automation", "API-First Design", "System Integrations", "Microservices", "Cloud-Native"],
  },
  {
    icon: Layout,
    title: "SaaS & Enterprise Portals",
    desc: "AI-enhanced dashboards, customer portals, and SaaS platforms that deliver real-time intelligence, automated workflows, and data-driven decision-making.",
    features: ["AI Dashboards", "Role-Based Access", "Workflow Automation", "Predictive Analytics", "Mobile-Ready"],
  },
  {
    icon: Layers,
    title: "Headless & Composable Architecture",
    desc: "Future-proof, API-first architectures that enable AI integration, unlimited scalability, and best-of-breed composable technology stacks.",
    features: ["Headless CMS", "JAMstack", "AI-Ready APIs", "CDN Distribution", "Auto-Scaling"],
  },
];

const WebDevServices = () => {
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
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">AI-Integrated Web Solutions</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">
              Digital Platforms Engineered<br />for Revenue & Scale
            </h2>
          </div>
          <p className="text-hero-foreground/40 max-w-md text-sm leading-relaxed">
            From AI-powered corporate platforms to composable commerce, every solution integrates with your ERP, CRM, and marketing stack to drive measurable business outcomes.
          </p>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
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
                {service.features.slice(0, 3).map((f) => (
                  <span key={f} className="text-sm px-2.5 py-1 rounded-full bg-hero-foreground/[0.05] text-hero-foreground/40 border border-hero-foreground/[0.06]">
                    {f}
                  </span>
                ))}
                <span className="text-sm px-2.5 py-1 rounded-full bg-hero-foreground/[0.05] text-hero-foreground/30 border border-hero-foreground/[0.06]">
                  +{service.features.length - 3} more
                </span>
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
          <a href="#lead-capture" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Discuss Your Project <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDevServices;
