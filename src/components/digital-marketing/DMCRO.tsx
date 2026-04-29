"use client";

import { motion } from "framer-motion";
import { MousePointer, TestTube, Layout, BarChart3, DollarSign, Gauge, ArrowRight } from "lucide-react";

const croItems = [
  { icon: MousePointer, title: "Conversion-Focused Campaigns", desc: "Every ad, landing page, and email is optimized for one thing: getting the right people to take the right action.", metric: "Up to 3x conversions" },
  { icon: TestTube, title: "A/B & Multivariate Testing", desc: "Continuous experimentation on headlines, CTAs, layouts, and offers — finding the combinations that maximize revenue.", metric: "Statistical rigor" },
  { icon: Layout, title: "UX & Funnel Improvements", desc: "Heatmaps, session recordings, and user flow analysis that identify and eliminate friction at every conversion point.", metric: "30% less friction" },
  { icon: BarChart3, title: "Data-Driven Decision Making", desc: "Every optimization backed by quantitative analysis — no opinions, just data that shows what works and what doesn't.", metric: "Evidence-based" },
  { icon: DollarSign, title: "Lead & Revenue Optimization", desc: "Landing page, form, and checkout optimization that turns more clicks into qualified leads and paying customers.", metric: "40% more leads" },
  { icon: Gauge, title: "Speed & Performance", desc: "Page speed optimization, Core Web Vitals improvement, and technical enhancements that directly impact Quality Score and conversions.", metric: "< 2s load time" },
];

const DMCRO = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">CRO & Landing Page Optimization</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            More Revenue From the<br />Traffic You Already Have
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Why pay for more traffic when you can convert more of what you already get? Our CRO process systematically improves conversion rates across every channel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {croItems.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-bold text-primary/70 tracking-wide">{item.metric}</span>
              </div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="#lead-capture" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
            Get a Free CRO Analysis <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DMCRO;
