'use client';

import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import {
  personalInfo,
  educationData,
  codingProfiles,
  currentlyExploring,
  Extracuricular,
} from '@/app/data/portfolio';
import { LeetCodeIcon, CodeChefIcon } from '../icons';
import { SpotlightCard } from '../spotlight-card';

export function AboutSection() {
  const [lcRating, setLcRating] = useState(codingProfiles.leetcode.contestRating);
  const [lcTop, setLcTop] = useState(codingProfiles.leetcode.contestTopPercentage);
  const [lcBadge, setLcBadge] = useState(codingProfiles.leetcode.badge);

  useEffect(() => {
    let active = true;
    fetch('/api/leetcode')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (active && data?.contestRating) {
          setLcRating(data.contestRating);
          if (data.contestTopPercentage) setLcTop(data.contestTopPercentage);
          if (data.badge) setLcBadge(data.badge);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="space-y-5">
      <SpotlightCard as="section" interactive={false} index={0} className="p-5 sm:p-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {personalInfo.roles.map((role) => (
              <span
                key={role}
                className="tech-pill px-2.5 py-1 rounded-[4px] bg-theme-surfaceTint border border-theme-accent/45 text-[11px] font-semibold uppercase tracking-wider text-theme-accentSoft"
              >
                {role}
              </span>
            ))}
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-theme-text leading-snug">
            {personalInfo.tagline}
          </h2>

          <p className="text-[14.5px] text-theme-textMuted leading-relaxed max-w-3xl">
            {personalInfo.intro}
          </p>

          <div className="pt-4 border-t border-theme-borderSubtle space-y-2.5">
            <h3 className="text-xs font-bold text-theme-accent flex items-center gap-2">
              <span className="text-theme-accent">#</span>
              <span>Education</span>
            </h3>
            <div className="divide-y divide-theme-borderSubtle">
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="py-2.5 px-2 -mx-2 rounded-[5px] first:pt-1.5 last:pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 transition-colors duration-150 hover:bg-theme-surfaceTint/40"
                >
                  <div>
                    <div className="text-[14.5px] font-semibold text-theme-text">
                      {edu.institution}
                    </div>
                    <div className="text-[13px] text-theme-textMuted">{edu.degree}</div>
                  </div>
                  {edu.status && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[4px] bg-theme-surfaceTint/80 border border-theme-accent/30 text-[11px] font-semibold uppercase tracking-wider text-theme-accent self-start sm:self-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" />
                      <span>{edu.status}</span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SpotlightCard>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SpotlightCard as="div" interactive index={1} className="p-5">
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-theme-accent flex items-center gap-2">
              <span className="text-theme-accent">#</span>
              <span>Interests</span>
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {currentlyExploring.map((topic) => (
                <span
                  key={topic}
                  className="tech-pill px-2.5 py-1 rounded-[4px] bg-theme-surfaceChip border border-theme-border text-xs text-theme-textSecondary"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard as="div" interactive index={2} className="p-5">
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-theme-accent flex items-center gap-2">
              <span className="text-theme-accent">#</span>
              <span>Extra Curricular</span>
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {Extracuricular.map((item) => (
                <span
                  key={item}
                  className="tech-pill px-2.5 py-1 rounded-[4px] bg-theme-surfaceChip border border-theme-border text-xs text-theme-textSecondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </section>
    </div>
  );
}
