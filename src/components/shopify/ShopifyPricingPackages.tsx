"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Crown } from "lucide-react";
import { useContactDialog } from "@/contexts/ContactDialogContext";

const packages = [
  {
    name: "Starter",
    price: "3,000",
    desc: "Quick-launch store using a premium ready-made theme — ideal for startups testing the UAE market.",
    features: [
      "Premium Shopify Theme Setup",
      "Up to 50 Products",
      "Mobile-Responsive Design",
      "Basic SEO & URL Structure",
      "Payment Gateway (PayTabs / Telr)",
      "Local UAE Shipping Setup",
      "Social Media Integration",
      "1 Round of Revisions",
      "2–3 Week Delivery",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "12,000",
    desc: "Custom-designed store with advanced marketing integrations for growing D2C and retail brands.",
    features: [
      "Custom UI/UX Design",
      "Up to 200 Products",
      "Advanced SEO & Speed Optimization",
      "Multi-Currency Support (AED, USD, EUR)",
      "Email Marketing (Klaviyo / Omnisend)",
      "Instagram & Social Shop Setup",
      "Custom Product Filtering & Search",
      "Abandoned Cart Recovery",
      "Analytics & Conversion Tracking",
      "3 Rounds of Revisions",
      "4–6 Week Delivery",
    ],
    cta: "Choose Growth",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "30,000",
    desc: "Fully custom, scalable store with ERP integration, multi-language support, and enterprise-grade features.",
    features: [
      "Bespoke Theme Design & Development",
      "Unlimited Products with Bulk Import",
      "Multi-Language (English / Arabic)",
      "Multi-Currency & Regional Pricing",
      "ERP, CRM & Inventory Integration",
      "Custom App Development",
      "Advanced Automation & Workflows",
      "A/B Testing & CRO Setup",
      "Dedicated Project Manager",
      "Priority Support (90 Days)",
      "8–12 Week Delivery",
    ],
    cta: "Go Enterprise",
    highlighted: false,
  },
  {
    name: "Shopify Plus",
    price: null,
    desc: "Enterprise-grade Shopify Plus for high-volume merchants — custom checkout, headless architecture, and unlimited scale.",
    features: [
      "Shopify Plus Setup & Migration",
      "Custom Checkout Experience",
      "Headless / Composable Architecture",
      "Advanced B2B & Wholesale Channels",
      "Multi-Store & Multi-Market Management",
      "Shopify Flow & Launchpad Automation",
      "Dedicated Solutions Architect",
      "White-Glove Onboarding & Training",
      "Ongoing Growth Partnership",
      "Custom Timeline & Scope",
    ],
    cta: "Get Custom Quote",
    highlighted: false,
    isDark: true,
  },
];

interface ShopifyPricingPackagesProps {
  currency?: string;
  prices?: [string, string, string];
  headlinePrice?: string;
  featureOverrides?: Record<string, string>;
  descOverrides?: Record<number, string>;
}

const ShopifyPricingPackages = ({ currency = "AED", prices, headlinePrice, featureOverrides, descOverrides }: ShopifyPricingPackagesProps) => {
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
            Transparent Shopify Development<br />Packages Starting From {headlinePrice || `AED ${packages[0].price}`}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg, i) => {
            // Resolve price: use props for Starter(0), Growth(1), Enterprise(2)
            const priceIndex = i < 3 ? i : -1;
            const displayPrice = prices && priceIndex >= 0 ? prices[priceIndex] : pkg.price;
            const priceLabel = displayPrice ? `${currency} ${displayPrice}` : null;
            return (
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
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                  {pkg.badge}
                </div>
              )}

              {/* Header */}
              <div className={`p-7 pb-5 ${pkg.isDark ? "" : ""}`}>
                {pkg.isDark && (
                  <Crown className="w-5 h-5 text-primary mb-2" />
                )}
                <h3 className={`text-xl font-bold mb-1 ${pkg.isDark ? "text-background" : "text-foreground"}`}>
                  {pkg.name}
                </h3>

                {displayPrice ? (
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className={`text-3xl font-extrabold ${pkg.isDark ? "text-background" : "text-foreground"}`}>
                      {currency} {displayPrice}
                    </span>
                    <span className={`text-xs ${pkg.isDark ? "text-background/50" : "text-muted-foreground"}`}>
                      starting
                    </span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className={`text-2xl font-extrabold ${pkg.isDark ? "text-background" : "text-foreground"}`}>
                      Custom Quote
                    </span>
                  </div>
                )}

                <p className={`text-sm leading-relaxed ${pkg.isDark ? "text-background/60" : "text-muted-foreground"}`}>
                  {descOverrides?.[i] || pkg.desc}
                </p>
              </div>

              {/* CTA */}
              <div className="px-7 pb-5">
                <button
                  onClick={() => openContactDialog(`Shopify ${pkg.name}${priceLabel ? `, ${priceLabel}` : ''}`)}
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

              {/* Divider */}
              <div className={`mx-7 border-t ${pkg.isDark ? "border-background/10" : "border-border"}`} />

              {/* Features */}
              <div className="p-7 pt-5 flex-1">
                <ul className="space-y-2.5">
                  {pkg.features.map((f) => {
                    const displayFeature = featureOverrides?.[f] || f;
                    return (
                      <li key={displayFeature} className="flex items-start gap-2.5 text-sm">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${
                          pkg.isDark ? "text-primary" : "text-primary"
                        }`} />
                        <span className={pkg.isDark ? "text-background/80" : "text-muted-foreground"}>
                          {displayFeature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Footer */}
              <div className={`px-7 pb-6 mt-auto`}>
                <p className={`text-[11px] text-center ${pkg.isDark ? "text-background/40" : "text-muted-foreground/60"}`}>
                  {pkg.isDark ? "Custom solutions for complex needs." : "Upgrade anytime as your needs grow."}
                </p>
              </div>
            </motion.div>
          );
          })}

        </div>
      </div>
    </section>
  );
};

export default ShopifyPricingPackages;
