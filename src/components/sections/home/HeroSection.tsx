"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn, SlideUp } from "@/components/animations";
import { SITE_CONFIG } from "@/lib/constants";

// ─── Scroll Indicator ─────────────────────────────────────────────────────────

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.6 }}
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
    >
      <span className="text-slate-300 text-xs tracking-widest uppercase font-medium">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={18} className="text-white" />
      </motion.div>
    </motion.div>
  );
}

// ─── Word Rotate Animation ─────────────────────────────────────────────────────

const rotatingWords = ["Democracy", "Governance", "Accountability", "Justice", "Inclusion"];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-flex h-[1.2em] align-bottom overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-cpdf-teal leading-tight inline-block whitespace-nowrap"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cpdf-darker">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/assets/vid.mp4" type="video/mp4" />
      </video>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D2B3E]/40 via-[#0B1426]/40 to-[#060D1A]/70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

        {/* Eyebrow */}
        <FadeIn>
          <motion.div
            className="inline-flex items-center gap-2 bg-cpdf-teal/20 border border-cpdf-teal/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm"
            whileHover={{ scale: 1.03, borderColor: "rgba(26,188,156,0.6)" }}
          >
            <span className="w-2 h-2 rounded-full bg-cpdf-teal animate-pulse" />
            <span className="text-cpdf-teal text-sm font-semibold tracking-wide text-white">
              Non-Partisan · Kenya
            </span>
          </motion.div>
        </FadeIn>

        {/* Headline */}
        <SlideUp delay={0.15}>
          <h1 className="font-display font-bold leading-tight mb-6">
            <span className="block text-3xl sm:text-5xl lg:text-7xl text-white mb-2 sm:mb-4">
              Bridging Divides,
            </span>
            <span className="block text-3xl sm:text-5xl lg:text-7xl text-white">
              Building{" "}
              <span className="block sm:inline-block mt-2 sm:mt-0">
                <RotatingWord />
              </span>
            </span>
          </h1>
        </SlideUp>

        {/* Description */}
        <SlideUp delay={0.3}>
          <p className="max-w-2xl mx-auto text-slate-200 text-lg sm:text-xl leading-relaxed mb-10">
            {SITE_CONFIG.description}
          </p>
        </SlideUp>

        {/* CTAs */}
        <SlideUp delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/what-we-do"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              Explore Our Work
            </Button>
            <Button
              href="/what-we-do"
              size="lg"
              variant="outline"
              icon={<Play size={16} />}
              iconPosition="left"
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            >
              Youth Program
            </Button>
          </div>
        </SlideUp>

        {/* Trust Bar */}
        <FadeIn delay={0.7}>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 justify-items-center sm:justify-items-start max-w-3xl mx-auto">
            {[
              { value: "5,000+", label: "Youth Trained" },
              { value: "20+", label: "Political Parties" },
              { value: "24", label: "Counties" },
              { value: "50+", label: "Dialogues" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-2">
                <span className="font-display font-bold text-white text-2xl sm:text-xl drop-shadow-md">
                  {stat.value}
                </span>
                <span className="text-slate-300 text-sm font-medium text-center sm:text-left">{stat.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <ScrollIndicator />
    </section>
  );
}
