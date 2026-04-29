"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Shield, BarChart3, Users, Eye } from "lucide-react";

const reasons = [
  { icon: TrendingUp, title: "ROI-First Development", desc: "Every pixel and line of code is optimized for conversions. We measure success in revenue growth, not just aesthetics." },
  { icon: Zap, title: "Blazing-Fast Performance", desc: "Sub-2-second load times, optimized Core Web Vitals, and 99.9% uptime, speed is a competitive advantage." },
  { icon: Shield, title: "Enterprise-Grade Security", desc: "SSL, WAF, DDoS protection, OWASP compliance, and regular penetration testing built into every project." },
  { icon: BarChart3, title: "Data-Driven Decisions", desc: "Analytics, heatmaps, A/B testing, and CRO integrated from day one, not as an afterthought." },
  { icon: Users, title: "Conversion-Focused UX", desc: "User journeys mapped for maximum engagement. Every interaction is designed to move visitors closer to action." },
  { icon: Eye, title: "Full Transparency", desc: "Agile sprints, weekly demos, real-time dashboards, and dedicated project managers. No black boxes." },
];

const WebDevWhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">
            Why Businesses Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            We Don't Just Build Websites,<br />We Build Growth Engines
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Our development process is engineered around measurable outcomes: faster load times, higher conversions, and scalable architectures that grow with your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
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
      </div>
    </section>
  );
};

export default WebDevWhyChooseUs;
