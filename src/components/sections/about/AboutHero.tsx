"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/animations";
import { Badge } from "@/components/ui/Badge";

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image src="/assets/24.jpg" alt="About CPDF" fill className="object-cover" unoptimized={true} priority />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/75 pointer-events-none" />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cpdf-blue/20 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cpdf-teal/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <FadeIn>
          <Badge variant="teal" className="mb-6">About CPDF</Badge>
        </FadeIn>

        <SlideUp delay={0.1}>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-6">
            Who We <span className="text-cpdf-teal">Are</span>
          </h1>
        </SlideUp>

        <SlideUp delay={0.2}>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
            A non-partisan organization dedicated to promoting democratic governance,
            political inclusivity, and electoral integrity across Kenya.
          </p>
        </SlideUp>

        {/* Decorative line */}
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
