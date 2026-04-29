"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Crown } from "lucide-react";
import { useContactDialog } from "@/contexts/ContactDialogContext";

const packages = [
  {
    name: "Starter",
    price: "25,000",
    desc: "Launch your Magento Open Source store with a premium theme, essential modules, and production-ready configuration.",
    features: [
      "Magento Open Source Setup",
      "Premium Theme Installation",
      "Up to 200 Products",
      "Mobile-Responsive Design",
      "Basic SEO Configuration",
      "Payment Gateway Integration",
      "Shipping & Tax Setup",
      "2 Rounds of Revisions",
      "4–6 Week Delivery",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "45,000",
    desc: "Custom-designed Magento store with advanced catalog management, multi-store, and marketing integrations.",
    features: [
      "Custom UI/UX Design",
      "Up to 1,000 Products with Attributes",
      "Multi-Store & Multi-Currency",
      "Advanced SEO & Performance Tuning",
      "Elasticsearch Catalog Search",
      "Email Marketing Integration",
      "Custom Module Development",
      "Analytics & Conversion Tracking",
      "3 Rounds of Revisions",
      "8–12 Week Delivery",
    ],
    cta: "Choose Growth",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "75,000",
    desc: "Full Adobe Commerce implementation with B2B features, ERP integration, and enterprise-grade scalability.",
    features: [
      "Adobe Commerce (Cloud) Setup",
      "Unlimited Products & Categories",
      "Multi-Language & Multi-Currency",
      "B2B Module (Quotes, Requisitions)",
      "ERP, CRM & PIM Integration",
      "Advanced Security & Compliance",
      "Custom Module & API Development",
      "Performance & Load Optimization",
      "Dedicated Project Manager",
      "Priority Support (90 Days)",
      "12–20 Week Delivery",
    ],
    cta: "Go Enterprise",
    highlighted: false,
  },
  {
    name: "Adobe Commerce Plus",
    price: null,
    desc: "Enterprise-grade Adobe Commerce for complex, multi-market operations — headless PWA, AI personalization, and unlimited scale.",
    features: [
      "Adobe Commerce Cloud Pro",
      "PWA Studio / Headless Frontend",
      "Adobe Sensei AI Personalization",
      "Advanced B2B & Marketplace",
      "Multi-Brand & Multi-Region",
      "Adobe Experience Cloud Integration",
      "Dedicated Solutions Architect",
      "White-Glove Migration & Onboarding",
      "Ongoing Growth Partnership",
      "Custom Timeline & Scope",
    ],
    cta: "Get Custom Quote",
    highlighted: false,
    isDark: true,
  },
];

const MagentoPricingPackages = () => {
  const { openContactDialog } = useContactDialog();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Pricing Packages</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-[1.1] mb-4">
            Transparent Magento Development<br />Packages Starting From AED 25,000
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Enterprise-grade e-commerce demands enterprise-grade development. Choose the package that matches your complexity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ${
                pkg.isDark
                  ? "bg-foreground text-background border border-foreground"
                  : pkg.highlighted
                  ? "bg-card border-2 border-primary shadow-xl shadow-primary/10 scale-[1.02]"
                  : "bg-card border border-border hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {pkg.badge && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                  {pkg.badge}
                </div>
              )}

              <div className="p-7 pb-5">
                {pkg.isDark && <Crown className="w-5 h-5 text-primary mb-2" />}
                <h3 className={`text-xl font-bold mb-1 ${pkg.isDark ? "text-background" : "text-foreground"}`}>{pkg.name}</h3>
                {pkg.price ? (
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className={`text-3xl font-extrabold ${pkg.isDark ? "text-background" : "text-foreground"}`}>AED {pkg.price}</span>
                    <span className={`text-xs ${pkg.isDark ? "text-background/50" : "text-muted-foreground"}`}>starting</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className={`text-2xl font-extrabold ${pkg.isDark ? "text-background" : "text-foreground"}`}>Custom Quote</span>
                  </div>
                )}
                <p className={`text-sm leading-relaxed ${pkg.isDark ? "text-background/60" : "text-muted-foreground"}`}>{pkg.desc}</p>
              </div>

              <div className="px-7 pb-5">
                <button
                  onClick={() => openContactDialog(`Magento ${pkg.name}${pkg.price ? `, AED ${pkg.price}` : ''}`)}
                  className={`w-full py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:gap-3 ${
                    pkg.isDark
                      ? "bg-background text-foreground hover:bg-background/90"
                      : pkg.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {pkg.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className={`mx-7 border-t ${pkg.isDark ? "border-background/10" : "border-border"}`} />

              <div className="p-7 pt-5 flex-1">
                <ul className="space-y-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                      <span className={pkg.isDark ? "text-background/80" : "text-muted-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-7 pb-6 mt-auto">
                <p className={`text-[11px] text-center ${pkg.isDark ? "text-background/40" : "text-muted-foreground/60"}`}>
                  {pkg.isDark ? "Custom solutions for complex needs." : "Upgrade anytime as your needs grow."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagentoPricingPackages;
