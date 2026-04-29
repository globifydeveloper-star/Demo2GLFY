"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Star, Package, TrendingUp, Layers, BarChart3, Users, Truck } from "lucide-react";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CaseStudyBreadcrumb from "@/components/CaseStudyBreadcrumb";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import portfolioErp from "@/assets/portfolio-erp.jpg";

const modules = [
  { icon: Package, title: "Inventory & Warehouse", desc: "Real-time stock visibility, multi-warehouse management, automated reorder points, and batch tracking." },
  { icon: TrendingUp, title: "Finance & Accounting", desc: "Comprehensive ledger management, GST compliance, automated financial reporting, and multi-currency support." },
  { icon: Layers, title: "Manufacturing & Production", desc: "BOM management, production planning, job scheduling, quality control workflows, and cost tracking." },
  { icon: BarChart3, title: "Analytics & BI Dashboard", desc: "Interactive dashboards with KPIs, custom reports, trend analysis, and data-driven decision support." },
  { icon: Users, title: "HR & Payroll", desc: "Employee management, attendance tracking, payroll processing, leave management, and compliance." },
  { icon: Truck, title: "Supply Chain", desc: "Vendor management, purchase orders, logistics tracking, and supply chain optimization." },
];

const highlights = ["GST & Tax Compliance", "Multi-Currency Support", "Role-Based Access Control", "Supply Chain Optimization", "API & Integration Ready", "Multi-Branch Support"];

const techStack = ["React", "Node.js", "PostgreSQL", "REST APIs", "Microservices Architecture", "Cloud Infrastructure", "Redis", "Docker"];

const results = [
  { metric: "200+", label: "Businesses Powered" },
  { metric: "₹800Cr+", label: "Revenue Tracked" },
  { metric: "60%", label: "Efficiency Gains" },
  { metric: "99.9%", label: "Uptime SLA" },
];

const CaseStudyEkasys = () => {
  const { openContactDialog } = useContactDialog();

  return (
    <div className="min-h-screen">
      
      <Navbar />

      <section className="pt-28 pb-16 bg-[#0a0a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-6 relative">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"><ArrowLeft className="w-4 h-4" /> Back to Projects</Link>
          <CaseStudyBreadcrumb name="EKASYS ERP" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">Our Product — ERP</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-2 font-display">EKASYS</h1>
              <p className="text-lg text-primary font-medium mb-4">Enterprise Resource Planning</p>
              <p className="text-lg text-white/50 leading-relaxed mb-6">A modular ERP platform built for modern enterprises — unifying inventory, manufacturing, finance, HR, and supply chain into a single intelligent system that scales with your business.</p>
              <div className="flex flex-wrap gap-2">
                {["ERP", "SaaS", "Enterprise", "Cloud"].map(tag => (
                  <span key={tag} className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden">
              <img src={portfolioErp.src} alt="EKASYS ERP platform dashboard" className="w-full h-[350px] object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <motion.div key={r.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-3xl font-bold text-primary font-display mb-1">{r.metric}</p>
                <p className="text-sm text-muted-foreground">{r.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6"><div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">One Platform, Every Department</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">EKASYS was born from a simple observation: most businesses run on 10-15 disconnected software tools that don't talk to each other. Data lives in silos, reporting takes days, and decision-making is based on outdated information. We built EKASYS to change that.</p>
            <p className="text-muted-foreground leading-relaxed">Our modular architecture means businesses can start with the modules they need most — often inventory and finance — and expand to manufacturing, HR, and supply chain as they grow. Every module shares a unified data layer, so a sale in retail instantly updates inventory, triggers reorder alerts, and reflects in financial reports.</p>
          </motion.div>
        </div></div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Modules</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 font-display">Modular, Scalable Architecture</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {modules.map((m, i) => (
                <motion.div key={m.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl border border-border hover:border-primary/20 transition-all bg-background">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <m.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights + Tech */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Highlights</p>
              <h2 className="text-2xl font-bold text-foreground mb-6 font-display">Enterprise-Grade Capabilities</h2>
              <div className="flex flex-wrap gap-3">
                {highlights.map(h => (
                  <span key={h} className="flex items-center gap-2 text-sm text-muted-foreground bg-primary/5 border border-border px-4 py-2.5 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-primary" />{h}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Tech Stack</p>
              <h2 className="text-2xl font-bold text-foreground mb-6 font-display">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map(tech => (<span key={tech} className="px-4 py-2.5 rounded-full text-sm font-medium bg-primary/5 text-foreground border border-border">{tech}</span>))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}</div>
            <p className="text-lg text-foreground/80 leading-relaxed italic mb-6">"EKASYS unified our 12 scattered systems into one platform. Our operational efficiency improved by 60% within 3 months. The modular approach meant we could migrate department by department without disrupting operations."</p>
            <p className="font-semibold text-foreground">Vikram Patel</p>
            <p className="text-sm text-muted-foreground">COO, Vertex Industries</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Ready to Unify Your Operations?</h2>
            <p className="text-white/40 max-w-lg mx-auto mb-8">See how EKASYS can transform your business operations.</p>
            <button onClick={() => openContactDialog()} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">Request a Demo <ArrowRight className="w-4 h-4" /></button>
          </motion.div>
        </div>
      </section>

      <RelatedCaseStudies current="ekasys-erp" />
      <Footer />
    </div>
  );
};

export default CaseStudyEkasys;
