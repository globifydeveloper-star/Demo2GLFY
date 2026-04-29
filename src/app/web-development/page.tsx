import type { Metadata } from "next";
import WebDevelopmentClient from "./WebDevelopmentClient";

export const metadata: Metadata = {
  title: "Enterprise Web Development & Web Apps | Globify UAE",
  description: "Custom web development services, highly scalable React web apps, and enterprise CMS solutions. We build fast, secure digital platforms.",
  alternates: {
    canonical: "/web-development",
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
            "serviceType": "Web Development & Web Applications",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "url": "https://globify.ae"
            }
          })
        }}
      />
      <WebDevelopmentClient />
    </>
  );
}
