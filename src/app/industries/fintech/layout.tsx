import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Powered Fintech Solutions, Intelligent Financial Platforms | Globify",
  description: "Globify builds AI-powered payment intelligence, automated compliance, ML fraud detection, and algorithmic trading platforms. AEO-optimized. 70% compliance cost reduction.",
  alternates: { canonical: "https://globify.ae/industries/fintech" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://globify.ae/industries"},{"@type":"ListItem","position":3,"name":"Fintech","item":"https://globify.ae/industries/fintech"}]
          })
        }}
      />
      {children}</>;
}
