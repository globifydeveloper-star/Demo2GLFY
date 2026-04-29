"use client";

import { motion } from "framer-motion";
import { TrendingUp, Timer, MousePointer, BarChart3, ShoppingCart, Gauge, ArrowRight } from "lucide-react";

const croServices = [
  { icon: TrendingUp, title: "Conversion Rate Optimization", desc: "Systematic testing and optimization of every funnel stage to maximize the percentage of visitors who convert.", metric: "Up to 40% conversion lift" },
  { icon: Timer, title: "Page Speed Optimization", desc: "Core Web Vitals optimization, lazy loading, code splitting, and CDN configuration for sub-2-second load times.", metric: "< 2s load time" },
  { icon: MousePointer, title: "UX & Checkout Optimization", desc: "Streamlined user flows, reduced friction points, and optimized checkout experiences that minimize cart abandonment.", metric: "30% less abandonment" },
  { icon: BarChart3, title: "Analytics & A/B Testing", desc: "Data-driven decision making with GA4, heatmaps, session recordings, and multivariate testing frameworks.", metric: "Data-driven decisions" },
  { icon: ShoppingCart, title: "Revenue Growth Strategy", desc: "Upselling, cross-selling, personalization, and dynamic pricing strategies that increase average order value.", metric: "25% higher AOV" },
  { icon: Gauge, title: "Bounce Rate Reduction", desc: "Above-the-fold optimization, compelling CTAs, and engaging content strategies that keep visitors on your site.", metric: "50% lower bounce rate" },
];

const WebDevCRO = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">CRO & Performance</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">
              Turn Traffic Into<br />Measurable Revenue
            </h2>
          </div>
          <p className="text-hero-foreground/40 max-w-md text-sm leading-relaxed">
            Development alone isn't enough. We optimize every touchpoint for speed, engagement, and conversions, delivering measurable, revenue-driven results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hero-foreground/[0.06] rounded-2xl overflow-hidden">
          {croServices.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-hero p-8 hover:bg-hero-foreground/[0.02] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-bold text-primary/70 tracking-wide">{item.metric}</span>
              </div>
              <h3 className="text-base font-semibold text-hero-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-hero-foreground/35 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#lead-capture" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Get a Free Performance Audit <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDevCRO;
