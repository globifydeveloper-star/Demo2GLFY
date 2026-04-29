"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Stethoscope, Factory, Cpu, GraduationCap, Building } from "lucide-react";

const useCases = [
  { icon: ShoppingCart, industry: "E-Commerce", cases: ["Demand forecasting & inventory optimization", "Personalized product recommendations", "Chatbot support & order tracking", "Dynamic pricing automation"] },
  { icon: Stethoscope, industry: "Healthcare", cases: ["Appointment scheduling automation", "Patient engagement & follow-ups", "Medical document processing", "Resource allocation optimization"] },
  { icon: Factory, industry: "Manufacturing", cases: ["Predictive maintenance alerts", "Quality control automation", "Supply chain optimization", "Production planning & scheduling"] },
  { icon: Cpu, industry: "IT & SaaS", cases: ["Customer support automation", "Workflow & DevOps automation", "User behavior analytics", "Churn prediction & retention"] },
  { icon: GraduationCap, industry: "Education", cases: ["Student onboarding automation", "Enrollment & communication bots", "Attendance & grading workflows", "Learning analytics & insights"] },
  { icon: Building, industry: "Real Estate", cases: ["Lead capture & qualification bots", "Property matching automation", "Document & contract processing", "CRM workflow automation"] },
];

const AIAutoUseCases = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Industry Applications</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">
            AI Use Cases Across Industries
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Real-world AI applications delivering measurable impact, tailored for your industry's unique challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-2xl border border-border hover:border-primary/20 hover:bg-card transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <uc.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{uc.industry}</h3>
              </div>
              <ul className="space-y-2">
                {uc.cases.map((c) => (
                  <li key={c} className="text-sm text-muted flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {c}
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

export default AIAutoUseCases;
