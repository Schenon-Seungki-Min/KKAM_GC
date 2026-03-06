"use client";

import { CORE_SKILLS } from "@/lib/constants";

export default function SkillBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      {CORE_SKILLS.map((skill, i) => (
        <div
          key={i}
          className="glass-card rounded-xl px-4 py-3 hover:border-[var(--color-accent)]/40 transition-all text-sm text-[var(--color-text)]"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
