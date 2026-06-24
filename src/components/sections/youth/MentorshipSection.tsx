"use client";

import { motion } from "framer-motion";
import { Network, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SlideIn, FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const benefits = [
  {
    title: "One-on-One Mentorship",
    description: "Young leaders are matched with experienced political figures and civic champions for personalised guidance.",
  },
  {
    title: "Peer Learning Circles",
    description: "Cohort-based learning groups where youth activists share experiences and strategies across political divides.",
  },
  {
    title: "Leadership Summits",
    description: "Annual summits bringing together youth from all 47 counties for networking, training, and collaborative problem-solving.",
  },
  {
    title: "Alumni Network",
    description: "A growing community of CPDF-trained youth leaders who continue to support and inspire the next generation.",
  },
];

export function MentorshipSection() {
  return (
    <section className="section-padding bg-cpdf-darker relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20 pointer-events-none" />
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cpdf-teal/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SlideIn direction="left">
              <span className="inline-flex items-center gap-2 text-cpdf-teal text-sm font-semibold tracking-widest uppercase mb-5">
                <span className="w-8 h-px bg-cpdf-teal" />
                Mentorship & Networking
              </span>
            </SlideIn>
            <SlideIn direction="left" delay={0.1}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-6">
                Building Connections That{" "}
                <span className="text-gradient-hero">Last a Lifetime</span>
              </h2>
            </SlideIn>
            <SlideIn direction="left" delay={0.2}>
              <p className="text-cpdf-muted text-lg leading-relaxed mb-8">
                Our mentorship program connects young political aspirants and civic
                leaders with experienced mentors for guidance, support, and career
                development in Kenya&apos;s democratic space.
              </p>
            </SlideIn>
            <SlideIn direction="left" delay={0.3}>
              <Button href="/contact" icon={<ArrowRight size={16} />}>
                Apply for Mentorship
              </Button>
            </SlideIn>
          </div>

          {/* Right — benefits */}
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <motion.div
                  className="group flex gap-4 p-5 rounded-xl border border-cpdf-dark-border bg-cpdf-dark-card"
                  whileHover={{
                    x: 6,
                    borderColor: "rgba(26,188,156,0.3)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-cpdf-teal/10 text-cpdf-teal shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <Network size={15} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-cpdf-teal transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-cpdf-muted text-sm leading-relaxed">
                      {benefit.description}
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
