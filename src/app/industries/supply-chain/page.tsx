"use client";

import { useState } from "react";
import CrossLinkSection from "@/components/CrossLinkSection";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, Truck, Package, Brain, BarChart3, Users, Zap, Eye, MapPin, Warehouse, Globe, Shield, Clock, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";


const stats = [
  { value: "30+", label: "AI Logistics Deployments" },
  { value: "40%", label: "Avg Cost Reduction" },
  { value: "95%", label: "Demand Forecast Accuracy" },
  { value: "10M+", label: "AI-Optimized Shipments" },
];

const solutions = [
  { icon: MapPin, title: "AI Route Intelligence", desc: "Deep learning route optimization that considers real-time traffic, weather, and demand patterns, reducing delivery costs by 40% and time by 25%." },
  { icon: Warehouse, title: "Autonomous Warehouse Ops", desc: "AI-powered pick-path optimization, robotic coordination, and predictive slotting that increases warehouse throughput by 50%." },
  { icon: Package, title: "Intelligent Order Orchestration", desc: "ML-driven order routing, automated splitting, and predictive fulfillment that selects the optimal path for every shipment." },
  { icon: Brain, title: "AI Demand Sensing", desc: "Predictive demand models with 95% accuracy, combining market signals, weather, events, and historical data to prevent stockouts and overstock." },
  { icon: Globe, title: "Predictive Supply Chain Twin", desc: "Digital twin simulation of your entire supply chain, AI identifies bottlenecks, predicts disruptions, and recommends mitigation strategies." },
  { icon: Truck, title: "Predictive Fleet Intelligence", desc: "AI maintenance scheduling, driver behavior optimization, fuel efficiency ML models, and autonomous fleet utilization analytics." },
];

const whyGlobify = [
  { icon: Brain, title: "Production-Grade Supply Chain AI", desc: "We deploy ML models that work in the real world, not demos. Proven 40% cost reduction across 30+ logistics operations." },
  { icon: Globe, title: "Predictive End-to-End Visibility", desc: "AI-powered anomaly detection across every node, predicting delays, disruptions, and quality issues before they impact your business." },
  { icon: Zap, title: "Non-Disruptive AI Integration", desc: "Our AI layers onto existing ERP, WMS, and TMS systems, no rip-and-replace, just intelligent augmentation of current workflows." },
  { icon: BarChart3, title: "Measurable AI ROI", desc: "Every deployment includes KPI dashboards tracking AI-driven savings: cost reduction, delivery speed, forecast accuracy, and efficiency gains." },
  { icon: Shield, title: "Enterprise-Grade AI Reliability", desc: "99.9% uptime with automatic model failsafes, drift detection, and retraining pipelines that keep AI performance consistent." },
  { icon: Eye, title: "AI Transformation Roadmap", desc: "Phased AI adoption plan, from quick-win automations to advanced predictive intelligence across your entire supply chain." },
];

const IndustrySupplyChain = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
      typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
      toast.success("Assessment Requested!", {
        description: "Our logistics team will respond within 24 hours.",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      
      <Navbar />

      <section className="relative pt-32 pb-24 bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--hero-foreground)) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">AI-Powered Supply Chain</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Autonomous Supply Chains{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">That Predict, Optimize & Self-Heal</span>
              </h1>
              <p className="text-hero-foreground/50 text-lg leading-relaxed mb-8 max-w-2xl">
                AI-powered demand sensing, autonomous warehouse operations, and predictive logistics, cutting costs by 40% while achieving 95% forecast accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                  Get Your AI Logistics Assessment <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["40% Cost Reduction", "95% Forecast Accuracy", "Predictive Disruption Alerts"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-hero-foreground/40"><CheckCircle2 className="w-3.5 h-3.5 text-primary" />{item}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-section-dark border-y border-section-dark-foreground/[0.06] py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{s.value}</div>
                <div className="text-xs text-section-dark-foreground/40 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">AI-Powered Solutions</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">Intelligent Logistics Platforms<br />That Predict & Automate</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group p-8 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Why Globify for Supply Chain AI?</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">Your AI Transformation Partner<br />in Logistics & Supply Chain</h2>
            <p className="text-hero-foreground/40 text-sm max-w-2xl mx-auto">We deploy production-grade AI that delivers measurable cost reduction, transforming your supply chain from a cost center into a predictive competitive advantage.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyGlobify.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group p-8 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-hero-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-hero-foreground/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-capture" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Start Your AI Journey</p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">Ready for AI-Powered<br />Supply Chain Transformation?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">Get a free AI Supply Chain Assessment, we'll identify automation and prediction opportunities worth 30-40% in cost savings.</p>
              <div className="space-y-4">
                {["Free AI supply chain maturity audit", "Demand forecasting accuracy assessment", "Automation ROI projection & roadmap", "Transparent pricing, no hidden fees"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm text-foreground/70">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="p-10 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">Our logistics team will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-card space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Full Name *</label><input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Company</label><input name="company" type="text" placeholder="Your Company" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Email Address *</label><input required name="email" type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Phone Number *</label><input required name="phone" type="tel" placeholder="+971 50 000 0000" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  </div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Challenge Area *</label>
                    <select required name="projectType" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">Select area</option><option>Route Optimization</option><option>Warehouse Management</option><option>Fleet Tracking</option><option>Demand Forecasting</option><option>Full Supply Chain</option><option>Other</option>
                    </select>
                  </div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Project Details</label><textarea name="message" rows={3} placeholder="Describe your supply chain challenges..." className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none" /></div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {isSubmitting ? "Submitting..." : "Get Your Free Assessment"}
                  </button>
                  <p className="text-[11px] text-muted-foreground/50 text-center">By submitting, you agree to our Privacy Policy. We'll respond within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <CrossLinkSection currentPage="supply-chain" links={["ai-framework", "cro", "manufacturing", "retail", "fintech"]} />
      <Footer />
    </div>
  );
};

export default IndustrySupplyChain;
