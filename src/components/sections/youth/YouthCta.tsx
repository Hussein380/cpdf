"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn, SlideUp } from "@/components/animations";

export function YouthCta() {
  return (
    <section className="section-padding bg-cpdf-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cpdf-blue-dark/40 via-cpdf-dark to-cpdf-darker" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cpdf-teal/5 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto container-padding text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-cpdf-teal/10 border border-cpdf-teal/20 rounded-full px-5 py-2 mb-6">
            <Users size={14} className="text-cpdf-teal" />
            <span className="text-cpdf-teal text-sm font-semibold">Join the Movement</span>
          </div>
        </FadeIn>

        <SlideUp delay={0.1}>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 leading-tight mb-6">
            Ready to Lead Kenya&apos;s{" "}
            <span className="text-gradient-hero">Democratic Future?</span>
          </h2>
        </SlideUp>

        <SlideUp delay={0.2}>
          <p className="text-cpdf-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you&apos;re a student, young professional, or aspiring political
            leader, CPDF&apos;s youth program has a place for you. Apply today and
            join over 5,000 young Kenyans already making a difference.
          </p>
        </SlideUp>

        <SlideUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" icon={<ArrowRight size={18} />}>
              Apply to the Program
            </Button>
            <Button href="/impact" size="lg" variant="outline">
              See Our Impact First
            </Button>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
