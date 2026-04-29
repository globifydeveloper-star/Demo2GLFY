"use client";

import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Server } from "lucide-react";

const items = [
  { icon: Shield, title: "IP Protection", desc: "Your intellectual property is safeguarded through NDAs, secure development environments, and access controls." },
  { icon: Lock, title: "Data Security", desc: "End-to-end encryption, regular vulnerability assessments, and industry-standard data protection protocols." },
  { icon: FileCheck, title: "Compliance Frameworks", desc: "GDPR, HIPAA, SOC 2 readiness, we build systems that meet your regulatory requirements." },
  { icon: Server, title: "Secure Architecture", desc: "Zero-trust design, role-based access, and infrastructure hardening from day one." },
];

const DTSecurity = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Security & Compliance</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1]">
            Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Protection</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 text-center transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DTSecurity;
