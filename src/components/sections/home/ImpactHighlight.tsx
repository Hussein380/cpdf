"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SlideIn, FadeIn, SlideUp } from "@/components/animations";

const achievements = [
  "Facilitated high-level cross-party dialogues on governance and electoral integrity",
  "Trained over 5,000 young leaders and civic activists across Kenya",
  "Partnered with 20+ political parties to strengthen internal party democracy",
  "Successfully lobbied for electoral reforms increasing youth representation",
  "Conducted research and policy recommendations on youth political participation",
  "Launched digital democracy campaigns reaching thousands of young Kenyans",
];

export function ImpactHighlight() {
  return (
    <section className="section-padding bg-cpdf-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-cpdf-teal/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 dots-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left, text */}
          <div>
            <SlideIn direction="left">
              <span className="inline-flex items-center gap-2 text-cpdf-teal text-sm font-semibold tracking-widest uppercase mb-5">
                Key Achievements
              </span>
            </SlideIn>

            <SlideIn direction="left" delay={0.1}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-6">
                Real Impact,{" "}
                <span className="text-gradient-hero">Measurable Results</span>
              </h2>
            </SlideIn>

            <SlideIn direction="left" delay={0.2}>
              <p className="text-cpdf-muted text-lg leading-relaxed mb-8">
                Since our founding, CPDF has worked tirelessly to transform Kenya&apos;s
                democratic landscape, one dialogue, one training, one reform at a time.
              </p>
            </SlideIn>

            <SlideIn direction="left" delay={0.3}>
              <Button href="/what-we-do" icon={<ArrowRight size={16} />}>
                View Full Impact Report
              </Button>
            </SlideIn>
          </div>

          {/* Right, achievement list */}
          <div className="space-y-4">
            {achievements.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div
                  className="flex items-start gap-4 p-4 rounded-xl border border-cpdf-dark-border bg-cpdf-dark-card group"
                  whileHover={{
                    x: 6,
                    borderColor: "rgba(0,84,148,0.3)",
                    backgroundColor: "rgba(15,30,53,0.9)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle
                    size={20}
                    className="text-cpdf-teal shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                  />
                  <p className="text-cpdf-muted text-sm leading-relaxed group-hover:text-slate-900 transition-colors duration-200">
                    {item}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
