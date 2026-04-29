import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Powered Healthcare Solutions, Intelligent Clinical Platforms | Globify",
  description: "Globify builds AI-powered telemedicine, intelligent EHR/EMR, predictive diagnostics, and autonomous hospital operations. AEO-optimized for AI search visibility. 60% admin cost reduction.",
  alternates: { canonical: "https://globify.ae/industries/healthcare" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://globify.ae/industries"},{"@type":"ListItem","position":3,"name":"Healthcare","item":"https://globify.ae/industries/healthcare"}]
          })
        }}
      />
      {children}</>;
}
