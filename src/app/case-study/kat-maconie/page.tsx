"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CaseStudyBreadcrumb from "@/components/CaseStudyBreadcrumb";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import portfolioKat from "@/assets/portfolio-kat-maconie.jpeg";

const techStack = ["Shopify", "Custom Liquid Theme", "Technical SEO", "Schema Markup", "Core Web Vitals", "Content Strategy", "Responsive Design"];

const results = [
  { metric: "85%", label: "Organic Traffic Increase" },
  { metric: "42%", label: "Conversion Rate Growth" },
  { metric: "Top 3", label: "Google Rankings for Key Terms" },
  { metric: "55%", label: "Revenue from Organic" },
];

const CaseStudyKatMaconie = () => {
  const { openContactDialog } = useContactDialog();

  return (
    <div className="min-h-screen">
      
      <Navbar />

      <section className="pt-28 pb-16 bg-[#0a0a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-6 relative">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"><ArrowLeft className="w-4 h-4" /> Back to Projects</Link>
          <CaseStudyBreadcrumb name="Kat Maconie" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">Case Study — E-Commerce</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 font-display">Kat Maconie</h1>
              <p className="text-lg text-white/50 leading-relaxed mb-6">Bold luxury footwear brand elevated with a striking custom Shopify theme and a comprehensive SEO strategy that drove 85% organic traffic growth.</p>
              <div className="flex flex-wrap gap-2">
                {["Shopify", "UI/UX", "E-Commerce", "SEO"].map(tag => (
                  <span key={tag} className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden">
              <img src={portfolioKat.src} alt="Kat Maconie luxury footwear e-commerce" className="w-full h-[350px] object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6"><div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">The Challenge</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">Invisible in Search, Underperforming Online</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Kat Maconie, known for bold, sculptural footwear designs worn by celebrities and fashion editors worldwide, had a digital presence that didn't match the brand's creative reputation. Despite strong offline recognition and press coverage, the brand's website ranked poorly in search results for key terms like "luxury designer heels" and "statement footwear."</p>
            <p className="text-muted-foreground leading-relaxed">The existing Shopify store used a generic template that failed to showcase the artistry of the products. Product photography was beautiful but buried in poor page structure, and the site lacked the technical SEO foundation to compete with established luxury e-commerce players.</p>
          </motion.div>
        </div></div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-6"><div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">Design-Led Commerce, SEO-Powered Growth</h2>
            <div className="space-y-4">
              {[
                "Built a fully custom Shopify theme that treats every product page as a gallery — full-bleed imagery, 360° views, and editorial storytelling for each collection.",
                "Implemented comprehensive technical SEO including structured data for products, breadcrumbs, FAQ schemas, and optimized internal linking architecture.",
                "Created SEO-optimized collection and category pages with rich content, targeting high-intent luxury footwear keywords.",
                "Optimized Core Web Vitals across the site — lazy loading, image compression, critical CSS inlining — achieving 90+ Lighthouse scores.",
                "Developed a content strategy with seasonal lookbooks, style guides, and designer stories to build topical authority.",
              ].map((item, i) => (
                <div key={i} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-muted-foreground leading-relaxed">{item}</p></div>
              ))}
            </div>
          </motion.div>
        </div></div>
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
            <p className="text-lg text-foreground/80 leading-relaxed italic mb-6">"The team at Globify understood our brand DNA from day one. They built a digital experience as bold as our shoes. The organic traffic growth has been extraordinary — we're now ranking for terms we never thought possible."</p>
            <p className="font-semibold text-foreground">E-Commerce Manager</p>
            <p className="text-sm text-muted-foreground">Kat Maconie</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Ready to Dominate Search?</h2>
            <p className="text-white/40 max-w-lg mx-auto mb-8">Let's build an SEO-powered e-commerce experience that drives organic growth.</p>
            <button onClick={() => openContactDialog()} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">Start a Conversation <ArrowRight className="w-4 h-4" /></button>
          </motion.div>
        </div>
      </section>

      <RelatedCaseStudies current="kat-maconie" />
      <Footer />
    </div>
  );
};

export default CaseStudyKatMaconie;
