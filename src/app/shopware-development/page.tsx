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
    formData.append("source", `Shopware Development - ${id}`);

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
      <p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our Shopware experts will reach out within 24 hours.</p>
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
            <option value="">Monthly revenue range</option><option>Under €25K</option><option>€25K – €100K</option><option>€100K – €500K</option><option>€500K+</option>
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

const ShopwareDevelopment = () => {
  const { openContactDialog } = useContactDialog();
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <>
      
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(200,35%,12%)] to-[hsl(195,45%,16%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(195,70%,45%)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <span className="text-[hsl(195,70%,45%)] font-bold">SW</span> Germany's API-First Commerce Platform
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                German-Engineered Commerce with{" "}
                <span className="bg-gradient-to-r from-[hsl(195,70%,50%)] to-[hsl(220,60%,55%)] bg-clip-text text-transparent">Shopware 6</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed">
                The API-first platform dominating the DACH region. Headless-ready, B2B-capable, and built for the complex requirements of German e-commerce.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-white/60">
                {["100K+ Merchants in DACH", "API-First Architecture", "B2B Native", "Headless Ready"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[hsl(195,70%,50%)]" /> {t}</span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}><InlineLeadForm id="hero" variant="dark" /></motion.div>
              <motion.p variants={fadeUp} className="text-xs text-[hsl(195,70%,50%)]/80 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Limited free audits for DACH brands this month</motion.p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "100K+", label: "Merchants in DACH Region", icon: ShoppingCart },
                { value: "API", label: "First Architecture", icon: Code2 },
                { value: "B2B", label: "Native Commerce", icon: Users },
                { value: "GDPR", label: "German Data Standards", icon: ShieldCheck },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <stat.icon className="w-8 h-8 text-[hsl(195,70%,50%)] mb-3" />
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
              { val: "40+", label: "Shopware Projects" },
              { val: "€35M+", label: "Client Revenue Generated" },
              { val: "8+", label: "DACH Markets" },
              { val: "4.9/5", label: "Client Rating" },
              { val: "98%", label: "Client Retention" },
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

      {/* WHY SHOPWARE */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Why Shopware?</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">The DACH Region's Leading Commerce Platform</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted max-w-2xl mx-auto">Shopware 6 combines German engineering precision with modern API-first architecture.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Code2, title: "API-First Architecture", desc: "Full REST and Store API enables headless commerce, custom frontends, and seamless third-party integrations." },
              { icon: Users, title: "Native B2B Suite", desc: "Customer-specific pricing, quote workflows, role-based ordering, company accounts, and bulk order tools." },
              { icon: Layers, title: "Flow Builder", desc: "Visual automation tool for business processes — no coding required. Automate orders, notifications, and workflows." },
              { icon: Globe, title: "Multi-Channel Sales", desc: "Sell across web, marketplace, social, and POS from a single Shopware backend." },
              { icon: ShieldCheck, title: "German Data Standards", desc: "GDPR-first design, data processing agreements, and compliance with German Telemediengesetz (TMG)." },
              { icon: Plug, title: "Rich Plugin Ecosystem", desc: "3,500+ plugins for payments (Klarna, PayPal, Ratepay), shipping (DHL, DPD, Hermes), and marketing." },
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

      {/* SERVICES */}
      <section className="py-16 md:py-24 section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Our Shopware Services</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">End-to-End Shopware 6 Solutions</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: ShoppingCart, title: "Store Build & Launch", desc: "Custom Shopware 6 stores with German-market checkout, local payment gateways, and GDPR compliance." },
              { icon: Code2, title: "Plugin Development", desc: "Custom Shopware plugins for unique business logic, ERP connectors, and workflow automation." },
              { icon: Rocket, title: "Headless Commerce", desc: "Shopware as headless backend with React, Vue, or Next.js frontends for blazing-fast experiences." },
              { icon: Users, title: "B2B Portal Setup", desc: "Full B2B commerce with company accounts, tiered pricing, quote management, and bulk ordering." },
              { icon: RefreshCw, title: "Platform Migration", desc: "Migrate from Magento, WooCommerce, or legacy systems to Shopware 6 with full data preservation." },
              { icon: Layers, title: "ERP Integration", desc: "Connect with SAP, Microsoft Dynamics, Sage, or custom ERP systems for unified operations.", link: "/erp-solutions" },
            ].map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group">
                <s.icon className="w-8 h-8 text-[hsl(195,70%,50%)] mb-4" />
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">{s.desc}</p>
                {s.link && <Link href={s.link} className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <ChevronRight className="w-3 h-3" /></Link>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-primary to-[hsl(30,90%,45%)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Ready to Dominate the DACH Market?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Get a free Shopware assessment and growth strategy for the German-speaking market.</p>
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
              { q: "How much does Shopware development cost?", a: "Community Edition stores start at €5,000 / AED 20,000. Professional with B2B features: €10,000–€30,000. Enterprise implementations: €30,000+." },
              { q: "Is Shopware better than Shopify for Germany?", a: "For businesses focused on the DACH market, Shopware offers deeper German payment/shipping integrations, native B2B features, API-first flexibility, and German data privacy compliance that Shopify can't match." },
              { q: "What's the difference between Shopware editions?", a: "Community is free and open source. Professional adds B2B, CMS storytelling, and advanced rules. Enterprise adds dedicated support, SLA, and custom features." },
              { q: "Can Shopware handle headless commerce?", a: "Yes. Shopware 6 is API-first by design. The Store API and Admin API enable fully headless setups with any frontend framework." },
              { q: "How does Shopware handle German tax requirements?", a: "Shopware natively supports German tax rules including Umsatzsteuer, Kleinunternehmerregelung, and EU OSS for cross-border sales." },
              { q: "Do you provide ongoing Shopware support?", a: "Yes. We offer monthly retainers for updates, security, performance monitoring, plugin management, and growth strategy." },
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(200,35%,12%)] to-[hsl(195,45%,16%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(195,70%,45%)]/10 blur-[150px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">German Engineering Meets Digital Commerce.</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-8">Join 40+ DACH brands that chose Globify for their Shopware implementation. Get your free assessment today.</motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-6"><InlineLeadForm id="final" variant="dark" /></motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-6">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"><Phone className="w-4 h-4" /> Book Strategy Call</Button>
              <a href="https://wa.me/971547308673?text=Hi%20Globify%2C%20I%27m%20interested%20in%20Shopware%20development." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#22c55e] transition-colors" onClick={() => typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'contact_whatsapp')}><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
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

export default ShopwareDevelopment;
