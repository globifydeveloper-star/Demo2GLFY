"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    title: "E-Commerce Platform Overhaul",
    industry: "Retail / E-Commerce",
    before: "Manual order processing, fragmented inventory across 3 warehouses, 4.2s page load time",
    after: "Automated fulfillment pipeline, unified inventory, 1.1s page load, 67% increase in conversion rate",
    impact: "+67% Conversions",
  },
  {
    title: "Healthcare Digital Ecosystem",
    industry: "Healthcare",
    before: "Paper-based records, no patient portal, 48hr average response time for appointments",
    after: "Fully digitized patient management, self-service portal, 2hr response time, 40% cost reduction",
    impact: "40% Cost Reduction",
  },
  {
    title: "Manufacturing ERP Integration",
    industry: "Manufacturing",
    before: "5 disconnected systems, manual reporting, 3-day order-to-dispatch cycle",
    after: "Unified ERP with real-time dashboards, automated workflows, same-day dispatch capability",
    impact: "3x Faster Operations",
  },
];

const DTCaseStudies = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Success Stories</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1]">
            Real Results, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Measurable Impact</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all">
              <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{c.industry}</span>
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-4">{c.title}</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Before</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.before}</p>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-primary mb-1">After</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">{c.after}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <span className="text-xl font-bold text-primary">{c.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="#lead-capture" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Start Your Success Story <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DTCaseStudies;
