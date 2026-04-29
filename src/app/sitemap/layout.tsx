import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sitemap | Globify",
  description: "Browse all pages on the Globify website.",
  
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Sitemap","item":"https://globify.ae/sitemap"}]
          })
        }}
      />
      {children}</>;
}
