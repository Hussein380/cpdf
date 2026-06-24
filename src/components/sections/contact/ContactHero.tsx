"use client";

import { motion } from "framer-motion";
import { FadeIn, SlideUp } from "@/components/animations";
import { Badge } from "@/components/ui/Badge";

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-cpdf-darker pt-20">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <motion.div
        className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-cpdf-teal/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#060D1A_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto container-padding text-center py-16">
        <FadeIn>
          <Badge variant="teal" className="mb-6">Get In Touch</Badge>
        </FadeIn>
        <SlideUp delay={0.1}>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6">
            Let&apos;s Build Democracy{" "}
            <span className="text-gradient-hero">Together</span>
          </h1>
        </SlideUp>
        <SlideUp delay={0.2}>
          <p className="text-cpdf-muted text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re interested in partnerships, programs, volunteering,
            or just want to learn more about CPDF — we&apos;d love to hear from you.
          </p>
        </SlideUp>
      </div>
    </section>
  );
}
