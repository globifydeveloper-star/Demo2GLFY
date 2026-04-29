"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, Code2, Plug, BarChart3, Package, RefreshCw, Shield, Workflow, Cpu, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

import CrossLinkSection from "@/components/CrossLinkSection";

const stats = [
  { value: "80+", label: "Apps Built" },
  { value: "50K+", label: "Active Installs" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4.8★", label: "Avg App Rating" },
];

const appTypes = [
  { icon: Package, title: "Inventory & Order Management", desc: "Real-time sync across warehouses, POS, and marketplaces. Automated reorder points, multi-location tracking, and bulk fulfillment workflows." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Custom dashboards pulling data from Shopify, Meta Ads, Google Analytics, and your CRM into a single source of truth for smarter decisions." },
  { icon: RefreshCw, title: "Subscription & Loyalty Apps", desc: "Recurring revenue engines with flexible billing cycles, loyalty point systems, referral programs, and churn reduction automations." },
  { icon: Plug, title: "ERP & CRM Integrations", desc: "Seamless two-way sync with SAP, Zoho, HubSpot, Salesforce, and custom ERPs, eliminating manual data entry and reconciliation." },
  { icon: Shield, title: "Compliance & Security", desc: "GDPR consent managers, age verification gates, tax calculation engines, and fraud detection integrations tailored to your markets." },
  { icon: Workflow, title: "Custom Checkout Extensions", desc: "Shopify Checkout Extensibility apps for upsells, gift wrapping, delivery scheduling, and dynamic shipping rules — fully compliant with Plus." },
];

const techStack = [
  "Shopify App Bridge", "Polaris UI", "Remix / Node.js", "GraphQL Admin API",
  "Shopify Functions", "Webhooks", "Metafields", "Theme App Extensions",
];

const process = [
  { step: "01", title: "Requirements & Scoping", desc: "We map your workflows, integrations, and success metrics to define exactly what the app needs to do." },
  { step: "02", title: "Architecture & API Design", desc: "Scalable architecture with Shopify API best practices, rate limit handling, and security-first design." },
  { step: "03", title: "Agile Development", desc: "2-week sprints with demos. You see progress and provide feedback continuously, no black-box builds." },
  { step: "04", title: "Testing & App Store Submission", desc: "Rigorous QA, Shopify review compliance, and either private or public App Store listing." },
];

const ShopifyAppDev = () => {
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
      toast.success("Proposal Requested!", {
        description: "Our team will review your requirements and respond within 48 hours.",
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

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--hero-foreground)) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">Shopify App Development</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Your Store's Features Shouldn't Be{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Limited by Off-the-Shelf Apps</span>
              </h1>
              <p className="text-hero-foreground/50 text-lg leading-relaxed mb-8 max-w-2xl">
                Custom apps and integrations that extend your Shopify store beyond what any marketplace app can offer, built for your exact workflows, scale, and competitive edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                  Discuss Your App Idea <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 border border-hero-foreground/20 text-hero-foreground/70 px-8 py-4 rounded-full font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all">
                  View Case Studies
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["Shopify Partner Certified", "Private & Public Apps", "API-First Architecture"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-hero-foreground/40"><CheckCircle2 className="w-3.5 h-3.5 text-primary" />{item}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* App Types */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">What We Build</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-4">Apps That Solve Real Business Problems</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">Stop paying monthly fees for apps that do 80% of what you need. Get 100% of what you need, owned by you, forever.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appTypes.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors group">
                <s.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6">Technology Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full border border-border text-sm text-foreground/70 bg-background">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Development Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground leading-[1.1]">Transparent, Agile, Results-Driven</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-section-dark-foreground/10 bg-section-dark-foreground/[0.03]">
                <span className="text-4xl font-bold text-primary/20 mb-3 block">{p.step}</span>
                <h3 className="font-semibold text-section-dark-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-section-dark-foreground/50 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="lead-capture" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Let's Build Your App</p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">Have an App Idea?<br />Let's Make It Real.</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">Share your requirements and we'll come back with a technical proposal, timeline, and fixed-price quote within 48 hours.</p>
              <div className="space-y-4">
                {["Free technical feasibility assessment", "Fixed-price quotes — no scope creep", "Full source code ownership", "Post-launch maintenance plans available"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm text-foreground/70">{item}</span></div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="p-10 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">Our engineering team will review your requirements and respond within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-card space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Full Name *</label>
                      <input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Email *</label>
                      <input required name="email" type="email" placeholder="john@brand.com" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Phone Number *</label>
                    <input required name="phone" type="tel" placeholder="+971 50 000 0000" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">App Type *</label>
                    <select required name="projectType" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">Select type</option>
                      <option>Private / Custom App</option>
                      <option>Public App Store App</option>
                      <option>Integration / Middleware</option>
                      <option>Checkout Extension</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Describe your app idea *</label>
                    <textarea required name="message" rows={4} placeholder="What problem should this app solve? What systems should it integrate with?" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {isSubmitting ? "Submitting..." : "Get a Free Technical Proposal"}
                  </button>
                  <p className="text-[11px] text-muted-foreground/50 text-center">By submitting, you agree to our Privacy Policy. Response within 48 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <CrossLinkSection currentPage="shopify-apps" links={["shopify-dev", "shopify-plus", "shopify-themes", "ecommerce", "erp", "app-dev"]} variant="light" />
      <Footer />
    </div>
  );
};

export default ShopifyAppDev;
