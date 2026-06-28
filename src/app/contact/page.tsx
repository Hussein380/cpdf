import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/metadata";
import { ContactHero, ContactSection } from "@/components/sections/contact";

export const metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with CPDF, for partnerships, youth program applications, media inquiries, volunteering, or general information about our work in Kenya.",
  keywords: ["contact CPDF", "CPDF Kenya email", "democracy partnership Kenya"],
  canonicalPath: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <ContactHero />
      <ContactSection />
    </>
  );
}
