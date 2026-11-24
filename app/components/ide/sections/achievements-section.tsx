'use client';

import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { ExternalLink, Award } from 'lucide-react';
import {
  achievementsData,
  codingProfiles,
  personalInfo,
  type AchievementItem,
} from '@/app/data/portfolio';
import { LeetCodeIcon, CodeChefIcon, GitHubIcon } from '../icons';
import { ActionLink } from '../button';
import { useTheme } from '../theme-context';

export function AchievementsSection() {
  const { theme } = useTheme();
  const isGreen = theme === 'green';
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

  const categories: AchievementItem['category'][] = [
    'Key Highlights'
  ];

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="text-sm font-bold text-theme-accent flex items-center gap-2">
          <span className="text-theme-accent">#</span>
          <span>Coding Profiles</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href={codingProfiles.leetcode.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-theme-card border border-theme-border hover:border-theme-accent p-5 space-y-3.5 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-theme-surfaceTint border border-theme-accent/45 text-theme-accent flex items-center justify-center">
                  <LeetCodeIcon className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-theme-text group-hover:text-theme-accent transition-colors">
                    LeetCode · {lcBadge}
                  </h3>
                  <div className="text-xs text-theme-textDim">@{codingProfiles.leetcode.username}</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-theme-textDim group-hover:text-theme-accent" />
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-theme-accent">{lcRating}</span>
              <span className="text-xs text-theme-textMuted">
                Contest Rating · Top {lcTop}% Global
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-theme-borderSubtle">
              {codingProfiles.leetcode.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-0.5 bg-theme-surfaceChip border border-theme-border text-[11.5px] text-theme-accentSoft"
                >
                  {badge}
                </span>
              ))}
            </div>
          </a>

          <a
            href={codingProfiles.codechef.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-theme-card border border-theme-border hover:border-theme-accent p-5 space-y-3.5 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-theme-surfaceTint border border-theme-accent/45 text-theme-accent flex items-center justify-center">
                  <CodeChefIcon className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-theme-text group-hover:text-theme-accent transition-colors">
                    CodeChef · {codingProfiles.codechef.stars}
                  </h3>
                  <div className="text-xs text-theme-textDim">@{codingProfiles.codechef.username}</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-theme-textDim group-hover:text-theme-accent" />
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-theme-accent">
                {codingProfiles.codechef.rating}
              </span>
              <span className="text-xs text-theme-textMuted">
                Contest Rating · DSA Rating {codingProfiles.codechef.dsaRating}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-theme-borderSubtle">
              {codingProfiles.codechef.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-0.5 bg-theme-surfaceChip border border-theme-border text-[11.5px] text-theme-accentSoft"
                >
                  {badge}
                </span>
              ))}
            </div>
          </a>
        </div>
      </section>

      {categories.map((category) => {
        const items = achievementsData.filter((a) => a.category === category);
        return (
          <section key={category} className="space-y-3">
            <h3 className="text-sm font-bold text-theme-accent flex items-center gap-2">
              <span className="text-theme-accent">#</span>
              <span>{category}</span>
            </h3>
            <div className="bg-theme-card border border-theme-border divide-y divide-theme-borderSubtle">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <span className="w-9 h-9 bg-theme-surfaceTint border border-theme-accent/40 text-theme-accent flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </span>
                    <div className="min-w-0 space-y-1">
                      <h4 className="text-[15px] font-bold text-theme-text leading-snug">
                        {item.title}
                      </h4>
                      <div className="text-xs text-theme-textDim">{item.organization}</div>
                      <p className="text-[13.5px] text-theme-textMuted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-end justify-between gap-2 shrink-0">
                    <span className="px-2.5 py-1 bg-theme-surfaceTint border border-theme-accent/45 text-[10px] font-bold uppercase tracking-wider text-theme-accentSoft">
                      {item.highlight}
                    </span>
                    {item.link && (
                      <ActionLink href={item.link} external variant="ghost" size="sm" className="!px-1">
                        <span>View</span>
                        <ExternalLink className="w-3 h-3" />
                      </ActionLink>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <section className="bg-theme-card border border-theme-border">
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b border-theme-borderSubtle">
          <h3 className="text-xs font-bold text-theme-accent flex items-center gap-2">
            <span className="text-theme-accent">#</span>
            <span>GitHub Activity (@{personalInfo.githubUsername})</span>
          </h3>
          <ActionLink href={personalInfo.contact.github} external variant="outline" size="sm">
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </ActionLink>
        </div>
        <div className="p-5 overflow-x-auto flex justify-center">
          <GitHubCalendar
            username={personalInfo.githubUsername}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            colorScheme="dark"
            theme={{
              dark: isGreen
                ? ['#101C15', '#0E4429', '#006D32', '#26A641', '#39FF88']
                : ['#1B1E28', '#1E3A5F', '#2563EB', '#3B82F6', '#58B4EE'],
            }}
            style={{ color: isGreen ? '#86AB95' : '#94A3B8' }}
          />
        </div>
      </section>
    </div>
  );
}
