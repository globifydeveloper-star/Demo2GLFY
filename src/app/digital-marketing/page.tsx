import type { Metadata } from "next";
import DigitalMarketingClient from "./DigitalMarketingClient";

export const metadata: Metadata = {
  title: "Performance Marketing & Digital Strategy | Globify UAE",
  description: "Data-driven performance marketing, SEO strategy, paid advertising, and CRO. Scale your online revenue aggressively with Globify.",
  alternates: {
    canonical: "/digital-marketing",
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
            "serviceType": "Performance Marketing & Digital Strategy",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "url": "https://globify.ae"
            }
          })
        }}
      />
      <DigitalMarketingClient />
    </>
  );
}
