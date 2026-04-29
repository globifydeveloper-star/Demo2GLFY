import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Globify",
  description: "Review Globify's Terms of Service covering usage of our digital solutions, web development, and technology consulting services.",
  alternates: { canonical: "https://globify.ae/terms-of-service" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Terms of service","item":"https://globify.ae/terms-of-service"}]
          })
        }}
      />
      {children}</>;
}
