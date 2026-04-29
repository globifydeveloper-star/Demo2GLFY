"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, Target, Package, Headphones } from "lucide-react";

const functions = [
  {
    icon: Users,
    title: "HR Automation",
    items: ["CV scanning & resume parsing", "Candidate screening & shortlisting", "Automated onboarding workflows", "Leave & attendance management", "Employee self-service portals"],
  },
  {
    icon: DollarSign,
    title: "Finance Automation",
    items: ["Invoice processing & matching", "Expense approval workflows", "Bank reconciliation", "Financial reporting automation", "Compliance & audit trails"],
  },
  {
    icon: Target,
    title: "Sales Automation",
    items: ["Lead routing & assignment", "Automated follow-up sequences", "CRM data enrichment", "Pipeline management", "Quote & proposal generation"],
  },
  {
    icon: Package,
    title: "Operations Automation",
    items: ["Inventory alerts & reordering", "Procurement workflows", "Vendor management", "Quality control checklists", "Supply chain coordination"],
  },
  {
    icon: Headphones,
    title: "Customer Service Automation",
    items: ["Ticket routing & escalation", "Self-service knowledge bases", "SLA monitoring & alerts", "Customer feedback collection", "Multi-channel support integration"],
  },
];

const AIAutoBusinessFunctions = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Department Solutions</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">
            Intelligent Automation for Every Business Function
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            From HR to finance to operations, we automate the workflows that drain your team's time and introduce costly errors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {functions.map((func, i) => (
            <motion.div
              key={func.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-2xl border border-border hover:border-primary/20 hover:bg-card transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <func.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{func.title}</h3>
              <ul className="space-y-2">
                {func.items.map((item) => (
                  <li key={item} className="text-sm text-muted flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
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

export default AIAutoBusinessFunctions;
