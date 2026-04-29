"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';


const categories = [
  {
    id: "ecommerce",
    label: "Ecommerce",
    techs: [
      { name: "Shopify", slug: "shopify", highlight: true },
      { name: "Magento", slug: "magento" },
      { name: "WooCommerce", slug: "woocommerce" },
      { name: "BigCommerce", slug: "bigcommerce" },
      { name: "Wix", slug: "wix" },
      { name: "PrestaShop", slug: "prestashop" },
    ],
  },
  {
    id: "cms",
    label: "CMS",
    techs: [
      { name: "WordPress", slug: "wordpress" },
      { name: "Strapi", slug: "strapi" },
      { name: "Drupal", slug: "drupal" },
      { name: "Umbraco", slug: "umbraco" },
    ],
  },
  {
    id: "server",
    label: "Server & Technologies",
    techs: [
      { name: "Node.js", slug: "nodejs", highlight: true },
      { name: "AWS", slug: "aws" },
      { name: "Azure", slug: "azure" },
      { name: "NGINX", slug: "nginx" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Apache", slug: "apache" },
      { name: "Microsoft .NET", slug: "microsoft-net" },
      { name: "iOS", slug: "ios" },
      { name: "Android", slug: "android" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    techs: [
      { name: "React", slug: "react", highlight: true },
      { name: "Next.js", slug: "nextjs" },
      { name: "Laravel", slug: "laravel" },
      { name: "Django", slug: "django" },
      { name: "Angular", slug: "angular" },
      { name: "Flutter", slug: "flutter" },
      { name: "ASP.NET", slug: "aspnet" },
      { name: "Bootstrap", slug: "bootstrap" },
      { name: "jQuery", slug: "jquery" },
    ],
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    techs: [
      { name: "OpenAI / GPT", slug: "openai", highlight: true },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "LangChain", slug: "langchain" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "AWS SageMaker", slug: "aws-sagemaker" },
      { name: "Azure AI", slug: "azure-ai" },
      { name: "Google Vertex AI", slug: "google-vertex-ai" },
      { name: "UiPath (RPA)", slug: "uipath" },
      { name: "Power Automate", slug: "power-automate" },
    ],
  },
];

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState("ecommerce");

  const active = categories.find((c) => c.id === activeCategory)!;

  return (
    <section className="py-16 bg-[#0a0a1a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-4">
            What We Work With
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-[1.1]">
            Technology{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Stack
            </span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-white text-[#0a0a1a] border-white"
                  : "bg-transparent text-white/60 border-white/15 hover:border-white/40 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {active.techs.map((tech, i) => (
              <Link key={tech.name} href={`/technology/${tech.slug}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`group relative flex items-center justify-center h-20 rounded-xl border cursor-pointer transition-colors duration-300 ${
                    tech.highlight
                      ? "bg-white/10 border-white/20 hover:border-orange-400/50"
                      : "bg-white/[0.04] border-white/10 hover:border-white/25"
                  }`}
                >
                  <span className={`text-base font-semibold transition-colors duration-300 ${
                    tech.highlight
                      ? "text-white group-hover:text-orange-400"
                      : "text-white/70 group-hover:text-white"
                  }`}>
                    {tech.name}
                  </span>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom stat line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex items-center gap-8 text-white/40 text-sm"
        >
          <div className="h-px flex-1 bg-white/10" />
          <span>
            <strong className="text-white/70">{categories.reduce((a, c) => a + c.techs.length, 0)}+</strong> technologies across{" "}
            <strong className="text-white/70">{categories.length}</strong> categories
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
