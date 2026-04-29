"use client";

import { motion } from "framer-motion";
import { Link2, CreditCard, Truck, BarChart3, MessageSquare, ShoppingCart } from "lucide-react";

const integrations = [
  { icon: ShoppingCart, title: "E-Commerce Platforms", items: ["Shopify & Shopify Plus", "WooCommerce & Magento", "Custom storefronts", "Marketplace integrations"] },
  { icon: CreditCard, title: "Payment & Banking", items: ["Stripe & PayPal", "Bank feed automation", "Multi-currency processing", "Reconciliation automation"] },
  { icon: Truck, title: "Logistics & Shipping", items: ["Aramex, DHL, FedEx", "Real-time tracking", "Rate comparison", "Label generation"] },
  { icon: BarChart3, title: "Analytics & BI", items: ["Power BI dashboards", "Google Analytics", "Custom reporting", "Data warehousing"] },
  { icon: MessageSquare, title: "CRM & Marketing", items: ["Salesforce & HubSpot", "Email marketing tools", "WhatsApp Business API", "Customer segmentation"] },
  { icon: Link2, title: "APIs & Custom", items: ["REST & GraphQL APIs", "Webhook automation", "Legacy system bridges", "IoT device integration"] },
];

const ERPIntegrations = () => {
  return (
    <section className="py-28 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Integrations</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">Seamless System Integrations</h2>
          <p className="text-hero-foreground/50 max-w-2xl mx-auto">Connect your ERP with every tool in your stack, no data silos, no manual sync.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-7 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-hero-foreground">{item.title}</h3>
              </div>
              <ul className="space-y-2">
                {item.items.map((it) => (
                  <li key={it} className="text-sm text-hero-foreground/40 flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERPIntegrations;
