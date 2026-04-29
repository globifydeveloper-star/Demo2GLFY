import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI & Automation, Intelligent Business Solutions",
  description: "AI-powered automation solutions for businesses in UAE and India. Chatbots, RPA, workflow automation, and machine learning to reduce costs by 40%.",
  alternates: { canonical: "https://globify.ae/ai-automation" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Ai automation","item":"https://globify.ae/ai-automation"}]
          })
        }}
      />
      {children}</>;
}
