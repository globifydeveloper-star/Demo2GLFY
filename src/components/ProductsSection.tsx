"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, BarChart3, Users, Shield, Layers, Package, TrendingUp, FileText, ChevronRight } from "lucide-react";
import Link from 'next/link';

import { useContactDialog } from "@/contexts/ContactDialogContext";

const products = [
  {
    id: "medoc",
    name: "MEDOC",
    tagline: "Hospital Management System",
    description:
      "A comprehensive healthcare management platform designed to digitize every aspect of hospital operations, from patient registration to diagnostics, billing, pharmacy, and beyond.",
    features: [
      { icon: Activity, title: "Patient Lifecycle Management", desc: "End-to-end tracking from admission to discharge with real-time status updates." },
      { icon: Users, title: "OPD & IPD Modules", desc: "Streamlined outpatient and inpatient workflows with appointment scheduling and bed management." },
      { icon: FileText, title: "Lab & Diagnostics Integration", desc: "Seamless lab order management, result tracking, and automated report generation." },
      { icon: Shield, title: "Billing & Insurance Claims", desc: "Automated billing, TPA processing, and insurance claim management with compliance." },
    ],
    stats: [
      { value: "50+", label: "Hospitals onboarded" },
      { value: "1M+", label: "Patient records managed" },
      { value: "99.9%", label: "System uptime" },
    ],
  },
  {
    id: "ekasys",
    name: "EKASYS",
    tagline: "Enterprise Resource Planning",
    description:
      "A modular ERP platform built for modern enterprises, unifying inventory, manufacturing, finance, HR, and supply chain into a single intelligent system.",
    features: [
      { icon: Package, title: "Inventory & Warehouse", desc: "Real-time stock visibility, multi-warehouse management, and automated reorder points." },
      { icon: TrendingUp, title: "Finance & Accounting", desc: "Comprehensive ledger management, GST compliance, and automated financial reporting." },
      { icon: Layers, title: "Manufacturing & Production", desc: "BOM management, production planning, job scheduling, and quality control workflows." },
      { icon: BarChart3, title: "Analytics & BI Dashboard", desc: "Interactive dashboards with KPIs, custom reports, and data-driven decision support." },
    ],
    stats: [
      { value: "200+", label: "Businesses powered" },
      { value: "₹800Cr+", label: "Revenue tracked" },
      { value: "60%", label: "Efficiency gains" },
    ],
  },
];

const ProductsSection = () => {
  const [active, setActive] = useState(0);
  const product = products[active];
  const { openContactDialog } = useContactDialog();

  return (
    <section className="py-16 bg-[#0a0a1a]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-4">
            Our Products
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] max-w-2xl">
            <span className="text-white">Enterprise </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Products</span>
            <br />
            <span className="text-white/40">Built for Scale</span>
          </h2>
        </motion.div>

        {/* Product Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`group flex items-center gap-3 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl text-left transition-all flex-1 sm:flex-initial ${
                active === i
                  ? "bg-white text-[#0a0a1a]"
                  : "bg-white/[0.04] text-white/50 border border-white/[0.06] hover:bg-white/[0.08] hover:text-white/80"
              }`}
            >
              <span className="font-bold text-sm">{p.name}</span>
              <span className={`text-xs ${active === i ? "text-[#0a0a1a]/50" : "text-white/30"}`}>
                {p.tagline}
              </span>
            </button>
          ))}
        </div>

        {/* Product Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {/* Main Layout */}
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left - Description & Stats */}
              <div className="lg:w-[420px] flex-shrink-0">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {product.name}
                  <span className="text-white/30 ml-2 font-normal text-lg">/ {product.tagline}</span>
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-10">
                  {product.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {product.stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-[11px] text-white/35 mt-1 leading-tight">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10 flex items-center gap-5">
                  <button onClick={openContactDialog}>
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3"
                    >
                      Request Demo
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </button>
                  <Link href="/products" className="text-sm text-white/40 hover:text-white transition-colors">
                    Learn more →
                  </Link>
                </div>
              </div>

              {/* Right - Feature Cards */}
              <div className="flex-1 grid sm:grid-cols-2 gap-4">
                {product.features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/30 hover:bg-white/[0.06] transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm text-white mb-2 flex items-center gap-1.5">
                      {feature.title}
                      <ChevronRight className="w-3.5 h-3.5 text-white/20 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h4>
                    <p className="text-xs text-white/40 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductsSection;
