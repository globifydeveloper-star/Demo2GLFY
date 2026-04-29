"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Activity, BarChart3, Users, Shield, Layers, Package,
  TrendingUp, FileText, ChevronRight, CheckCircle2, Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CrossLinkSection from "@/components/CrossLinkSection";
import Link from 'next/link';

import { useContactDialog } from "@/contexts/ContactDialogContext";

import portfolioHealthcare from "@/assets/portfolio-healthcare.jpg";
import portfolioErp from "@/assets/portfolio-erp.jpg";

const products = [
  {
    id: "medoc",
    name: "MEDOC",
    tagline: "Hospital Management System",
    description:
      "A comprehensive healthcare management platform designed to digitize every aspect of hospital operations, from patient registration to diagnostics, billing, pharmacy, and beyond.",
    image: portfolioHealthcare.src,
    features: [
      { icon: Activity, title: "Patient Lifecycle Management", desc: "End-to-end tracking from admission to discharge with real-time status updates." },
      { icon: Users, title: "OPD & IPD Modules", desc: "Streamlined outpatient and inpatient workflows with appointment scheduling and bed management." },
      { icon: FileText, title: "Lab & Diagnostics Integration", desc: "Seamless lab order management, result tracking, and automated report generation." },
      { icon: Shield, title: "Billing & Insurance Claims", desc: "Automated billing, TPA processing, and insurance claim management with compliance." },
    ],
    stats: [
      { value: "50+", label: "Hospitals Onboarded" },
      { value: "1M+", label: "Patient Records" },
      { value: "99.9%", label: "System Uptime" },
    ],
    highlights: [
      "HIPAA & NABH Compliant",
      "Multi-Branch Support",
      "Pharmacy & Inventory Module",
      "Telemedicine Ready",
      "Custom Reporting Engine",
      "24/7 Priority Support",
    ],
    testimonial: {
      quote: "MEDOC transformed our hospital operations. We reduced patient wait times by 40% and billing errors by 90%.",
      name: "Dr. Priya Sharma",
      role: "Medical Director, City Hospital",
    },
  },
  {
    id: "ekasys",
    name: "EKASYS",
    tagline: "Enterprise Resource Planning",
    description:
      "A modular ERP platform built for modern enterprises, unifying inventory, manufacturing, finance, HR, and supply chain into a single intelligent system.",
    image: portfolioErp.src,
    features: [
      { icon: Package, title: "Inventory & Warehouse", desc: "Real-time stock visibility, multi-warehouse management, and automated reorder points." },
      { icon: TrendingUp, title: "Finance & Accounting", desc: "Comprehensive ledger management, GST compliance, and automated financial reporting." },
      { icon: Layers, title: "Manufacturing & Production", desc: "BOM management, production planning, job scheduling, and quality control workflows." },
      { icon: BarChart3, title: "Analytics & BI Dashboard", desc: "Interactive dashboards with KPIs, custom reports, and data-driven decision support." },
    ],
    stats: [
      { value: "200+", label: "Businesses Powered" },
      { value: "₹800Cr+", label: "Revenue Tracked" },
      { value: "60%", label: "Efficiency Gains" },
    ],
    highlights: [
      "GST & Tax Compliance",
      "Multi-Currency Support",
      "Role-Based Access Control",
      "Supply Chain Optimization",
      "HR & Payroll Module",
      "API & Integration Ready",
    ],
    testimonial: {
      quote: "EKASYS unified our 12 scattered systems into one platform. Our operational efficiency improved by 60% within 3 months.",
      name: "Vikram Patel",
      role: "COO, Vertex Industries",
    },
  },
];

const ProductsPage = () => {
  const [active, setActive] = useState(0);
  const product = products[active];
  const { openContactDialog } = useContactDialog();

  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-[#0a0a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4 font-display">
            Our Products
          </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 font-display">
              Enterprise Products
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                Built for Scale
              </span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              Purpose-built software products powering businesses across healthcare and enterprise — reliable, scalable, and continuously evolving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Selector Tabs */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex gap-0">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`relative px-10 py-6 transition-all font-display ${
                  active === i
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground/70"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl font-extrabold tracking-tight">{p.name}</span>
                  <span className={`text-base font-semibold ${active === i ? "text-muted-foreground" : "text-muted-foreground/50"}`}>
                    {p.tagline}
                  </span>
                </span>
                {active === i && (
                  <motion.div
                    layoutId="productTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Overview Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left — Info */}
                <div>
                  <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4 font-display">
                    {product.name}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-5 font-display">
                    {product.tagline}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-10">
                    {product.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-10">
                    {product.stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="text-3xl font-bold text-primary font-display">{stat.value}</div>
                        <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center gap-5">
                    <button
                      onClick={() => openContactDialog()}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3"
                    >
                      Request Demo <ArrowRight className="w-4 h-4" />
                    </button>
                    <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                      Explore Features →
                    </a>
                  </div>
                </div>

                {/* Right — Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/40 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 bg-[#0a0a1a]">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-14"
              >
                <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">
                  Core Features
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.1] font-display">
                  What {product.name} Offers
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-5">
                {product.features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/30 hover:bg-white/[0.06] transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2 font-display">
                      {feature.title}
                      <ChevronRight className="w-4 h-4 text-white/20 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h4>
                    <p className="text-sm text-white/45 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Highlights + Testimonial */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Highlights */}
                <div>
                  <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">
                    Why {product.name}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold leading-[1.1] mb-8 font-display">
                    Built Different
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.highlights.map((h, i) => (
                      <motion.div
                        key={h}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium">{h}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-center"
                >
                  <div className="p-8 rounded-2xl bg-card border border-border">
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-lg leading-relaxed mb-6 font-medium">
                      "{product.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-300 flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">
                          {product.testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{product.testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{product.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a1a] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[200px]" />
        <div className="container mx-auto px-6 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-white/40 max-w-lg mx-auto mb-8">
              Schedule a personalized demo to see how our products can drive efficiency and growth for your organization.
            </p>
            <button
              onClick={() => openContactDialog()}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3"
            >
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="products" links={["erp", "healthcare", "manufacturing", "ai-automation", "digital-transformation"]} variant="light" />
      <Footer />
    </div>
  );
};

export default ProductsPage;
