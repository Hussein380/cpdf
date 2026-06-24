"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Globe, ShieldCheck } from "lucide-react";
import { SlideIn, FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const pillars = [
  {
    icon: <Users size={22} />,
    title: "Cross-Party Engagement",
    desc: "CPDF has engaged with over 20 political parties in Kenya, facilitating cross-party dialogue and cooperation on key democratic reforms.",
  },
  {
    icon: <Globe size={22} />,
    title: "Non-Partisan Platform",
    desc: "We bridge the divide among political parties, fostering dialogue and collaboration to ensure democracy remains participatory and accountable.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Youth-Led Initiatives",
    desc: "Working with young people in civic spaces who have been vibrant in championing democratic principles and holding leaders accountable.",
  },
];

export function WhoWeAre() {
  return (
    <section className="section-padding bg-cpdf-dark relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left */}
          <div>
            <SlideIn direction="left">
              <span className="inline-flex items-center gap-2 text-cpdf-teal text-sm font-semibold tracking-widest uppercase mb-5">
                <span className="w-8 h-px bg-cpdf-teal" />
                Our Story
              </span>
            </SlideIn>
            <SlideIn direction="left" delay={0.1}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-6">
                Established to Bridge the{" "}
                <span className="text-gradient-hero">Political Divide</span>
              </h2>
            </SlideIn>
            <SlideIn direction="left" delay={0.2}>
              <p className="text-cpdf-muted text-lg leading-relaxed mb-5">
                The Cross Party Democracy Forum (CPDF) was established to bridge the divide
                among political parties in Kenya. We foster dialogue, collaboration, and
                policy advocacy to strengthen democracy and governance structures.
              </p>
            </SlideIn>
            <SlideIn direction="left" delay={0.3}>
              <p className="text-cpdf-muted text-lg leading-relaxed">
                Our efforts focus on ensuring that democracy is participatory, inclusive,
                and accountable to the people of Kenya — from grassroots communities to
                the highest levels of government.
              </p>
            </SlideIn>
          </div>

          {/* Right — Image and quote card */}
          <SlideIn direction="right" delay={0.15}>
            <div className="relative rounded-2xl border border-cpdf-dark-border overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/assets/22.jpg" alt="CPDF Event" fill className="object-cover" />
              </div>
              <div className="relative p-8 bg-cpdf-dark-card overflow-hidden">
              <div className="absolute top-4 left-6 font-display text-8xl text-cpdf-teal/10 leading-none select-none">
                &ldquo;
              </div>
              <div className="relative z-10">
                <p className="text-slate-900 text-xl leading-relaxed font-medium italic mb-6">
                  Positively nourish the mindset to empower the future generations.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-cpdf-teal" />
                  <span className="text-cpdf-teal text-sm font-semibold tracking-wide uppercase">
                    CPDF Vision
                  </span>
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-cpdf-teal/10 to-transparent rounded-tl-2xl" />
            </div>
            </div>
          </SlideIn>
        </div>

        {/* Three pillars */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <motion.div
                className="group p-6 rounded-2xl border border-cpdf-dark-border bg-cpdf-dark-card h-full"
                whileHover={{
                  y: -6,
                  borderColor: "rgba(26,188,156,0.3)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                }}
                transition={{ duration: 0.22 }}
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-cpdf-teal/10 border border-cpdf-teal/20 text-cpdf-teal mb-4 group-hover:bg-cpdf-teal/20 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-lg mb-3">
                  {pillar.title}
                </h3>
                <p className="text-cpdf-muted text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
