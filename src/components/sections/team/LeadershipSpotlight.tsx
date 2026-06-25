"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Twitter, Linkedin, ArrowRight } from "lucide-react";
import { TEAM_MEMBERS } from "@/lib/data";
import { SlideIn, FadeIn } from "@/components/animations";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

// Leadership tier — first 3
const leaders = TEAM_MEMBERS.slice(0, 3);

function LeaderCard({
  member,
  featured,
  index,
}: {
  member: (typeof TEAM_MEMBERS)[0];
  featured?: boolean;
  index: number;
}) {
  return (
    <motion.div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-cpdf-dark-border bg-cpdf-dark-card ${
        featured ? "lg:row-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{
        y: -6,
        borderColor: "rgba(0,84,148,0.4)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
      }}
    >
      {/* Photo area */}
      <div className={`relative overflow-hidden bg-cpdf-blue-dark/30 ${featured ? "h-72" : "h-56"}`}>
        {member.image ? (
          <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500 object-top" unoptimized={true} />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cpdf-blue to-cpdf-teal flex items-center justify-center">
              <span className="font-display font-bold text-2xl text-slate-900">
                {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </span>
            </div>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cpdf-dark-card via-transparent to-transparent" />

        {featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="teal">Executive Director</Badge>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-slate-900 text-xl mb-1 group-hover:text-slate-900 transition-colors">
          {member.name}
        </h3>
        <p className="text-cpdf-teal text-sm font-semibold mb-3">{member.title}</p>
        {member.bio && (
          <p className="text-cpdf-muted text-sm leading-relaxed mb-4">
            {member.bio}
          </p>
        )}
        <div className="mt-auto flex items-center gap-2">
          {member.social?.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 border border-cpdf-dark-border text-cpdf-muted hover:text-cpdf-teal hover:border-cpdf-teal/30 transition-all"
            >
              <Twitter size={14} />
            </a>
          )}
          {member.social?.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 border border-cpdf-dark-border text-cpdf-muted hover:text-cpdf-teal hover:border-cpdf-teal/30 transition-all"
            >
              <Linkedin size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function LeadershipSpotlight() {
  return (
    <section className="section-padding bg-cpdf-dark relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 text-cpdf-teal text-sm font-semibold tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-cpdf-teal" />
                Leadership
              </span>
            </FadeIn>
            <SlideIn direction="left" delay={0.1}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
                Executive{" "}
                <span className="text-gradient-hero">Leadership</span>
              </h2>
            </SlideIn>
          </div>
          <Button href="#full-team" variant="outline" icon={<ArrowRight size={16} />}>
            Meet the Full Team
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((member, i) => (
            <LeaderCard
              key={member.id}
              member={member}
              featured={i === 0}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
