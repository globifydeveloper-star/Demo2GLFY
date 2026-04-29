"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

import { ShoppingCart, Zap, Package, Globe, Layers, Plug, Code2, Store, Box, LayoutGrid, ArrowRightLeft } from "lucide-react";
import { getTechHref } from "@/lib/techLinks";

const platforms = [
  { icon: ShoppingCart, name: "Shopify", desc: "The world's leading commerce platform, custom themes, apps, and Shopify Plus for high-growth merchants." },
  { icon: Zap, name: "Shopify Plus", desc: "Enterprise-grade Shopify with automation, B2B capabilities, and unlimited scalability for 8-figure brands." },
  { icon: Package, name: "Magento / Adobe Commerce", desc: "Complex, multi-store enterprise commerce with advanced catalog management and B2B functionality." },
  { icon: Globe, name: "WooCommerce", desc: "Flexible WordPress commerce for content-driven brands with unlimited customization and SEO advantages." },
  { icon: Store, name: "PrestaShop", desc: "Open-source European commerce platform ideal for mid-market retailers with multilingual and multi-currency needs." },
  { icon: Box, name: "Shopware", desc: "German-engineered commerce for B2B and B2C with powerful rule-based automation and experience shopping." },
  { icon: LayoutGrid, name: "BigCommerce", desc: "SaaS commerce with built-in features, headless flexibility, and strong multi-channel selling capabilities." },
  { icon: Globe, name: "Wix E-Commerce", desc: "All-in-one website builder with integrated commerce for small businesses and creative entrepreneurs." },
  { icon: ArrowRightLeft, name: "Migration Services", desc: "Seamless platform migrations with zero data loss — move from any legacy system to a modern commerce stack." },
  { icon: Code2, name: "Custom-Built Platforms", desc: "Fully bespoke commerce solutions for unique business models that no off-the-shelf platform can handle." },
  { icon: Layers, name: "Headless Commerce", desc: "Hydrogen, Next.js, and headless CMS, decoupled architectures for ultimate performance and flexibility." },
  { icon: Plug, name: "API-First Architecture", desc: "Composable commerce stacks connecting best-of-breed services via APIs for maximum modularity." },
];

const EcomPlatforms = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Platforms & Technologies</p>
        <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">Expert Across Every<br />Commerce Platform</h2>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">We're platform-agnostic but opinionated, recommending the right technology based on your business model, scale, and growth trajectory.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((p, i) => {
          const href = getTechHref(p.name);
          const card = (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300 h-full">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          );
          return href ? (
            <Link key={p.name} href={href} className="block">
              {card}
            </Link>
          ) : (
            <div key={p.name}>{card}</div>
          );
        })}
      </div>
    </div>
  </section>
);

export default EcomPlatforms;
