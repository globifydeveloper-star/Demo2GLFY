import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Magento & Adobe Commerce Development UAE & India | Enterprise E-Commerce | Globify",
  description: "Expert Magento & Adobe Commerce development agency in UAE & India. Enterprise e-commerce, B2B solutions, multi-store setups, ERP integration & migration. Get a free consultation.",
  alternates: { canonical: "https://globify.ae/magento-development" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Magento development","item":"https://globify.ae/magento-development"}]
          })
        }}
      />
      {children}</>;
}
