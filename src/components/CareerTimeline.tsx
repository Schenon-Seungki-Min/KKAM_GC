"use client";

import { CAREER_TIMELINE } from "@/lib/constants";

export default function CareerTimeline() {
  return (
    <div className="space-y-4">
      {CAREER_TIMELINE.map((item, i) => (
        <div
          key={i}
          className="glass-card rounded-xl p-5 hover:border-[var(--color-accent)]/40 transition-all group"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-white group-hover:text-[var(--color-accent-light)] transition-colors">
                  {item.company}
                </h3>
                {i === 0 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 font-medium">
                    현재
                  </span>
                )}
              </div>
              <p className="text-sm text-[var(--color-accent-light)]">
                {item.role}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">
                {item.period}
              </p>
              <p className="text-sm text-[var(--color-text)] mt-3 leading-relaxed">
                {item.highlight}
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-3 flex-wrap">
            {item.tags.map((tag, j) => (
              <span
                key={j}
                className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] border border-[var(--color-accent)]/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
