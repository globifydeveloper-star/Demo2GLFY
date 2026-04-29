"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CaseStudyBreadcrumb from "@/components/CaseStudyBreadcrumb";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import portfolioJudith from "@/assets/portfolio-judith-leiber.jpeg";

const techStack = ["Shopify", "Custom Liquid Theme", "Multi-Language (EN/AR)", "RTL Support", "GCC Localization", "Country Switcher", "Responsive Design", "Performance Optimization"];

const results = [
  { metric: "220%", label: "Online Sales Growth" },
  { metric: "2", label: "Languages (EN + AR)" },
  { metric: "6+", label: "GCC Countries Served" },
  { metric: "1.8s", label: "Avg Page Load Time" },
];

const CaseStudyJudithLeiber = () => {
  const { openContactDialog } = useContactDialog();

  return (
    <div className="min-h-screen">
      
      <Navbar />

      <section className="pt-28 pb-16 bg-[#0a0a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-6 relative">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"><ArrowLeft className="w-4 h-4" /> Back to Projects</Link>
          <CaseStudyBreadcrumb name="Judith Leiber" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">Case Study — E-Commerce</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 font-display">Judith Leiber</h1>
              <p className="text-lg text-white/50 leading-relaxed mb-6">Iconic luxury handbag and accessories brand — GCC distributor store built on Shopify with custom theme matching the global site, full Arabic RTL support, and multi-country localization.</p>
              <div className="flex flex-wrap gap-2">
                {["Shopify", "GCC", "E-Commerce", "Luxury"].map(tag => (
                  <span key={tag} className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden">
              <img src={portfolioJudith.src} alt="Judith Leiber GCC e-commerce store" className="w-full h-[350px] object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6"><div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">The Challenge</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">Bringing Global Luxury to the GCC</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Judith Leiber's GCC distributor needed a regional Shopify store that faithfully replicated the global brand's premium aesthetic and shopping experience. The store had to support English and Arabic (with full RTL layout), serve multiple GCC countries with appropriate currency and shipping options, and integrate with local payment gateways.</p>
            <p className="text-muted-foreground leading-relaxed">The key challenge was maintaining the brand's ultra-luxury positioning while adapting the experience for Arabic-speaking customers — ensuring typography, imagery, and navigation felt native in both languages without compromising the brand identity.</p>
          </motion.div>
        </div></div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-6"><div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">Custom Shopify Theme for GCC Markets</h2>
            <div className="space-y-4">
              {[
                "Designed and developed a custom Shopify theme that mirrors the Judith Leiber global site's luxury aesthetic, adapted for GCC market expectations.",
                "Implemented full bilingual support with English and Arabic, including RTL layout, Arabic typography, and mirrored navigation patterns.",
                "Built a multi-country/region switcher allowing customers to select their GCC country with localized currency, shipping, and tax settings.",
                "Integrated GCC-specific payment gateways and regional shipping providers for seamless checkout across the Gulf region.",
                "Optimized site performance for mobile-first GCC audiences with lazy loading, CDN optimization, and Core Web Vitals improvements.",
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
            <p className="text-lg text-foreground/80 leading-relaxed italic mb-6">"Globify delivered a store that feels authentically Judith Leiber while being perfectly localized for our GCC customers. The Arabic experience is seamless and our regional sales have exceeded expectations."</p>
            <p className="font-semibold text-foreground">Regional E-Commerce Director</p>
            <p className="text-sm text-muted-foreground">Judith Leiber GCC</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Ready to Launch in the GCC?</h2>
            <p className="text-white/40 max-w-lg mx-auto mb-8">Let's build a localized e-commerce experience for your brand.</p>
            <button onClick={() => openContactDialog()} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">Start a Conversation <ArrowRight className="w-4 h-4" /></button>
          </motion.div>
        </div>
      </section>

      <RelatedCaseStudies current="judith-leiber" />
      <Footer />
    </div>
  );
};

export default CaseStudyJudithLeiber;
