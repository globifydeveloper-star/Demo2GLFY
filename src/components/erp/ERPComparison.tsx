"use client";

import { motion } from "framer-motion";

const criteria = [
  { feature: "Best For", custom: "Unique workflows & IP", sap: "Large enterprises", odoo: "SMBs & mid-market", winner: "tie" },
  { feature: "Customization", custom: "Unlimited", sap: "Module-based", odoo: "Community modules", winner: "custom" },
  { feature: "Total Cost of Ownership", custom: "Medium–High", sap: "Very High", odoo: "Low–Medium", winner: "odoo" },
  { feature: "Implementation Time", custom: "3–9 months", sap: "6–18 months", odoo: "1–4 months", winner: "odoo" },
  { feature: "Scalability", custom: "Highly scalable", sap: "Enterprise-grade", odoo: "Good for growth", winner: "sap" },
  { feature: "Integration Flexibility", custom: "Full API control", sap: "SAP ecosystem", odoo: "REST API + modules", winner: "custom" },
  { feature: "Industry-Specific", custom: "Tailor-made", sap: "Pre-built verticals", odoo: "Community add-ons", winner: "custom" },
  { feature: "Maintenance & Updates", custom: "Dedicated team", sap: "Vendor-managed", odoo: "Community + vendor", winner: "sap" },
];

const ERPComparison = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Decision Guide</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">Custom ERP vs SAP vs Odoo</h2>
          <p className="text-muted max-w-2xl mx-auto">Choosing the right ERP depends on your size, budget, and growth ambitions. Here's how they compare.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] py-4 border-b border-border">
            <div className="text-sm font-bold tracking-[0.2em] uppercase text-muted">Feature</div>
            <div className="text-sm font-bold tracking-[0.2em] uppercase text-primary text-center">Custom ERP</div>
            <div className="text-sm font-bold tracking-[0.2em] uppercase text-foreground/60 text-center">SAP</div>
            <div className="text-sm font-bold tracking-[0.2em] uppercase text-foreground/60 text-center">Odoo</div>
          </div>
          {criteria.map((row) => (
            <motion.div key={row.feature} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-[1.5fr_1fr_1fr_1fr] py-5 border-b border-border/50 items-center">
              <div className="text-sm font-semibold text-foreground">{row.feature}</div>
              <div className={`text-sm text-center ${row.winner === "custom" || row.winner === "tie" ? "text-primary font-semibold" : "text-muted"}`}>{row.custom}</div>
              <div className={`text-sm text-center ${row.winner === "sap" || row.winner === "tie" ? "text-primary font-semibold" : "text-muted"}`}>{row.sap}</div>
              <div className={`text-sm text-center ${row.winner === "odoo" || row.winner === "tie" ? "text-primary font-semibold" : "text-muted"}`}>{row.odoo}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERPComparison;
