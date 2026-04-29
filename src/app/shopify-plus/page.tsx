"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, Server, Layers, Globe, Zap, ShieldCheck, Code2, BarChart3, Cpu, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

import CrossLinkSection from "@/components/CrossLinkSection";

const stats = [
  { value: "$500M+", label: "GMV Managed" },
  { value: "40+", label: "Plus Stores" },
  { value: "99.99%", label: "Uptime" },
  { value: "< 200ms", label: "API Response" },
];

const capabilities = [
  { icon: Server, title: "Shopify Plus Migration", desc: "Seamless migration from Magento, WooCommerce, or custom platforms to Shopify Plus, preserving SEO equity, customer data, and order history." },
  { icon: Layers, title: "Headless Commerce (Hydrogen)", desc: "Decoupled storefronts built on Hydrogen/Oxygen or Next.js, powered by the Storefront API for unlimited design freedom and blazing speed." },
  { icon: Globe, title: "Multi-Store & Expansion", desc: "Shopify Plus expansion stores for international markets, localized pricing, language, payments, and tax compliance across 50+ countries." },
  { icon: Zap, title: "Shopify Flow & Launchpad", desc: "Automated workflows for flash sales, loyalty tiers, inventory routing, and fraud flagging, reducing manual ops by up to 80%." },
  { icon: ShieldCheck, title: "B2B & Wholesale Channels", desc: "Dedicated wholesale storefronts with volume pricing, net payment terms, quick-order forms, and company account management." },
  { icon: Code2, title: "Checkout Extensibility", desc: "Custom checkout experiences using Shopify Functions, dynamic discounts, shipping rules, payment customizations, and post-purchase upsells." },
];

const headlessVsTheme = [
  { feature: "Design Freedom", theme: "Limited to Liquid", headless: "Unlimited (React/Next.js)" },
  { feature: "Page Speed", theme: "Good (2–3s)", headless: "Exceptional (<1s)" },
  { feature: "Omnichannel", theme: "Web only", headless: "Web, mobile, kiosk, IoT" },
  { feature: "Personalization", theme: "Basic", headless: "AI-driven, real-time" },
  { feature: "SEO Control", theme: "Standard", headless: "Full SSR/SSG control" },
  { feature: "Development Cost", theme: "Lower", headless: "Higher (justified by scale)" },
];

const process = [
  { step: "01", title: "Platform Assessment", desc: "We audit your current stack, traffic patterns, and growth trajectory to confirm Plus/headless is the right move." },
  { step: "02", title: "Architecture Blueprint", desc: "Detailed technical architecture covering APIs, data flows, third-party integrations, and deployment strategy." },
  { step: "03", title: "Phased Build & Migrate", desc: "Incremental migration with zero-downtime cutover. We move data, redirect URLs, and validate every touchpoint." },
  { step: "04", title: "Optimize & Scale", desc: "Post-launch performance tuning, CDN configuration, and growth automation setup for sustained scaling." },
];

const ShopifyPlus = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("source", "Shopify Plus & Headless");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
      toast.success("Consultation Requested!", {
        description: "An enterprise consultant will reach out within 24 hours.",
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
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">Shopify Plus & Headless Commerce</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Enterprise Commerce at the<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Speed of Headless</span>
              </h1>
              <p className="text-lg text-hero-foreground/70 leading-relaxed mb-10 max-w-2xl">
                We build high-performance headless storefronts and enterprise-grade Shopify Plus stores for brands doing $10M+ in annual revenue. Blazing speed, infinite scale, total control.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                  Get Enterprise Assessment <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#headless-comparison" className="inline-flex items-center justify-center gap-2 bg-transparent border border-hero-foreground/10 text-hero-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-hero-foreground/5 transition-all">
                  <Cpu className="w-4 h-4" /> Why Headless?
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

      {/* Capabilities */}
      <section id="capabilities" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">Enterprise Capabilities</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">Shopify Plus is more than just a checkout. It's a full-stack enterprise commerce engine that we help you leverage to its full potential.</p>
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

      {/* Headless Comparison */}
      <section id="headless-comparison" className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">Headless vs. Theme Architecture</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">Understanding which approach fits your brand's scale, complexity, and performance requirements.</p>
          </div>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-sm">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-semibold text-foreground">Feature</th>
                  <th className="px-6 py-4 font-semibold text-foreground">Liquid Theme</th>
                  <th className="px-6 py-4 font-semibold text-primary bg-primary/5">Headless Commerce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {headlessVsTheme.map((row) => (
                  <tr key={row.feature} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.theme}</td>
                    <td className="px-6 py-4 text-foreground font-medium bg-primary/5">{row.headless}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">The Enterprise Lifecycle</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">A rigorous methodology designed for complex migrations and high-stakes commerce operations.</p>
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
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Enterprise Consultation</p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">Is Your Brand Ready for<br />Shopify Plus?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">Speak with our enterprise strategists to discuss migration paths, headless architecture, and how to scale your brand to the next level.</p>
              <div className="space-y-4 mb-10">
                {["Shopify Plus certified architecture", "Zero-downtime platform migrations", "Hydrogen & Oxygen headless deployment", "Advanced B2B & Wholesale setup"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm text-foreground/70">{item}</span></div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="p-10 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Message Sent</h3>
                  <p className="text-sm text-muted-foreground">Our enterprise account team will reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-background space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Full Name *</label>
                      <input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Work Email *</label>
                      <input required name="email" type="email" placeholder="john@enterprise.com" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Phone Number *</label>
                      <input required name="phone" type="tel" placeholder="+971 50 000 0000" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Company Name</label>
                      <input name="company" type="text" placeholder="Your Brand" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Annual Revenue Range</label>
                    <select name="revenue" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">Select range</option>
                      <option>$1M – $5M</option>
                      <option>$5M – $20M</option>
                      <option>$20M – $50M</option>
                      <option>$50M+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Tell us about your project</label>
                    <textarea name="message" rows={3} placeholder="e.g., Migrating from Magento, launching a headless storefront, B2B wholesale setup..." className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {isSubmitting ? "Submitting..." : "Book Enterprise Consultation"}
                  </button>
                  <p className="text-[11px] text-muted-foreground/50 text-center">By submitting, you agree to our Privacy Policy. Response within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <CrossLinkSection currentPage="shopify-plus" links={["shopify-dev", "shopify-themes", "shopify-apps", "ecommerce", "erp", "cro"]} variant="light" />
      <Footer />
    </div>
  );
};

export default ShopifyPlus;
