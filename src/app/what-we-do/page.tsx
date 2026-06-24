import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/metadata";
import {
  InitiativesHero,
  InitiativesGrid,
  ApproachSection,
} from "@/components/sections/what-we-do";

export const metadata = generatePageMetadata({
  title: "What We Do",
  description:
    "Explore CPDF's eight initiatives driving democratic reform in Kenya — from facilitating cross-party dialogues to leveraging technology for youth civic engagement.",
  keywords: ["CPDF initiatives", "democracy Kenya", "political reform", "civic engagement"],
  canonicalPath: "/what-we-do",
});

export default function WhatWeDoPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "What We Do", href: "/what-we-do" }]} />
      <InitiativesHero />
      <InitiativesGrid />
      <ApproachSection />
    </>
  );
}
