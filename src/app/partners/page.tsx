import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/metadata";
import {
  PartnersHero,
  PartnershipPhilosophy,
  PartnerGrid,
} from "@/components/sections/partners";

export const metadata = generatePageMetadata({
  title: "Our Partners",
  description: "Organizations we collaborate with to amplify our democratic impact.",
  canonicalPath: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Partners", href: "/partners" }]} />
      <PartnersHero />
      <PartnerGrid />
      <PartnershipPhilosophy />
    </>
  );
}
