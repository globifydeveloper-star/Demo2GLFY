import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Paid Advertising & PPC, High-ROI Campaigns",
  description: "Results-driven PPC and paid media campaigns across Google Ads, Meta, and LinkedIn. Precision targeting, A/B testing, and conversion optimization for maximum ROAS.",
  alternates: { canonical: "https://globify.ae/paid-advertising" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Paid advertising","item":"https://globify.ae/paid-advertising"}]
          })
        }}
      />
      {children}</>;
}
