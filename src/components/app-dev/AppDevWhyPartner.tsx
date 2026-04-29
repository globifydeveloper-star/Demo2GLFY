"use client";

import { motion } from "framer-motion";
import { Rocket, Layers, TrendingUp, DollarSign, Settings, MessageSquare } from "lucide-react";

const reasons = [
  { icon: Rocket, title: "Faster Time to Market", desc: "Agile sprints, parallel workstreams, and pre-built modules get your product to market 40% faster than traditional development." },
  { icon: Layers, title: "Scalable & Future-Ready", desc: "Microservices, cloud-native architecture, and modular design ensure your product scales seamlessly from 1K to 10M users." },
  { icon: TrendingUp, title: "Product-Led Growth", desc: "Every feature is built with adoption, engagement, and retention in mind, not just functionality." },
  { icon: DollarSign, title: "ROI & Sustainability", desc: "We optimize development costs while maximizing long-term value, building products that generate revenue, not just expenses." },
  { icon: Settings, title: "Flexible Delivery", desc: "Choose agile, hybrid, or structured delivery models, we adapt to your team's workflow and business cadence." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Dedicated PMs, weekly demos, real-time Slack channels, and sprint dashboards, you always know where things stand." },
];

const AppDevWhyPartner = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Why Businesses Partner With Us</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            We Don't Just Build Apps,<br />We Launch Products That Win
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            From idea validation to global scale, we combine product thinking with engineering excellence to build digital products that drive measurable business outcomes.
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

export default AppDevWhyPartner;
