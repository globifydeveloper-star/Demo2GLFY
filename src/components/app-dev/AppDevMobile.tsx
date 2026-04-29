"use client";

import { motion } from "framer-motion";
import { Smartphone, TabletSmartphone, Cpu, Layers, Wifi, Gauge, ArrowRight } from "lucide-react";

const capabilities = [
  { icon: Smartphone, title: "iOS & Android Native", desc: "Swift, Kotlin, and SwiftUI apps that leverage full platform capabilities for the highest performance and native UX." },
  { icon: TabletSmartphone, title: "Cross-Platform Apps", desc: "React Native and Flutter apps that share 90%+ code across platforms, cutting development time and cost in half." },
  { icon: Cpu, title: "Native Performance Apps", desc: "Compute-intensive apps for AR/VR, real-time processing, gaming, and hardware integrations requiring native code." },
  { icon: Layers, title: "Hybrid Applications", desc: "Ionic and Capacitor-based apps ideal for content-heavy products, internal tools, and rapid prototyping needs." },
  { icon: Wifi, title: "Progressive Web Apps", desc: "Installable web apps with offline support, push notifications, and app-like UX, no app store required." },
  { icon: Gauge, title: "Offline-First & Scalable", desc: "Local-first data sync, edge computing, and auto-scaling backends for apps that work anywhere, anytime." },
];

const AppDevMobile = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Mobile App Development</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            Apps Engineered for<br />Performance & Engagement
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            From consumer-facing apps to enterprise mobility, we build mobile experiences that users love, with architecture that scales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="#lead-capture" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
            Start Your Mobile Project <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDevMobile;
