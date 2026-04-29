"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import CrossLinkSection from "@/components/CrossLinkSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import {
  ArrowRight, CheckCircle, TrendingUp, Zap, ShieldCheck, Target,
  BarChart3, Rocket, DollarSign, LineChart, MousePointerClick, Eye,
  Globe, Award, Users, ChevronRight, Send, Layers, RefreshCw, Loader2
} from "lucide-react";
import { toast } from "sonner";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ───────── inline lead form ───────── */
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
    formData.append("source", `Performance Marketing - ${id}`);

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

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-6">
        <CheckCircle className="w-12 h-12 text-primary" />
        <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-foreground"}`}>Thank you!</p>
        <p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our performance marketing experts will reach out within 24 hours.</p>
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
          <select name="adspend" required className={`h-11 rounded-lg px-4 text-sm border ${isDark ? "bg-white/10 border-white/20 text-white" : "bg-foreground/5 border-border text-foreground"}`}>
            <option value="">Monthly ad spend range</option>
            <option>Under $5K</option>
            <option>$5K – $20K</option>
            <option>$20K – $100K</option>
            <option>$100K+</option>
          </select>
          <Button type="submit" disabled={isSubmitting} className="h-11 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      )}
    </div>
  );
};

const faq = [
  { question: "What platforms do you advertise on?", answer: "We manage campaigns across Google Ads, Meta (Facebook & Instagram), LinkedIn, TikTok, YouTube, and programmatic display networks. We choose platforms based on your audience and goals." },
  { question: "What's the minimum ad spend you recommend?", answer: "For meaningful results, we recommend a minimum of $3K/month ad spend. However, budgets are customized based on your industry, competition, and growth targets." },
  { question: "How quickly can I expect ROI from paid campaigns?", answer: "PPC campaigns typically show initial results within 1–2 weeks. Optimization for peak ROAS usually takes 6–8 weeks as we gather data and refine targeting." },
  { question: "Do you provide transparent reporting?", answer: "Yes. You get real-time dashboards plus detailed monthly reports covering spend, ROAS, CPA, conversion paths, and strategic recommendations." },
  { question: "Can you manage both B2B and B2C campaigns?", answer: "Absolutely. We run B2B campaigns on LinkedIn and Google, and B2C campaigns across Meta, Google, TikTok, and programmatic — each with tailored strategies." },
];

const services = [
  { icon: Target, title: "Google Ads (PPC)", desc: "Search, Shopping, Display & YouTube campaigns with AI-powered bid optimization for maximum ROAS." },
  { icon: Users, title: "Meta Ads", desc: "Facebook & Instagram advertising with advanced audience segmentation, lookalikes, and dynamic creative." },
  { icon: BarChart3, title: "LinkedIn Ads", desc: "B2B lead generation campaigns targeting decision-makers by title, company, and industry." },
  { icon: Eye, title: "Programmatic Display", desc: "Automated ad buying across premium networks with real-time bidding and contextual targeting." },
  { icon: RefreshCw, title: "Retargeting & Remarketing", desc: "Multi-channel retargeting to recapture lost visitors and drive them back to convert." },
  { icon: LineChart, title: "Analytics & Attribution", desc: "Multi-touch attribution modeling to understand the true ROI of every marketing dollar." },
];

const metrics = [
  { value: "4.8x", label: "Average ROAS" },
  { value: "62%", label: "Lower CPA" },
  { value: "$50M+", label: "Ad Spend Managed" },
  { value: "200+", label: "Campaigns Launched" },
];

const PerformanceMarketing = () => {
  const { openContactDialog } = useContactDialog();

  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(30,40%,12%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="container mx-auto px-6 py-32 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-white mb-6">
              <Target className="w-3.5 h-3.5 text-primary" /> Performance Marketing Agency
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
              Every Dollar<br /><span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Working Harder.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl mb-8" data-speakable>
              We engineer paid media campaigns that maximize ROAS across Google, Meta, LinkedIn & programmatic, backed by AI-powered optimization and transparent reporting.
            </motion.p>
            <motion.div variants={fadeUp}>
              <InlineLeadForm id="hero-perf" variant="dark" />
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 mt-10">
              {metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-2xl font-bold text-primary">{m.value}</p>
                  <p className="text-xs text-white/50">{m.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Performance Marketing Services</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">Full-funnel paid media management from strategy to execution and optimization.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all group">
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Why Brands Choose Us for Paid Media</motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Zap, title: "AI-Powered Optimization", desc: "Machine learning algorithms adjust bids, budgets, and audiences in real-time for peak performance." },
                { icon: ShieldCheck, title: "Full Transparency", desc: "Real-time dashboards, no hidden fees, and direct access to all ad accounts — you own everything." },
                { icon: TrendingUp, title: "Revenue-First Strategy", desc: "We optimize for revenue and profit, not vanity metrics. Every campaign is tied to business outcomes." },
                { icon: Rocket, title: "Rapid Scaling", desc: "Proven frameworks to scale winning campaigns from $5K to $500K+ monthly while maintaining ROAS." },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="flex gap-4">
                  <item.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our 4-Step Process</motion.h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Audit & Strategy", desc: "Deep-dive into your current campaigns, competitors, and market to build a winning strategy." },
              { step: "02", title: "Launch & Test", desc: "Launch campaigns with structured A/B testing across creatives, audiences, and landing pages." },
              { step: "03", title: "Optimize & Scale", desc: "AI-driven optimization of bids, budgets, and targeting. Scale winners, cut losers." },
              { step: "04", title: "Report & Iterate", desc: "Transparent monthly reporting with actionable insights and next-quarter roadmap." },
            ].map((p) => (
              <motion.div key={p.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-4">{p.step}</div>
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">{f.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(30,40%,12%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Maximize Your Ad ROI?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Get a free performance audit and discover how much revenue you're leaving on the table.</p>
          <div className="flex justify-center">
            <InlineLeadForm id="cta-perf" variant="dark" />
          </div>
        </div>
      </section>

      <CrossLinkSection currentPage="performance-marketing" links={["digital-marketing", "seo", "social-media", "ecommerce", "cro"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
};

export default PerformanceMarketing;
