"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

import { getTechHref } from "@/lib/techLinks";

const categories = [
  {
    label: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Angular"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Python", ".NET", "PHP/Laravel", "Go", "GraphQL"],
  },
  {
    label: "Cloud & DevOps",
    techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "CI/CD Pipelines"],
  },
  {
    label: "CMS & Commerce",
    techs: ["Shopify", "WordPress", "Strapi", "Contentful", "Magento", "Sanity"],
  },
  {
    label: "Database",
    techs: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", "Supabase"],
  },
  {
    label: "Security & Compliance",
    techs: ["SSL/TLS", "OWASP", "GDPR", "PCI DSS", "SOC 2", "WAF"],
  },
];

const TechTag = ({ tech }: { tech: string }) => {
  const href = getTechHref(tech);
  const className = "text-sm px-3 py-1.5 rounded-full bg-muted/10 border border-border text-foreground/70 font-medium transition-colors";

  if (href) {
    return (
      <Link href={href} className={`${className} hover:border-primary/40 hover:text-primary`}>
        {tech}
      </Link>
    );
  }
  return <span className={className}>{tech}</span>;
};

const WebDevTechStack = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Technology Stack</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            Future-Ready Technologies<br />for Scalable Growth
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            We leverage cutting-edge frameworks, cloud infrastructure, and API-first architecture to build solutions that scale with your ambitions.
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
              className="p-7 rounded-2xl border border-border bg-card"
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

export default WebDevTechStack;
