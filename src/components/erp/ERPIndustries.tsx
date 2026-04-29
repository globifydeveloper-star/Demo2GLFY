"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Stethoscope, ShoppingCart, Factory, GraduationCap, Building, Truck } from "lucide-react";

const industries = [
  { icon: Factory, title: "Manufacturing", desc: "Production planning, BOM, quality control, and shop floor management for discrete and process manufacturing." },
  { icon: ShoppingCart, title: "Retail & E-Commerce", desc: "POS integration, multi-channel inventory, customer loyalty, and omnichannel order management." },
  { icon: Stethoscope, title: "Healthcare", desc: "Patient management, pharmacy, lab integration, billing, and HIPAA-compliant data handling." },
  { icon: Truck, title: "Logistics & Distribution", desc: "Fleet management, route optimization, warehouse operations, and real-time shipment tracking." },
  { icon: GraduationCap, title: "Education", desc: "Student lifecycle, fee management, attendance, academic planning, and campus operations." },
  { icon: Building, title: "Real Estate & Construction", desc: "Project costing, contract management, vendor tracking, and site progress monitoring." },
];

const ERPIndustries = () => {
  return (
    <section className="py-28 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Industry Solutions</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">ERP Solutions by Industry</h2>
          <p className="text-hero-foreground/50 max-w-2xl mx-auto">Pre-configured industry modules with deep domain expertise, ready to customize for your exact workflows.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group p-7 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.03] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-hero-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-hero-foreground/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#lead-capture" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Get Industry-Specific ERP Demo <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ERPIndustries;
