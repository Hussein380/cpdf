"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";

const steps = [
  {
    step: "01",
    title: "Identify & Convene",
    description:
      "We identify key democratic challenges and bring together political parties, civil society, and youth to address them through structured dialogue.",
  },
  {
    step: "02",
    title: "Train & Capacitate",
    description:
      "We deliver targeted training programs that equip political leaders and youth activists with practical democratic governance skills.",
  },
  {
    step: "03",
    title: "Advocate & Reform",
    description:
      "We translate dialogue and training into concrete policy advocacy, pushing for legal and institutional reforms that strengthen democracy.",
  },
  {
    step: "04",
    title: "Monitor & Sustain",
    description:
      "We track progress, conduct research, and build lasting partnerships that ensure democratic gains are sustained long after each program ends.",
  },
];

export function ApproachSection() {
  return (
    <section className="section-padding bg-cpdf-darker relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cpdf-blue/15 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SlideIn direction="left">
              <span className="inline-flex items-center gap-2 text-cpdf-teal text-sm font-semibold tracking-widest uppercase mb-5">
                Our Approach
              </span>
            </SlideIn>
            <SlideIn direction="left" delay={0.1}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-6">
                A Proven Framework for{" "}
                <span className="text-gradient-hero">Democratic Change</span>
              </h2>
            </SlideIn>
            <SlideIn direction="left" delay={0.2}>
              <p className="text-cpdf-muted text-lg leading-relaxed mb-8">
                Our four-step approach ensures that every program creates lasting
                impact — from the first dialogue to long-term policy reform.
              </p>
            </SlideIn>
            <SlideIn direction="left" delay={0.3}>
              <Button href="/impact" icon={<ArrowRight size={16} />} className="mb-10">
                See the Results
              </Button>
            </SlideIn>
            <SlideIn direction="left" delay={0.4}>
              <div className="relative h-72 w-full rounded-2xl overflow-hidden border border-cpdf-dark-border hidden lg:block">
                <Image src="/assets/26.jpg" alt="CPDF Dialogue" fill className="object-cover" />
              </div>
            </SlideIn>
          </div>

          {/* Right — steps */}
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {steps.map((step) => (
              <StaggerItem key={step.step}>
                <motion.div
                  className="group flex gap-5 p-5 rounded-xl border border-cpdf-dark-border bg-cpdf-dark-card"
                  whileHover={{
                    x: 6,
                    borderColor: "rgba(0,84,148,0.3)",
                    backgroundColor: "rgba(15,30,53,0.9)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-display font-bold text-3xl text-cpdf-teal/25 group-hover:text-cpdf-teal/50 transition-colors shrink-0 w-10 pt-0.5">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="font-display font-semibold text-slate-900 text-lg mb-1.5 group-hover:text-cpdf-teal transition-colors duration-200">
                      {step.title}
                    </h4>
                    <p className="text-cpdf-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
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
