"use client";

import { motion } from "framer-motion";
import { Search, FileText, Link2, MapPin, Globe, TrendingUp, ArrowRight } from "lucide-react";

const seoServices = [
  { icon: Search, title: "Technical SEO", desc: "Site architecture, Core Web Vitals, crawlability, structured data, and indexation optimization for maximum search visibility." },
  { icon: FileText, title: "On-Page & Content Strategy", desc: "Keyword-optimized content, pillar pages, topic clusters, and semantic SEO that matches search intent and drives organic traffic." },
  { icon: TrendingUp, title: "Keyword & Intent Research", desc: "Deep keyword analysis focused on commercial intent, search volume, and competitive gaps to prioritize high-ROI opportunities." },
  { icon: Link2, title: "Link Building & Authority", desc: "Ethical, white-hat link building through digital PR, guest posting, and strategic partnerships that build domain authority." },
  { icon: MapPin, title: "Local & International SEO", desc: "Google Business Profile optimization, local citations, and hreflang implementation for UAE, MENA, and global markets." },
  { icon: Globe, title: "Long-Term Organic Growth", desc: "SEO compounds over time. We build sustainable organic traffic that reduces paid dependency and improves cost efficiency." },
];

const DMSeo = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">SEO & Organic Growth</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            Organic Traffic That<br />Compounds Over Time
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            SEO is the highest-ROI marketing channel long-term. We build organic growth engines that deliver sustainable, compounding results month over month.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoServices.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="https://seo.globify.ae/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Get a Free SEO Audit <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DMSeo;
