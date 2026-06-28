import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import {
  AboutHero,
  WhoWeAre,
  VisionMission,
  CoreValuesSection,
  OurWork,
} from "@/components/sections/about";

export const metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Learn about the Cross Party Democracy Forum, a non-partisan organization dedicated to promoting democratic governance, political inclusivity, and electoral integrity in Kenya.",
  keywords: ["about CPDF", "Kenya democracy organization", "non-partisan Kenya"],
  canonicalPath: "/about",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "About Us", href: "/about" }]} />
      <AboutHero />
      <WhoWeAre />
      <VisionMission />
      <CoreValuesSection />
      <OurWork />
    </>
  );
}
