"use client";

import { PRODUCTS } from "@/lib/constants";

export default function ProductCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {PRODUCTS.map((product, i) => (
        <div
          key={i}
          className="glass-card rounded-xl p-5 hover:border-[var(--color-accent)]/40 transition-all group flex flex-col"
        >
          <div className="flex items-start justify-between mb-1">
            <h3 className="font-semibold text-white group-hover:text-[var(--color-accent-light)] transition-colors">
              {product.name}
            </h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-light)] whitespace-nowrap shrink-0 ml-2">
              {product.status}
            </span>
          </div>
          <p className="text-xs text-[var(--color-accent-light)] mb-2">
            {product.subtitle}
          </p>
          <p className="text-sm text-[var(--color-text-muted)] mb-3 flex-1 leading-relaxed">
            {product.description}
          </p>
          <div className="text-xs text-[var(--color-text-muted)] mb-3 flex items-center gap-2">
            <span className="opacity-60">{product.period}</span>
            <span className="opacity-30">|</span>
            <span className="text-[var(--color-accent-light)] opacity-80">{product.keyFeature}</span>
          </div>
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
