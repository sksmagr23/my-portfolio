'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { experienceData } from '@/app/data/portfolio';
import { ActionLink } from '../button';
import { SpotlightCard } from '../spotlight-card';

export function ExperienceSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-theme-accent flex items-center gap-2">
        <span className="text-theme-accent">#</span>
        <span>Experience</span>
      </h2>

      <div className="space-y-3.5">
        {experienceData.map((item, idx) => (
          <SpotlightCard
            key={item.id}
            as="article"
            interactive
            index={idx}
            className="p-5 sm:p-6"
          >
            <div className="flex items-start gap-4">
              <div className="relative w-11 h-11 rounded-[6px] border border-theme-border group-hover/card:border-theme-accent/45 overflow-hidden bg-theme-surfaceTint flex items-center justify-center text-sm font-bold shrink-0 shadow-sm transition-colors duration-200">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    fill
                    sizes="44px"
                    className="object-cover transition-transform duration-300 group-hover/card:scale-105"
                  />
                ) : (
                  <span aria-hidden="true">{item.logoText}</span>
                )}
              </div>

              <div className="flex-1 min-w-0 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h3 className="text-[16px] font-bold text-theme-text group-hover/card:text-theme-accentBright transition-colors duration-200 leading-snug">
                      {item.role}
                    </h3>
                    <div className="text-[13.5px] text-theme-textDim mt-0.5">
                      {item.company} · {item.duration}
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-[4px] bg-theme-surfaceTint border border-theme-accent/45 text-[10px] font-bold uppercase tracking-wider text-theme-accentSoft self-start shrink-0">
                    {item.highlightBadge}
                  </span>
                </div>

                <ul className="space-y-1.5 text-[14px] text-theme-textMuted leading-relaxed">
                  {item.responsibilities.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-2.5">
                      <span className="text-theme-accent shrink-0">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-theme-borderSubtle">
                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="tech-pill px-2 py-0.5 rounded-[4px] border border-theme-border text-[11.5px] text-theme-textMuted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {item.link && (
                    <ActionLink href={item.link} external variant="ghost" size="sm" className="!px-2 group/btn">
                      <span>Repository</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </ActionLink>
                  )}
                </div>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
