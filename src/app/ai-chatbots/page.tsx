import type { Metadata } from "next";
import AiChatbotsClient from "./AiChatbotsClient";

export const metadata: Metadata = {
  title: "Enterprise AI Chatbot Development | NLP & LLM Solutions",
  description: "Deploy custom conversational AI and generative AI chatbots trained on your company data. Globify builds intelligent AI for sales, support, and internal operations.",
  alternates: {
    canonical: "/ai-chatbots",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Custom AI Chatbots & Conversational AI",
            "description": "Custom LLM and GPT-4 powered enterprise chatbots for customer support and lead generation.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "url": "https://globify.ae"
            }
          })
        }}
      />
      <AiChatbotsClient />
    </>
  );
}
