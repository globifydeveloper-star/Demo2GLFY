import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Powered Retail Solutions, Intelligent Commerce & Personalization | Globify",
  description: "Globify builds AI-powered retail platforms with predictive personalization, dynamic pricing, and autonomous inventory management. AEO-optimized. 3.2x conversion lift.",
  alternates: { canonical: "https://globify.ae/industries/retail" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://globify.ae/industries"},{"@type":"ListItem","position":3,"name":"Retail","item":"https://globify.ae/industries/retail"}]
          })
        }}
      />
      {children}</>;
}
