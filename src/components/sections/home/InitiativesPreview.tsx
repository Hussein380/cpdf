"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MessageSquare, Users, Vote, GraduationCap,
  Heart, Globe, Shield, Laptop, ArrowRight,
} from "lucide-react";
import { INITIATIVES } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import type { Initiative } from "@/types";

// ─── Icon map ─────────────────────────────────────────────────────────────────

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare size={22} />,
  Users: <Users size={22} />,
  Vote: <Vote size={22} />,
  GraduationCap: <GraduationCap size={22} />,
  Heart: <Heart size={22} />,
  Globe: <Globe size={22} />,
  Shield: <Shield size={22} />,
  Laptop: <Laptop size={22} />,
};

// ─── Initiative Card ──────────────────────────────────────────────────────────

function InitiativeCard({ initiative, index }: { initiative: Initiative; index: number }) {
  return (
    <motion.div
      className="group relative flex flex-col p-6 rounded-2xl border border-cpdf-dark-border bg-cpdf-dark-card overflow-hidden h-full"
      whileHover={{
        y: -6,
        borderColor: "rgba(0,84,148,0.35)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      }}
      transition={{ duration: 0.25 }}
    >
      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cpdf-teal/0 via-cpdf-teal to-cpdf-teal/0"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cpdf-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Index */}
      <span className="absolute top-4 right-5 font-display font-bold text-5xl text-slate-900/[0.04] select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-cpdf-teal/10 border border-cpdf-teal/20 text-cpdf-teal mb-5 group-hover:bg-cpdf-teal/20 group-hover:border-cpdf-teal/40 transition-colors duration-300">
        {iconMap[initiative.icon] ?? <Globe size={22} />}
      </div>

      {/* Content */}
      <h3 className="relative z-10 font-display font-semibold text-slate-900 text-lg leading-snug mb-3 group-hover:text-cpdf-teal transition-colors duration-200">
        {initiative.title}
      </h3>
      <p className="relative z-10 text-cpdf-muted text-sm leading-relaxed flex-1">
        {initiative.description}
      </p>


    </motion.div>
  );
}

// ─── Initiatives Preview ──────────────────────────────────────────────────────

export function InitiativesPreview() {
  // Show first 6 on home page
  const preview = INITIATIVES.slice(0, 6);

  return (
    <section className="section-padding bg-cpdf-darker relative">
      <div className="max-w-7xl mx-auto container-padding">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <SectionHeader
              eyebrow="What We Do"
              title="Initiatives Driving Democratic Change"
              description="Six focused programs tackling the systemic barriers that weaken Kenya's democracy."
              align="left"
            />
            <div className="mt-8">
              <Button href="/what-we-do" variant="outline" icon={<ArrowRight size={16} />}>
                View All Initiatives
              </Button>
            </div>
          </div>
          <motion.div 
            className="relative h-64 w-full rounded-3xl overflow-hidden border border-cpdf-dark-border shadow-xl hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image src="/assets/ai-images/ke2.jpeg" alt="Democratic Change" fill className="object-cover object-center" unoptimized={true} />
            <div className="absolute inset-0 bg-cpdf-teal/10 mix-blend-overlay pointer-events-none" />
          </motion.div>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {preview.map((initiative, i) => (
            <StaggerItem key={initiative.id} className="h-full">
              <InitiativeCard initiative={initiative} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
