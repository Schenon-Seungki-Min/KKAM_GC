"use client";

import { CORE_SKILLS } from "@/lib/constants";

export default function SkillBadges() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {CORE_SKILLS.map((skill, i) => (
        <div
          key={i}
          className="glass-card rounded-xl px-4 py-3 hover:border-[var(--color-accent)]/40 transition-all"
        >
          <p className="text-sm font-medium text-white">{skill.label}</p>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
            {skill.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
