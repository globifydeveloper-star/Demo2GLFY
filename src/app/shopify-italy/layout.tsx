import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shopify Development Agency in Italy | E-Commerce Experts",
  description: "Top-rated Shopify development and e-commerce design services in Italy. We build high-converting, scalable Shopify and Shopify Plus stores.",
  alternates: { canonical: "https://globify.ae/shopify-italy" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Shopify Development Services in Italy",
            "description": "Custom Shopify development, migration, and e-commerce optimization for brands in Italy.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify", "https://www.instagram.com/globify"],
              "url": "https://globify.ae",
              "logo": "https://globify.ae/logo.png"
            },
            "areaServed": "Italy",
            "url": "https://globify.ae/shopify-italy"
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Shopify italy","item":"https://globify.ae/shopify-italy"}]
          })
        }}
      />
      {children}
    </>
  );
}
