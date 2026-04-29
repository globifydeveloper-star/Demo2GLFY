import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shopify Development Agency in Germany | E-Commerce Experts",
  description: "Top-rated Shopify development and e-commerce design services in Germany. We build high-converting, scalable Shopify and Shopify Plus stores.",
  alternates: { canonical: "https://globify.ae/shopify-germany" },
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
            "serviceType": "Shopify Development Services in Germany",
            "description": "Custom Shopify development, migration, and e-commerce optimization for brands in Germany.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify", "https://www.instagram.com/globify"],
              "url": "https://globify.ae",
              "logo": "https://globify.ae/logo.png"
            },
            "areaServed": "Germany",
            "url": "https://globify.ae/shopify-germany"
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Shopify germany","item":"https://globify.ae/shopify-germany"}]
          })
        }}
      />
      {children}
    </>
  );
}
