"use client";

import { motion } from "framer-motion";
import { FadeIn, SlideUp } from "@/components/animations";
import { Badge } from "@/components/ui/Badge";

export function PartnersHero() {
  return (
    <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-cpdf-darker pt-20">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <motion.div
        className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-cpdf-teal/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.15, 0.06] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-cpdf-blue/15 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#060D1A_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto container-padding text-center py-20">
        <FadeIn>
          <Badge variant="teal" className="mb-6">Strategic Partners</Badge>
        </FadeIn>
        <SlideUp delay={0.1}>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-slate-900 leading-tight mb-6">
            Backed by{" "}
            <span className="text-gradient-hero">Global Leaders</span>
          </h1>
        </SlideUp>
        <SlideUp delay={0.2}>
          <p className="text-cpdf-muted text-xl leading-relaxed max-w-2xl mx-auto">
            CPDF collaborates with world-class international organizations and leading
            Kenyan civil society groups to amplify democratic impact at every level.
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
