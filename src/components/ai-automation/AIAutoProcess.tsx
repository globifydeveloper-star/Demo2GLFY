"use client";

import { motion } from "framer-motion";
import { Search, Map, FlaskConical, Rocket, GraduationCap, RefreshCw } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Assessment & Discovery", desc: "We audit your current workflows, identify automation opportunities, and quantify the potential ROI." },
  { icon: Map, step: "02", title: "Opportunity Mapping", desc: "Prioritize automation use cases based on impact, feasibility, and strategic alignment." },
  { icon: FlaskConical, step: "03", title: "Pilot & Proof of Concept", desc: "Build a working prototype to validate the approach, measure results, and secure stakeholder buy-in." },
  { icon: Rocket, step: "04", title: "Implementation", desc: "Deploy the full solution with proper testing, integration, security, and change management." },
  { icon: GraduationCap, step: "05", title: "Training & Adoption", desc: "Equip your team with hands-on training, documentation, and support for successful adoption." },
  { icon: RefreshCw, step: "06", title: "Continuous Optimization", desc: "Monitor performance, gather feedback, and continuously improve automation for maximum ROI." },
];

const AIAutoProcess = () => {
  return (
    <section className="py-28 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Our Approach</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
            Our Process & Methodology
          </h2>
          <p className="text-hero-foreground/50 max-w-2xl mx-auto">
            A proven, low-risk approach to AI adoption — from discovery to continuous optimization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative p-7 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 transition-all"
            >
              <span className="text-5xl font-bold text-hero-foreground/[0.04] absolute top-4 right-6">{step.step}</span>
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-hero-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-hero-foreground/40 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAutoProcess;
