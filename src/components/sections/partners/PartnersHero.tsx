"use client";

import { motion } from "framer-motion";
import { FadeIn, SlideUp } from "@/components/animations";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

export function PartnersHero() {
  return (
    <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-cpdf-darker pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/assets/partners-bg.png"
          alt="Global Partnerships"
          fill
          className="object-cover"
          priority
          unoptimized={true}
        />
      </div>
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-slate-900/60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto container-padding text-center py-20">
        <FadeIn>
          <Badge variant="teal" className="mb-6">Strategic Partners</Badge>
        </FadeIn>
        <SlideUp delay={0.1}>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-6">
            Backed by{" "}
            <span className="text-cpdf-teal">Global Leaders</span>
          </h1>
        </SlideUp>
        <SlideUp delay={0.2}>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
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
