import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Globify UAE",
  description: "Get in touch with Globify. Let's discuss how we can help your business grow with custom web development, digital marketing, and AI solutions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}
