import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/metadata";
import {
  TeamHero,
  LeadershipSpotlight,
  TeamGrid,
} from "@/components/sections/team";

export const metadata = generatePageMetadata({
  title: "Our Team",
  description: "Meet the dedicated individuals driving democratic governance in Kenya.",
  canonicalPath: "/team",
});

export default function TeamPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Team", href: "/team" }]} />
      <TeamHero />
      <LeadershipSpotlight />
      <TeamGrid />
    </>
  );
}
