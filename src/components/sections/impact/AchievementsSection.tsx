"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Vote, BookOpen, FileSearch, Megaphone } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations";

const achievements = [
  {
    icon: <Trophy size={22} />,
    title: "High-Level Cross-Party Dialogues",
    description:
      "Facilitated 50+ cross-party dialogues on governance, electoral integrity, and democratic development — bringing rival political parties to the same table.",
    metric: "50+",
    metricLabel: "Dialogues",
  },
  {
    icon: <Users size={22} />,
    title: "Youth Leaders Trained",
    description:
      "Trained over 5,000 young leaders and civic activists across Kenya in democratic governance, ethical leadership, and civic rights.",
    metric: "5,000+",
    metricLabel: "Leaders Trained",
  },
  {
    icon: <Vote size={22} />,
    title: "Political Party Partnerships",
    description:
      "Partnered with over 20 political parties to strengthen internal party democracy and promote issue-based politics over divisive rhetoric.",
    metric: "20+",
    metricLabel: "Parties Partnered",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Electoral Reform Advocacy",
    description:
      "Successfully lobbied for electoral reforms that increased youth representation in candidate lists and governance structures across Kenya.",
    metric: "3+",
    metricLabel: "Key Reforms",
  },
  {
    icon: <FileSearch size={22} />,
    title: "Research & Policy Recommendations",
    description:
      "Conducted rigorous research on youth political participation and submitted formal policy recommendations to government bodies.",
    metric: "10+",
    metricLabel: "Policy Papers",
  },
  {
    icon: <Megaphone size={22} />,
    title: "Digital Civic Campaigns",
    description:
      "Launched digital democracy campaigns reaching thousands of young Kenyans through social media, raising awareness on voting rights and civic duties.",
    metric: "100K+",
    metricLabel: "People Reached",
  },
];

export function AchievementsSection() {
  return (
    <section className="section-padding bg-cpdf-dark relative">
      <div className="absolute inset-0 dots-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <SectionHeader
          eyebrow="Key Achievements"
          title="What We've Accomplished"
          description="A record of concrete achievements that demonstrate CPDF's growing impact on Kenyan democracy."
          className="mb-14"
        />

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {achievements.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <motion.div
                className="group relative flex flex-col p-6 rounded-2xl border border-cpdf-dark-border bg-cpdf-dark-card h-full overflow-hidden"
                whileHover={{
                  y: -6,
                  borderColor: "rgba(26,188,156,0.35)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                }}
                transition={{ duration: 0.22 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cpdf-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Metric badge */}
                <div className="relative z-10 flex items-start justify-between mb-5">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-cpdf-teal/10 border border-cpdf-teal/20 text-cpdf-teal group-hover:bg-cpdf-teal/20 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div className="font-display font-bold text-2xl text-cpdf-teal leading-none">
                      {item.metric}
                    </div>
                    <div className="text-cpdf-muted text-xs mt-0.5">{item.metricLabel}</div>
                  </div>
                </div>

                <h3 className="relative z-10 font-display font-semibold text-slate-900 text-lg leading-snug mb-3 group-hover:text-slate-900 transition-colors">
                  {item.title}
                </h3>
                <p className="relative z-10 text-cpdf-muted text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
