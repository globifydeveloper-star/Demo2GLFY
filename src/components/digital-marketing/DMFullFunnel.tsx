"use client";

import { motion } from "framer-motion";
import { Eye, UserPlus, MousePointer, Heart, ArrowRight } from "lucide-react";

const stages = [
  { icon: Eye, step: "01", title: "Awareness", subtitle: "Get Found", desc: "SEO, content marketing, social media, and paid campaigns that put your brand in front of the right audience at the right time.", items: ["Brand visibility", "Content distribution", "Audience targeting", "Market positioning"] },
  { icon: UserPlus, step: "02", title: "Acquisition", subtitle: "Capture Interest", desc: "Landing pages, lead magnets, and conversion-optimized campaigns that turn awareness into qualified leads and pipeline.", items: ["Lead generation", "Landing page optimization", "Lead magnets", "Marketing automation"] },
  { icon: MousePointer, step: "03", title: "Conversion", subtitle: "Close Deals", desc: "A/B testing, CRO, retargeting, and nurture sequences that convert prospects into paying customers efficiently.", items: ["A/B testing", "Funnel optimization", "Retargeting", "Sales enablement"] },
  { icon: Heart, step: "04", title: "Retention", subtitle: "Grow Revenue", desc: "Email sequences, loyalty programs, upselling strategies, and customer analytics that maximize lifetime value.", items: ["Email marketing", "Customer analytics", "Upsell/cross-sell", "CLV optimization"] },
];

const DMFullFunnel = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Full-Funnel Growth Approach</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
            A Complete Growth Engine,<br />Not Just Campaigns
          </h2>
          <p className="text-hero-foreground/40 text-sm max-w-2xl mx-auto">
            We optimize every stage of the customer journey, from first impression to lifelong customer, with data, automation, and relentless testing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, i) => (
            <motion.div key={stage.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group p-7 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.02] transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl font-bold text-primary/15 group-hover:text-primary/25 transition-colors">{stage.step}</span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stage.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-hero-foreground mb-0.5">{stage.title}</h3>
              <p className="text-sm font-medium text-primary/70 mb-3">{stage.subtitle}</p>
              <p className="text-sm text-hero-foreground/35 leading-relaxed mb-5">{stage.desc}</p>
              <ul className="space-y-1.5">
                {stage.items.map((item) => (
                  <li key={item} className="text-sm text-hero-foreground/30 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/50" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DMFullFunnel;
