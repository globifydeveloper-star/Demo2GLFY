import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Globify",
  description: "Globify's Privacy Policy explains how we collect, use, and protect your personal data when you use our digital services.",
  alternates: { canonical: "https://globify.ae/privacy-policy" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Privacy policy","item":"https://globify.ae/privacy-policy"}]
          })
        }}
      />
      {children}</>;
}
