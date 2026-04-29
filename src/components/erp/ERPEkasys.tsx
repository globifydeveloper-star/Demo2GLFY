"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package, TrendingUp, Layers, BarChart3, CheckCircle2, Star } from "lucide-react";
import Link from 'next/link';

import portfolioErp from "@/assets/portfolio-erp.jpg";

const features = [
  { icon: Package, title: "Inventory & Warehouse", desc: "Real-time stock visibility, multi-warehouse management, and automated reorder points." },
  { icon: TrendingUp, title: "Finance & Accounting", desc: "Comprehensive ledger management, GST compliance, and automated financial reporting." },
  { icon: Layers, title: "Manufacturing & Production", desc: "BOM management, production planning, job scheduling, and quality control workflows." },
  { icon: BarChart3, title: "Analytics & BI Dashboard", desc: "Interactive dashboards with KPIs, custom reports, and data-driven decision support." },
];

const highlights = ["GST & Tax Compliance", "Multi-Currency Support", "Role-Based Access Control", "Supply Chain Optimization", "HR & Payroll Module", "API & Integration Ready"];

const ERPEkasys = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden lg:order-1 order-2">
            <img src={portfolioErp.src} alt="EKASYS Enterprise Resource Planning" className="w-full h-[380px] object-cover rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-2xl" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-2 order-1">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Our Product</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-2">EKASYS</h2>
            <p className="text-lg text-primary font-medium mb-5">Enterprise Resource Planning</p>
            <p className="text-muted leading-relaxed mb-8">
              A modular ERP platform built for modern enterprises, unifying inventory, manufacturing, finance, HR, and supply chain into a single intelligent system.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {[{ value: "200+", label: "Businesses Powered" }, { value: "₹800Cr+", label: "Revenue Tracked" }, { value: "60%", label: "Efficiency Gains" }].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link href="/products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                Request Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/products" className="text-sm text-muted hover:text-primary transition-colors font-medium">
                Learn More →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group p-6 rounded-2xl border border-border hover:border-primary/20 hover:bg-card transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights + Testimonial */}
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-wrap gap-3">
            {highlights.map((h) => (
              <span key={h} className="flex items-center gap-2 text-sm text-muted bg-primary/5 border border-border px-4 py-2.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {h}
              </span>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-7 rounded-2xl border border-border bg-card">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
            </div>
            <p className="text-foreground/70 leading-relaxed mb-4 text-sm italic">"EKASYS unified our 12 scattered systems into one platform. Our operational efficiency improved by 60% within 3 months."</p>
            <p className="text-sm font-semibold text-foreground">Vikram Patel</p>
            <p className="text-xs text-muted">COO, Vertex Industries</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ERPEkasys;
