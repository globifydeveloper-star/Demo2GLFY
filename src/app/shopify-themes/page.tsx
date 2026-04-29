"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, Palette, Smartphone, Zap, ShoppingCart, BarChart3, Globe, Layers, Eye, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

import CrossLinkSection from "@/components/CrossLinkSection";

const stats = [
  { value: "300+", label: "Stores Designed" },
  { value: "45%", label: "Avg Conversion Lift" },
  { value: "2.1s", label: "Avg Load Time" },
  { value: "98%", label: "Client Satisfaction" },
];

const services = [
  { icon: Palette, title: "Bespoke Theme Design", desc: "Pixel-perfect storefronts crafted from scratch to match your brand identity, audience behavior, and conversion goals, no cookie-cutter templates." },
  { icon: Smartphone, title: "Mobile-First UX", desc: "70% of e-commerce traffic is mobile. Every theme we build is designed mobile-first with thumb-friendly navigation and lightning-fast checkout." },
  { icon: Zap, title: "Speed Optimization", desc: "Sub-2-second load times through optimized Liquid code, lazy loading, minimal JavaScript, and CDN-ready asset delivery." },
  { icon: ShoppingCart, title: "Conversion-Optimized Checkout", desc: "Streamlined cart and checkout flows with trust signals, urgency elements, and frictionless payment options to maximize AOV." },
  { icon: BarChart3, title: "A/B Testing Integration", desc: "Built-in split-testing capabilities so you can continuously optimize layouts, CTAs, and product pages for higher conversions." },
  { icon: Globe, title: "Multi-Language & Multi-Currency", desc: "Internationalized themes supporting RTL layouts, dynamic currency conversion, and localized content for UAE, India, and global markets." },
];

const process = [
  { step: "01", title: "Brand & UX Audit", desc: "Deep-dive into your brand, competitors, and customer journey to define the design strategy." },
  { step: "02", title: "Wireframes & Prototyping", desc: "Interactive prototypes tested with real users before a single line of code is written." },
  { step: "03", title: "Theme Development", desc: "Custom Liquid + Shopify 2.0 sections built with performance and SEO baked in." },
  { step: "04", title: "QA & Launch", desc: "Cross-browser testing, speed audits, and a guided launch with 30-day post-launch support." },
];

const results = [
  { metric: "3.2x", label: "Conversion Rate Increase", brand: "Fashion D2C brand in UAE" },
  { metric: "68%", label: "Faster Page Load", brand: "Health & wellness Shopify store" },
  { metric: "$2.4M", label: "Revenue in First Year", brand: "Luxury accessories brand launch" },
];

const ShopifyThemes = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("source", "Shopify Custom Themes");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
      toast.success("Quote Requested!", {
        description: "Our design team will reach out within 24 hours.",
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
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">Custom Shopify Themes</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Your Store Deserves More Than a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Template</span>
              </h1>
              <p className="text-lg text-hero-foreground/70 leading-relaxed mb-10 max-w-2xl">
                We design and develop bespoke Shopify storefronts that merge high-end aesthetics with extreme performance. No themes, no shortcuts—just pure conversion power.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                  Request Custom Quote <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#portfolio" className="inline-flex items-center justify-center gap-2 bg-transparent border border-hero-foreground/10 text-hero-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-hero-foreground/5 transition-all">
                  <Eye className="w-4 h-4" /> View Theme Portfolio
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

      {/* Services Grid */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">Why Custom Over Templates?</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">Templates are built for everyone. Our custom themes are built exclusively for your brand, your data, and your specific conversion challenges.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Proof */}
      <section className="py-24 bg-hero-foreground section-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Built for Speed,<br />Designed for Results.</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-lg">We don't just guess what works. We use heatmaps, session recordings, and data analytics to design interfaces that guide users naturally toward the checkout.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {results.map((res) => (
                  <div key={res.label}>
                    <div className="text-2xl font-bold text-primary mb-1">{res.metric}</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider mb-2">{res.label}</div>
                    <div className="text-[11px] text-white/70 font-medium">{res.brand}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4">
                <div className="w-full h-full rounded-lg bg-white/5 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 text-xs font-mono">Theme Performance visualization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">The Roadmap to Launch</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">A structured, data-driven approach to taking your vision from a wireframe to a high-converting Shopify store.</p>
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
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Start Your Custom Theme</p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">Ready for a Store That<br />Actually Converts?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">Tell us about your brand and we'll respond within 24 hours with a theme strategy, conversion roadmap, and transparent pricing.</p>
              <div className="space-y-4 mb-10">
                {["Free UX audit of your current store", "Custom theme mockup within 5 days", "Shopify 2.0 sections & performance guarantee", "30-day post-launch support included"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm text-foreground/70">{item}</span></div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="p-10 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">Our design team will review your requirements and respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-background space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Full Name *</label>
                      <input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Email *</label>
                      <input required name="email" type="email" placeholder="john@brand.com" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" />
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
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Current Shopify Store URL</label>
                    <input name="website" type="url" placeholder="https://yourstore.myshopify.com" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">What's your biggest design challenge?</label>
                    <textarea name="message" rows={3} placeholder="e.g., Low mobile conversions, outdated theme, poor brand consistency..." className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Budget Range</label>
                    <select name="budget" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">Select range</option>
                      <option>$5K – $15K</option>
                      <option>$15K – $30K</option>
                      <option>$30K – $50K</option>
                      <option>$50K+</option>
                    </select>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {isSubmitting ? "Submitting..." : "Get My Custom Theme Quote"}
                  </button>
                  <p className="text-[11px] text-muted-foreground/50 text-center">By submitting, you agree to our Privacy Policy. Response within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <CrossLinkSection currentPage="shopify-themes" links={["shopify-dev", "shopify-plus", "shopify-apps", "ecommerce", "digital-marketing", "cro"]} variant="light" />
      <Footer />
    </div>
  );
};

export default ShopifyThemes;
