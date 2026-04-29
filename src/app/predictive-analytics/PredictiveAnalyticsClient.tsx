"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, TrendingUp, LineChart, Brain, Target, PieChart, Activity, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrossLinkSection from "@/components/CrossLinkSection";
import { toast } from "sonner";


const stats = [
  { value: "92%", label: "Forecast Accuracy" },
  { value: "40%", label: "Inventory Cost Reduction" },
  { value: "3x", label: "Faster Decision Making" },
  { value: "200+", label: "ML Models Deployed" },
];

const capabilities = [
  { icon: TrendingUp, title: "Demand Forecasting", desc: "ML models that predict sales trends, seasonal patterns, and market shifts, enabling proactive inventory and marketing decisions with 92% accuracy." },
  { icon: Target, title: "Customer Segmentation", desc: "AI-driven clustering that identifies high-value segments, churn risks, and cross-sell opportunities, turning data into targeted revenue strategies." },
  { icon: LineChart, title: "Revenue Intelligence", desc: "Real-time dashboards combining sales, marketing, and operations data to surface growth opportunities and margin leaks you can't see manually." },
  { icon: Brain, title: "Price Optimization", desc: "Dynamic pricing models that analyze competitor prices, demand elasticity, and cost structures to maximize margins without losing conversions." },
  { icon: PieChart, title: "Marketing Attribution", desc: "Multi-touch attribution models that show true ROI across channels, from Meta Ads to email sequences, so you invest where it matters." },
  { icon: Activity, title: "Anomaly Detection", desc: "Real-time alerts for unusual patterns in transactions, inventory, website traffic, or operational metrics, catching issues before they become crises." },
];

const outcomes = [
  { metric: "35%", label: "Revenue Increase", desc: "E-commerce brand using demand forecasting to optimize stock and pricing" },
  { metric: "60%", label: "Reduced Stockouts", desc: "Supply chain company with ML-powered inventory optimization" },
  { metric: "4.2x", label: "Marketing ROI", desc: "D2C brand using attribution modeling to reallocate ad spend" },
];

const process = [
  { step: "01", title: "Data Audit & Strategy", desc: "We assess your data sources, quality, and gaps, then define the analytics roadmap aligned to your business KPIs." },
  { step: "02", title: "Data Engineering", desc: "Clean, transform, and unify data from all sources into a single analytics-ready data warehouse." },
  { step: "03", title: "Model Development", desc: "Build, train, and validate ML models tailored to your specific business context and data patterns." },
  { step: "04", title: "Deploy & Monitor", desc: "Production deployment with automated retraining, drift detection, and executive dashboards." },
];

const PredictiveAnalytics = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("source", "Predictive Analytics Strategy");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
      toast.success("Strategy Requested!", {
        description: "Our data science team will contact you within 24 hours.",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--hero-foreground)) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">Predictive Analytics</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Know What's Coming Before{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Your Competitors Do</span>
              </h1>
              <p className="text-lg text-hero-foreground/70 leading-relaxed mb-10 max-w-2xl">
                We transform your raw business data into a competitive advantage. Our predictive models help you forecast demand, reduce churn, and optimize pricing with mathematical precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                  Get Free Data Strategy <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#capabilities" className="inline-flex items-center justify-center gap-2 bg-transparent border border-hero-foreground/10 text-hero-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-hero-foreground/5 transition-all">
                  <Activity className="w-4 h-4" /> View Analytics Capabilities
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">Predictive Intelligence</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">Advanced machine learning models designed to solve complex business problems across sales, marketing, and operations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-hero-foreground section-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-16">Data That Delivers</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {outcomes.map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="text-5xl font-black text-primary mb-4">{item.metric}</div>
                <div className="text-xl font-semibold text-white mb-3">{item.label}</div>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">From Raw Data to Intelligence</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">A rigorous data engineering and science methodology that ensures your models are accurate, scalable, and bias-free.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="relative group">
                <div className="text-[5rem] font-black text-foreground/[0.03] absolute -top-8 -left-2 leading-none group-hover:text-primary/[0.05] transition-colors">{step.step}</div>
                <div className="relative pt-4">
                  <h3 className="text-lg font-semibold mb-3 text-primary">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="lead-capture" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Start Predicting</p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">Ready to Make<br />Data-Driven Decisions?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">Get a free data strategy session where we'll assess your data maturity, identify quick wins, and outline a roadmap to predictive intelligence.</p>
              <div className="space-y-4">
                {["Free data maturity assessment", "Quick-win identification in 48 hours", "Custom ML model recommendations", "ROI projection for your specific use case"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm text-foreground/70">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="p-10 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">Our data science team will review your needs and respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-background space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Full Name *</label><input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Email *</label><input required name="email" type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Phone Number *</label><input required name="phone" type="tel" placeholder="+971 50 000 0000" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Company Name</label><input name="company" type="text" placeholder="Your Company" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  </div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">What do you want to predict? *</label>
                    <select required name="goal" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">Select focus area</option><option>Demand / Sales Forecasting</option><option>Customer Churn Prediction</option><option>Price Optimization</option><option>Marketing Attribution</option><option>Inventory Optimization</option><option>Other</option>
                    </select>
                  </div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Current data sources</label><input name="message" type="text" placeholder="e.g., Shopify, Google Analytics, CRM, ERP..." className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {isSubmitting ? "Submitting..." : "Get Your Free Data Strategy"}
                  </button>
                  <p className="text-[11px] text-muted-foreground/50 text-center">By submitting, you agree to our Privacy Policy. Response within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      <CrossLinkSection currentPage="predictive-analytics" links={["ai-automation", "process-automation", "erp", "supply-chain", "ecommerce"]} variant="light" />
      <Footer />
    </div>
  );
};

export default PredictiveAnalytics;
