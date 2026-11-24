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

export function AchievementsSection() {
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
        <h2 className="text-sm font-bold text-[#58B4EE] flex items-center gap-2">
          <span className="text-[#58B4EE]" >#</span>
          <span>Coding Profiles</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href={codingProfiles.leetcode.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#12172e91] border border-[#2C3242] hover:border-[#58B4EE] p-5 space-y-3.5 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-[#1B2232] border border-[#58B4EE]/45 text-[#58B4EE] flex items-center justify-center">
                  <LeetCodeIcon className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#E6EDF3] group-hover:text-[#58B4EE] transition-colors">
                    LeetCode · {lcBadge}
                  </h3>
                  <div className="text-xs text-[#7C8BA1]">@{codingProfiles.leetcode.username}</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#7C8BA1] group-hover:text-[#58B4EE]" />
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-[#58B4EE]">{lcRating}</span>
              <span className="text-xs text-[#94A3B8]">
                Contest Rating · Top {lcTop}% Global
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#252A38]">
              {codingProfiles.leetcode.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-0.5 bg-[#1B1E28] border border-[#2C3242] text-[11.5px] text-[#93C5FD]"
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
            className="bg-[#12172e91] border border-[#2C3242] hover:border-[#58B4EE] p-5 space-y-3.5 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-[#1B2232] border border-[#58B4EE]/45 text-[#58B4EE] flex items-center justify-center">
                  <CodeChefIcon className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#E6EDF3] group-hover:text-[#58B4EE] transition-colors">
                    CodeChef · {codingProfiles.codechef.stars}
                  </h3>
                  <div className="text-xs text-[#7C8BA1]">@{codingProfiles.codechef.username}</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#7C8BA1] group-hover:text-[#58B4EE]" />
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-[#58B4EE]">
                {codingProfiles.codechef.rating}
              </span>
              <span className="text-xs text-[#94A3B8]">
                Contest Rating · DSA Rating {codingProfiles.codechef.dsaRating}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#252A38]">
              {codingProfiles.codechef.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-0.5 bg-[#1B1E28] border border-[#2C3242] text-[11.5px] text-[#93C5FD]"
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
            <h3 className="text-sm font-bold text-[#58B4EE] flex items-center gap-2">
              <span className="text-[#58B4EE]" >#</span>
              <span>{category}</span>
            </h3>
            <div className="bg-[#12172e91] border border-[#2C3242] divide-y divide-[#252A38]">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <span className="w-9 h-9 bg-[#1B2232] border border-[#58B4EE]/40 text-[#58B4EE] flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </span>
                    <div className="min-w-0 space-y-1">
                      <h4 className="text-[15px] font-bold text-[#E6EDF3] leading-snug">
                        {item.title}
                      </h4>
                      <div className="text-xs text-[#7C8BA1]">{item.organization}</div>
                      <p className="text-[13.5px] text-[#94A3B8] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-end justify-between gap-2 shrink-0">
                    <span className="px-2.5 py-1 bg-[#1B2232] border border-[#58B4EE]/45 text-[10px] font-bold uppercase tracking-wider text-[#93C5FD]">
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

      <section className="bg-[#12172e91] border border-[#2C3242]">
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b border-[#252A38]">
          <h3 className="text-xs font-bold text-[#58B4EE] flex items-center gap-2">
            <span className="text-[#58B4EE]" >#</span>
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
              dark: ['#1B1E28', '#1E3A5F', '#2563EB', '#3B82F6', '#58B4EE'],
            }}
            style={{ color: '#94A3B8' }}
          />
        </div>
      </section>
    </div>
  );
}
