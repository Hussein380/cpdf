import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface GenerateMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalPath?: string;
  noIndex?: boolean;
}

/**
 * Factory function that generates consistent per-page metadata.
 * Call this in each page's generateMetadata() export.
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/images/og-default.jpg",
  canonicalPath = "",
  noIndex = false,
}: GenerateMetadataOptions): Metadata {
  const canonicalUrl = `${SITE_CONFIG.url}${canonicalPath}`;
  const fullTitle = `${title} | ${SITE_CONFIG.shortName}`;

  const baseKeywords = [
    "democracy Kenya",
    "youth civic engagement",
    "political reform Kenya",
    "Cross Party Democracy Forum",
    "CPDF Kenya",
    "governance Kenya",
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...baseKeywords, ...keywords],
    authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      site: "@cpdfkenya",
      creator: "@cpdfkenya",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
