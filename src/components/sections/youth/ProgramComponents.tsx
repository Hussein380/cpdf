"use client";

import { motion } from "framer-motion";
import {
  Zap, BookOpen, Network,
  Smartphone, FileText, CheckSquare,
} from "lucide-react";
import { YOUTH_COMPONENTS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import type { YouthComponent } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={24} />,
  BookOpen: <BookOpen size={24} />,
  Network: <Network size={24} />,
  Smartphone: <Smartphone size={24} />,
  FileText: <FileText size={24} />,
  CheckSquare: <CheckSquare size={24} />,
};

const gradients = [
  "from-cpdf-teal/20",
  "from-cpdf-blue/20",
  "from-cpdf-teal/15",
  "from-cpdf-blue/15",
  "from-cpdf-teal/20",
  "from-cpdf-blue/20",
];

function ComponentCard({ component, index }: { component: YouthComponent; index: number }) {
  return (
    <motion.div
      className="group relative flex flex-col p-7 rounded-2xl border border-cpdf-dark-border bg-cpdf-dark-card overflow-hidden h-full"
      whileHover={{
        y: -8,
        borderColor: "rgba(0,84,148,0.4)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.4), 0 0 30px rgba(0,84,148,0.08)",
      }}
      transition={{ duration: 0.25 }}
    >
      {/* BG */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

      {/* Number */}
      <span className="absolute top-4 right-5 font-display font-bold text-6xl text-slate-900/[0.04] select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-2xl bg-cpdf-teal/10 border border-cpdf-teal/20 text-cpdf-teal mb-6 group-hover:scale-110 group-hover:bg-cpdf-teal/20 transition-all duration-300">
        {iconMap[component.icon] ?? <Zap size={24} />}
      </div>

      {/* Step indicator */}
      <div className="relative z-10 flex items-center gap-2 mb-4">
        <div className="h-0.5 w-8 bg-cpdf-teal/40 group-hover:bg-cpdf-teal transition-colors duration-300" />
        <span className="text-cpdf-teal text-xs font-semibold tracking-widest uppercase">
          Component {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative z-10 font-display font-bold text-slate-900 text-xl leading-snug mb-3 group-hover:text-slate-900 transition-colors duration-200">
        {component.title}
      </h3>
      <p className="relative z-10 text-cpdf-muted text-sm leading-relaxed flex-1">
        {component.description}
      </p>
    </motion.div>
  );
}

export function ProgramComponents() {
  return (
    <section className="section-padding bg-cpdf-dark relative">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionHeader
          eyebrow="Program Structure"
          title="Six Components, One Powerful Program"
          description="Each component targets a specific barrier to youth democratic participation, together they create a comprehensive pathway to civic leadership."
          className="mb-14"
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.09}
        >
          {YOUTH_COMPONENTS.map((component, i) => (
            <StaggerItem key={component.id} className="h-full">
              <ComponentCard component={component} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
