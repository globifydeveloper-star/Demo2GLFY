import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Social Media Management & Marketing, Strategy, Content & Growth",
  description: "Full-service social media management: content creation, community management, influencer marketing, and paid social campaigns for brands in UAE and India.",
  alternates: { canonical: "https://globify.ae/social-media-marketing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Social media marketing","item":"https://globify.ae/social-media-marketing"}]
          })
        }}
      />
      {children}</>;
}
