"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

import { getTechHref } from "@/lib/techLinks";

const categories = [
  { label: "Mobile & Frontend", techs: ["React Native", "Flutter", "Swift", "Kotlin", "React", "Next.js", "TypeScript"] },
  { label: "Backend & APIs", techs: ["Node.js", "Python", ".NET", "Go", "GraphQL", "REST APIs", "gRPC"] },
  { label: "Cloud & Infrastructure", techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"] },
  { label: "Microservices & Architecture", techs: ["Event-Driven", "CQRS", "API Gateway", "Service Mesh", "Serverless", "Edge Computing"] },
  { label: "DevOps & CI/CD", techs: ["GitHub Actions", "Jenkins", "ArgoCD", "Monitoring", "Auto-Scaling", "IaC"] },
  { label: "Security & Compliance", techs: ["OAuth 2.0", "HIPAA", "SOC 2", "GDPR", "Encryption", "Pen Testing"] },
];

const TechTag = ({ tech }: { tech: string }) => {
  const href = getTechHref(tech);
  const base = "text-sm px-3 py-1.5 rounded-full bg-hero-foreground/[0.05] border border-hero-foreground/[0.08] text-hero-foreground/60 font-medium transition-colors";

  if (href) {
    return (
      <Link href={href} className={`${base} hover:border-primary/40 hover:text-primary`}>
        {tech}
      </Link>
    );
  }
  return <span className={base}>{tech}</span>;
};

const AppDevTechStack = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Technology Stack</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
            Modern Technologies for<br />Scalable Products
          </h2>
          <p className="text-hero-foreground/40 text-sm max-w-2xl mx-auto">
            We use battle-tested, future-ready technologies across mobile, web, cloud, and DevOps to build products that scale reliably.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-7 rounded-2xl border border-hero-foreground/[0.06] bg-hero-foreground/[0.02]"
            >
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-5">{cat.label}</p>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <TechTag key={tech} tech={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDevTechStack;
