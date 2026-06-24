import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/metadata";
import {
  YouthHero,
  ProgramComponents,
  MentorshipSection,
  YouthCta,
} from "@/components/sections/youth";

export const metadata = generatePageMetadata({
  title: "Youth Empowerment for Democracy",
  description:
    "CPDF's flagship initiative dismantling systemic barriers that hinder youth participation in Kenyan politics and governance through training, mentorship, and digital tools.",
  keywords: ["youth empowerment Kenya", "youth democracy", "civic education Kenya", "young leaders Kenya"],
  canonicalPath: "/youth-empowerment",
});

export default function YouthEmpowermentPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Youth Empowerment", href: "/youth-empowerment" }]} />
      <YouthHero />
      <ProgramComponents />
      <MentorshipSection />
      <YouthCta />
    </>
  );
}
