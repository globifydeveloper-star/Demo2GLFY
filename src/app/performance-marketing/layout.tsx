import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Performance Marketing, PPC, Google Ads & Paid Media",
  description: "Data-driven performance marketing: Google Ads, Meta Ads, LinkedIn, programmatic & retargeting. Maximize ROAS with AI-powered bid optimization.",
  alternates: { canonical: "https://globify.ae/performance-marketing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Performance marketing","item":"https://globify.ae/performance-marketing"}]
          })
        }}
      />
      {children}</>;
}
