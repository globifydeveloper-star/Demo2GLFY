import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Powered Chatbots & Assistants, Conversational AI | Globify",
  description: "Intelligent conversational agents that handle customer support, qualify leads, and deliver personalized experiences 24/7. Custom AI chatbots for UAE & India.",
  alternates: { canonical: "https://globify.ae/ai-chatbots" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Ai chatbots","item":"https://globify.ae/ai-chatbots"}]
          })
        }}
      />
      {children}</>;
}
