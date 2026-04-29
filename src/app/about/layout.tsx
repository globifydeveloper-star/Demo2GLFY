import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Globify — AI Transformation & Digital Commerce Leaders",
  description: "Globify delivers AI-powered digital transformation, ML engineering, and revenue optimization. 300+ transformations, $200M+ revenue engineered across 10+ countries.",
  alternates: { canonical: "https://globify.ae/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"About","item":"https://globify.ae/about"}]
          })
        }}
      />
      {children}</>;
}
