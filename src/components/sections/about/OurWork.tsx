"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SlideIn, FadeIn } from "@/components/animations";

const workAreas = [
  {
    title: "Work with Political Parties",
    description:
      "CPDF has successfully engaged with over 20 political parties in Kenya, facilitating cross-party dialogue and cooperation on key democratic reforms. Through strategic partnerships, CPDF has promoted issue-based politics, party democracy, and inclusive governance.",
    stat: "20+",
    statLabel: "Political Parties",
    href: "/what-we-do",
  },
  {
    title: "Work with Young People",
    description:
      "CPDF works with young people in civic spaces who champion democratic principles. These youth-led initiatives play a crucial role in holding leaders accountable, advocating for policy reforms, and ensuring active participation in governance.",
    stat: "5,000+",
    statLabel: "Youth Trained",
    href: "/youth-empowerment",
  },
];

export function OurWork() {
  return (
    <section className="section-padding bg-cpdf-darker relative overflow-hidden">
      {/* Bottom glow line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cpdf-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto container-padding">
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-cpdf-teal text-sm font-semibold tracking-widest uppercase mb-5">
            <span className="w-8 h-px bg-cpdf-teal" />
            How We Work
          </span>
        </FadeIn>

        <SlideIn direction="left" delay={0.1}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-14 max-w-2xl">
            Two Tracks, One Goal: Stronger Democracy
          </h2>
        </SlideIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workAreas.map((area, i) => (
            <motion.div
              key={area.title}
              className="group relative p-8 rounded-2xl border border-cpdf-dark-border bg-cpdf-dark-card overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(26,188,156,0.35)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              {/* Accent top bar */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cpdf-teal/0 via-cpdf-teal to-cpdf-teal/0 z-20"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.35 }}
              />

              {/* Card Image */}
              <div className="relative h-56 w-[calc(100%+4rem)] -mx-8 -mt-8 mb-8 overflow-hidden rounded-t-2xl">
                <Image src={i === 0 ? "/assets/ai-images/23.jpg" : "/assets/ai-images/ke5.jpeg"} alt={area.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized={true} />
                <div className="absolute inset-0 bg-gradient-to-t from-cpdf-dark-card to-transparent" />
              </div>

              {/* Big stat */}
              <div className="mb-6">
                <span className="font-display font-bold text-6xl text-cpdf-teal">
                  {area.stat}
                </span>
                <p className="text-cpdf-muted text-sm mt-1">{area.statLabel}</p>
              </div>

              <h3 className="font-display font-bold text-slate-900 text-2xl mb-4 group-hover:text-slate-900 transition-colors">
                {area.title}
              </h3>
              <p className="text-cpdf-muted leading-relaxed mb-6">{area.description}</p>

              <Button href={area.href} variant="ghost" icon={<ArrowRight size={16} />} size="sm">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
