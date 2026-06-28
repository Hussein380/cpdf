"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SlideIn, FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

// Sample of 24 targeted counties
const targetedCounties = [
  "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret",
  "Thika", "Malindi", "Kitale", "Garissa", "Kakamega",
  "Nyeri", "Meru", "Embu", "Machakos", "Kericho",
  "Kisii", "Migori", "Homabay", "Siaya", "Bungoma",
  "Vihiga", "Busia", "Trans Nzoia", "Uasin Gishu",
];

export function CountyExpansion() {
  return (
    <section className="section-padding bg-cpdf-darker relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cpdf-blue/15 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <SlideIn direction="left">
              <span className="inline-flex items-center gap-2 text-cpdf-teal text-sm font-semibold tracking-widest uppercase mb-5">
                County Expansion
              </span>
            </SlideIn>
            <SlideIn direction="left" delay={0.1}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-6">
                24 Counties,{" "}
                <span className="text-gradient-hero">One Vision</span>
              </h2>
            </SlideIn>
            <SlideIn direction="left" delay={0.2}>
              <p className="text-cpdf-muted text-lg leading-relaxed mb-4">
                CPDF&apos;s expansion plan targets 24 strategic counties across Kenya
                for ICT centre and democracy centre development — ensuring no region
                is left behind in the democratic journey.
              </p>
            </SlideIn>
            <SlideIn direction="left" delay={0.3}>
              <p className="text-cpdf-muted text-lg leading-relaxed mb-8">
                Each centre will serve as a hub for civic education, voter registration
                support, digital literacy, and cross-party dialogue at the grassroots level.
              </p>
            </SlideIn>

            <SlideIn direction="left" delay={0.4}>
              <div className="flex gap-6 mb-8">
                <div>
                  <div className="font-display font-bold text-4xl text-cpdf-teal">24</div>
                  <p className="text-cpdf-muted text-sm">Counties Targeted</p>
                </div>
                <div className="w-px bg-cpdf-dark-border" />
                <div>
                  <div className="font-display font-bold text-4xl text-slate-900">47</div>
                  <p className="text-cpdf-muted text-sm">Total Kenyan Counties</p>
                </div>
                <div className="w-px bg-cpdf-dark-border" />
                <div>
                  <div className="font-display font-bold text-4xl text-slate-900">2</div>
                  <p className="text-cpdf-muted text-sm">Centre Types</p>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="left" delay={0.5}>
              <Button href="/contact" icon={<ArrowRight size={16} />}>
                Partner on Expansion
              </Button>
            </SlideIn>
          </div>

          {/* Right — county chips */}
          <div>
            <FadeIn delay={0.2}>
              <p className="text-cpdf-muted text-sm mb-5 flex items-center gap-2">
                <MapPin size={14} className="text-cpdf-teal" />
                Targeted counties for ICT & democracy centres
              </p>
            </FadeIn>
            <StaggerContainer className="flex flex-wrap gap-2.5" staggerDelay={0.04}>
              {targetedCounties.map((county) => (
                <StaggerItem key={county}>
                  <motion.div
                    className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-cpdf-dark-border bg-cpdf-dark-card text-cpdf-muted text-sm"
                    whileHover={{
                      borderColor: "rgba(0,84,148,0.4)",
                      color: "#005494",
                      backgroundColor: "rgba(0,84,148,0.08)",
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.15 }}
                  >
                    <MapPin size={11} className="text-cpdf-teal/60" />
                    {county}
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
