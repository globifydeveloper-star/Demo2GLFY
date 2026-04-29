"use client";

import { motion } from "framer-motion";
import { Palette, MousePointer, BarChart3, Users, DollarSign, TrendingUp, ArrowRight } from "lucide-react";

const items = [
  { icon: Palette, title: "Data-Driven Product Design", desc: "User research, personas, journey mapping, and data-informed wireframes that reduce guesswork and build for real user needs.", metric: "3x faster decisions" },
  { icon: MousePointer, title: "Conversion-Focused UX", desc: "Every screen, flow, and interaction is optimized for the action you need users to take, signups, purchases, or engagement.", metric: "Up to 45% conversion lift" },
  { icon: BarChart3, title: "A/B Testing & Experimentation", desc: "Built-in experimentation frameworks for continuous testing of features, flows, copy, and pricing strategies.", metric: "Continuous optimization" },
  { icon: Users, title: "User Analytics & Insights", desc: "Mixpanel, Amplitude, or custom analytics pipelines that give you real-time visibility into user behavior and product health.", metric: "Real-time visibility" },
  { icon: TrendingUp, title: "Retention & Engagement", desc: "Push notifications, in-app messaging, gamification, and personalized experiences that keep users coming back.", metric: "2x retention rates" },
  { icon: DollarSign, title: "Monetization Optimization", desc: "Subscription tiers, in-app purchases, freemium models, and pricing experimentation to maximize revenue per user.", metric: "30% higher ARPU" },
];

const AppDevCROGrowth = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">UX, CRO & Product Growth</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1]">
              Design for Adoption,<br />Optimize for Revenue
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            Building isn't enough. We embed growth mechanics, analytics, and CRO into every product from day one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300"
            >
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
          <a href="#lead-capture" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Get a Product Growth Strategy <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDevCROGrowth;
