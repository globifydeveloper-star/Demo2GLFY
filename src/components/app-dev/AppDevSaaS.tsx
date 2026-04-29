"use client";

import { motion } from "framer-motion";
import { Rocket, Target, DollarSign, Users, Cloud, RefreshCw, ArrowRight } from "lucide-react";

const features = [
  { icon: Rocket, title: "MVP Development", desc: "Validate your idea fast with a lean, functional MVP, built to test hypotheses, attract users, and secure funding." },
  { icon: Target, title: "Product-Market Fit", desc: "Data-driven iteration cycles to find the sweet spot between what users want and what the market will pay for." },
  { icon: DollarSign, title: "Investor-Ready Products", desc: "Polished, scalable products with metrics dashboards, user analytics, and growth trajectories that impress investors." },
  { icon: Users, title: "Multi-Tenant Architecture", desc: "SaaS-ready infrastructure with tenant isolation, white-labeling, and per-tenant customization capabilities." },
  { icon: Cloud, title: "Cloud-First Approach", desc: "Born-in-the-cloud products on AWS, Azure, or GCP with auto-scaling, high availability, and global edge distribution." },
  { icon: RefreshCw, title: "Continuous Evolution", desc: "Post-launch feature development, A/B testing, performance optimization, and scaling, we grow with your product." },
];

const AppDevSaaS = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">SaaS & Product Development</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            From Idea to Scale-Ready<br />SaaS Product
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            We help founders and enterprises build subscription-ready SaaS products, from MVP validation to multi-tenant platforms serving thousands of customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-8 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="#lead-capture" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Validate Your SaaS Idea <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDevSaaS;
