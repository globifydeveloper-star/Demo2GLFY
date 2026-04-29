import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Social Media & Brand Growth, Build a Loyal Audience",
  description: "Strategic social media management, influencer marketing, and brand storytelling. Build a loyal audience and drive revenue through social channels.",
  alternates: { canonical: "https://globify.ae/social-media-brand" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Social media brand","item":"https://globify.ae/social-media-brand"}]
          })
        }}
      />
      {children}</>;
}
