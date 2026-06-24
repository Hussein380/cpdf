"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/animations";
import { Badge } from "@/components/ui/Badge";

export function YouthHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-cpdf-darker pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cpdf-blue-dark/50 via-cpdf-darker to-cpdf-darker" />
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      {/* Orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cpdf-teal/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cpdf-blue/15 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#060D1A_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto container-padding text-center py-24">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-cpdf-teal/10 border border-cpdf-teal/20 rounded-full px-5 py-2 mb-6">
            <Zap size={14} className="text-cpdf-teal" />
            <span className="text-cpdf-teal text-sm font-semibold">Flagship Initiative</span>
          </div>
        </FadeIn>

        <SlideUp delay={0.1}>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-slate-900 leading-tight mb-6">
            Empowering Youth
            <br />
            <span className="text-gradient-hero">for Democracy</span>
          </h1>
        </SlideUp>

        <SlideUp delay={0.2}>
          <p className="text-cpdf-muted text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Recognizing the critical role of youth in democratic development, CPDF
            champions this initiative to dismantle systemic barriers that hinder youth
            participation in politics and governance across Kenya.
          </p>
        </SlideUp>

        {/* Stat badges */}
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { val: "5,000+", label: "Youth Trained" },
              { val: "6", label: "Program Components" },
              { val: "47", label: "Counties Targeted" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-5 py-2"
              >
                <span className="font-display font-bold text-slate-900 text-lg">{s.val}</span>
                <span className="text-cpdf-muted text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
