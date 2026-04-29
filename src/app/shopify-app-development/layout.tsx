import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Shopify App Development | Globify UAE",
  description: "Build public or custom private Shopify apps to automate workflows, integrate ERPs, and enhance your store functionality.",
  alternates: { canonical: "https://globify.ae/shopify-app-development" },
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
            "serviceType": "Custom Shopify App Development",
            "description": "Build public or custom private Shopify apps to automate workflows, integrate ERPs, and enhance your store functionality.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify", "https://www.instagram.com/globify"],
              "url": "https://globify.ae"
            },
            "areaServed": ["United Arab Emirates", "India", "Global"],
            "url": "https://globify.ae/shopify-app-development"
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Shopify app development","item":"https://globify.ae/shopify-app-development"}]
          })
        }}
      />
      {children}
    </>
  );
}
