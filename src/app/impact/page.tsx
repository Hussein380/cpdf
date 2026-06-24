import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/metadata";
import {
  ImpactHero,
  ImpactStats,
  TimelineSection,
  AchievementsSection,
} from "@/components/sections/impact";

export const metadata = generatePageMetadata({
  title: "Our Impact",
  description: "Measurable outcomes from CPDF's work across Kenya.",
  canonicalPath: "/impact",
});

export default function ImpactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Impact", href: "/impact" }]} />
      <ImpactHero />
      <ImpactStats />
      <TimelineSection />
      <AchievementsSection />
    </>
  );
}
