"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Shield, Smartphone, RefreshCw, Globe } from "lucide-react";

const deployments = [
  { icon: Cloud, title: "Cloud ERP", desc: "Hosted on AWS, Azure, or GCP — fully managed, auto-scaling, and accessible from anywhere. Zero infrastructure overhead.", benefits: ["Lower upfront costs", "Automatic updates", "Global accessibility", "Elastic scaling"] },
  { icon: Server, title: "On-Premise ERP", desc: "Deployed within your data center for maximum control over data, security, and compliance requirements.", benefits: ["Full data control", "Custom security policies", "No internet dependency", "Regulatory compliance"] },
  { icon: Globe, title: "Hybrid ERP", desc: "Best of both worlds — sensitive data on-premise with cloud-based modules for remote teams and scalability.", benefits: ["Flexible architecture", "Gradual cloud migration", "Optimized costs", "Future-proof"] },
];

const ERPDeployment = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Deployment</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">Flexible Deployment Options</h2>
          <p className="text-muted max-w-2xl mx-auto">Choose the deployment model that fits your security, compliance, and scalability requirements.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {deployments.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group p-8 rounded-2xl border border-border hover:border-primary/20 hover:bg-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-5">{item.desc}</p>
              <ul className="space-y-2">
                {item.benefits.map((b) => (
                  <li key={b} className="text-sm text-muted flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {b}
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

export default ERPDeployment;
