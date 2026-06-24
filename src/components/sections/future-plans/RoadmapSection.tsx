"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Building2, DollarSign, Globe, GraduationCap, Smartphone } from "lucide-react";
import { FUTURE_PLANS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations";
import type { FuturePlan } from "@/types";

const planIcons: Record<number, React.ReactNode> = {
  1: <Monitor size={22} />,
  2: <Building2 size={22} />,
  3: <DollarSign size={22} />,
  4: <Globe size={22} />,
  5: <GraduationCap size={22} />,
  6: <Smartphone size={22} />,
};

export function RoadmapSection() {
  const [activePlan, setActivePlan] = useState<FuturePlan>(FUTURE_PLANS[0]);

  return (
    <section className="section-padding bg-cpdf-dark relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <SectionHeader
          eyebrow="Strategic Roadmap"
          title="Six Plans, One Vision"
          description="Click any milestone to explore what CPDF has planned and why it matters for Kenya's democratic future."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left — step list */}
          <div className="lg:col-span-2 space-y-3">
            {FUTURE_PLANS.map((plan) => (
              <FadeIn key={plan.id} delay={plan.step * 0.07}>
                <motion.button
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 ${
                    activePlan.id === plan.id
                      ? "border-cpdf-teal/50 bg-cpdf-teal/10"
                      : "border-cpdf-dark-border bg-cpdf-dark-card hover:border-cpdf-teal/25 hover:bg-cpdf-dark-card/80"
                  }`}
                  onClick={() => setActivePlan(plan)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-10 h-10 flex items-center justify-center rounded-lg shrink-0 transition-colors ${
                    activePlan.id === plan.id
                      ? "bg-cpdf-teal/20 border border-cpdf-teal/40 text-cpdf-teal"
                      : "bg-slate-50 border border-cpdf-dark-border text-cpdf-muted"
                  }`}>
                    {planIcons[plan.step]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-sm leading-snug truncate transition-colors ${
                      activePlan.id === plan.id ? "text-slate-900" : "text-cpdf-muted"
                    }`}>
                      {plan.title}
                    </p>
                    {plan.timeline && (
                      <p className="text-cpdf-muted text-xs mt-0.5">{plan.timeline}</p>
                    )}
                  </div>
                  {activePlan.id === plan.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-cpdf-teal shrink-0" />
                  )}
                </motion.button>
              </FadeIn>
            ))}
          </div>

          {/* Right — detail panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlan.id}
                className="p-8 rounded-2xl border border-cpdf-teal/20 bg-cpdf-dark-card relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* BG glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cpdf-teal/8 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cpdf-teal/0 via-cpdf-teal to-cpdf-teal/0" />

                <div className="relative z-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-cpdf-teal/15 border border-cpdf-teal/25 text-cpdf-teal shrink-0">
                      {planIcons[activePlan.step]}
                    </div>
                    <div>
                      {activePlan.timeline && (
                        <Badge variant="teal" className="mb-2">{activePlan.timeline}</Badge>
                      )}
                      <h3 className="font-display font-bold text-slate-900 text-2xl leading-snug">
                        {activePlan.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-cpdf-muted text-lg leading-relaxed mb-6">
                    {activePlan.description}
                  </p>

                  <div className="flex items-center gap-2 text-cpdf-muted text-sm">
                    <span className="font-display font-bold text-4xl text-cpdf-teal/20 mr-2">
                      {String(activePlan.step).padStart(2, "0")}
                    </span>
                    <span>of {FUTURE_PLANS.length} strategic initiatives</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
