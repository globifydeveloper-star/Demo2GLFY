"use client";

import { motion } from "framer-motion";
import { Database, Package, Users, CreditCard, Truck, RefreshCw } from "lucide-react";

const integrations = [
  { icon: Database, title: "Inventory & Warehouse", desc: "Real-time inventory sync across all channels, warehouse management, and automated replenishment alerts." },
  { icon: Package, title: "OMS & Fulfillment", desc: "Order management systems, multi-warehouse routing, pick-pack-ship automation, and 3PL integrations." },
  { icon: Users, title: "CRM & Marketing Automation", desc: "Customer data platforms, segmented email flows, loyalty programs, and lifecycle marketing integration." },
  { icon: CreditCard, title: "Payment & Logistics", desc: "Multi-gateway payments, BNPL, COD, last-mile delivery APIs, and cross-border payment processing." },
  { icon: Truck, title: "Supply Chain & Logistics", desc: "End-to-end supply chain visibility, vendor management, and logistics optimization across regions." },
  { icon: RefreshCw, title: "Real-Time Data Sync", desc: "Middleware and iPaaS solutions ensuring real-time stock, order, and customer data synchronization." },
];

const EcomERP = () => (
  <section className="py-24 bg-hero">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
        <div>
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">ERP & System Integration</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">Connect Every System,<br />Streamline Operations</h2>
        </div>
        <p className="text-hero-foreground/40 max-w-md text-sm leading-relaxed">Seamless integrations that connect your store with ERP, CRM, logistics, and payment systems for unified commerce operations.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hero-foreground/[0.06] rounded-2xl overflow-hidden">
        {integrations.map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="group bg-hero p-8 hover:bg-hero-foreground/[0.02] transition-all duration-300">
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold text-hero-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-hero-foreground/35 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EcomERP;
