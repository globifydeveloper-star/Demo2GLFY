"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CaseStudyBreadcrumb from "@/components/CaseStudyBreadcrumb";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import portfolioMoher from "@/assets/portfolio-moher.jpeg";

const techStack = ["Shopify", "Custom Liquid Theme", "Branding & Identity", "Performance Marketing", "Google Ads", "Meta Ads", "Email Marketing", "Analytics"];

const results = [
  { metric: "45%", label: "Bounce Rate Reduction" },
  { metric: "210%", label: "Online Revenue Growth" },
  { metric: "3.8x", label: "ROAS on Paid Campaigns" },
  { metric: "60%", label: "Repeat Customer Rate" },
];

const CaseStudyMoher = () => {
  const { openContactDialog } = useContactDialog();

  return (
    <div className="min-h-screen">
      
      <Navbar />

      <section className="pt-28 pb-16 bg-[#0a0a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-6 relative">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"><ArrowLeft className="w-4 h-4" /> Back to Projects</Link>
          <CaseStudyBreadcrumb name="Moher" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">Case Study — E-Commerce</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 font-display">Moher</h1>
              <p className="text-lg text-white/50 leading-relaxed mb-6">Multi-brand fashion retailer's complete digital overhaul — from fragmented brand identity to a unified Shopify storefront with integrated performance marketing.</p>
              <div className="flex flex-wrap gap-2">
                {["Shopify", "UI/UX", "Branding", "Marketing"].map(tag => (
                  <span key={tag} className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden">
              <img src={portfolioMoher.src} alt="Moher fashion e-commerce website" className="w-full h-[350px] object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">The Challenge</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">Fragmented Brand, Lost Customers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Moher, a multi-brand fashion retailer carrying curated designer collections, was struggling with a disjointed online presence. Their existing website failed to communicate the premium positioning of their brands, resulting in high bounce rates exceeding 70% and poor customer retention.</p>
              <p className="text-muted-foreground leading-relaxed">The brand's digital identity was inconsistent across channels — social media told one story, the website another. Customers who discovered Moher through Instagram were often disappointed by the outdated e-commerce experience, leading to abandoned sessions and lost sales.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">The Solution</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">Unified Brand, Elevated Experience</h2>
              <div className="space-y-4">
                {[
                  "Developed a comprehensive brand refresh including new visual identity, typography system, and brand guidelines across all touchpoints.",
                  "Built a custom Shopify theme with editorial-style layouts, brand storytelling sections, and lookbook-inspired product galleries.",
                  "Implemented advanced collection management for multi-brand curation with designer spotlights and seasonal edits.",
                  "Launched integrated performance marketing across Google and Meta with dynamic product ads and retargeting funnels.",
                  "Set up email marketing automation with personalized flows for welcome series, abandoned cart recovery, and post-purchase nurture.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-muted-foreground leading-relaxed">{item}</p></div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Tech Stack</p>
            <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map(tech => (<span key={tech} className="px-4 py-2.5 rounded-full text-sm font-medium bg-primary/5 text-foreground border border-border">{tech}</span>))}
            </div>
          </motion.div>
        </div>
      </section>

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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}</div>
            <p className="text-lg text-foreground/80 leading-relaxed italic mb-6">"Globify didn't just build us a website — they gave us a brand identity that resonates. Our bounce rate dropped dramatically and customers now spend 3x more time exploring our collections."</p>
            <p className="font-semibold text-foreground">Founder & Creative Director</p>
            <p className="text-sm text-muted-foreground">Moher</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Ready to Elevate Your Brand?</h2>
            <p className="text-white/40 max-w-lg mx-auto mb-8">Let's create a unified digital experience that converts browsers into loyal customers.</p>
            <button onClick={() => openContactDialog()} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">Start a Conversation <ArrowRight className="w-4 h-4" /></button>
          </motion.div>
        </div>
      </section>

      <RelatedCaseStudies current="moher" />
      <Footer />
    </div>
  );
};

export default CaseStudyMoher;
