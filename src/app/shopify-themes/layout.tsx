import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Shopify Theme Design | Globify UAE",
  description: "Pixel-perfect, high-converting custom Shopify themes built from scratch with Next.js or Liquid.",
  alternates: { canonical: "https://globify.ae/shopify-themes" },
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
            "serviceType": "Custom Shopify Theme Design",
            "description": "Pixel-perfect, high-converting custom Shopify themes built from scratch with Next.js or Liquid.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify", "https://www.instagram.com/globify"],
              "url": "https://globify.ae"
            },
            "areaServed": ["United Arab Emirates", "India", "Global"],
            "url": "https://globify.ae/shopify-themes"
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Shopify themes","item":"https://globify.ae/shopify-themes"}]
          })
        }}
      />
      {children}
    </>
  );
}
