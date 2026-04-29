"use client";

import Link from 'next/link';

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import portfolioWilson from "@/assets/portfolio-wilson-new.jpeg";
import portfolioMoher from "@/assets/portfolio-moher.jpeg";
import portfolioKat from "@/assets/portfolio-kat-maconie.jpeg";
import portfolioMedoc from "@/assets/portfolio-medoc.jpeg";
import portfolioErp from "@/assets/portfolio-erp.jpg";
import portfolioJudith from "@/assets/portfolio-judith-leiber.jpeg";
import portfolioInstaRunway from "@/assets/portfolio-instarunway.jpeg";
import clientSalomon from "@/assets/portfolio-salomon.jpg";

const allCaseStudies = [
  { slug: "wilson", title: "Wilson", category: "E-Commerce", image: portfolioWilson.src, stat: "500K+ Users" },
  { slug: "salomon", title: "Salomon", category: "E-Commerce", image: clientSalomon.src, stat: "320% Revenue Growth" },
  { slug: "moher", title: "Moher", category: "E-Commerce", image: portfolioMoher.src, stat: "45% Bounce Drop" },
  { slug: "kat-maconie", title: "Kat Maconie", category: "E-Commerce", image: portfolioKat.src, stat: "85% Organic Growth" },
  { slug: "judith-leiber", title: "Judith Leiber", category: "E-Commerce", image: portfolioJudith.src, stat: "220% Sales Growth" },
  { slug: "instarunway", title: "InstaRunway", category: "E-Commerce", image: portfolioInstaRunway.src, stat: "3.2x Conversion" },
  { slug: "medoc-hms", title: "MEDOC HMS", category: "Healthcare", image: portfolioMedoc.src, stat: "2,000+ Clinics" },
  { slug: "ekasys-erp", title: "EKASYS ERP", category: "ERP", image: portfolioErp.src, stat: "200+ Businesses" },
];

interface RelatedCaseStudiesProps {
  current: string;
}

const RelatedCaseStudies = ({ current }: RelatedCaseStudiesProps) => {
  const related = allCaseStudies.filter(c => c.slug !== current).slice(0, 3);

  return (
    <section className="py-20 bg-[#0a0a1a]">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">More Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 font-display">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((study, i) => (
              <Link key={study.slug} href={`/case-study/${study.slug}`} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 bg-white/[0.03]"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/70 mb-1">{study.category}</p>
                    <h3 className="text-lg font-bold text-white mb-1 font-display group-hover:text-primary transition-colors">{study.title}</h3>
                    <p className="text-xs text-white/40 mb-3">{study.stat}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all">
                      View Case Study <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedCaseStudies;
