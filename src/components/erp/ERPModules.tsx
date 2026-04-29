"use client";

import { motion } from "framer-motion";
import { DollarSign, Package, Users, ShoppingCart, Factory, BarChart3, Link2 } from "lucide-react";

const modules = [
  { icon: DollarSign, title: "Finance & Predictive Accounting", desc: "AI-powered general ledger, AP/AR automation, cash flow forecasting, multi-currency management, and real-time financial intelligence." },
  { icon: Package, title: "Smart Inventory & Warehouse", desc: "Predictive stock management, AI demand forecasting, automated reorder points, barcode/RFID scanning, and multi-location optimization." },
  { icon: Users, title: "HR, Payroll & Talent Intelligence", desc: "AI-assisted recruitment, automated payroll, performance analytics, employee lifecycle management, and self-service portals." },
  { icon: ShoppingCart, title: "Sales, CRM & Revenue Analytics", desc: "AI lead scoring, automated pipeline management, quotation workflows, customer segmentation, and revenue forecasting." },
  { icon: Factory, title: "Manufacturing & Production AI", desc: "AI-optimized production planning, predictive quality control, BOM management, shop floor IoT tracking, and capacity optimization." },
  { icon: BarChart3, title: "Business Intelligence & AI Analytics", desc: "Custom AI dashboards, KPI prediction, anomaly detection, automated reporting, and decision intelligence across all departments." },
  { icon: Link2, title: "Integration & Automation Hub", desc: "Seamlessly connect with e-commerce (Shopify, Amazon, Noon), payment gateways, logistics, CRM, and marketing platforms via APIs." },
];

const ERPModules = () => {
  return (
    <section className="py-28 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">AI-Enhanced Modules</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">Intelligent ERP Modules Built for Scale</h2>
          <p className="text-hero-foreground/50 max-w-2xl mx-auto">Every module is infused with AI and automation, unified, integrated, and engineered to transform operations into a competitive advantage.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group p-7 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.03] transition-all">
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

export default ERPModules;
