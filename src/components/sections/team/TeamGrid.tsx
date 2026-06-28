"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import type { TeamMember } from "@/types";

// Department filter options derived from data
const departments = [
  "All",
  "Leadership",
  "Programs",
  "Operations",
  "Research",
  "Legal",
  "Digital",
  "Communications",
];

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-cpdf-dark-border bg-cpdf-dark-card"
      whileHover={{
        y: -6,
        borderColor: "rgba(0,84,148,0.35)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
      }}
      transition={{ duration: 0.22 }}
      layout
    >
      {/* Avatar */}
      <div className="relative h-56 bg-gradient-to-br from-cpdf-blue-dark/50 to-cpdf-darker overflow-hidden flex items-center justify-center">
        {member.image ? (
          <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500 object-top" unoptimized={true} />
        ) : (
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-cpdf-blue to-cpdf-teal flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          >
            <span className="font-display font-bold text-xl text-slate-900">
              {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </span>
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-cpdf-dark-card via-transparent to-transparent" />

        {/* Social hover overlay */}
        <motion.div
          className="absolute inset-0 bg-cpdf-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
          initial={false}
        >
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-900 hover:bg-cpdf-teal hover:border-cpdf-teal transition-all"
            onClick={(e) => e.preventDefault()}
          >
            <Twitter size={14} />
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-900 hover:bg-cpdf-teal hover:border-cpdf-teal transition-all"
            onClick={(e) => e.preventDefault()}
          >
            <Linkedin size={14} />
          </a>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display font-semibold text-slate-900 text-base leading-snug mb-1 group-hover:text-slate-900 transition-colors">
          {member.name}
        </h3>
        <p className="text-cpdf-teal text-xs font-semibold mb-3 leading-snug">
          {member.title}
        </p>
        {member.bio && (
          <p className="text-cpdf-muted text-xs leading-relaxed mb-4 line-clamp-3">
            {member.bio}
          </p>
        )}
        {member.department && (
          <div className="mt-auto">
            <Badge variant="subtle" className="text-xs">
              {member.department}
            </Badge>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function TeamGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.department === activeFilter);

  return (
    <section id="full-team" className="section-padding bg-cpdf-darker relative">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionHeader
          eyebrow="Full Team"
          title="Everyone Who Makes It Happen"
          description="Across programs, legal, digital, communications, and operations, meet the full team driving CPDF's mission."
          className="mb-10"
        />

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {departments.map((dept) => (
            <motion.button
              key={dept}
              onClick={() => setActiveFilter(dept)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === dept
                  ? "bg-cpdf-teal text-cpdf-dark"
                  : "bg-slate-50 border border-cpdf-dark-border text-cpdf-muted hover:text-slate-900 hover:border-cpdf-teal/30"
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {dept}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <MemberCard member={member} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Count */}
        <motion.p
          className="text-center text-cpdf-muted text-sm mt-8"
          key={filtered.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Showing{" "}
          <span className="text-cpdf-teal font-semibold">{filtered.length}</span>{" "}
          of{" "}
          <span className="text-cpdf-teal font-semibold">{TEAM_MEMBERS.length}</span>{" "}
          team members
        </motion.p>
      </div>
    </section>
  );
}
