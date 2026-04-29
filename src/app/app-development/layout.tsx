import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "App Development, React Native, Flutter & Native Apps",
  description: "Custom mobile app development for iOS and Android. React Native, Flutter, and native solutions for businesses in UAE and India. MVP to enterprise scale.",
  alternates: { canonical: "https://globify.ae/app-development" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"App development","item":"https://globify.ae/app-development"}]
          })
        }}
      />
      {children}</>;
}
