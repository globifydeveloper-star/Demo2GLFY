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
import ShopifyPricingPackages from "@/components/shopify/ShopifyPricingPackages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import {
  ArrowRight, CheckCircle, TrendingUp, Zap, Clock,
  BarChart3, Rocket, RefreshCw, ShoppingCart, Palette, Layers,
  Globe, ChevronRight, MessageCircle, Phone,
  Send, Lock, CreditCard, Truck, Languages, Receipt, Loader2
} from "lucide-react";
import { toast } from "sonner";
import shopifyLogo from "@/assets/shopify-logo.png";

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
    formData.append('email', email);
    formData.append('source', `Shopify KSA - ${id}`);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
      toast.success("We'll be in touch within 24 hours!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDark = variant === "dark";
  const inputCls = isDark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : "bg-foreground/5 border-border text-foreground placeholder:text-muted";

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-6">
        <CheckCircle className="w-12 h-12 text-primary" />
        <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-foreground"}`}>Thank you! شكراً</p>
        <p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our Shopify experts will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {step === 1 ? (
        <form onSubmit={handleStep1} className="flex flex-col sm:flex-row gap-3">
          <Input type="email" required placeholder="Enter your work email" value={email} onChange={(e) => setEmail(e.target.value)} className={`flex-1 h-12 rounded-full px-5 ${inputCls}`} />
          <Button type="submit" className="h-12 rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 whitespace-nowrap">
            Get Free Audit <ArrowRight className="w-4 h-4" />
          </Button>
        </form>
      ) : (
        <form onSubmit={handleStep2} className="flex flex-col gap-3">
          <p className={`text-xs font-medium ${isDark ? "text-white/60" : "text-muted"}`}>Almost there — tell us a bit more:</p>
          <Input required name="name" placeholder="Your name *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input required name="phone" type="tel" placeholder="Phone Number *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input name="company" placeholder="Company / Brand name" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <select required name="revenue" className={`h-11 rounded-lg px-4 text-sm border ${isDark ? "bg-white/10 border-white/20 text-white" : "bg-foreground/5 border-border text-foreground"}`}>
            <option value="">Monthly revenue range</option>
            <option>Under SAR 50K</option>
            <option>SAR 50K – SAR 200K</option>
            <option>SAR 200K – SAR 1M</option>
            <option>SAR 1M+</option>
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

const ShopifyKSA = () => {
  const { openContactDialog } = useContactDialog();
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <>
      
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(230,35%,14%)] to-[hsl(240,40%,18%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                Shopify Experts in Saudi Arabia — Globify
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                Scale Your <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Shopify Store</span> in KSA
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed">
                Unlock the massive potential of the Saudi market. We build high-converting Shopify stores with local payment (Mada), logistics, and Arabic optimization.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-white/60">
                {["Mada Integration", "Local Logistics", "Arabic SEO & RTL", "VAT Compliant"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> {t}</span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}><InlineLeadForm id="hero-ksa" variant="dark" /></motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:block relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"><ShoppingCart className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="text-white font-bold">KSA Market Leader</h3>
                    <p className="text-white/40 text-sm">Riyadh, Jeddah, Dammam</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: CreditCard, title: "Mada & Local Payments", desc: "Mada, STC Pay, Apple Pay, Tabby, Tamara." },
                    { icon: Truck, title: "Logistics KSA", desc: "Aramex, SMSA, SPL, DHL integration." },
                    { icon: Languages, title: "Perfect Arabic RTL", desc: "Native Arabic shopping experience." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                      <item.icon className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-white/50">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { val: "120+", label: "KSA Stores Launched" },
              { val: "SAR 100M+", label: "GMV Processed" },
              { val: "Local KSA", label: "Strategy Experts" },
              { val: "4.9/5", label: "Client Rating" },
              { val: "Shopify", label: "Partner Agency" },
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

      {/* WHY SHOPIFY KSA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Why Shopify in KSA?</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Dominating the Saudi E-commerce Market</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Mada & Local Cards", desc: "Native integration for Mada, which is essential for 80%+ of Saudi online transactions." },
              { icon: CreditCard, title: "Buy Now Pay Later", desc: "Expert setup of Tabby and Tamara to increase your AOV by up to 40% in Saudi Arabia." },
              { icon: Languages, title: "Arabic SEO Mastery", desc: "We optimize your store for Saudi search intent, capturing high-intent local traffic." },
              { icon: Truck, title: "Saudi Logistics Ops", desc: "Automated integrations with SPL, Aramex, and SMSA for streamlined last-mile delivery." },
              { icon: BarChart3, title: "Snapchat & TikTok Ads", desc: "Deep tracking integration for the most popular social platforms in the Kingdom." },
              { icon: Lock, title: "ZATCA Compliance", desc: "Ensuring your invoicing and tax reporting are fully compliant with ZATCA regulations." },
            ].map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all group">
                <p.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ShopifyPricingPackages />

      {/* MID CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-primary to-green-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Grow Your Business in the Kingdom?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Join the most successful brands in Riyadh and Jeddah. Get your free Saudi market entry strategy today.</p>
          <div className="flex justify-center"><InlineLeadForm id="mid-ksa" variant="dark" /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">FAQ</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Shopify in Saudi Arabia: FAQ</motion.h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Is Shopify available in Saudi Arabia?", a: "Yes, Shopify is widely used in KSA. It fully supports SAR currency, local payment gateways, and shipping providers." },
              { q: "How do I accept Mada on Shopify?", a: "You can accept Mada via gateways like Checkout.com, Tap, MyFatoorah, or PayTabs. We handle the entire technical integration." },
              { q: "Do you provide Arabic RTL Shopify themes?", a: "Yes, we build bespoke Shopify themes designed specifically for the Saudi market with perfect right-to-left alignment." },
              { q: "Is Shopify ZATCA compliant?", a: "With our custom integration and apps, your Shopify store will generate ZATCA-compliant electronic invoices." },
              { q: "Can I integrate Tabby and Tamara?", a: "Yes, we specialize in integrating BNPL services like Tabby and Tamara which are extremely popular in KSA." },
              { q: "Which shipping companies work with Shopify in KSA?", a: "Major providers like Aramex, SMSA, SPL (Saudi Post), and DHL all have robust Shopify integrations." },
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(230,35%,14%)] to-[hsl(240,40%,18%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-6">Build the Future of Saudi E-commerce</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-10">Don't miss out on the Vision 2030 digital boom. Our KSA-focused Shopify team is here to help you scale.</motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-8"><InlineLeadForm id="final-ksa" variant="dark" /></motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-8 h-12 border-primary text-primary hover:bg-primary hover:text-white gap-2 font-semibold">Book KSA Strategy Call</Button>
              <a href="https://wa.me/971547308673?text=Hi%20Globify%2C%20I%27m%20interested%20in%20Shopify%20development%20in%20Saudi%20Arabia." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-8 h-12 bg-[#25D366] text-white font-semibold hover:bg-[#22c55e] transition-colors" onClick={() => typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'contact_whatsapp')}><MessageCircle className="w-5 h-5" /> WhatsApp KSA Team</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="shopify-ksa" links={["shopify-dev", "shopify-plus", "shopify-themes", "ecommerce", "digital-marketing", "cro"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </>
  );
};

export default ShopifyKSA;
