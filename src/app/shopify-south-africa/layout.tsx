import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shopify Development Agency in South Africa | E-Commerce Experts",
  description: "Top-rated Shopify development and e-commerce design services in South Africa. We build high-converting, scalable Shopify and Shopify Plus stores.",
  alternates: { canonical: "https://globify.ae/shopify-south-africa" },
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
            "serviceType": "Shopify Development Services in South Africa",
            "description": "Custom Shopify development, migration, and e-commerce optimization for brands in South Africa.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify", "https://www.instagram.com/globify"],
              "url": "https://globify.ae",
              "logo": "https://globify.ae/logo.png"
            },
            "areaServed": "South Africa",
            "url": "https://globify.ae/shopify-south-africa"
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Shopify south africa","item":"https://globify.ae/shopify-south-africa"}]
          })
        }}
      />
      {children}
    </>
  );
}
