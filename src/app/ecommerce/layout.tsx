import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "E-Commerce Solutions, Shopify, WooCommerce & Custom",
  description: "End-to-end e-commerce solutions for UAE and India. Shopify, WooCommerce, marketplace integration, ERP connectivity, and growth optimization.",
  alternates: { canonical: "https://globify.ae/ecommerce" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Ecommerce","item":"https://globify.ae/ecommerce"}]
          })
        }}
      />
      {children}</>;
}
