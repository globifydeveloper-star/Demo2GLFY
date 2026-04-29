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
  ArrowRight, CheckCircle, TrendingUp, Zap, ShieldCheck, Search,
  BarChart3, Rocket, FileText, Link2, Code, Bot,
  Globe, Award, Send, Layers, Brain, MessageSquare,
  ExternalLink, Star, Target, AlertTriangle, ArrowUpRight, Loader2
} from "lucide-react";
import { toast } from "sonner";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

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
    formData.append("source", `SEO & AEO - ${id}`);

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
        <p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our SEO experts will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {step === 1 ? (
        <form onSubmit={handleStep1} className="flex flex-col sm:flex-row gap-3">
          <Input type="email" required placeholder="Enter your work email" value={email} onChange={(e) => setEmail(e.target.value)} className={`flex-1 h-12 rounded-full px-5 ${inputCls}`} />
          <Button type="submit" className="h-12 rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 whitespace-nowrap">
            Free SEO Audit <ArrowRight className="w-4 h-4" />
          </Button>
        </form>
      ) : (
        <form onSubmit={handleStep2} className="flex flex-col gap-3">
          <p className={`text-xs font-medium ${isDark ? "text-white/60" : "text-muted"}`}>Almost there — tell us a bit more:</p>
          <Input required name="name" placeholder="Your name *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input required name="phone" type="tel" placeholder="Phone Number *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input required name="website" placeholder="Website URL *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <select name="traffic" required className={`h-11 rounded-lg px-4 text-sm border ${isDark ? "bg-white/10 border-white/20 text-white" : "bg-foreground/5 border-border text-foreground"}`}>
            <option value="">Current monthly organic traffic</option>
            <option>Under 1K visitors</option>
            <option>1K – 10K visitors</option>
            <option>10K – 100K visitors</option>
            <option>100K+ visitors</option>
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
  { question: "What is Answer Engine Optimization (AEO)?", answer: "AEO is the practice of optimizing your content to be featured as direct answers by AI-powered search engines like ChatGPT, Claude, Perplexity, and Google's AI Overview. It involves structured data, Speakable schema, and content formatting that AI systems can easily parse and cite." },
  { question: "How long does SEO take to show results?", answer: "Technical SEO improvements can show results in 4–8 weeks. Content-driven organic growth typically takes 3–6 months for meaningful rankings. AEO results depend on the AI engine's indexing schedule but often surface within 2–4 months." },
  { question: "Do you guarantee first-page rankings?", answer: "No ethical SEO provider can guarantee specific rankings. We focus on sustainable, white-hat strategies that build long-term authority. Our track record shows consistent ranking improvements across competitive keywords." },
  { question: "What's the difference between SEO and AEO?", answer: "Traditional SEO optimizes for Google's organic results (blue links). AEO goes further, optimizing for AI assistants (ChatGPT, Perplexity, Gemini) that directly answer user questions, cite sources, and recommend brands." },
  { question: "Do you handle both local and international SEO?", answer: "Yes. We specialize in local SEO (Google Business Profile, local citations) for UAE/India markets and international SEO (hreflang, multi-language content) for global reach." },
  { question: "What is ZenoCrawl AI?", answer: "ZenoCrawl AI is Globify Labs' proprietary SEO & AEO audit tool that scans your website across 18+ SEO factors in under 60 seconds, including AEO readiness scoring. It provides priority-ranked fixes and actionable recommendations to boost organic traffic and AI visibility." },
];

const services = [
  { icon: Code, title: "Technical SEO", desc: "Core Web Vitals, site architecture, crawlability, schema markup, and performance optimization." },
  { icon: FileText, title: "Content Strategy", desc: "Keyword research, topic clusters, pillar pages, and editorial calendars that drive organic traffic." },
  { icon: Link2, title: "Link Building", desc: "White-hat outreach, digital PR, and authority building through high-quality backlinks." },
  { icon: Bot, title: "Answer Engine Optimization", desc: "Speakable schema, JSON-LD, FAQ markup, and content structuring for ChatGPT, Perplexity & Google AI." },
  { icon: Globe, title: "Local & International SEO", desc: "Google Business Profile, local citations, hreflang tags, and multi-market keyword strategies." },
  { icon: BarChart3, title: "SEO Analytics & Reporting", desc: "Rank tracking, traffic analysis, conversion attribution, and competitive intelligence dashboards." },
];

const metrics = [
  { value: "340%", label: "Avg. Organic Traffic Growth" },
  { value: "2,500+", label: "Keywords Ranked Page 1" },
  { value: "95%", label: "AEO Citation Rate" },
  { value: "180+", label: "Sites Optimized" },
];

const caseStudies = [
  {
    client: "TechFlow SaaS",
    industry: "SaaS",
    challenge: "Declining organic traffic and zero AI search visibility despite heavy content investment.",
    results: [
      { metric: "174%", label: "Organic Traffic Increase" },
      { metric: "4,600%", label: "AI Citations Growth" },
      { metric: "Top 3", label: "Rankings for 45 Keywords" },
    ],
    quote: "ZenoCrawl AI found 23 technical issues we had no idea existed. Fixed them in a week and saw a 28% increase in organic traffic within a month.",
    author: "Sarah Mitchell",
    role: "Head of Marketing",
  },
  {
    client: "Growth Labs Agency",
    industry: "Digital Agency",
    challenge: "Managing 15+ client SEO accounts with no AI optimization strategy.",
    results: [
      { metric: "6/10", label: "ChatGPT Queries Featured" },
      { metric: "340%", label: "Avg. Client Traffic Lift" },
      { metric: "85%", label: "Client Retention Rate" },
    ],
    quote: "The AEO score was a game-changer. We optimized our content for AI engines and now appear in 6 out of 10 ChatGPT recommendation queries.",
    author: "James Chen",
    role: "SEO Director",
  },
  {
    client: "Digital Compass",
    industry: "E-Commerce",
    challenge: "Product pages not ranking and missing from AI-powered shopping recommendations.",
    results: [
      { metric: "220%", label: "Revenue from Organic" },
      { metric: "3,280%", label: "Organic Visit Growth" },
      { metric: "58%", label: "Bounce Rate Reduction" },
    ],
    quote: "Managing 15+ client sites used to be chaos. ZenoCrawl AI lets us monitor everything in one place and catch issues before clients even notice.",
    author: "Priya Sharma",
    role: "Founder",
  },
];

const outcomes = [
  { icon: TrendingUp, metric: "3.2x", label: "Average ROI", desc: "For every $1 spent on SEO, our clients see $3.20 in organic revenue returns." },
  { icon: Target, metric: "67%", label: "Cost Per Lead Reduction", desc: "SEO-driven leads cost 67% less than paid acquisition channels." },
  { icon: Rocket, metric: "94+", label: "Avg. SEO Score", desc: "Our clients' ZenoCrawl AI scores average 94+ after optimization." },
  { icon: Star, metric: "40%", label: "AI Search Share", desc: "40% of searches now happen in AI engines — we make sure you're visible." },
];

const SeoAeo = () => {
  const { openContactDialog } = useContactDialog();

  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(200,40%,12%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(200,60%,40%)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="container mx-auto px-6 py-32 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-white mb-6">
              <Search className="w-3.5 h-3.5 text-primary" /> SEO & AEO Agency
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
              Rank Everywhere<br /><span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Humans & AI Search.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl mb-8" data-speakable>
              We optimize your digital presence for Google, ChatGPT, Perplexity, and every AI-powered search engine, so your brand is the answer, not just a result.
            </motion.p>
            <motion.div variants={fadeUp}>
              <InlineLeadForm id="hero-seo" variant="dark" />
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

      {/* ── ROI OUTCOMES BAR ── */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((o) => (
              <motion.div key={o.label} variants={fadeUp} className="text-center">
                <o.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground mb-1">{o.metric}</p>
                <p className="text-sm font-semibold text-foreground mb-1">{o.label}</p>
                <p className="text-xs text-muted-foreground">{o.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SEO vs AEO ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">SEO vs. AEO, Why You Need Both</motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-card border border-border rounded-2xl p-8">
              <Search className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Traditional SEO</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Rank in Google's organic blue links</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Drive clicks from search results</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Build domain authority over time</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Target intent-based keywords</li>
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-card border border-primary/20 rounded-2xl p-8 ring-1 ring-primary/10">
              <Brain className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Answer Engine Optimization</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Be cited by ChatGPT, Perplexity & Claude</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Featured in Google AI Overviews</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Speakable schema & JSON-LD markup</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Future-proof your organic presence</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <CaseStudiesSection />
      <WebDevClients />

      {/* ── SERVICES ── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our SEO & AEO Services</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">Comprehensive search optimization for both traditional and AI-powered search engines.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all group">
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ZENOCRAWL AI — GLOBIFY LABS PRODUCT ── */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(20,60%,15%)]" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-bold text-primary tracking-wider uppercase mb-6">
              <Rocket className="w-3.5 h-3.5" /> Globify Labs Product
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
              ZenoCrawl <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">AI</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 max-w-2xl mx-auto text-lg">
              Get your SEO & AEO score in 60 seconds. Discover why your website is losing traffic, leads, and AI visibility.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              { step: "01", title: "Enter Your URL", desc: "Paste your website URL and click scan. No signup needed for your first audit.", icon: Globe },
              { step: "02", title: "18+ SEO Checks Run", desc: "Technical SEO, on-page optimization, performance signals, and AEO readiness — all in under 60 seconds.", icon: Search },
              { step: "03", title: "Get Prioritized Fixes", desc: "Receive a report with issues ranked by impact on your traffic. Know exactly what to fix first.", icon: BarChart3 },
            ].map((s) => (
              <motion.div key={s.step} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary font-bold text-sm flex items-center justify-center mx-auto mb-4">{s.step}</div>
                <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/50">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
 
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-4 gap-6 mb-14">
            {[
              { metric: "300+", label: "Projects Delivered" },
              { metric: "18+", label: "SEO Checks Per Audit" },
              { metric: "12+", label: "Years of SEO Excellence" },
              { metric: "120+", label: "Countries Served" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-white/5 border border-white/10 rounded-xl py-6 px-4">
                <p className="text-2xl font-bold text-primary mb-1">{s.metric}</p>
                <p className="text-xs text-white/50">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base font-bold gap-2">
              <a href="https://seo.globify.ae/" target="_blank" rel="noopener noreferrer">
                Try ZenoCrawl AI — Free Audit <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <p className="text-white/40 text-xs mt-3">Free instant scan · No signup required · AEO readiness included</p>
          </motion.div>
        </div>
      </section>

      {/* ── SEO CASE STUDIES / TESTIMONIALS ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Proven Results</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">SEO & AEO Success Stories</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">Real clients, real numbers. See how our SEO & AEO strategies delivered measurable growth.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <motion.div key={cs.client} variants={fadeUp} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">{cs.industry}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{cs.client}</h3>
                <p className="text-sm text-muted-foreground mb-6">{cs.challenge}</p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {cs.results.map((r) => (
                    <div key={r.label} className="text-center">
                      <p className="text-lg font-bold text-primary">{r.metric}</p>
                      <p className="text-[10px] text-muted-foreground leading-tight">{r.label}</p>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-2 border-primary/30 pl-4 mb-4">
                  <p className="text-sm text-muted-foreground italic">"{cs.quote}"</p>
                </blockquote>
                <p className="text-xs text-foreground font-semibold">{cs.author}</p>
                <p className="text-xs text-muted-foreground">{cs.role}, {cs.client}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── DIGITAL MARKETING CROSS-LINK ── */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="flex-1">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Full-Funnel Growth</p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                SEO Is Just the Beginning.
              </h3>
              <p className="text-muted-foreground max-w-lg">
                Combine SEO & AEO with paid advertising, social media, CRO, and performance marketing for a complete digital growth engine. Our Digital Marketing team builds full-funnel strategies that compound results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 gap-2">
                <Link href="/digital-marketing">
                  Explore Digital Marketing <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2">
                <a href="https://seo.globify.ae/" target="_blank" rel="noopener noreferrer">
                  Free SEO Audit <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our SEO & AEO Process</motion.h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Audit & Research", desc: "Comprehensive technical audit, keyword research, competitor analysis, and AEO readiness assessment." },
              { step: "02", title: "Strategy & Roadmap", desc: "Prioritized action plan covering technical fixes, content opportunities, and AEO implementation." },
              { step: "03", title: "Execute & Optimize", desc: "Implement technical SEO, publish content, build links, deploy schema, and optimize for AI engines." },
              { step: "04", title: "Monitor & Scale", desc: "Track rankings, AI citations, traffic growth. Iterate strategy based on data." },
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(200,40%,12%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Dominate Search — Traditional & AI?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Get a free SEO & AEO audit and discover untapped ranking opportunities.</p>
          <div className="flex justify-center">
            <InlineLeadForm id="cta-seo" variant="dark" />
          </div>
        </div>
      </section>

      <CrossLinkSection currentPage="seo-aeo" links={["digital-marketing", "paid-ads", "social-media", "ai-automation", "cro"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
};

export default SeoAeo;
