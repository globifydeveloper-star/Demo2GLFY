"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, Package, BarChart3, Megaphone, Truck, ArrowRight } from "lucide-react";

const regions = [
  { region: "MENA & Global", marketplaces: ["Amazon", "Noon", "Namshi", "Trendyol", "Other regional platforms"] },
  { region: "India", marketplaces: ["Amazon India", "Flipkart", "Myntra", "Ajio", "Nykaa", "Tata Cliq", "Meesho"] },
  { region: "Southeast Asia", marketplaces: ["Shopee", "Lazada", "Zalora", "Tokopedia", "Bukalapak"] },
];

const capabilities = [
  { icon: ShoppingCart, title: "End-to-End Onboarding", desc: "Complete marketplace setup including store creation, catalog upload, content optimization, and compliance configuration." },
  { icon: Package, title: "Catalog & Inventory Sync", desc: "Bulk product listing, real-time stock synchronization, and automated inventory planning across all channels." },
  { icon: BarChart3, title: "Analytics & Performance", desc: "Marketplace analytics, demand forecasting, pricing optimization, and performance tracking dashboards." },
  { icon: Megaphone, title: "Advertising & Campaigns", desc: "Sponsored ads, deal management, promotional strategies, and marketplace-specific campaign optimization." },
  { icon: Truck, title: "Fulfillment & Logistics", desc: "Order management, fulfillment coordination, cross-border logistics, and tax compliance enablement." },
  { icon: Globe, title: "Cross-Border Expansion", desc: "Multi-region selling, currency management, localized content, and regional compliance for global scale." },
];

const EcomMarketplace = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Marketplace Enablement</p>
        <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">Scale Across Global<br />Marketplaces</h2>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">We enable brands to launch, optimize, and scale on the world's largest marketplaces, across MENA, India, Southeast Asia, and beyond.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {regions.map((r, i) => (
          <motion.div key={r.region} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="p-7 rounded-2xl border border-border bg-card">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-5">{r.region}</p>
            <div className="flex flex-wrap gap-2">
              {r.marketplaces.map((m) => (
                <span key={m} className="text-sm px-3 py-1.5 rounded-full bg-muted/10 border border-border text-foreground/70 font-medium">{m}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="group p-7 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300">
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
        <a href="#lead-capture" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
          Expand to New Marketplaces <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default EcomMarketplace;
