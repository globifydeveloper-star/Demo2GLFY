import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shopify Plus Enterprise Agency | Globify UAE",
  description: "Enterprise e-commerce development with Shopify Plus. Custom checkout, wholesale B2B, and automated workflows.",
  alternates: { canonical: "https://globify.ae/shopify-plus" },
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
            "serviceType": "Shopify Plus Enterprise Agency",
            "description": "Enterprise e-commerce development with Shopify Plus. Custom checkout, wholesale B2B, and automated workflows.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify", "https://www.instagram.com/globify"],
              "url": "https://globify.ae"
            },
            "areaServed": ["United Arab Emirates", "India", "Global"],
            "url": "https://globify.ae/shopify-plus"
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Shopify plus","item":"https://globify.ae/shopify-plus"}]
          })
        }}
      />
      {children}
    </>
  );
}
