"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Stethoscope, Monitor, GraduationCap, Factory, Rocket, Store } from "lucide-react";

const industries = [
  { icon: ShoppingCart, name: "E-Commerce", desc: "DTC, marketplace, and omnichannel growth strategies for online retailers." },
  { icon: Stethoscope, name: "Healthcare", desc: "HIPAA-aware marketing for health-tech, clinics, and pharmaceutical brands." },
  { icon: Monitor, name: "IT & SaaS", desc: "B2B lead generation, PLG strategies, and demand gen for tech companies." },
  { icon: GraduationCap, name: "Education", desc: "Student acquisition, brand awareness, and enrollment marketing for EdTech." },
  { icon: Factory, name: "Manufacturing", desc: "Industrial marketing, trade show amplification, and B2B lead funnels." },
  { icon: Rocket, name: "Startups", desc: "Growth hacking, MVP marketing, and investor-ready traction strategies." },
  { icon: Store, name: "Marketplaces", desc: "Two-sided marketplace growth, supply and demand balancing, and GMV scaling." },
];

const DMIndustries = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Industries We Serve</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            Growth Strategies Tailored<br />to Your Industry
          </h2>
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
};

export default DMIndustries;
