"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import CrossLinkSection from "@/components/CrossLinkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WebDevClients from "@/components/web-dev/WebDevClients";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import {
  ArrowRight, CheckCircle, TrendingUp, Zap, ShieldCheck, Clock, Star,
  BarChart3, Rocket, RefreshCw, ShoppingCart, Palette, Settings, Layers,
  Globe, HeadphonesIcon, Award, ChevronRight, MessageCircle, Phone,
  AlertTriangle, Send, Code2, Database, Plug, Search, Server, Lock, Users, Loader2
} from "lucide-react";
import { toast } from "sonner";

const InlineLeadForm = ({ id, variant = "dark" }: { id: string; variant?: "dark" | "light" }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStep1 = (e: React.FormEvent) => { e.preventDefault(); if (email) setStep(2); };
  const handleStep2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("email", email);
    formData.append("source", `Wix Ecommerce - ${id}`);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
      toast.success("Thank you! We'll be in touch within 24 hours!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDark = variant === "dark";
  const inputCls = isDark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : "bg-foreground/5 border-border text-foreground placeholder:text-muted";

  if (submitted) return (
    <div className="flex flex-col items-center gap-3 py-6">
      <CheckCircle className="w-12 h-12 text-primary" />
      <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-foreground"}`}>Thank you!</p>
      <p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our Wix experts will reach out within 24 hours.</p>
    </div>
  );

  return (
    <div className="w-full max-w-md">
      {step === 1 ? (
        <form onSubmit={handleStep1} className="flex flex-col sm:flex-row gap-3">
          <Input type="email" required placeholder="Enter your work email" value={email} onChange={(e) => setEmail(e.target.value)} className={`flex-1 h-12 rounded-full px-5 ${inputCls}`} />
          <Button type="submit" className="h-12 rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 whitespace-nowrap">Get Free Audit <ArrowRight className="w-4 h-4" /></Button>
        </form>
      ) : (
        <form onSubmit={handleStep2} className="flex flex-col gap-3">
          <p className={`text-xs font-medium ${isDark ? "text-white/60" : "text-muted"}`}>Almost there — tell us a bit more:</p>
          <Input required name="name" placeholder="Your name *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input required name="phone" type="tel" placeholder="Phone Number *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input name="company" placeholder="Company / Brand name" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <select name="revenue" required className={`h-11 rounded-lg px-4 text-sm border ${isDark ? "bg-white/10 border-white/20 text-white" : "bg-foreground/5 border-border text-foreground"}`}>
            <option value="">Monthly revenue range</option><option>Under $5K</option><option>$5K – $25K</option><option>$25K – $100K</option><option>$100K+</option>
          </select>
          <Button type="submit" disabled={isSubmitting} className="h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {isSubmitting ? "Submitting..." : "Get My Free Growth Plan"}
          </Button>
        </form>
      )}
    </div>
  );
};

const WixEcommerce = () => {
  const { openContactDialog } = useContactDialog();
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <>
      
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(260,35%,14%)] to-[hsl(280,40%,18%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(260,60%,55%)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <span className="text-[hsl(260,60%,55%)] font-bold">Wix</span> Launch Your D2C Store Fast
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                Launch Fast, Sell Smart with{" "}
                <span className="bg-gradient-to-r from-[hsl(260,60%,60%)] to-[hsl(320,60%,55%)] bg-clip-text text-transparent">Wix E-Commerce</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed">
                The fastest way to launch a professional D2C store. Drag-and-drop design, built-in marketing, and everything you need to start selling — no coding required.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-white/60">
                {["Launch in 2 Weeks", "No Coding Required", "Built-In Marketing", "Wix Studio Ready"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[hsl(260,60%,60%)]" /> {t}</span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}><InlineLeadForm id="hero" variant="dark" /></motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "2 Wks", label: "Average Launch Time", icon: Rocket },
                { value: "0", label: "Code Required", icon: Code2 },
                { value: "All-in-1", label: "Marketing Built-In", icon: BarChart3 },
                { value: "Studio", label: "Professional Design", icon: Palette },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <stat.icon className="w-8 h-8 text-[hsl(260,60%,60%)] mb-3" />
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { val: "120+", label: "Wix Projects Delivered" },
              { val: "$10M+", label: "Client Revenue Generated" },
              { val: "15+", label: "Countries Served" },
              { val: "4.7/5", label: "Client Rating" },
              { val: "2 Wks", label: "Average Launch Time" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl md:text-2xl font-bold text-primary">{s.val}</p>
                <p className="text-xs text-muted mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesSection />
      <WebDevClients />

      {/* WHY WIX */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Why Wix E-Commerce?</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">The Fastest Path from Idea to Revenue</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Palette, title: "Drag-and-Drop Design", desc: "Beautiful, professional stores without writing a single line of code. Full creative freedom with pixel-perfect control." },
              { icon: BarChart3, title: "Built-In Marketing", desc: "Email marketing, SEO tools, social media integration, and Google Ads — all included in one platform." },
              { icon: Zap, title: "Fastest Launch Time", desc: "Go from concept to live store in 2 weeks. Perfect for D2C brands testing product-market fit." },
              { icon: Globe, title: "Wix Multilingual", desc: "Built-in multilingual support for Arabic, Hindi, and 30+ languages. Reach global audiences easily." },
              { icon: ShoppingCart, title: "Integrated Payments", desc: "Accept payments via Wix Payments, PayPal, Stripe, and local gateways. No third-party setup needed." },
              { icon: Rocket, title: "Wix Studio", desc: "Professional-grade design tool for agencies with responsive layouts, custom interactions, and client management." },
            ].map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group">
                <p.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BEST FOR */}
      <section className="py-16 md:py-24 section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Ideal For</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">Who Wix E-Commerce Is Built For</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "D2C Startups", desc: "Launch your brand online in weeks, not months. Test products, build an audience, and scale when ready.", market: "UAE, India, South Africa" },
              { title: "Small Businesses", desc: "Professional online presence with built-in e-commerce. No technical team needed.", market: "Global" },
              { title: "Service + Product", desc: "Businesses selling both services and products benefit from Wix's flexible page builder + commerce combo.", market: "UAE, Europe" },
              { title: "Creative Brands", desc: "Artists, designers, and creators who need beautiful, portfolio-style stores with integrated commerce.", market: "Global" },
            ].map((b) => (
              <motion.div key={b.title} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">{b.desc}</p>
                <p className="text-xs font-semibold text-primary">{b.market}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Our Wix Services</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Professional Wix E-Commerce Solutions</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: ShoppingCart, title: "Store Setup & Design", desc: "Custom Wix stores designed for conversion with professional branding and mobile-first layouts." },
              { icon: Rocket, title: "Wix Studio Builds", desc: "Advanced responsive designs using Wix Studio for pixel-perfect, interaction-rich shopping experiences." },
              { icon: BarChart3, title: "Marketing Setup", desc: "Email campaigns, SEO optimisation, Google Ads integration, and social media selling — all configured." },
              { icon: Globe, title: "Multilingual Setup", desc: "Full multilingual store configuration for Arabic, Hindi, Spanish, and other languages." },
              { icon: RefreshCw, title: "Growth & Migration", desc: "When you outgrow Wix, we migrate you to Shopify or WooCommerce seamlessly.", link: "/migration-services" },
              { icon: HeadphonesIcon, title: "Ongoing Support", desc: "Monthly maintenance, content updates, performance monitoring, and strategic growth advice." },
            ].map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all group">
                <s.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">{s.desc}</p>
                {s.link && <Link href={s.link} className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <ChevronRight className="w-3 h-3" /></Link>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-primary to-[hsl(30,90%,45%)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Ready to Launch Your D2C Brand?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Get a free Wix assessment and launch plan. From idea to live store in 2 weeks.</p>
          <div className="flex justify-center"><InlineLeadForm id="mid" variant="dark" /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">FAQ</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Your Questions, Answered</motion.h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "How much does a professional Wix store cost?", a: "Professional Wix stores start at AED 3,000. Custom Wix Studio builds: AED 5,000–15,000. Advanced implementations: AED 15,000+." },
              { q: "Is Wix good enough for serious e-commerce?", a: "Wix is excellent for D2C brands with under 500 SKUs. For larger catalogs or complex B2B needs, we recommend migrating to Shopify or BigCommerce." },
              { q: "When should I migrate from Wix?", a: "Consider migrating when you exceed 500+ products, need advanced inventory, require multi-channel selling, or your revenue exceeds $50K/month." },
              { q: "Can Wix handle payments in the UAE?", a: "Yes. Wix supports PayPal, Stripe, and various local payment methods. For the UAE specifically, Wix Payments works with major credit cards and we can integrate additional gateways." },
              { q: "What's the difference between Wix and Wix Studio?", a: "Wix is the standard builder. Wix Studio is the professional version for agencies with advanced responsive design, custom animations, and client management tools." },
              { q: "Do you offer migration from Wix to Shopify?", a: "Yes. When you outgrow Wix, we handle the full migration to Shopify, WooCommerce, or BigCommerce with zero data loss and SEO preservation." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground py-4 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted leading-relaxed pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(260,35%,14%)] to-[hsl(280,40%,18%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(260,60%,55%)]/10 blur-[150px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">From Idea to Revenue in 2 Weeks.</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-8">Join 120+ brands that launched with Globify's Wix expertise. Get your free launch plan today.</motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-6"><InlineLeadForm id="final" variant="dark" /></motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-6">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"><Phone className="w-4 h-4" /> Book Strategy Call</Button>
              <a href="https://wa.me/971547308673?text=Hi%20Globify%2C%20I%27m%20interested%20in%20Wix%20e-commerce." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#22c55e] transition-colors" onClick={() => typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'contact_whatsapp')}><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="ecommerce" links={["shopify-dev", "woocommerce-dev", "web-dev", "erp", "digital-marketing", "ai-automation"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </>
  );
};

export default WixEcommerce;
