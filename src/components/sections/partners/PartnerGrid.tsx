"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PARTNERS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import type { Partner } from "@/types";

const categoryLabel: Record<Partner["category"], string> = {
  media: "Media",
  governance: "Governance",
  "civil-society": "Civil Society",
  political: "Political",
  international: "International",
};

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <motion.div
      className="group relative flex flex-col p-8 rounded-2xl border border-cpdf-dark-border bg-cpdf-dark-card overflow-hidden"
      whileHover={{
        y: -8,
        borderColor: "rgba(26,188,156,0.4)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.4), 0 0 30px rgba(26,188,156,0.08)",
      }}
      transition={{ duration: 0.25 }}
    >
      {/* Top glow on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cpdf-teal/0 via-cpdf-teal to-cpdf-teal/0"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35 }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-cpdf-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Category badge */}
      <div className="relative z-10 mb-6">
        <Badge variant="subtle">{categoryLabel[partner.category]}</Badge>
      </div>

      {/* Logo */}
      <div className="relative z-10 h-20 w-full mb-6 flex items-center justify-center">
        <div className="relative w-full h-full transition-transform duration-400 group-hover:scale-105">
          <Image
            src={partner.logo}
            alt={partner.name}
            fill
            className="object-contain"
            sizes="300px"
          />
        </div>
      </div>

      {/* Info */}
      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-slate-900 text-xl mb-2 group-hover:text-slate-900 transition-colors">
          {partner.name}
        </h3>
        {partner.description && (
          <p className="text-cpdf-muted text-sm leading-relaxed mb-5 flex-1">
            {partner.description}
          </p>
        )}
        {partner.website && (
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-cpdf-teal/70 group-hover:text-cpdf-teal text-sm font-medium transition-colors duration-200"
          >
            Visit Website
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function PartnerGrid() {
  return (
    <section className="section-padding bg-cpdf-dark relative">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionHeader
          eyebrow="Our Partners"
          title="Organizations We Work With"
          description="Each partner brings unique expertise and reach — together we create compounding democratic impact across Kenya and beyond."
          className="mb-14"
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {PARTNERS.map((partner) => (
            <StaggerItem key={partner.id} className="h-full">
              <PartnerCard partner={partner} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
