'use client';

import React from 'react';
import { leadershipData } from '@/app/data/portfolio';
import { SpotlightCard } from '../spotlight-card';

export function LeadershipSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-theme-accent flex items-center gap-2">
        <span className="text-theme-accent">#</span>
        <span>Leadership &amp; Positions of Responsibility</span>
      </h2>

      <div className="space-y-3.5">
        {leadershipData.map((item, idx) => (
          <SpotlightCard
            key={item.id}
            as="article"
            interactive
            index={idx}
            className="p-5 sm:p-6"
          >
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <h3 className="text-[16px] font-bold text-theme-text group-hover/card:text-theme-accentBright transition-colors duration-200 leading-snug">
                    {item.organization}
                    {item.unit ? ` — ${item.unit}` : ''}
                  </h3>
                  <div className="text-[13.5px] text-theme-textDim mt-0.5">
                    {item.roleLabel}
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-[4px] bg-theme-surfaceChip border border-theme-border text-[11px] font-medium text-theme-textMuted self-start shrink-0">
                  {item.duration}
                </span>
              </div>

              <ul className="space-y-1.5 text-[14px] text-theme-textMuted leading-relaxed pt-1 border-t border-theme-borderSubtle/60">
                {item.responsibilities.map((point, pointIdx) => (
                  <li key={pointIdx} className="flex items-start gap-2.5">
                    <span className="text-theme-accent shrink-0">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
