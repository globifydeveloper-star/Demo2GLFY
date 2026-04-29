"use client";

import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


interface SitemapLink {
  label: string;
  href: string;
}

interface SitemapSection {
  title: string;
  links: SitemapLink[];
  subsections?: { heading: string; links: SitemapLink[] }[];
}

const sections: SitemapSection[] = [
  // ── ROW 1 ──
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Our Projects", href: "/projects" },
      { label: "Products", href: "/products" },
      { label: "Blog", href: "/blog" },
      { label: "AI Transformation Framework", href: "/ai-transformation-framework" },
      { label: "CRO & Revenue Engineering", href: "/cro-revenue-engineering" },
      { label: "Resources & Thought Leadership", href: "/resources" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/web-development" },
      { label: "App Development", href: "/app-development" },
      { label: "E-Commerce", href: "/ecommerce" },
      { label: "Digital Marketing", href: "/digital-marketing" },
      { label: "AI & Automation", href: "/ai-automation" },
      { label: "ERP Solutions", href: "/erp-solutions" },
      { label: "Digital Transformation", href: "/digital-transformation" },
      { label: "Hire Developers", href: "/hire-developers" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Fintech", href: "/industries/fintech" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Supply Chain", href: "/industries/supply-chain" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "SaaS & Startups", href: "/industries/saas-startups" },
    ],
  },
  // ── ROW 2 ──
  {
    title: "E-Commerce Platforms",
    links: [
      { label: "Shopify Development", href: "/shopify-development" },
      { label: "Shopify Themes", href: "/shopify-themes" },
      { label: "Shopify App Development", href: "/shopify-app-development" },
      { label: "Shopify Plus", href: "/shopify-plus" },
      { label: "WooCommerce Development", href: "/woocommerce-development" },
      { label: "Magento / Adobe Commerce", href: "/magento-development" },
      { label: "PrestaShop Development", href: "/prestashop-development" },
      { label: "Shopware Development", href: "/shopware-development" },
      { label: "BigCommerce Development", href: "/bigcommerce-development" },
      { label: "Wix E-Commerce", href: "/wix-ecommerce" },
      { label: "Migration Services", href: "/migration-services" },
    ],
  },
  {
    title: "Shopify Regional Markets",
    links: [
      { label: "Shopify Germany", href: "/shopify-germany" },
      { label: "Shopify France", href: "/shopify-france" },
      { label: "Shopify UAE", href: "/shopify-uae" },
      { label: "Shopify India", href: "/shopify-india" },
      { label: "Shopify KSA", href: "/shopify-ksa" },
      { label: "Shopify Kuwait", href: "/shopify-kuwait" },
      { label: "Shopify Qatar", href: "/shopify-qatar" },
      { label: "Shopify Bahrain", href: "/shopify-bahrain" },
      { label: "Shopify Oman", href: "/shopify-oman" },
      { label: "Shopify South Africa", href: "/shopify-south-africa" },
      { label: "Shopify Spain", href: "/shopify-spain" },
      { label: "Shopify Italy", href: "/shopify-italy" },
      { label: "Shopify Netherlands", href: "/shopify-netherlands" },
    ],
  },
  {
    title: "Digital Marketing & AI",
    links: [
      { label: "SEO, AEO & Content Strategy", href: "/seo-content-strategy" },
      { label: "Paid Advertising", href: "/paid-advertising" },
      { label: "Social Media & Branding", href: "/social-media-brand" },
      { label: "Performance Marketing", href: "/performance-marketing" },
      { label: "Social Media Marketing", href: "/social-media-marketing" },
      { label: "SEO & AEO", href: "/seo-aeo" },
      { label: "AI Chatbots", href: "/ai-chatbots" },
      { label: "Process Automation", href: "/process-automation" },
      { label: "Predictive Analytics", href: "/predictive-analytics" },
    ],
  },
  // ── ROW 3 ──
  {
    title: "Technology",
    links: [],
    subsections: [
      {
        heading: "E-Commerce",
        links: [
          { label: "Shopify", href: "/technology/shopify" },
          { label: "Magento", href: "/technology/magento" },
          { label: "WooCommerce", href: "/technology/woocommerce" },
          { label: "BigCommerce", href: "/technology/bigcommerce" },
          { label: "Wix", href: "/technology/wix" },
          { label: "PrestaShop", href: "/technology/prestashop" },
        ],
      },
      {
        heading: "CMS",
        links: [
          { label: "WordPress", href: "/technology/wordpress" },
          { label: "Strapi", href: "/technology/strapi" },
          { label: "Drupal", href: "/technology/drupal" },
          { label: "Umbraco", href: "/technology/umbraco" },
        ],
      },
      {
        heading: "Server & Cloud",
        links: [
          { label: "Node.js", href: "/technology/nodejs" },
          { label: "AWS", href: "/technology/aws" },
          { label: "Azure", href: "/technology/azure" },
          { label: "NGINX", href: "/technology/nginx" },
          { label: "MongoDB", href: "/technology/mongodb" },
          { label: "Apache", href: "/technology/apache" },
          { label: "Microsoft .NET", href: "/technology/microsoft-net" },
          { label: "iOS", href: "/technology/ios" },
          { label: "Android", href: "/technology/android" },
        ],
      },
      {
        heading: "AI & Automation",
        links: [
          { label: "OpenAI / GPT", href: "/technology/openai" },
          { label: "TensorFlow", href: "/technology/tensorflow" },
          { label: "PyTorch", href: "/technology/pytorch" },
          { label: "LangChain", href: "/technology/langchain" },
          { label: "Hugging Face", href: "/technology/huggingface" },
          { label: "AWS SageMaker", href: "/technology/aws-sagemaker" },
          { label: "Azure AI", href: "/technology/azure-ai" },
          { label: "Google Vertex AI", href: "/technology/google-vertex-ai" },
          { label: "UiPath", href: "/technology/uipath" },
          { label: "Power Automate", href: "/technology/power-automate" },
        ],
      },
      {
        heading: "Frameworks",
        links: [
          { label: "React", href: "/technology/react" },
          { label: "Next.js", href: "/technology/nextjs" },
          { label: "Laravel", href: "/technology/laravel" },
          { label: "Django", href: "/technology/django" },
          { label: "Angular", href: "/technology/angular" },
          { label: "Flutter", href: "/technology/flutter" },
          { label: "ASP.NET", href: "/technology/aspnet" },
          { label: "Bootstrap", href: "/technology/bootstrap" },
          { label: "jQuery", href: "/technology/jquery" },
        ],
      },
    ],
  },
  {
    title: "Blog – E-Commerce & AI",
    links: [
      { label: "Shopify vs Custom E-Commerce: UAE & India", href: "/blog/shopify-vs-custom-ecommerce-uae-india" },
      { label: "How Shopify Helps Brands Scale in the Middle East", href: "/blog/shopify-brands-scale-middle-east" },
      { label: "WordPress for Business Websites in 2025", href: "/blog/wordpress-powerful-business-websites-2025" },
      { label: "WordPress vs Webflow in 2025", href: "/blog/wordpress-vs-webflow-modern-companies-2025" },
      { label: "Digital Commerce Trends UAE & India 2025", href: "/blog/digital-commerce-trends-uae-india-2025" },
      { label: "Building a Scalable E-Commerce Ecosystem", href: "/blog/building-scalable-ecommerce-ecosystem" },
      { label: "Marketplace Strategy for the Middle East", href: "/blog/marketplace-strategy-brands-middle-east" },
      { label: "Selling on Amazon, Noon & Regional Platforms", href: "/blog/selling-amazon-noon-regional-platforms-guide" },
      { label: "When Should Your Business Build a Mobile App?", href: "/blog/when-business-should-build-mobile-app" },
      { label: "Mobile App Development Cost & ROI", href: "/blog/mobile-app-development-cost-roi-uae-india" },
      { label: "AI Agents Transforming Business Operations 2026", href: "/blog/ai-agents-autonomous-business-operations-2026" },
      { label: "Generative AI for E-Commerce Personalization", href: "/blog/generative-ai-ecommerce-personalization-pricing-2026" },
      { label: "AI + ERP: Intelligent Enterprise Platforms", href: "/blog/ai-erp-intelligent-enterprise-platforms-2026" },
      { label: "Workflow Automation with AI: Cost Reduction", href: "/blog/workflow-automation-ai-cost-reduction-2026" },
      { label: "AI in Customer Experience & Conversational Commerce", href: "/blog/ai-customer-experience-conversational-commerce-uae-india" },
      { label: "Predictive AI for Supply Chain & Inventory", href: "/blog/predictive-ai-supply-chain-inventory-optimization-2026" },
      { label: "AI Transforming Digital Commerce: UAE & India", href: "/blog/ai-transforming-digital-commerce-uae-india" },
      { label: "Automation Strategies to Reduce Costs", href: "/blog/automation-strategies-reduce-costs-efficiency" },
    ],
  },
  {
    title: "Blog – Platforms & Global",
    links: [
      { label: "Shopify Growth in Europe & Emerging Markets 2026", href: "/blog/shopify-growth-europe-emerging-markets-2026" },
      { label: "Top Countries Where Shopify Is Growing 2026", href: "/blog/top-countries-shopify-ecommerce-growing-2026" },
      { label: "How Brands Can Expand Globally Using Shopify", href: "/blog/brands-expand-globally-shopify-2026" },
      { label: "Shopify Migration & Localization for Global E-Commerce", href: "/blog/shopify-migration-localization-global-ecommerce" },
      { label: "WooCommerce vs Shopware: German E-Commerce 2026", href: "/blog/woocommerce-vs-shopware-german-ecommerce-2026" },
      { label: "PrestaShop in France: Why It Still Dominates", href: "/blog/prestashop-development-france-dominates-2026" },
      { label: "Headless Commerce Trends in Europe", href: "/blog/headless-commerce-trends-europe-2026" },
      { label: "Best Platforms for Cross-Border Selling in the EU", href: "/blog/best-ecommerce-platforms-cross-border-eu-2026" },
      { label: "GDPR-Compliant E-Commerce: Platform Comparison", href: "/blog/gdpr-compliant-ecommerce-platform-comparison-europe" },
      { label: "Localization vs Translation for European Shoppers", href: "/blog/localization-vs-translation-european-shoppers" },
      { label: "Wix vs Shopify for D2C in UAE & GCC", href: "/blog/wix-vs-shopify-d2c-brands-uae-gcc" },
      { label: "E-Commerce Platform for Indian Businesses 2026", href: "/blog/ecommerce-platform-indian-businesses-2026" },
      { label: "When to Migrate from Wix", href: "/blog/when-to-migrate-from-wix-signs-outgrown" },
      { label: "WooCommerce to Shopify Migration Guide", href: "/blog/woocommerce-to-shopify-migration-seo-checklist" },
      { label: "Magento 1 End-of-Life: Migration Options", href: "/blog/magento-1-end-of-life-migration-options" },
      { label: "Scaling Global E-Commerce Architecture", href: "/blog/scaling-global-ecommerce-platform-architecture" },
      { label: "CRO Strategies for European E-Commerce", href: "/blog/cro-strategies-european-ecommerce-country-breakdown" },
      { label: "Payment Gateway Strategy: Local Methods to Global", href: "/blog/payment-gateway-strategy-local-methods-global-platforms" },
      { label: "Shipping & Logistics: Platform Comparison", href: "/blog/shipping-logistics-integration-platform-comparison" },
    ],
  },
  {
    title: "Blog – WooCommerce",
    links: [
      { label: "WooCommerce vs Shopify: Scaling 2026", href: "/blog/woocommerce-vs-shopify-scaling-2026" },
      { label: "WooCommerce Development Cost", href: "/blog/woocommerce-development-cost-europe-uae" },
      { label: "When to Choose WooCommerce Over Shopify", href: "/blog/when-choose-woocommerce-over-shopify" },
      { label: "WooCommerce B2B & Wholesale Guide", href: "/blog/woocommerce-b2b-wholesale-guide" },
      { label: "Build High-Converting WooCommerce Store", href: "/blog/build-high-converting-woocommerce-store" },
      { label: "WooCommerce Performance Optimisation", href: "/blog/woocommerce-performance-optimisation-tips" },
      { label: "WooCommerce vs Magento Comparison", href: "/blog/woocommerce-vs-magento-comparison" },
      { label: "Best WooCommerce Plugins for Growth", href: "/blog/best-woocommerce-plugins-growth-automation" },
      { label: "Migrate WooCommerce to Shopify/Headless", href: "/blog/migrate-woocommerce-to-shopify-headless" },
      { label: "WooCommerce Cross-Border Selling", href: "/blog/woocommerce-global-cross-border-selling" },
    ],
  },
  {
    title: "Blog – Magento",
    links: [
      { label: "Magento vs Shopify Enterprise", href: "/blog/magento-vs-shopify-enterprise-ecommerce" },
      { label: "Adobe Commerce vs Magento Open Source", href: "/blog/adobe-commerce-vs-magento-open-source" },
      { label: "Magento Development & Maintenance Cost", href: "/blog/magento-development-maintenance-cost" },
      { label: "When to Migrate Magento to Shopify", href: "/blog/when-move-magento-to-shopify" },
      { label: "Magento B2B & Wholesale Guide", href: "/blog/magento-b2b-wholesale-complete-guide" },
      { label: "Headless Magento: Benefits & Use Cases", href: "/blog/headless-magento-benefits-use-cases" },
      { label: "Scale Global E-Commerce with Adobe Commerce", href: "/blog/scale-global-ecommerce-adobe-commerce" },
      { label: "Magento Performance Optimisation", href: "/blog/magento-performance-optimisation-strategies" },
      { label: "Common Magento Challenges & Solutions", href: "/blog/common-magento-challenges-solutions" },
      { label: "Magento Migration to Modern Platforms", href: "/blog/magento-migration-modern-commerce-platforms" },
    ],
  },
  {
    title: "Blog – PrestaShop & Shopware",
    links: [
      { label: "PrestaShop vs Shopify in Europe", href: "/blog/prestashop-vs-shopify-europe" },
      { label: "Why PrestaShop Dominates France", href: "/blog/why-prestashop-popular-france-southern-europe" },
      { label: "PrestaShop Store Cost Guide", href: "/blog/prestashop-store-cost-guide" },
      { label: "Best PrestaShop Themes & Modules", href: "/blog/best-prestashop-themes-modules-2026" },
      { label: "PrestaShop Multilingual & Multi-Currency", href: "/blog/prestashop-multilingual-multi-currency-stores" },
      { label: "Scale PrestaShop Internationally", href: "/blog/scale-prestashop-international-markets" },
      { label: "PrestaShop vs WooCommerce", href: "/blog/prestashop-vs-woocommerce-comparison" },
      { label: "PrestaShop SEO Optimisation", href: "/blog/prestashop-seo-performance-optimisation" },
      { label: "Migrate PrestaShop to Shopify", href: "/blog/migrate-prestashop-to-shopify" },
      { label: "PrestaShop Cross-Border E-Commerce", href: "/blog/prestashop-cross-border-ecommerce-europe" },
      { label: "Why Shopware Is Growing in Germany", href: "/blog/shopware-growing-fast-germany-europe" },
      { label: "Shopware vs Shopify for D2C", href: "/blog/shopware-vs-shopify-d2c-brands" },
      { label: "Shopware Enterprise & Mid-Size Brands", href: "/blog/shopware-enterprise-mid-size-brands" },
      { label: "Headless Commerce with Shopware", href: "/blog/headless-commerce-shopware" },
      { label: "Shopware Development Cost 2026", href: "/blog/shopware-development-cost-2026" },
      { label: "Shopware vs Magento Comparison", href: "/blog/shopware-vs-magento-comparison" },
      { label: "Shopware B2B & D2C Hybrid", href: "/blog/shopware-b2b-d2c-hybrid-commerce" },
      { label: "Scaling Global Commerce with Shopware", href: "/blog/shopware-scaling-global-commerce" },
      { label: "Shopware Migration Strategies", href: "/blog/shopware-migration-strategies" },
      { label: "Shopware Localisation & Compliance", href: "/blog/shopware-localisation-compliance-europe" },
    ],
  },
  {
    title: "Blog – BigCommerce, Wix & Migration",
    links: [
      { label: "BigCommerce vs Shopify Plus Enterprise", href: "/blog/bigcommerce-vs-shopify-enterprise-2026" },
      { label: "BigCommerce Headless Commerce Guide", href: "/blog/bigcommerce-headless-commerce-guide-2026" },
      { label: "BigCommerce B2B & Wholesale Setup", href: "/blog/bigcommerce-b2b-wholesale-setup-guide" },
      { label: "BigCommerce Multi-Storefront Guide", href: "/blog/bigcommerce-multi-storefront-guide" },
      { label: "BigCommerce SEO Optimisation", href: "/blog/bigcommerce-seo-optimisation-strategies" },
      { label: "Migrating to BigCommerce", href: "/blog/migrating-to-bigcommerce-step-by-step" },
      { label: "BigCommerce Apps & Integrations", href: "/blog/bigcommerce-apps-integrations-2026" },
      { label: "BigCommerce Checkout Optimisation", href: "/blog/bigcommerce-checkout-optimisation-reduce-abandonment" },
      { label: "BigCommerce International Selling", href: "/blog/bigcommerce-international-selling-guide" },
      { label: "BigCommerce Speed Optimisation", href: "/blog/bigcommerce-speed-optimisation-under-2-seconds" },
      { label: "Wix vs Shopify 2026", href: "/blog/wix-vs-shopify-2026" },
      { label: "Wix E-Commerce Setup Guide", href: "/blog/wix-ecommerce-setup-guide-2026" },
      { label: "Wix SEO for E-Commerce", href: "/blog/wix-seo-ecommerce-2026" },
      { label: "Wix to Shopify Migration", href: "/blog/wix-to-shopify-migration-guide" },
      { label: "Wix E-Commerce Pricing 2026", href: "/blog/wix-ecommerce-pricing-2026" },
      { label: "Wix Dropshipping Guide", href: "/blog/wix-dropshipping-guide-2026" },
      { label: "Wix vs Squarespace E-Commerce", href: "/blog/wix-vs-squarespace-ecommerce-2026" },
      { label: "Wix Conversion Optimisation", href: "/blog/wix-store-conversion-optimisation" },
      { label: "Wix Multilingual Store", href: "/blog/wix-multilingual-store-international" },
      { label: "Wix vs WordPress E-Commerce", href: "/blog/wix-vs-wordpress-ecommerce-2026" },
      { label: "Magento to Shopify Migration Playbook", href: "/blog/magento-to-shopify-migration-2026" },
      { label: "WooCommerce to Shopify Migration", href: "/blog/woocommerce-to-shopify-migration-guide" },
      { label: "E-Commerce Replatforming Checklist", href: "/blog/ecommerce-replatforming-checklist-2026" },
      { label: "PrestaShop to Shopify Migration", href: "/blog/prestashop-to-shopify-migration-2026" },
      { label: "BigCommerce to Shopify Migration", href: "/blog/bigcommerce-to-shopify-migration-2026" },
      { label: "SEO During Platform Migration", href: "/blog/preserve-seo-ecommerce-platform-migration" },
      { label: "Shopware to Shopify Migration", href: "/blog/shopware-to-shopify-migration-2026" },
      { label: "Multi-Platform Consolidation", href: "/blog/consolidate-ecommerce-platforms-2026" },
      { label: "Headless Commerce Migration", href: "/blog/headless-commerce-migration-readiness-2026" },
      { label: "E-Commerce Migration Cost Guide", href: "/blog/ecommerce-migration-cost-guide-2026" },
    ],
  },
  // ── CASE STUDIES ──
  {
    title: "Case Studies",
    links: [
      { label: "Ekasys ERP Case Study", href: "/case-study/ekasys-erp" },
      { label: "InstaRunway Case Study", href: "/case-study/instarunway" },
      { label: "Judith Leiber Case Study", href: "/case-study/judith-leiber" },
      { label: "Kat Maconie Case Study", href: "/case-study/kat-maconie" },
      { label: "Medoc HMS Case Study", href: "/case-study/medoc-hms" },
      { label: "Moher Case Study", href: "/case-study/moher" },
      { label: "Salomon Case Study", href: "/case-study/salomon" },
      { label: "Wilson Case Study", href: "/case-study/wilson" },
    ],
  },
  // ── LEGAL ──
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

const SitemapLinkList = ({ links }: { links: SitemapLink[] }) => (
  <ul className="space-y-2">
    {links.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
);

const Sitemap = () => {
  return (
    <>
      
      <Navbar />
      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Sitemap
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">
                  {section.title}
                </h2>
                {section.subsections ? (
                  <div className="space-y-5">
                    {section.subsections.map((sub) => (
                      <div key={sub.heading}>
                        <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/70 mb-2">
                          {sub.heading}
                        </h3>
                        <SitemapLinkList links={sub.links} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <SitemapLinkList links={section.links} />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Sitemap;
