import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import {
  HeroSection,
  StatsSection,
  InitiativesPreview,
  ImpactHighlight,
  PartnersSection,
  YouthBanner,
  CtaSection,
} from "@/components/sections/home";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  openGraph: {
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <InitiativesPreview />
      <ImpactHighlight />
      <YouthBanner />
      <PartnersSection />
      <CtaSection />
    </>
  );
}
