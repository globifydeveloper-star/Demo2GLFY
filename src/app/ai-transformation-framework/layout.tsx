import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Driven Business Transformation Framework | Globify",
  description: "Globify's 5-phase AI transformation framework: Audit → Strategy → Implementation → Optimization → Innovation. AEO-optimized. Reduce costs by 60% and engineer revenue growth.",
  alternates: { canonical: "https://globify.ae/ai-transformation-framework" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Ai transformation framework","item":"https://globify.ae/ai-transformation-framework"}]
          })
        }}
      />
      {children}</>;
}
