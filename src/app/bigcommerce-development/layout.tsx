import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "BigCommerce Development Agency | SaaS E-Commerce | Globify",
  description: "Expert BigCommerce development with zero transaction fees. Multi-storefront, B2B edition, headless commerce. Enterprise SaaS e-commerce from AED 8,000.",
  alternates: { canonical: "https://globify.ae/bigcommerce-development" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Bigcommerce development","item":"https://globify.ae/bigcommerce-development"}]
          })
        }}
      />
      {children}</>;
}
