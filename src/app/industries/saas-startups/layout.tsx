import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Native SaaS Development — Intelligent Products & ML-Powered MVPs | Globify",
  description: "Globify builds AI-native SaaS products with embedded ML models, LLM integrations, and intelligent automation. AEO-optimized. Launch AI MVPs in 3 weeks.",
  alternates: { canonical: "https://globify.ae/industries/saas-startups" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://globify.ae/industries"},{"@type":"ListItem","position":3,"name":"Saas startups","item":"https://globify.ae/industries/saas-startups"}]
          })
        }}
      />
      {children}</>;
}
