"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Store, Package, Globe, Plug, BarChart3, ArrowRight } from "lucide-react";

const platforms = [
  { icon: ShoppingCart, name: "Shopify & Shopify Plus", desc: "Enterprise-ready storefronts with custom themes, apps, and Shopify Plus for high-volume merchants." },
  { icon: Store, name: "WordPress / WooCommerce", desc: "Flexible, content-rich stores with powerful SEO, unlimited customization, and cost-effective scaling." },
  { icon: Package, name: "Magento / Adobe Commerce", desc: "Complex, multi-store setups with advanced catalog management, B2B features, and enterprise integrations." },
  { icon: Globe, name: "Custom-Built Platforms", desc: "Fully bespoke e-commerce solutions for unique business models that off-the-shelf platforms can't handle." },
  { icon: Plug, name: "Marketplace & Omnichannel", desc: "Sell across Amazon, eBay, social commerce, and brick-and-mortar with unified inventory and orders." },
  { icon: BarChart3, name: "ERP & Inventory Integration", desc: "Seamless integration with ERP systems, inventory management, fulfillment, and accounting platforms." },
];

const WebDevEcommerce = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">E-Commerce Development</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            Online Stores Built to<br />Maximize Revenue
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            We build conversion-optimized e-commerce experiences across every major platform, focused on customer experience, scalability, and measurable revenue growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#lead-capture" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
            Get an E-Commerce Strategy Session <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDevEcommerce;
