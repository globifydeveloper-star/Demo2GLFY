"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Smartphone, Cloud, Database, Code } from "lucide-react";

const techs = [
  { icon: Code, label: "React / Next.js" },
  { icon: Smartphone, label: "Flutter / React Native" },
  { icon: Cloud, label: "AWS / Azure" },
  { icon: Cpu, label: "TensorFlow / PyTorch" },
  { icon: Database, label: "PostgreSQL / MongoDB" },
  { icon: Globe, label: "Node.js / Python" },
];

const industries = [
  "Healthcare", "Retail & E-Commerce", "Education", "Real Estate",
  "Manufacturing", "Finance & Insurance", "Logistics", "Entertainment",
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-16 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative">
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">Technology Stack</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 leading-[1.1]">
            Future-Ready
            <br />
            <span className="text-muted-foreground">Approach.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techs.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-border hover:border-primary/30 transition-all group text-center bg-card/50 hover:bg-card"
              >
                <t.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium">{t.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">Industries</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 leading-[1.1]">
            Transforming Industries
            <br />
            <span className="text-muted-foreground">with Scalable Solutions.</span>
          </h2>

          <div className="flex flex-wrap gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-7 py-4 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all cursor-pointer font-medium text-sm hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
              >
                {ind}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
