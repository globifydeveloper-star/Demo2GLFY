"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CaseStudyBreadcrumb from "@/components/CaseStudyBreadcrumb";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import portfolioWilson from "@/assets/portfolio-wilson-new.jpeg";

const techStack = ["Shopify", "Custom Liquid Theme", "Multi-Language (EN/AR)", "RTL Support", "GCC Localization", "Country Switcher", "JavaScript", "SEO Optimization", "Responsive Design", "Performance Optimization"];

const results = [
  { metric: "500K+", label: "Monthly Active Users" },
  { metric: "38%", label: "Conversion Rate Increase" },
  { metric: "2.1s", label: "Average Page Load Time" },
  { metric: "65%", label: "Mobile Revenue Growth" },
];

const CaseStudyWilson = () => {
  const { openContactDialog } = useContactDialog();

  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-[#0a0a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-6 relative">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <CaseStudyBreadcrumb name="Wilson" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">Case Study — E-Commerce</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 font-display">Wilson</h1>
              <p className="text-lg text-white/50 leading-relaxed mb-6">GCC distributor store for the global sports brand — custom Shopify theme replicating Wilson's global site design with full Arabic RTL support, multi-language, and multi-country localization.</p>
              <div className="flex flex-wrap gap-2">
                {["Shopify", "GCC", "E-Commerce", "SEO"].map(tag => (
                  <span key={tag} className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden">
              <img src={portfolioWilson.src} alt="Wilson Sporting Goods GCC e-commerce website" className="w-full h-[350px] object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">The Challenge</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">Bringing a Global Brand to the GCC</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Wilson's local GCC distributor needed a regional Shopify store that faithfully replicated the global brand's premium site design and UI/UX standards. The store had to serve multiple GCC countries, support both English and Arabic languages with full RTL layout, and integrate with regional payment gateways and shipping providers.</p>
              <p className="text-muted-foreground leading-relaxed">Key requirements included maintaining Wilson's global brand consistency while localizing the experience for Arabic-speaking customers — proper RTL typography, mirrored navigation, GCC-specific product catalogs, and country-specific pricing and delivery options.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">The Solution</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">Custom Shopify Theme for GCC Markets</h2>
              <div className="space-y-4">
                {[
                  "Designed and developed a custom Shopify theme that matches Wilson's global site UI/UX, adapted for the GCC market with regional product catalogs and localized content.",
                  "Implemented full bilingual support with English and Arabic, including complete RTL layout, Arabic typography, and mirrored navigation patterns.",
                  "Built a multi-country/region switcher allowing customers to select their GCC country with localized currency, shipping options, and tax settings.",
                  "Integrated GCC-specific payment gateways and regional shipping providers for a seamless checkout experience across the Gulf region.",
                  "Deployed comprehensive technical SEO including structured data, optimized meta tags, and Core Web Vitals improvements for regional search visibility.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Tech Stack</p>
            <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map(tech => (
                <span key={tech} className="px-4 py-2.5 rounded-full text-sm font-medium bg-primary/5 text-foreground border border-border">{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 font-display">Measurable Impact</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((r, i) => (
                <motion.div key={r.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
                  <p className="text-3xl font-bold text-primary font-display mb-1">{r.metric}</p>
                  <p className="text-sm text-white/50">{r.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed italic mb-6">"Globify delivered a Shopify store that perfectly mirrors our global brand while feeling completely natural for our GCC customers. The Arabic experience is flawless and our regional sales have grown significantly."</p>
            <p className="font-semibold text-foreground">Regional Digital Lead</p>
            <p className="text-sm text-muted-foreground">Wilson Sporting Goods — GCC</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Ready to Launch in the GCC?</h2>
            <p className="text-white/40 max-w-lg mx-auto mb-8">Let's build a localized e-commerce experience that matches your global brand standards.</p>
            <button onClick={() => openContactDialog()} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <RelatedCaseStudies current="wilson" />
      <Footer />
    </div>
  );
};

export default CaseStudyWilson;
