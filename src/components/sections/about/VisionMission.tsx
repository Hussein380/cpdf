"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

const cards = [
  {
    icon: <Eye size={28} />,
    label: "Our Vision",
    title: "Positively nourish the mindset to empower future generations.",
    description:
      "We envision a Kenya where every citizen — regardless of political affiliation, gender, or background — is empowered to participate meaningfully in governance and shape the nation's democratic future.",
    gradient: "from-cpdf-blue/20 to-transparent",
    border: "border-cpdf-blue/30",
    iconBg: "bg-cpdf-blue/20 border-cpdf-blue/30 text-cpdf-blue-light",
  },
  {
    icon: <Target size={28} />,
    label: "Our Mission",
    title: "Empower young people to participate in civic engagement and decision-making.",
    description:
      "Through training, dialogue, advocacy, and strategic partnerships, CPDF equips young Kenyans with the tools, knowledge, and networks needed to drive democratic change at every level of society.",
    gradient: "from-cpdf-teal/20 to-transparent",
    border: "border-cpdf-teal/30",
    iconBg: "bg-cpdf-teal/10 border-cpdf-teal/20 text-cpdf-teal",
  },
];

export function VisionMission() {
  return (
    <section className="section-padding bg-cpdf-darker relative overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cpdf-teal/30 to-transparent" />

      <div className="max-w-7xl mx-auto container-padding">
        <SectionHeader
          eyebrow="What Drives Us"
          title="Vision & Mission"
          description="Two guiding principles that shape every initiative, partnership, and program we run."
          className="mb-14"
        />

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerDelay={0.15}>
          {cards.map((card) => (
            <StaggerItem key={card.label}>
              <motion.div
                className={`relative group p-8 rounded-2xl border ${card.border} bg-cpdf-dark-card overflow-hidden h-full`}
                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
                transition={{ duration: 0.25 }}
              >
                {/* BG gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Icon + label */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 flex items-center justify-center rounded-xl border ${card.iconBg}`}>
                      {card.icon}
                    </div>
                    <span className="text-cpdf-muted text-sm font-semibold tracking-widest uppercase">
                      {card.label}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-slate-900 text-xl leading-snug mb-4">
                    &ldquo;{card.title}&rdquo;
                  </h3>
                  <p className="text-cpdf-muted leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
