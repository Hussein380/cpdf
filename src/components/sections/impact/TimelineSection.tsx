"use client";

import { motion } from "framer-motion";
import { FUTURE_PLANS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations";
import { Badge } from "@/components/ui/Badge";

export function TimelineSection() {
  return (
    <section className="section-padding bg-cpdf-darker relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cpdf-blue/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto container-padding">
        <SectionHeader
          eyebrow="Looking Ahead"
          title="Our Road to 2027"
          description="Six ambitious plans to expand CPDF's reach and deepen Kenya's democratic foundations."
          className="mb-16"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cpdf-teal/60 via-cpdf-teal/30 to-transparent" />

          <div className="space-y-8">
            {FUTURE_PLANS.map((plan, i) => (
              <FadeIn key={plan.id} delay={i * 0.1}>
                <motion.div
                  className="group relative flex gap-8 pl-16"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Dot */}
                  <motion.div
                    className="absolute left-3.5 top-5 w-5 h-5 rounded-full border-2 border-cpdf-teal bg-cpdf-darker -translate-y-1/2 group-hover:bg-cpdf-teal transition-colors duration-300"
                    whileHover={{ scale: 1.4 }}
                  />

                  {/* Card */}
                  <div className="flex-1 p-6 rounded-2xl border border-cpdf-dark-border bg-cpdf-dark-card group-hover:border-cpdf-teal/30 transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <h3 className="font-display font-semibold text-slate-900 text-lg leading-snug group-hover:text-slate-900 transition-colors">
                        {plan.title}
                      </h3>
                      {plan.timeline && (
                        <Badge variant="teal">{plan.timeline}</Badge>
                      )}
                    </div>
                    <p className="text-cpdf-muted text-sm leading-relaxed">
                      {plan.description}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
