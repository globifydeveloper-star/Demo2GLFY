"use client";

import { motion } from "framer-motion";
import { Rocket, BarChart3, Stethoscope, ShoppingCart, Truck, GraduationCap, Building2 } from "lucide-react";

const industries = [
  { icon: Rocket, name: "Startups", desc: "MVP development, rapid iteration, and investor-ready products built for speed and scale." },
  { icon: BarChart3, name: "Fintech", desc: "Secure banking apps, payment platforms, and financial dashboards with regulatory compliance." },
  { icon: Stethoscope, name: "Healthcare", desc: "HIPAA-compliant telemedicine, patient apps, and health-tech platforms." },
  { icon: ShoppingCart, name: "E-Commerce", desc: "Shopping apps, marketplace platforms, and omnichannel commerce experiences." },
  { icon: Truck, name: "Logistics", desc: "Fleet management, route optimization, and supply chain visibility platforms." },
  { icon: GraduationCap, name: "Education", desc: "E-learning apps, LMS platforms, and EdTech products for modern learners." },
  { icon: Building2, name: "Enterprise", desc: "Internal tools, workflow automation, and digital transformation platforms." },
];

const AppDevIndustries = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Industries We Serve</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
            Deep Domain Expertise<br />Across Verticals
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group p-6 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 text-center hover:bg-hero-foreground/[0.02] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-hero-foreground mb-1.5">{item.name}</h3>
              <p className="text-sm text-hero-foreground/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDevIndustries;
