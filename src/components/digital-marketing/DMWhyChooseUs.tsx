"use client";

import { motion } from "framer-motion";
import { DollarSign, Layers, BarChart3, Eye, RefreshCw, TrendingUp } from "lucide-react";

const reasons = [
  { icon: DollarSign, title: "Revenue-Focused Marketing", desc: "We don't chase vanity metrics. Every campaign is engineered for revenue, qualified leads, and measurable business impact." },
  { icon: Layers, title: "Full-Funnel Growth Strategy", desc: "From awareness to retention, we build integrated strategies that optimize every stage of the customer journey." },
  { icon: BarChart3, title: "Data-Driven Decisions", desc: "Advanced analytics, attribution modeling, and real-time dashboards ensure every dollar is optimized for maximum return." },
  { icon: Eye, title: "Transparent Reporting", desc: "No black boxes. Weekly reports, live dashboards, and clear KPIs so you always know exactly what's working and why." },
  { icon: RefreshCw, title: "Continuous Optimization", desc: "We test, learn, and iterate relentlessly, A/B testing, audience refinement, and creative optimization never stops." },
  { icon: TrendingUp, title: "Long-Term Scalability", desc: "We build marketing engines that compound over time, reducing CAC while increasing customer lifetime value." },
];

const DMWhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Why Businesses Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            Marketing That Moves the<br />Revenue Needle
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            We're not a typical agency. We're a growth partner obsessed with your bottom line, combining strategy, creativity, and data science to scale your business predictably.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group p-8 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DMWhyChooseUs;
