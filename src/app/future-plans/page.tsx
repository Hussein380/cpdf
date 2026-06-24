import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/metadata";
import {
  FuturePlansHero,
  RoadmapSection,
  CountyExpansion,
} from "@/components/sections/future-plans";

export const metadata = generatePageMetadata({
  title: "Future Plans",
  description: "CPDF's roadmap for expanding democratic governance and youth civic participation in Kenya.",
  canonicalPath: "/future-plans",
});

export default function FuturePlansPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Future Plans", href: "/future-plans" }]} />
      <FuturePlansHero />
      <RoadmapSection />
      <CountyExpansion />
    </>
  );
}
