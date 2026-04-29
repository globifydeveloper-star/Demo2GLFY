"use client";

import { motion } from "framer-motion";
import { Shirt, Gem, Dumbbell, Monitor, Stethoscope, Package, Store } from "lucide-react";

const industries = [
  { icon: Shirt, name: "Fashion & Lifestyle", desc: "D2C fashion, apparel, and lifestyle brands across Shopify, marketplaces, and custom stores." },
  { icon: Gem, name: "Luxury", desc: "Premium commerce experiences for luxury brands with personalized shopping and exclusivity." },
  { icon: Dumbbell, name: "Sports & Fitness", desc: "Performance brands, sports equipment, and fitness product commerce solutions." },
  { icon: Monitor, name: "Electronics", desc: "Consumer electronics, gadgets, and tech product stores with complex variant management." },
  { icon: Stethoscope, name: "Healthcare", desc: "Health and wellness e-commerce with compliance, subscription, and telehealth integration." },
  { icon: Package, name: "FMCG", desc: "Fast-moving consumer goods with marketplace enablement, D2C, and omnichannel strategies." },
  { icon: Store, name: "Marketplaces", desc: "Multi-vendor marketplace development and marketplace enablement across regions." },
];

const EcomIndustries = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Industries We Serve</p>
        <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">Commerce Expertise Across<br />Key Verticals</h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {industries.map((item, i) => (
          <motion.div key={item.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            className="group p-6 rounded-2xl border border-border hover:border-primary/20 bg-card text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-sm font-semibold mb-1.5">{item.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EcomIndustries;
