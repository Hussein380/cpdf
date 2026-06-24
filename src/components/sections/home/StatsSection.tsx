"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { IMPACT_STATS } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";
import { StaggerContainer, StaggerItem } from "@/components/animations";

// ─── Single Stat Card ─────────────────────────────────────────────────────────

function StatCard({
  value,
  suffix,
  label,
  description,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  description?: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { count, startCounting } = useCountUp({ end: value, duration: 2200 });

  useEffect(() => {
    if (isInView) startCounting();
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      ref={ref}
      className="relative group flex flex-col items-center text-center p-8 rounded-2xl border border-cpdf-dark-border bg-cpdf-dark-card overflow-hidden"
      whileHover={{
        y: -6,
        borderColor: "rgba(26,188,156,0.35)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(26,188,156,0.08)",
      }}
      transition={{ duration: 0.25 }}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cpdf-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Index number watermark */}
      <span className="absolute top-4 right-5 font-display font-bold text-6xl text-slate-900/[0.03] select-none">
        0{index + 1}
      </span>

      {/* Count */}
      <div className="relative z-10">
        <div className="font-display font-bold text-5xl sm:text-6xl text-slate-900 mb-1 tabular-nums">
          {Math.round(count).toLocaleString()}
          <span className="text-cpdf-teal">{suffix}</span>
        </div>

        {/* Teal underline */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-cpdf-teal to-transparent mx-auto mb-4"
          initial={{ width: 0 }}
          animate={isInView ? { width: "60%" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <p className="font-semibold text-slate-900 text-lg mb-2">{label}</p>
        {description && (
          <p className="text-cpdf-muted text-sm leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  );
}

// ─── Stats Section ─────────────────────────────────────────────────────────────

export function StatsSection() {
  return (
    <section className="section-padding bg-cpdf-dark relative overflow-hidden">
      {/* Subtle top border glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cpdf-teal/30 to-transparent" />

      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            className="inline-flex items-center gap-2 text-cpdf-teal text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-8 h-px bg-cpdf-teal" />
            Our Impact in Numbers
            <span className="w-8 h-px bg-cpdf-teal" />
          </motion.span>

          <motion.h2
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Measurable Change Across Kenya
          </motion.h2>
        </div>

        {/* Highlight Image */}
        <motion.div
          className="relative h-72 lg:h-96 w-full rounded-3xl overflow-hidden border border-cpdf-dark-border mb-16 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image src="/assets/25.jpg" alt="Key Achievements" fill className="object-cover" unoptimized={true} />
          <div className="absolute inset-0 bg-cpdf-teal/10 pointer-events-none mix-blend-overlay" />
        </motion.div>

        {/* Stats grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat, i) => (
            <StaggerItem key={stat.id}>
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
                index={i}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cpdf-teal/30 to-transparent" />
    </section>
  );
}
