"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Heart, Factory, Wifi, Store, Rocket, GraduationCap, Building2 } from "lucide-react";

const industries = [
  { icon: ShoppingCart, name: "E-Commerce", desc: "Scalable storefronts, marketplace integrations, and omnichannel selling" },
  { icon: Heart, name: "Healthcare", desc: "HIPAA-compliant systems, patient portals, and telehealth platforms" },
  { icon: Factory, name: "Manufacturing", desc: "Smart factory automation, supply chain optimization, and IoT integration" },
  { icon: Wifi, name: "Telecom", desc: "Network management, customer self-service portals, and billing automation" },
  { icon: Store, name: "Retail", desc: "POS integration, inventory management, and personalized customer journeys" },
  { icon: Rocket, name: "Startups", desc: "MVP development, rapid scaling, and product-market fit acceleration" },
  { icon: GraduationCap, name: "Education", desc: "LMS platforms, virtual classrooms, and student management systems" },
  { icon: Building2, name: "Property Management", desc: "Tenant portals, maintenance automation, and financial reporting" },
];

const DTIndustries = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Industries We Transform</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">
            Deep Expertise Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Key Sectors</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div key={ind.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 text-center transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <ind.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-hero-foreground mb-1">{ind.name}</h3>
              <p className="text-sm text-hero-foreground/40 leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DTIndustries;
