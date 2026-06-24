"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IMPACT_STATS } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";

function BigStatCard({
  value,
  suffix,
  label,
  description,
}: {
  value: number;
  suffix: string;
  label: string;
  description?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { count, startCounting } = useCountUp({ end: value, duration: 2400 });

  useEffect(() => {
    if (isInView) startCounting();
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="font-display font-bold text-6xl sm:text-7xl text-slate-900 mb-2 tabular-nums">
        {Math.round(count).toLocaleString()}
        <span className="text-cpdf-teal">{suffix}</span>
      </div>
      <p className="font-semibold text-slate-900 text-xl mb-2">{label}</p>
      {description && (
        <p className="text-cpdf-muted text-sm max-w-xs leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}

export function ImpactStats() {
  return (
    <section className="section-padding bg-gradient-to-br from-cpdf-blue-dark/40 via-cpdf-dark to-cpdf-dark relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cpdf-teal/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cpdf-teal/40 to-transparent" />

      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-cpdf-dark-border">
          {IMPACT_STATS.map((stat) => (
            <BigStatCard
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
