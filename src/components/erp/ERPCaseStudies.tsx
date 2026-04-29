"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cases = [
  { tag: "Manufacturing", title: "Production ERP for Auto Parts Manufacturer", desc: "Implemented end-to-end ERP covering production planning, inventory, quality control, and financial reporting for a 500+ employee factory.", metrics: [{ value: "40%", label: "Faster Production" }, { value: "60%", label: "Less Inventory Waste" }, { value: "3x", label: "Reporting Speed" }] },
  { tag: "Retail", title: "Omnichannel ERP for Fashion Retailer", desc: "Unified POS, e-commerce, and warehouse operations across 25 stores with real-time stock visibility and automated replenishment.", metrics: [{ value: "35%", label: "Revenue Growth" }, { value: "90%", label: "Stock Accuracy" }, { value: "50%", label: "Faster Fulfillment" }] },
  { tag: "Healthcare", title: "Hospital Management System", desc: "Deployed MEDOC — our healthcare ERP — covering patient management, pharmacy, lab integration, billing, and compliance for a 200-bed hospital.", metrics: [{ value: "70%", label: "Less Admin Work" }, { value: "99%", label: "Billing Accuracy" }, { value: "4x", label: "Patient Throughput" }] },
  { tag: "Distribution", title: "Supply Chain ERP for FMCG Distributor", desc: "Built a multi-warehouse ERP with route optimization, van sales, and real-time delivery tracking across UAE and GCC.", metrics: [{ value: "45%", label: "Delivery Efficiency" }, { value: "30%", label: "Cost Reduction" }, { value: "Real-time", label: "Fleet Visibility" }] },
];

const ERPCaseStudies = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Results</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">Case Studies & Business Outcomes</h2>
          <p className="text-muted max-w-2xl mx-auto">Real ERP implementations delivering measurable impact across industries.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((cs, i) => (
            <motion.div key={cs.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group p-8 rounded-2xl border border-border hover:border-primary/20 hover:bg-card transition-all">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">{cs.tag}</span>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">{cs.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">{cs.desc}</p>
              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-border/50">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-xl font-bold text-primary">{m.value}</div>
                    <div className="text-sm text-muted mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#lead-capture" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Get Similar Results <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ERPCaseStudies;
