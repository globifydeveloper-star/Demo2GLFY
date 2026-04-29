"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

import { getTechHref } from "@/lib/techLinks";

const categories = [
  {
    title: "Microsoft Power Platform",
    items: ["Power Automate", "Power Apps", "Power BI", "SharePoint", "Dynamics 365"],
  },
  {
    title: "AI & Machine Learning",
    items: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face"],
  },
  {
    title: "Cloud Platforms",
    items: ["Microsoft Azure", "AWS", "Google Cloud", "Azure AI Services", "AWS SageMaker"],
  },
  {
    title: "APIs & Integrations",
    items: ["REST APIs", "GraphQL", "Webhooks", "Zapier", "Make (Integromat)", "Custom Connectors"],
  },
  {
    title: "Data & Analytics",
    items: ["Power BI", "Tableau", "Apache Spark", "PostgreSQL", "MongoDB", "Elasticsearch"],
  },
  {
    title: "Security & Compliance",
    items: ["SOC 2", "GDPR", "HIPAA", "ISO 27001", "Data Encryption", "Role-Based Access"],
  },
];

const TechTag = ({ tech }: { tech: string }) => {
  const href = getTechHref(tech);
  const base = "text-sm font-medium text-muted bg-primary/5 border border-border px-3 py-1.5 rounded-full transition-colors";

  if (href) {
    return (
      <Link href={href} className={`${base} hover:border-primary/40 hover:text-primary`}>
        {tech}
      </Link>
    );
  }
  return <span className={base}>{tech}</span>;
};

const AIAutoTechStack = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Technology</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">
            Enterprise-Grade Technology Stack
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We use battle-tested tools and platforms — chosen for reliability, scalability, and enterprise readiness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-7 rounded-2xl border border-border hover:border-primary/20 transition-all"
            >
              <h3 className="text-base font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <TechTag key={item} tech={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAutoTechStack;
