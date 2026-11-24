'use client';

import React from 'react';
import { leadershipData } from '@/app/data/portfolio';

export function LeadershipSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-theme-accent flex items-center gap-2">
        <span className="text-theme-accent">#</span>
        <span>Leadership &amp; Positions of Responsibility</span>
      </h2>

      <div className="bg-theme-card border border-theme-border divide-y divide-theme-borderDivider">
        {leadershipData.map((item) => (
          <article key={item.id} className="p-5 sm:p-6 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="text-[16px] font-bold text-theme-text leading-snug">
                  {item.organization}
                  {item.unit ? ` — ${item.unit}` : ''}
                </h3>
                <div className="text-[13.5px] text-theme-textDim mt-0.5">
                  {item.roleLabel} · {item.duration}
                </div>
              </div>
            </div>

            <ul className="space-y-1.5 text-[14px] text-theme-textMuted leading-relaxed">
              {item.responsibilities.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-theme-accent shrink-0">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
