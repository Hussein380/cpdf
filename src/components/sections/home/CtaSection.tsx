"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn, SlideUp } from "@/components/animations";
import { SITE_CONFIG } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="section-padding bg-cpdf-dark relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cpdf-blue-dark/60 via-cpdf-dark to-cpdf-darker" />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cpdf-teal/5 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto container-padding text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 bg-cpdf-teal/10 border border-cpdf-teal/20 rounded-full px-5 py-2 text-cpdf-teal text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-cpdf-teal animate-pulse" />
            Join the Movement
          </span>
        </FadeIn>

        <SlideUp delay={0.1}>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6">
            Be Part of Kenya&apos;s
            <br />
            <span className="text-gradient-hero">Democratic Future</span>
          </h2>
        </SlideUp>

        <SlideUp delay={0.2}>
          <p className="text-cpdf-muted text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you&apos;re a young leader, political party member, or civic
            activist, CPDF has a role for you in building a stronger democracy.
          </p>
        </SlideUp>

        <SlideUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" icon={<ArrowRight size={18} />}>
              Get Involved Today
            </Button>
            <Button
              href={`mailto:${SITE_CONFIG.email}`}
              size="lg"
              variant="outline"
              icon={<Mail size={16} />}
              iconPosition="left"
              external
            >
              Email Us
            </Button>
          </div>
        </SlideUp>

        {/* Social proof line */}
        <FadeIn delay={0.5}>
          <p className="mt-10 text-cpdf-muted/60 text-sm">
            Join{" "}
            <span className="text-cpdf-teal font-semibold">5,000+</span> young
            leaders already making a difference across Kenya
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
