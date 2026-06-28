"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Zap, BookOpen, Network } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SlideIn, FadeIn } from "@/components/animations";

const highlights = [
  { icon: <Zap size={18} />, label: "Political Empowerment" },
  { icon: <BookOpen size={18} />, label: "Civic Education" },
  { icon: <Network size={18} />, label: "Mentorship Network" },
];

export function YouthBanner() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cpdf-blue-dark via-cpdf-dark to-cpdf-darker" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Animated glow blob */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cpdf-teal/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cpdf-blue/20 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <SlideIn direction="left">
              <span className="inline-flex items-center gap-2 bg-cpdf-teal/10 border border-cpdf-teal/20 rounded-full px-4 py-1.5 text-cpdf-teal text-sm font-semibold mb-6">
                <Zap size={14} />
                Flagship Initiative
              </span>
            </SlideIn>

            <SlideIn direction="left" delay={0.1}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-5">
                Empowering Youth{" "}
                <span className="text-gradient-hero">for Democracy</span>
              </h2>
            </SlideIn>

            <SlideIn direction="left" delay={0.2}>
              <p className="text-cpdf-muted text-lg leading-relaxed mb-8">
                Our flagship program dismantles systemic barriers that prevent young
                Kenyans from participating in politics and governance. Through training,
                mentorship, and digital tools, we&apos;re building the next generation
                of democratic leaders.
              </p>
            </SlideIn>

            {/* Highlights */}
            <SlideIn direction="left" delay={0.3}>
              <div className="flex flex-wrap gap-3 mb-8">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-slate-900 text-sm"
                  >
                    <span className="text-cpdf-teal">{h.icon}</span>
                    {h.label}
                  </div>
                ))}
              </div>
            </SlideIn>

            <SlideIn direction="left" delay={0.4}>
              <Button href="/what-we-do" size="lg" icon={<ArrowRight size={18} />}>
                Learn More About Our Youth Programs
              </Button>
            </SlideIn>
          </div>

          {/* Right, feature grid with Image */}
          <SlideIn direction="right" delay={0.2}>
            <div className="flex flex-col gap-6">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-cpdf-dark-border shadow-2xl">
                <Image src="/assets/youth_e.jpeg" alt="Empowering Youth" fill className="object-cover" unoptimized={true} />
              </div>
              <div className="grid grid-cols-2 gap-4">
              {[
                { num: "01", title: "Political Empowerment", desc: "Training youth within political parties to lead" },
                { num: "02", title: "Civic Education", desc: "Awareness campaigns on democratic rights" },
                { num: "03", title: "Digital Democracy", desc: "Tech & social media for civic engagement" },
                { num: "04", title: "Policy Advocacy", desc: "Pushing for youth governance reforms" },
              ].map((item) => (
                <motion.div
                  key={item.num}
                  className="p-5 rounded-xl border border-cpdf-dark-border bg-cpdf-dark-card/60 backdrop-blur-sm"
                  whileHover={{
                    borderColor: "rgba(0,84,148,0.3)",
                    y: -3,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-display font-bold text-3xl text-cpdf-teal/20 block mb-2">
                    {item.num}
                  </span>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1.5">{item.title}</h4>
                  <p className="text-cpdf-muted text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
