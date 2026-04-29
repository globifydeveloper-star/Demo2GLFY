"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CaseStudyBreadcrumb from "@/components/CaseStudyBreadcrumb";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import portfolioInstaRunway from "@/assets/portfolio-instarunway.jpeg";

const techStack = ["Shopify", "Custom Liquid Theme", "Multi-Language (EN/AR)", "RTL Support", "GCC Localization", "Country Switcher", "Responsive Design", "SEO Optimization"];

const results = [
  { metric: "3.2x", label: "Conversion Lift" },
  { metric: "2", label: "Languages (EN + AR)" },
  { metric: "6+", label: "GCC Countries Served" },
  { metric: "45%", label: "Mobile Revenue Growth" },
];

const CaseStudyInstaRunway = () => {
  const { openContactDialog } = useContactDialog();

  return (
    <div className="min-h-screen">
      
      <Navbar />

      <section className="pt-28 pb-16 bg-[#0a0a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-6 relative">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"><ArrowLeft className="w-4 h-4" /> Back to Projects</Link>
          <CaseStudyBreadcrumb name="InstaRunway" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">Case Study — E-Commerce</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 font-display">InstaRunway</h1>
              <p className="text-lg text-white/50 leading-relaxed mb-6">Luxury fashion marketplace — GCC distributor store built on Shopify with a custom theme replicating the global site design, full Arabic RTL support, and multi-country localization.</p>
              <div className="flex flex-wrap gap-2">
                {["Shopify", "GCC", "E-Commerce", "Fashion"].map(tag => (
                  <span key={tag} className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden">
              <img src={portfolioInstaRunway.src} alt="InstaRunway GCC fashion e-commerce" className="w-full h-[350px] object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6"><div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">The Challenge</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">Localizing a Global Fashion Marketplace</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">InstaRunway's GCC distributor needed a regional Shopify store that replicated the global fashion marketplace's curated experience while fully supporting Arabic-speaking customers. The store required seamless bilingual navigation, RTL layout for Arabic, and multi-country functionality for different GCC markets.</p>
            <p className="text-muted-foreground leading-relaxed">The challenge was maintaining the editorial, fashion-forward feel of the global site while adapting product discovery, filtering, and checkout for GCC payment methods, currencies, and shipping logistics.</p>
          </motion.div>
        </div></div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-6"><div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">Custom Shopify Theme for GCC Fashion</h2>
            <div className="space-y-4">
              {[
                "Built a custom Shopify theme replicating InstaRunway's global site with editorial layouts, lookbook-style product galleries, and curated collection pages.",
                "Implemented full English and Arabic bilingual support with RTL layout, mirrored navigation, and Arabic-optimized typography.",
                "Developed a multi-country/region switcher with localized currency display, shipping zones, and tax calculations per GCC country.",
                "Integrated regional payment gateways popular in the Gulf market alongside international options for a seamless checkout experience.",
                "Optimized for mobile-first browsing patterns in the GCC with fast load times, image optimization, and intuitive touch navigation.",
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
            <p className="text-lg text-foreground/80 leading-relaxed italic mb-6">"Globify perfectly captured our brand's fashion-forward aesthetic while making the store feel completely natural for our Arabic-speaking customers. The multi-country setup has streamlined our GCC operations significantly."</p>
            <p className="font-semibold text-foreground">Regional Operations Manager</p>
            <p className="text-sm text-muted-foreground">InstaRunway GCC</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Ready to Expand to the GCC?</h2>
            <p className="text-white/40 max-w-lg mx-auto mb-8">Let's localize your fashion brand for the Gulf market.</p>
            <button onClick={() => openContactDialog()} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">Start a Conversation <ArrowRight className="w-4 h-4" /></button>
          </motion.div>
        </div>
      </section>

      <RelatedCaseStudies current="instarunway" />
      <Footer />
    </div>
  );
};

export default CaseStudyInstaRunway;
