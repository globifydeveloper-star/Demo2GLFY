"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Smartphone, Cpu, Megaphone, ShoppingCart, Database, ArrowRight } from "lucide-react";
import Link from 'next/link';


const services = [
  {
    icon: Cpu,
    category: "AI & Automation",
    title: "AI & Intelligent Automation",
    href: "/ai-automation",
    items: [
      { name: "Conversational AI & Chatbots", desc: "GPT-powered bots for 24/7 lead qualification, support, and conversational commerce at scale." },
      { name: "Predictive Analytics", desc: "ML-powered demand forecasting, anomaly detection, and decision intelligence built on your data." },
      { name: "Workflow Automation", desc: "Reduce manual work by 80% with intelligent workflow orchestration across departments." },
      { name: "Document & CV Processing", desc: "AI-powered OCR and NLP to extract, classify, and route data, eliminating manual entry." },
    ],
  },
  {
    icon: Globe,
    category: "Web Platforms",
    title: "AI-Ready Web Platforms",
    href: "/web-development",
    items: [
      { name: "Conversion Engines", desc: "AI-personalized platforms that automate lead qualification and drive measurable revenue." },
      { name: "Enterprise Portals", desc: "AI-enhanced dashboards with predictive analytics, automated workflows, and real-time intelligence." },
      { name: "Headless Architecture", desc: "API-first, composable platforms that enable AI integration and unlimited scalability." },
      { name: "ERP & CRM Integration", desc: "Seamlessly connect web platforms with your ERP, CRM, and marketing ecosystem." },
    ],
  },
  {
    icon: Smartphone,
    category: "Product Engineering",
    title: "AI-Enabled Product Engineering",
    href: "/app-development",
    items: [
      { name: "AI-Powered Mobile Apps", desc: "Native and cross-platform apps with AI personalization and predictive analytics built in." },
      { name: "SaaS & Platform Engineering", desc: "Multi-tenant, subscription-ready SaaS with AI-driven features and cloud-native scaling." },
      { name: "Enterprise Applications", desc: "Mission-critical software with AI decision intelligence and ERP integration." },
      { name: "Legacy Modernization", desc: "Modernize legacy systems with cloud-native architecture and AI enablement." },
    ],
  },
  {
    icon: Megaphone,
    category: "Revenue Marketing",
    title: "AI-Driven Revenue Marketing",
    href: "/digital-marketing",
    items: [
      { name: "AI Campaign Optimization", desc: "Predictive bidding, audience intelligence, and automated optimization for 40% lower CAC." },
      { name: "SEO & Content Intelligence", desc: "AI-driven technical SEO and programmatic content strategies for sustainable organic growth." },
      { name: "CRO & Revenue Engineering", desc: "AI-powered A/B testing, personalized funnels, and customer journey optimization." },
      { name: "Attribution Intelligence", desc: "Multi-touch AI attribution that reveals exactly what's driving revenue and what to scale." },
    ],
  },
  {
    icon: ShoppingCart,
    category: "Commerce & Marketplaces",
    title: "E-Commerce & Marketplace Enablement",
    href: "/ecommerce",
    items: [
      { name: "AI-Powered Commerce", desc: "Dynamic pricing, predictive inventory, and AI personalization for D2C and B2B." },
      { name: "Marketplace Enablement", desc: "Launch and scale on Amazon, Noon, Trendyol, and Namshi with AI-optimized listings." },
      { name: "Cross-Border Commerce", desc: "Multi-currency, AI-localized stores with automated tax compliance and global fulfillment." },
      { name: "Subscription & Recurring", desc: "AI-optimized subscription models with predictive churn prevention and LTV maximization." },
    ],
  },
  {
    icon: Database,
    category: "ERP & Operations",
    title: "AI-Powered ERP Solutions",
    href: "/erp-solutions",
    items: [
      { name: "EKASYS", desc: "AI-driven ERP for retail, manufacturing, inventory, and supply chain with predictive analytics." },
      { name: "MEDOC", desc: "Intelligent hospital management with AI diagnostics, patient analytics, and automated billing." },
      { name: "Finance & HR Automation", desc: "AI-powered payroll, cash flow forecasting, employee analytics, and approval automation." },
      { name: "Supply Chain Intelligence", desc: "Predictive demand forecasting, automated procurement, and real-time logistics optimization." },
    ],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="py-12 sm:py-16 section-dark">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">Our Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-semibold max-w-3xl leading-[1.1]">
            <span className="text-section-dark-foreground">AI-Powered Solutions </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">That Drive</span>
            <br />
            <span className="text-section-dark-foreground/40">Measurable Business Outcomes</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="mt-10 sm:mt-14 flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-2">
          {services.map((s, i) => (
            <button
              key={s.category}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                active === i
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]"
                  : "bg-section-dark-foreground/5 text-section-dark-foreground/60 hover:bg-section-dark-foreground/10 border border-section-dark-foreground/10"
              }`}
            >
              <s.icon className="w-4 h-4" />
              {s.category}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {current.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-5 sm:p-7 rounded-2xl bg-section-dark-foreground/[0.03] border border-section-dark-foreground/8 hover:border-primary/40 transition-all hover:bg-section-dark-foreground/[0.06] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-bold text-lg text-section-dark-foreground mb-3 relative">
                  {item.name}
                </h3>
                <p className="text-sm text-section-dark-foreground/50 leading-relaxed mb-5 relative">
                  {item.desc}
                </p>
                <Link href={current.href} className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2.5 transition-all relative">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
