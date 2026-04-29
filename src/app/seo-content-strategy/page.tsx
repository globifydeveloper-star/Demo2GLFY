"use client";

import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrossLinkSection from "@/components/CrossLinkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WebDevClients from "@/components/web-dev/WebDevClients";

import { motion } from "framer-motion";
import { ArrowRight, Search, FileText, Link2, MapPin, TrendingUp, BarChart3, CheckCircle2, Bot, MessageSquare, Zap, Globe, BrainCircuit, Layers, ExternalLink, Rocket, Target, Star, Settings, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "300%", label: "Avg Organic Traffic Increase" },
  { value: "Top 3", label: "Google Rankings Achieved" },
  { value: "5x", label: "Content ROI Improvement" },
  { value: "60%", label: "Reduction in Paid Dependency" },
];

const seoServices = [
  { icon: Search, title: "Technical SEO Audit & Optimization", desc: "Site speed, Core Web Vitals, crawlability, indexation fixes, schema markup, and mobile-first optimization that lays the foundation for rankings." },
  { icon: FileText, title: "Content Strategy & Creation", desc: "Keyword-mapped content calendars, pillar pages, blog articles, and thought leadership pieces that attract, educate, and convert your ideal customers." },
  { icon: Link2, title: "Link Building & Digital PR", desc: "White-hat link acquisition through guest posting, HARO, digital PR campaigns, and strategic partnerships that build domain authority." },
  { icon: MapPin, title: "Local SEO & Google Business", desc: "Google Business Profile optimization, local citations, review management, and geo-targeted content for multi-location businesses." },
  { icon: TrendingUp, title: "On-Page & Conversion SEO", desc: "Title tags, meta descriptions, internal linking, CTA optimization, and content structure improvements that turn traffic into leads." },
  { icon: BarChart3, title: "SEO Analytics & Reporting", desc: "Monthly ranking reports, traffic analysis, competitor tracking, and ROI attribution dashboards with actionable recommendations." },
];

const aeoServices = [
  { icon: Bot, title: "AI Answer Optimization", desc: "Structure your content to be cited by ChatGPT, Claude, Perplexity, and Google AI Overviews, becoming the authoritative answer AI engines reference." },
  { icon: MessageSquare, title: "Conversational Content Design", desc: "Create content formatted for natural language queries, FAQ schemas, concise answer blocks, and structured data that AI assistants prefer." },
  { icon: BrainCircuit, title: "Knowledge Graph Optimization", desc: "Build entity relationships, structured data markup, and topical authority signals that help AI models understand and recommend your brand." },
  { icon: Layers, title: "Speakable & Structured Schema", desc: "Implement Speakable schema, HowTo, FAQ, Article, and custom JSON-LD markup optimized for voice assistants and AI-powered search." },
  { icon: Globe, title: "AI Crawler Access & Indexing", desc: "Configure robots.txt, AI crawler allow-listing, and sitemap strategies that ensure your content is discoverable by AI search engines." },
  { icon: Zap, title: "AEO Performance Tracking", desc: "Monitor AI citation frequency, featured snippet ownership, zero-click visibility, and answer engine rankings with custom dashboards." },
];

const process = [
  { step: "01", title: "SEO & AEO Audit", desc: "Comprehensive technical, on-page, competitive, and AI-readiness analysis to identify gaps and opportunities." },
  { step: "02", title: "Keyword & Intent Research", desc: "Intent-mapped keyword strategy targeting high-value terms across search engines and AI answer platforms." },
  { step: "03", title: "Content Roadmap", desc: "Strategic content calendar with topic clusters, pillar pages, and AI-optimized answer content." },
  { step: "04", title: "Implementation", desc: "Technical fixes, content creation, schema markup, on-page optimization, and link building execution." },
  { step: "05", title: "Measure & Scale", desc: "Monthly reporting on organic growth, AI citations, and strategy refinement to maximize visibility." },
];

const SEOContentStrategy = () => {
  return (
    <div className="min-h-screen">
      
      <Navbar />

      <section className="relative bg-hero pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">SEO, AEO & Content Strategy</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-hero-foreground leading-[1.08] mb-6">
              Organic Growth<br />That Compounds<br />Over Time
            </h1>
            <p className="text-hero-foreground/50 text-lg max-w-xl leading-relaxed mb-8">
              Stop renting traffic. Build a sustainable organic engine that delivers qualified leads month after month, with compounding returns.
            </p>
            <a href="https://seo.globify.ae/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:gap-3">
              Get a Free SEO Audit <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <div className="w-full h-px bg-primary" />

      {/* Stats */}
      <section className="bg-hero">
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

      <div className="w-full h-px bg-primary" />

      {/* Services */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">End-to-End SEO &<br />Content Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {seoServices.map((s, i) => (
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

      <div className="w-full h-px bg-primary" />

      {/* AEO Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Answer Engine Optimization</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">Get Cited by AI,<br />Not Just Indexed by Google</h2>
            <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
              AI search engines like ChatGPT, Perplexity, and Google AI Overviews are reshaping how people find answers. AEO ensures your brand is the source AI models trust and recommend.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aeoServices.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group p-6 rounded-2xl border border-border hover:border-primary/20 hover:bg-muted/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-primary" />

      {/* SEO vs AEO Comparison */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">SEO + AEO</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">Why You Need Both<br />SEO & AEO</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="p-8 rounded-2xl border border-hero-foreground/[0.06] bg-hero-foreground/[0.02]">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-hero-foreground mb-3">Traditional SEO</h3>
              <ul className="space-y-3">
                {["Rank on Google, Bing & Yahoo", "Drive organic traffic to your website", "Build domain authority over time", "Target keyword-based searches", "Optimize for clicks & CTR"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-hero-foreground/50">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="p-8 rounded-2xl border border-primary/20 bg-primary/[0.04]">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-hero-foreground mb-3">Answer Engine Optimization</h3>
              <ul className="space-y-3">
                {["Get cited by ChatGPT, Claude & Perplexity", "Appear in AI Overviews & featured snippets", "Become the trusted source AI recommends", "Target conversational & intent-based queries", "Future-proof for zero-click search"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-hero-foreground/50">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center text-hero-foreground/40 text-sm max-w-2xl mx-auto mt-10">
            SEO brings traffic. AEO builds authority. Together, they ensure your brand dominates both traditional search and the AI-powered future of discovery.
          </motion.p>
        </div>
      </section>

      <div className="w-full h-px bg-primary" />

      {/* Case Studies & Clients */}
      <CaseStudiesSection />
      <WebDevClients />

      {/* ── ZENOCRAWL AI — GLOBIFY LABS PRODUCT ── */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(20,60%,15%)]" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-bold text-primary tracking-wider uppercase mb-6">
              <Rocket className="w-3.5 h-3.5" /> Globify Labs Product
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              ZenoCrawl <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">AI</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Get your SEO & AEO score in 60 seconds. Discover why your website is losing traffic, leads, and AI visibility.
            </p>
            <p className="text-white/40 text-sm mt-3 max-w-xl mx-auto">
              AI Search Ready for ChatGPT · Google Gemini · Perplexity · Claude · Copilot
            </p>
          </motion.div>

          {/* Problem / Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-xs font-bold tracking-widest uppercase text-red-400 mb-3">The Problem</p>
              <h3 className="text-xl font-bold text-white mb-4">Search Is Shifting to AI.<br />And You're Invisible.</h3>
              <p className="text-white/50 text-sm mb-4">40% of searches now happen in AI engines. Your competitors appear in ChatGPT, Gemini, and Perplexity answers — you don't.</p>
              <ul className="space-y-2 text-sm text-white/50">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Missing meta tags and broken links kill your rankings</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> AI search engines skip content without structured data</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Every second of delay costs 7% in conversions</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white/5 border border-primary/20 rounded-2xl p-8">
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">The Solution</p>
              <h3 className="text-xl font-bold text-white mb-4">AI-Powered Audits That<br />Actually Fix Things</h3>
              <p className="text-white/50 text-sm mb-4">Get a comprehensive SEO & AEO analysis with actionable recommendations ranked by impact.</p>
              <ul className="space-y-2 text-sm text-white/50">
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Scans 150+ SEO factors including technical, on-page & AEO</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Priority-ranked issues so you fix what matters most first</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Actionable recommendations you can implement immediately</li>
              </ul>
            </motion.div>
          </div>

          {/* How It Works */}
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              { step: "01", title: "Enter Your URL", desc: "Paste your website URL and click scan. No signup needed for your first audit.", icon: Globe },
              { step: "02", title: "We Analyze Everything", desc: "150+ SEO checks run in under 60 seconds, including AEO readiness scoring.", icon: Search },
              { step: "03", title: "Get Actionable Results", desc: "Receive a prioritized report with fixes ranked by impact on your traffic.", icon: BarChart3 },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary font-bold text-sm flex items-center justify-center mx-auto mb-4">{s.step}</div>
                <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/50">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* 4 Core Features */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Everything You Need to Dominate Search</h3>
            <p className="text-white/50 text-sm mt-2">Comprehensive SEO analysis powered by AI — built for every growth team.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { title: "Technical SEO Audit", desc: "HTTPS, redirects, canonical tags, robots.txt, and sitemap analysis.", icon: Settings },
              { title: "On-Page Optimization", desc: "Title tags, meta descriptions, heading structure, and image alt tags.", icon: FileText },
              { title: "Performance Signals", desc: "Page size, load time indicators, and mobile responsiveness checks.", icon: Zap },
              { title: "AEO Readiness", desc: "Schema markup, FAQ structure, and AI search optimization analysis.", icon: Brain },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-primary/20 transition-all">
                <f.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <h4 className="text-sm font-bold text-white mb-1.5">{f.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Built For */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { title: "SaaS Marketers", desc: "Monitor product pages, track AI citations, and prove marketing ROI fast." },
              { title: "Growth Agencies", desc: "Multi-client command center. White-label reports. AI + traditional SEO." },
              { title: "E-commerce Brands", desc: "Monitor product pages, schemas, and feeds. Rank in Google and ChatGPT." },
              { title: "Content-Led Companies", desc: "Large-site audits. AI citation tracking. Content performance intel." },
            ].map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <h4 className="text-sm font-bold text-primary mb-1.5">{t.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {[
              { metric: "Free", label: "Instant Scan" },
              { metric: "150+", label: "SEO Checks" },
              { metric: "AEO", label: "Readiness Included" },
              { metric: "300+", label: "Projects Delivered" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-white/5 border border-white/10 rounded-xl py-6 px-4">
                <p className="text-2xl font-bold text-primary mb-1">{s.metric}</p>
                <p className="text-xs text-white/50">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base font-bold gap-2">
              <a href="https://seo.globify.ae/" target="_blank" rel="noopener noreferrer">
                Try ZenoCrawl AI — Free Audit <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <p className="text-white/40 text-xs mt-3">Free instant scan · No signup required · AEO readiness included</p>
          </div>
        </div>
      </section>

      {/* ── SEO CASE STUDIES / TESTIMONIALS ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Proven Results</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">SEO & AEO Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Real clients, real numbers. See how our SEO & AEO strategies delivered measurable growth.</p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                industry: "SaaS", client: "TechFlow SaaS",
                challenge: "Declining organic traffic and zero AI search visibility despite heavy content investment.",
                results: [{ metric: "174%", label: "Organic Traffic Increase" }, { metric: "4,600%", label: "AI Citations Growth" }, { metric: "Top 3", label: "Rankings for 45 Keywords" }],
                quote: "ZenoCrawl AI found 23 technical issues we had no idea existed. Fixed them in a week and saw a 28% increase in organic traffic within a month.",
                author: "Sarah Mitchell", role: "Head of Marketing",
              },
              {
                industry: "Agency", client: "Growth Labs Agency",
                challenge: "Managing 15+ client SEO accounts with no AI optimization strategy.",
                results: [{ metric: "6/10", label: "ChatGPT Queries Featured" }, { metric: "340%", label: "Avg. Client Traffic Lift" }, { metric: "85%", label: "Client Retention Rate" }],
                quote: "The AEO score was a game-changer. We optimized our content for AI engines and now appear in 6 out of 10 ChatGPT recommendation queries.",
                author: "James Chen", role: "SEO Director",
              },
              {
                industry: "E-Commerce", client: "Digital Compass",
                challenge: "Product pages not ranking and missing from AI-powered shopping recommendations.",
                results: [{ metric: "220%", label: "Revenue from Organic" }, { metric: "3,280%", label: "Organic Visit Growth" }, { metric: "58%", label: "Bounce Rate Reduction" }],
                quote: "ZenoCrawl AI lets us monitor everything in one place and catch issues before clients even notice.",
                author: "Priya Sharma", role: "Founder",
              },
            ].map((cs) => (
              <motion.div key={cs.client} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all">
                <span className="text-xs font-bold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">{cs.industry}</span>
                <h3 className="text-xl font-bold text-foreground mt-4 mb-2">{cs.client}</h3>
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
          </div>
        </div>
      </section>

      {/* ── DIGITAL MARKETING CROSS-LINK ── */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="flex-1">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Full-Funnel Growth</p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">SEO Is Just the Beginning.</h3>
              <p className="text-muted-foreground max-w-lg">
                Combine SEO & AEO with paid advertising, social media, CRO, and performance marketing for a complete digital growth engine.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 gap-2">
                <Link href="/digital-marketing">Explore Digital Marketing <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2">
                <a href="https://seo.globify.ae/" target="_blank" rel="noopener noreferrer">Free SEO Audit <ExternalLink className="w-4 h-4" /></a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Our SEO Process</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1]">From Audit to<br />Organic Dominance</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-6 items-start p-6 rounded-2xl border border-border hover:border-primary/20 transition-colors">
                <span className="text-3xl font-bold text-primary/30">{p.step}</span>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="lead-capture" className="py-24 bg-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">Get Your Free<br />SEO Audit</h2>
              <p className="text-hero-foreground/40 text-sm mb-8">Discover exactly what's holding your organic growth back, and how to fix it.</p>
              <a href="https://seo.globify.ae/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:gap-3">
                Get My Free Audit <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <CrossLinkSection currentPage="seo" links={["digital-marketing", "paid-ads", "social-media", "web-dev", "ecommerce", "cro"]} variant="light" />
      <Footer />
    </div>
  );
};

export default SEOContentStrategy;
