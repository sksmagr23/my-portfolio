'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { experienceData } from '@/app/data/portfolio';
import { ActionLink } from '../button';

export function ExperienceSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-theme-accent flex items-center gap-2">
        <span className="text-theme-accent">#</span>
        <span>Experience</span>
      </h2>

      <div className="bg-theme-card border border-[var(--theme-panel-border)] divide-y divide-theme-borderDivider">
        {experienceData.map((item) => (
          <article key={item.id} className="p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="relative w-11 h-11 overflow-hidden bg-theme-surfaceTint flex items-center justify-center text-sm font-bold shrink-0">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                ) : (
                  <span aria-hidden="true">{item.logoText}</span>
                )}
              </div>

              <div className="flex-1 min-w-0 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h3 className="text-[16px] font-bold text-theme-text leading-snug">
                      {item.role}
                    </h3>
                    <div className="text-[13.5px] text-theme-textDim mt-0.5">
                      {item.company} · {item.duration}
                    </div>
                  </div>

                  <span className="px-2.5 py-1 bg-theme-surfaceTint border border-theme-accent/45 text-[10px] font-bold uppercase tracking-wider text-theme-accentSoft self-start shrink-0">
                    {item.highlightBadge}
                  </span>
                </div>

                <ul className="space-y-1.5 text-[14px] text-theme-textMuted leading-relaxed">
                  {item.responsibilities.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-theme-accent shrink-0">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-theme-surfaceChip border border-theme-border text-[11.5px] text-theme-textMuted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {item.link && (
                    <ActionLink href={item.link} external variant="ghost" size="sm" className="!px-2">
                      <span>Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </ActionLink>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
