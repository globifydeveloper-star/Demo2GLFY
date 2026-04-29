"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Users, FileText, Shield, CheckCircle2, Star } from "lucide-react";
import Link from 'next/link';

import portfolioHealthcare from "@/assets/portfolio-healthcare.jpg";

const features = [
  { icon: Activity, title: "Patient Lifecycle Management", desc: "End-to-end tracking from admission to discharge with real-time status updates." },
  { icon: Users, title: "OPD & IPD Modules", desc: "Streamlined outpatient and inpatient workflows with appointment scheduling and bed management." },
  { icon: FileText, title: "Lab & Diagnostics Integration", desc: "Seamless lab order management, result tracking, and automated report generation." },
  { icon: Shield, title: "Billing & Insurance Claims", desc: "Automated billing, TPA processing, and insurance claim management with compliance." },
];

const highlights = ["HIPAA & NABH Compliant", "Multi-Branch Support", "Pharmacy & Inventory Module", "Telemedicine Ready", "Custom Reporting Engine", "24/7 Priority Support"];

const ERPMedoc = () => {
  return (
    <section className="py-28 bg-hero">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Our Product</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-2">MEDOC</h2>
            <p className="text-lg text-primary font-medium mb-5">Hospital Management System</p>
            <p className="text-hero-foreground/50 leading-relaxed mb-8">
              A comprehensive healthcare management platform designed to digitize every aspect of hospital operations, from patient registration to diagnostics, billing, pharmacy, and beyond.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {[{ value: "50+", label: "Hospitals Onboarded" }, { value: "1M+", label: "Patient Records" }, { value: "99.9%", label: "System Uptime" }].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-hero-foreground/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link href="/products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                Request Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/products" className="text-sm text-hero-foreground/50 hover:text-primary transition-colors font-medium">
                Learn More →
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden">
            <img src={portfolioHealthcare.src} alt="MEDOC Hospital Management System" className="w-full h-[380px] object-cover rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-hero/40 to-transparent rounded-2xl" />
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group p-6 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.03] transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-hero-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-hero-foreground/40 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights + Testimonial */}
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-wrap gap-3">
            {highlights.map((h) => (
              <span key={h} className="flex items-center gap-2 text-sm text-hero-foreground/60 bg-hero-foreground/[0.04] border border-hero-foreground/[0.06] px-4 py-2.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {h}
              </span>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-7 rounded-2xl border border-hero-foreground/[0.06] bg-hero-foreground/[0.02]">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
            </div>
            <p className="text-hero-foreground/70 leading-relaxed mb-4 text-sm italic">"MEDOC transformed our hospital operations. We reduced patient wait times by 40% and billing errors by 90%."</p>
            <p className="text-sm font-semibold text-hero-foreground">Dr. Priya Sharma</p>
            <p className="text-xs text-hero-foreground/30">Medical Director, City Hospital</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ERPMedoc;
