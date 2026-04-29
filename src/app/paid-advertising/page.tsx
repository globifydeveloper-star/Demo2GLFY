"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrossLinkSection from "@/components/CrossLinkSection";

import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, BarChart3, Users, MousePointer, RefreshCw, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "4.2x", label: "Average ROAS" },
  { value: "-40%", label: "Cost Per Acquisition" },
  { value: "2M+", label: "Monthly Ad Spend Managed" },
  { value: "150+", label: "Campaigns Optimized" },
];

const services = [
  { icon: Target, title: "Google Ads & Search", desc: "Search, Shopping, Display, and YouTube campaigns with advanced bidding strategies, audience targeting, and continuous optimization for maximum ROAS." },
  { icon: Users, title: "Meta & Social Ads", desc: "Facebook, Instagram, and TikTok campaigns with creative testing, lookalike audiences, and full-funnel retargeting that drives conversions." },
  { icon: Zap, title: "LinkedIn B2B Advertising", desc: "Account-based targeting, sponsored content, and InMail campaigns designed to reach decision-makers and generate qualified B2B leads." },
  { icon: MousePointer, title: "Landing Page Optimization", desc: "Custom landing pages for every campaign with A/B testing, heatmap analysis, and conversion rate optimization that maximizes ad spend efficiency." },
  { icon: RefreshCw, title: "Retargeting & Remarketing", desc: "Cross-platform retargeting sequences that re-engage visitors, recover abandoned carts, and nurture prospects through the funnel." },
  { icon: BarChart3, title: "Performance Analytics", desc: "Real-time dashboards with ROAS tracking, attribution modeling, and budget optimization recommendations backed by data." },
];

const comparison = [
  { metric: "Campaign Setup", basic: "Template-based", ours: "Custom-built for your goals" },
  { metric: "Audience Targeting", basic: "Broad demographics", ours: "Intent + behavior layered" },
  { metric: "Creative Testing", basic: "1-2 variations", ours: "10+ variations per cycle" },
  { metric: "Bid Strategy", basic: "Automated only", ours: "Hybrid manual + AI bidding" },
  { metric: "Reporting", basic: "Monthly PDF", ours: "Real-time dashboard + weekly calls" },
  { metric: "Landing Pages", basic: "Generic", ours: "Campaign-specific, A/B tested" },
];

const PaidAdvertising = () => {
  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* Hero */}
      <section className="relative bg-hero pt-32 pb-20 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Paid Advertising & PPC</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-hero-foreground leading-[1.08] mb-6">
              Every Dollar<br />Working Harder<br />For You
            </h1>
            <p className="text-hero-foreground/50 text-lg max-w-xl leading-relaxed mb-8">
              Precision-targeted paid campaigns that turn ad spend into measurable revenue, across Google, Meta, LinkedIn, and beyond.
            </p>
            <a href="#lead-capture" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:gap-3">
              Get a Free PPC Audit <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-hero border-t border-hero-foreground/[0.06]">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{s.value}</div>
                <div className="text-hero-foreground/40 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Our PPC Services</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">Full-Funnel Paid<br />Media Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group p-6 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.02] transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-hero-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-hero-foreground/40 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Why We're Different</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1]">Generic Agency vs.<br />Performance Partner</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-muted/20 p-4 text-sm font-semibold text-foreground">
              <span>Metric</span><span>Typical Agency</span><span className="text-primary">Globify</span>
            </div>
            {comparison.map((row, i) => (
              <div key={row.metric} className="grid grid-cols-3 p-4 text-sm border-t border-border">
                <span className="font-medium text-foreground">{row.metric}</span>
                <span className="text-muted">{row.basic}</span>
                <span className="text-foreground flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" />{row.ours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="lead-capture" className="py-24 bg-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">Get Your Free<br />PPC Audit</h2>
              <p className="text-hero-foreground/40 text-sm">We'll analyze your current campaigns and show you exactly where you're losing money — and how to fix it.</p>
            </motion.div>
            <motion.form
              onSubmit={async (e) => {
                e.preventDefault();
                const btn = e.currentTarget.querySelector('button');
                if (btn) btn.disabled = true;
                const formData = new FormData(e.currentTarget);
                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    body: formData,
                  });
                  if (!res.ok) throw new Error("Failed to submit");
                  typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
                  import("sonner").then(({ toast }) => {
                    toast.success("Audit Requested!", {
                      description: "We'll be in touch within 24 hours.",
                    });
                  });
                  (e.target as HTMLFormElement).reset();
                } catch (error) {
                  import("sonner").then(({ toast }) => {
                    toast.error("Something went wrong. Please try again later.");
                  });
                } finally {
                  if (btn) btn.disabled = false;
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <input type="hidden" name="source" value="Paid Advertising Audit" />
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Full Name *"
                  className="w-full px-4 py-3 rounded-xl bg-hero-foreground/[0.05] border border-hero-foreground/[0.08] text-hero-foreground placeholder:text-hero-foreground/30 text-sm focus:outline-none focus:border-primary/40"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Work Email *"
                  className="w-full px-4 py-3 rounded-xl bg-hero-foreground/[0.05] border border-hero-foreground/[0.08] text-hero-foreground placeholder:text-hero-foreground/30 text-sm focus:outline-none focus:border-primary/40"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3 rounded-xl bg-hero-foreground/[0.05] border border-hero-foreground/[0.08] text-hero-foreground placeholder:text-hero-foreground/30 text-sm focus:outline-none focus:border-primary/40"
                />
                <input
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-xl bg-hero-foreground/[0.05] border border-hero-foreground/[0.08] text-hero-foreground placeholder:text-hero-foreground/30 text-sm focus:outline-none focus:border-primary/40"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  required
                  name="budget"
                  className="w-full px-4 py-3 rounded-xl bg-hero-foreground/[0.05] border border-hero-foreground/[0.08] text-hero-foreground/50 text-sm focus:outline-none focus:border-primary/40"
                >
                  <option value="">Monthly Ad Spend *</option>
                  <option>Under $5,000</option>
                  <option>$5,000 – $25,000</option>
                  <option>$25,000 – $100,000</option>
                  <option>$100,000+</option>
                </select>
                <select
                  required
                  name="platform"
                  className="w-full px-4 py-3 rounded-xl bg-hero-foreground/[0.05] border border-hero-foreground/[0.08] text-hero-foreground/50 text-sm focus:outline-none focus:border-primary/40"
                >
                  <option value="">Primary Platform *</option>
                  <option>Google Ads</option>
                  <option>Meta (Facebook/Instagram)</option>
                  <option>LinkedIn</option>
                  <option>Multiple Platforms</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                Get My Free PPC Audit <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <CrossLinkSection currentPage="paid-ads" links={["digital-marketing", "seo", "social-media", "ecommerce", "shopify-dev", "cro"]} variant="light" />
      <Footer />
    </div>
  );
};

export default PaidAdvertising;
