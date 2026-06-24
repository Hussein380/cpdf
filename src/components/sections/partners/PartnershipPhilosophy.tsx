"use client";

import { motion } from "framer-motion";
import { Handshake, Globe, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";

const principles = [
  {
    icon: <Handshake size={22} />,
    title: "Mutual Accountability",
    description:
      "Every partnership is built on clear, shared goals and transparent reporting — ensuring both CPDF and its partners deliver real value.",
  },
  {
    icon: <Globe size={22} />,
    title: "Local & Global Reach",
    description:
      "We bridge international best practices with Kenya's unique democratic context, ensuring globally-informed but locally-relevant programs.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Compounding Impact",
    description:
      "Strategic partnerships don't just add resources — they multiply outcomes, enabling CPDF to reach further and impact deeper.",
  },
];

export function PartnershipPhilosophy() {
  return (
    <section className="section-padding bg-cpdf-darker relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20 pointer-events-none" />
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cpdf-teal/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SlideIn direction="left">
              <span className="inline-flex items-center gap-2 text-cpdf-teal text-sm font-semibold tracking-widest uppercase mb-5">
                <span className="w-8 h-px bg-cpdf-teal" />
                Partnership Philosophy
              </span>
            </SlideIn>
            <SlideIn direction="left" delay={0.1}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-6">
                Partners Who{" "}
                <span className="text-gradient-hero">Share Our Vision</span>
              </h2>
            </SlideIn>
            <SlideIn direction="left" delay={0.2}>
              <p className="text-cpdf-muted text-lg leading-relaxed mb-8">
                We don&apos;t seek partners for funding alone — we seek organisations
                that share our commitment to democratic governance, youth empowerment, and
                lasting institutional change in Kenya.
              </p>
            </SlideIn>
            <SlideIn direction="left" delay={0.3}>
              <Button href="/contact" icon={<ArrowRight size={16} />}>
                Become a Partner
              </Button>
            </SlideIn>
          </div>

          {/* Right */}
          <StaggerContainer className="space-y-5" staggerDelay={0.12}>
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <motion.div
                  className="group flex gap-5 p-6 rounded-xl border border-cpdf-dark-border bg-cpdf-dark-card"
                  whileHover={{ x: 6, borderColor: "rgba(26,188,156,0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-cpdf-teal/10 border border-cpdf-teal/20 text-cpdf-teal shrink-0 group-hover:bg-cpdf-teal/20 group-hover:scale-110 transition-all duration-300">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-slate-900 text-lg mb-2 group-hover:text-cpdf-teal transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-cpdf-muted text-sm leading-relaxed">{p.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
