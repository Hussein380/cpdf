"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PARTNERS } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations";
import type { Partner } from "@/types";

// ─── Partner Card ─────────────────────────────────────────────────────────────

function PartnerCard({ partner }: { partner: Partner }) {
  const card = (
    <motion.div
      className="group flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border border-cpdf-dark-border bg-cpdf-dark-card h-44"
      whileHover={{
        y: -6,
        borderColor: "rgba(0,84,148,0.3)",
        boxShadow: "0 16px 50px rgba(0,0,0,0.35)",
      }}
      transition={{ duration: 0.25 }}
    >
      {/* Logo */}
      <div className="relative w-full h-16 transition-transform duration-300 group-hover:scale-105 bg-white rounded-lg p-2">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain p-2"
          sizes="200px"
        />
      </div>
      <p className="text-cpdf-muted text-xs text-center font-medium group-hover:text-slate-900 transition-colors duration-200">
        {partner.name}
      </p>
    </motion.div>
  );

  if (partner.website) {
    return (
      <a href={partner.website} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }
  return card;
}

// ─── Partners Section ─────────────────────────────────────────────────────────

export function PartnersSection() {
  return (
    <section className="section-padding bg-cpdf-darker relative">
      {/* Top glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cpdf-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-cpdf-teal text-sm font-semibold tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-cpdf-teal" />
              Trusted Partners
              <span className="w-8 h-px bg-cpdf-teal" />
            </span>
          </FadeIn>
          <SlideUp delay={0.1}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
              Backed by Global & Local Leaders
            </h2>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-cpdf-muted text-lg max-w-xl mx-auto">
              We collaborate with international organizations and Kenyan civil society
              to amplify democratic impact at every level.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.1}
        >
          {PARTNERS.map((partner) => (
            <StaggerItem key={partner.id}>
              <PartnerCard partner={partner} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Button href="/about" variant="ghost" icon={<ArrowRight size={16} />}>
              View All Partners
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
