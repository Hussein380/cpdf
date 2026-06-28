"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/animations";

export function FuturePlansHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-cpdf-darker pt-20">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <motion.div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-cpdf-teal/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.16, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-cpdf-blue/15 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#060D1A_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto container-padding text-center py-20">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-cpdf-teal/10 border border-cpdf-teal/20 rounded-full px-5 py-2 mb-6">
            <Rocket size={14} className="text-cpdf-teal" />
            <span className="text-cpdf-teal text-sm font-semibold">2025 - 2027</span>
          </div>
        </FadeIn>
        <SlideUp delay={0.1}>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-slate-900 leading-tight mb-6">
            Building the{" "}
            <span className="text-gradient-hero">Future of Democracy</span>
          </h1>
        </SlideUp>
        <SlideUp delay={0.2}>
          <p className="text-cpdf-muted text-xl leading-relaxed max-w-2xl mx-auto">
            Six ambitious plans to expand CPDF&apos;s infrastructure, reach, and impact, from ICT centres across 24 counties to international partnerships and
            digital civic platforms.
          </p>
        </SlideUp>
        <FadeIn delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cpdf-teal" />
            <div className="w-2 h-2 rounded-full bg-cpdf-teal animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cpdf-teal" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
