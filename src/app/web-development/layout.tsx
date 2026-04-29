import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Web Development Services, Shopify, WordPress & Custom",
  description: "Professional web development services for UAE and India. Shopify, WordPress, custom websites with CRO optimization. Fast, secure, and conversion-focused.",
  alternates: { canonical: "https://globify.ae/web-development" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Web development","item":"https://globify.ae/web-development"}]
          })
        }}
      />
      {children}</>;
}
