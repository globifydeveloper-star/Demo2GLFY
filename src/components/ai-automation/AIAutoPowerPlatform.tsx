"use client";

import { motion } from "framer-motion";
import { Workflow, AppWindow, BarChart3, FileText, Settings, Code2, Link2 } from "lucide-react";

const tools = [
  { icon: Workflow, title: "Power Automate (Flow)", desc: "Automate approval workflows, email notifications, data sync, and complex multi-step processes across 500+ connectors." },
  { icon: AppWindow, title: "Power Apps", desc: "Build custom business apps without heavy coding, from inventory trackers to inspection forms, deployed in days." },
  { icon: BarChart3, title: "Power BI", desc: "Transform raw data into interactive dashboards and real-time reports for smarter business decisions." },
  { icon: FileText, title: "SharePoint & M365 Automation", desc: "Automate document management, content approvals, and team workflows across the Microsoft ecosystem." },
  { icon: Settings, title: "Document & Approval Workflows", desc: "Digitize paper-based processes, purchase orders, leave requests, expense claims, with automated routing and tracking." },
  { icon: Code2, title: "Low-Code & No-Code Solutions", desc: "Empower business users to create solutions without waiting for IT, with governance and security built in." },
  { icon: Link2, title: "ERP, CRM & Legacy Integration", desc: "Connect Power Platform with SAP, Oracle, Dynamics, Salesforce, and custom APIs for unified operations." },
];

const AIAutoPowerPlatform = () => {
  return (
    <section className="py-28 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Microsoft Ecosystem</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
            Microsoft Power Platform & Workflow Automation
          </h2>
          <p className="text-hero-foreground/50 max-w-2xl mx-auto">
            Unlock productivity across your organization with Microsoft's powerful low-code platform, integrated with every tool your teams already use.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group p-7 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.03] transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-hero-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-hero-foreground/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAutoPowerPlatform;
