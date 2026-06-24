"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare, Users, Vote, GraduationCap,
  Heart, Globe, Shield, Laptop, X,
} from "lucide-react";
import { INITIATIVES } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import type { Initiative } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare size={24} />,
  Users: <Users size={24} />,
  Vote: <Vote size={24} />,
  GraduationCap: <GraduationCap size={24} />,
  Heart: <Heart size={24} />,
  Globe: <Globe size={24} />,
  Shield: <Shield size={24} />,
  Laptop: <Laptop size={24} />,
};

// ─── Expanded Detail Modal ────────────────────────────────────────────────────

function InitiativeModal({
  initiative,
  index,
  onClose,
}: {
  initiative: Initiative;
  index: number;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative z-10 max-w-lg w-full bg-cpdf-dark-card border border-cpdf-dark-border rounded-2xl p-8 shadow-card-hover"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-cpdf-muted hover:text-slate-900 hover:bg-slate-50 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cpdf-teal/10 border border-cpdf-teal/20 text-cpdf-teal shrink-0">
            {iconMap[initiative.icon] ?? <Globe size={24} />}
          </div>
          <div>
            <Badge variant="subtle" className="mb-1">Initiative {String(index + 1).padStart(2, "0")}</Badge>
            <h3 className="font-display font-bold text-slate-900 text-lg">{initiative.title}</h3>
          </div>
        </div>
        <p className="text-cpdf-muted leading-relaxed">{initiative.description}</p>
      </motion.div>
    </motion.div>
  );
}

// ─── Initiative Card ──────────────────────────────────────────────────────────

function InitiativeCard({
  initiative,
  index,
  onClick,
}: {
  initiative: Initiative;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="group relative flex flex-col p-6 rounded-2xl border border-cpdf-dark-border bg-cpdf-dark-card overflow-hidden h-full cursor-pointer"
      whileHover={{
        y: -6,
        borderColor: "rgba(26,188,156,0.35)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      }}
      transition={{ duration: 0.22 }}
      onClick={onClick}
    >
      {/* Top accent */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cpdf-teal/0 via-cpdf-teal to-cpdf-teal/0"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-cpdf-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <span className="absolute top-4 right-5 font-display font-bold text-5xl text-slate-900/[0.04] select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-cpdf-teal/10 border border-cpdf-teal/20 text-cpdf-teal mb-5 group-hover:bg-cpdf-teal/20 group-hover:scale-110 transition-all duration-300">
        {iconMap[initiative.icon] ?? <Globe size={24} />}
      </div>

      <h3 className="relative z-10 font-display font-semibold text-slate-900 text-lg leading-snug mb-3 group-hover:text-cpdf-teal transition-colors duration-200">
        {initiative.title}
      </h3>
      <p className="relative z-10 text-cpdf-muted text-sm leading-relaxed flex-1 line-clamp-3">
        {initiative.description}
      </p>

      <div className="relative z-10 mt-4 text-cpdf-teal/60 group-hover:text-cpdf-teal text-xs font-semibold tracking-wide uppercase transition-colors duration-200">
        Click to expand →
      </div>
    </motion.div>
  );
}

// ─── Initiatives Grid ─────────────────────────────────────────────────────────

export function InitiativesGrid() {
  const [selected, setSelected] = useState<Initiative | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="section-padding bg-cpdf-dark relative">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionHeader
          eyebrow="All Initiatives"
          title="Comprehensive Democratic Reform"
          description="Click any initiative to learn more about how CPDF is driving change in Kenya."
          className="mb-14"
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.07}
        >
          {INITIATIVES.map((initiative, i) => (
            <StaggerItem key={initiative.id} className="h-full">
              <InitiativeCard
                initiative={initiative}
                index={i}
                onClick={() => { setSelected(initiative); setSelectedIndex(i); }}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <AnimatePresence>
        {selected && (
          <InitiativeModal
            initiative={selected}
            index={selectedIndex}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
