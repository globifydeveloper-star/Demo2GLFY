"use client";

import { motion } from "framer-motion";
import { MousePointer, ShoppingCart, Gauge, Users, TestTube, Heart, ArrowRight } from "lucide-react";

const items = [
  { icon: MousePointer, title: "Conversion Optimization", desc: "Systematic testing and optimization of product pages, navigation, and CTAs to maximize add-to-cart and purchase rates.", metric: "Up to 45% lift" },
  { icon: ShoppingCart, title: "Checkout Optimization", desc: "Streamlined checkout flows, reduced form fields, trust signals, and payment options that minimize cart abandonment.", metric: "30% less abandonment" },
  { icon: Gauge, title: "UX & Performance", desc: "Sub-2-second load times, Core Web Vitals optimization, and mobile-first experiences that drive engagement.", metric: "< 2s load time" },
  { icon: Users, title: "Personalization", desc: "AI-driven product recommendations, dynamic content, and personalized shopping experiences that increase AOV.", metric: "25% higher AOV" },
  { icon: TestTube, title: "A/B Testing", desc: "Continuous experimentation on layouts, messaging, pricing, and features, finding what drives revenue.", metric: "Data-driven" },
  { icon: Heart, title: "Customer Journey & Retention", desc: "Post-purchase flows, loyalty programs, and lifecycle campaigns that turn one-time buyers into repeat customers.", metric: "2x repeat rate" },
];

const EcomCRO = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">CRO & Customer Experience</p>
        <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">More Revenue From<br />Every Visitor</h2>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">Optimize every step of the shopping journey, from landing to checkout to repeat purchase, with data-driven CRO.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
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
          Get a Free CRO Audit <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default EcomCRO;
