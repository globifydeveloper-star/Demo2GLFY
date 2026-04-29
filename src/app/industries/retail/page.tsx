"use client";

import { useState } from "react";
import CrossLinkSection from "@/components/CrossLinkSection";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, ShoppingCart, Store, Smartphone, BarChart3, Users, Zap, Eye, Package, Truck, Brain, Shield, TrendingUp, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";


const stats = [
  { value: "300+", label: "AI-Powered Retail Projects" },
  { value: "$200M+", label: "Revenue Engineered" },
  { value: "3.2x", label: "Avg Conversion Lift" },
  { value: "45%", label: "Customer Retention Gain" },
];

const solutions = [
  { icon: ShoppingCart, title: "AI-Powered D2C Stores", desc: "Intelligent storefronts with AI product recommendations, dynamic pricing, and predictive search that lift conversion by 3.2x." },
  { icon: Store, title: "Autonomous Omnichannel", desc: "AI-unified online + offline experiences with predictive inventory allocation, smart POS, and autonomous replenishment." },
  { icon: Package, title: "Intelligent Marketplace Hub", desc: "AI-optimized multi-marketplace selling on Amazon, Noon, and Flipkart with automated pricing, listing, and fulfillment." },
  { icon: Brain, title: "Predictive Personalization", desc: "Deep learning customer models that predict purchase intent, personalize experiences in real-time, and increase AOV by 35%." },
  { icon: Truck, title: "AI-Optimized Fulfillment", desc: "Machine learning demand forecasting, automated order routing, and predictive logistics that cut delivery costs by 30%." },
  { icon: TrendingUp, title: "Revenue Intelligence Engine", desc: "AI-powered attribution, predictive LTV modeling, and automated campaign optimization that maximizes ROAS across all channels." },
];

const whyGlobify = [
  { icon: TrendingUp, title: "Revenue Engineering Mindset", desc: "Every AI model and automation is optimized for revenue impact, conversion lift, AOV increase, and customer lifetime value growth." },
  { icon: Brain, title: "Retail AI at Scale", desc: "We've deployed AI personalization, demand forecasting, and dynamic pricing across 300+ retail brands with proven ROI." },
  { icon: Users, title: "AI-Enhanced Shopper UX", desc: "Intelligent interfaces that predict what shoppers want before they search — visual search, smart filters, and conversational commerce." },
  { icon: Zap, title: "Rapid AI Deployment", desc: "Launch AI-powered features in weeks with pre-trained retail models, proven recommendation engines, and battle-tested architectures." },
  { icon: BarChart3, title: "Predictive Analytics Dashboard", desc: "Real-time revenue intelligence, AI-powered demand sensing, and predictive inventory alerts that prevent stockouts and overstock." },
  { icon: Eye, title: "Global AI Commerce", desc: "Multi-market AI models trained on local shopping behavior, optimized for UAE, India, Europe, and 25+ countries." },
];

const IndustryRetail = () => {
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
      toast.success("Audit Requested!", {
        description: "Our retail team will respond within 24 hours.",
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
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">AI-Powered Retail</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Intelligent Commerce{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">That Predict, Personalizes & Scales</span>
              </h1>
              <p className="text-hero-foreground/50 text-lg leading-relaxed mb-8 max-w-2xl">
                AI-powered personalization, predictive inventory, and autonomous fulfillment, engineering 3.2x conversion lifts and $200M+ in revenue for retail brands worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                  Get Your AI Retail Assessment <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["3.2x Conversion Lift", "Predictive Personalization", "AI Demand Forecasting"].map((item) => (
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
            <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">Intelligent Retail Platforms<br />That Predict & Convert</h2>
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
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Why Globify for Retail AI?</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">Your AI Revenue Engineering<br />Partner in Retail</h2>
            <p className="text-hero-foreground/40 text-sm max-w-2xl mx-auto">We combine deep retail expertise with production AI, building intelligent commerce experiences that predict demand and maximize revenue.</p>
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
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">Ready for AI-Powered<br />Retail Transformation?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">Get a free AI Commerce Audit, we'll identify personalization and automation opportunities that could lift revenue by 30-50%.</p>
              <div className="space-y-4">
                {["Free AI commerce audit & opportunity map", "Personalization ROI projection", "Predictive inventory assessment", "Transparent pricing, no hidden fees"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm text-foreground/70">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="p-10 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">Our retail team will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-card space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Full Name *</label><input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Brand Name</label><input name="company" type="text" placeholder="Your Brand" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Email Address *</label><input required name="email" type="email" placeholder="john@brand.com" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Phone Number *</label><input required name="phone" type="tel" placeholder="+971 50 000 0000" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  </div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Business Type *</label>
                    <select required name="projectType" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">Select type</option><option>D2C Brand</option><option>Omnichannel Retailer</option><option>Marketplace Seller</option><option>Brick & Mortar</option><option>Startup</option><option>Other</option>
                    </select>
                  </div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Growth Goals</label><textarea name="message" rows={3} placeholder="What are your main retail goals?" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none" /></div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {isSubmitting ? "Submitting..." : "Get Your Free Retail Audit"}
                  </button>
                  <p className="text-[11px] text-muted-foreground/50 text-center">By submitting, you agree to our Privacy Policy. We'll respond within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <CrossLinkSection currentPage="retail" links={["ai-framework", "cro", "supply-chain", "manufacturing", "saas"]} />
      <Footer />
    </div>
  );
};

export default IndustryRetail;
