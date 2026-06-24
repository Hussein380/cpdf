"use client";

import { motion } from "framer-motion";
import { Eye, Scale, Users, Shield } from "lucide-react";
import { CORE_VALUES } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import type { CoreValue } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  Eye: <Eye size={24} />,
  Scale: <Scale size={24} />,
  Users: <Users size={24} />,
  Shield: <Shield size={24} />,
};

const accentColors = [
  "from-cpdf-teal/20",
  "from-cpdf-blue/20",
  "from-cpdf-teal/15",
  "from-cpdf-blue/15",
];

function ValueCard({ value, index }: { value: CoreValue; index: number }) {
  return (
    <motion.div
      className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-cpdf-dark-border bg-cpdf-dark-card overflow-hidden"
      whileHover={{
        y: -8,
        borderColor: "rgba(26,188,156,0.35)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.4), 0 0 30px rgba(26,188,156,0.08)",
      }}
      transition={{ duration: 0.25 }}
    >
      {/* BG gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-b ${accentColors[index]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

      {/* Number watermark */}
      <span className="absolute top-4 right-5 font-display font-bold text-6xl text-slate-900/[0.04] select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-2xl bg-cpdf-teal/10 border border-cpdf-teal/20 text-cpdf-teal mb-5 group-hover:scale-110 group-hover:bg-cpdf-teal/20 transition-all duration-300">
        {iconMap[value.icon] ?? <Shield size={24} />}
      </div>

      {/* Teal dot divider */}
      <div className="relative z-10 w-1.5 h-1.5 rounded-full bg-cpdf-teal mb-4 group-hover:scale-150 transition-transform duration-300" />

      <h3 className="relative z-10 font-display font-bold text-slate-900 text-xl mb-3 group-hover:text-cpdf-teal transition-colors duration-200">
        {value.title}
      </h3>
      <p className="relative z-10 text-cpdf-muted text-sm leading-relaxed">
        {value.description}
      </p>
    </motion.div>
  );
}

export function CoreValuesSection() {
  return (
    <section className="section-padding bg-cpdf-dark relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <SectionHeader
          eyebrow="What We Stand For"
          title="Our Core Values"
          description="Four principles that guide every decision, partnership, and program at CPDF."
          className="mb-14"
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {CORE_VALUES.map((value, i) => (
            <StaggerItem key={value.id}>
              <ValueCard value={value} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
