"use client";

import { PRODUCTS } from "@/lib/constants";

export default function ProductCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {PRODUCTS.map((product, i) => (
        <div
          key={i}
          className="glass-card rounded-xl p-5 hover:border-[var(--color-accent)]/40 transition-all group"
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-white group-hover:text-[var(--color-accent-light)] transition-colors">
              {product.name}
            </h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-light)] whitespace-nowrap">
              {product.status}
            </span>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] mb-3">
            {product.description}
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {product.tech.map((t, j) => (
              <span
                key={j}
                className="text-[10px] px-2 py-0.5 rounded bg-[var(--color-surface)] text-[var(--color-text-muted)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
