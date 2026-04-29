import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CRO & Revenue Engineering, AI-Powered Conversion Optimization | Globify",
  description: "Globify's AI-powered CRO & Revenue Engineering: predictive personalization, A/B testing, funnel optimization, and AEO-driven discovery that increase conversions by 30–80%.",
  alternates: { canonical: "https://globify.ae/cro-revenue-engineering" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Cro revenue engineering","item":"https://globify.ae/cro-revenue-engineering"}]
          })
        }}
      />
      {children}</>;
}
