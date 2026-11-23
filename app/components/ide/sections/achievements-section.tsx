'use client';

import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Trophy, GitPullRequest, Code2, ExternalLink, Award, Activity } from 'lucide-react';
import {
  achievementsData,
  codingProfiles,
  personalInfo,
  type AchievementItem,
} from '@/app/data/portfolio';
import { LeetCodeIcon, CodeChefIcon, GfgIcon, GitHubIcon } from '../icons';
import { ActionLink } from '../button';

interface LeetCodeLive {
  username: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  contestRating: number;
  contestGlobalRanking: number;
  contestTopPercentage: number;
  attendedContests: number;
  badge: string;
  live: boolean;
}

const INITIAL_LEETCODE: LeetCodeLive = {
  ...codingProfiles.leetcode,
  live: false,
};

export function AchievementCard({ item }: { item: AchievementItem }) {
  return (
    <article className="rounded-lg bg-[#24262E] border border-[#3B4353] hover:border-[#58B4FF]/70 transition-colors p-5 flex flex-col justify-between gap-3">
      <div className="space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="px-2 py-0.5 rounded bg-[#58B4FF]/15 border border-[#58B4FF]/35 text-[10px] font-semibold uppercase tracking-wider text-[#93C5FD]">
            {item.highlight}
          </span>
          <Award className="w-4 h-4 shrink-0 text-[#58B4FF]" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#E6EDF3] leading-snug">{item.title}</h4>
          <div className="text-xs text-[#94A3B8] mt-0.5">{item.organization}</div>
        </div>
        <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">{item.description}</p>
      </div>

      {item.link && (
        <div className="pt-2 border-t border-[#2E3340]">
          <ActionLink href={item.link} external variant="ghost" size="sm" className="!px-0 !py-1 text-[#58B4FF] hover:!bg-transparent">
            <span>View Link</span>
            <ExternalLink className="w-3 h-3" />
          </ActionLink>
        </div>
      )}
    </article>
  );
}

export function AchievementsSection() {
  const [leetcode, setLeetcode] = useState<LeetCodeLive>(INITIAL_LEETCODE);

  useEffect(() => {
    let active = true;
    fetch('/api/leetcode')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (active && data?.totalSolved) {
          setLeetcode(data);
        }
      })
      .catch(() => {
        // Retain verified snapshot silently
      });
    return () => {
      active = false;
    };
  }, []);

  const categories: {
    name: AchievementItem['category'];
    icon: React.ReactNode;
  }[] = [
    { name: 'Hackathons & Competitions', icon: <Trophy className="w-4 h-4 text-[#58B4FF]" /> },
    { name: 'Open Source', icon: <GitPullRequest className="w-4 h-4 text-[#58B4FF]" /> },
    { name: 'Competitive Programming', icon: <Code2 className="w-4 h-4 text-[#58B4FF]" /> },
  ];

  const totalAcrossPlatforms =
    leetcode.totalSolved + codingProfiles.codechef.solved + codingProfiles.gfg.solved;

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#58B4FF]">
          Verified Milestones &amp; Ratings
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#E6EDF3]">
          Achievements &amp; Competitive Programming
        </h2>
        <p className="text-sm text-[#94A3B8]">
          Hackathon placements, selective open-source contributions, and verified algorithmic ratings.
        </p>
      </div>

      {/* Live Coding Profiles Panel */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <a
          href={codingProfiles.leetcode.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[#24262E] border border-[#3B4353] hover:border-[#58B4FF] transition-colors p-5 space-y-4 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-md bg-[#1E1F25] border border-[#2E3340] text-[#58B4FF]">
                <LeetCodeIcon className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-xs font-bold text-[#E6EDF3] group-hover:text-[#58B4FF] transition-colors">
                  LeetCode · {leetcode.badge}
                </h4>
                <div className="text-xs text-[#94A3B8]">@{leetcode.username}</div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#58B4FF]" />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded bg-[#1E1F25] border border-[#2E3340] p-2.5">
              <div className="text-xl font-bold text-[#58B4FF]">{leetcode.contestRating}</div>
              <div className="text-[11px] text-[#94A3B8]">
                Rating (Top {leetcode.contestTopPercentage}%)
              </div>
            </div>
            <div className="rounded bg-[#1E1F25] border border-[#2E3340] p-2.5">
              <div className="text-xl font-bold text-[#E6EDF3]">{leetcode.totalSolved}</div>
              <div className="text-[11px] text-[#94A3B8]">Solved</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#93C5FD] pt-1 border-t border-[#2E3340]">
            <span>Easy {leetcode.easySolved}</span>
            <span>Med {leetcode.mediumSolved}</span>
            <span>Hard {leetcode.hardSolved}</span>
          </div>
        </a>

        <a
          href={codingProfiles.codechef.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[#24262E] border border-[#3B4353] hover:border-[#58B4FF] transition-colors p-5 flex flex-col justify-between gap-4 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-md bg-[#1E1F25] border border-[#2E3340] text-[#58B4FF]">
                <CodeChefIcon className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-xs font-bold text-[#E6EDF3] group-hover:text-[#58B4FF] transition-colors">
                  CodeChef · {codingProfiles.codechef.stars}
                </h4>
                <div className="text-xs text-[#94A3B8]">@{codingProfiles.codechef.username}</div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#58B4FF]" />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded bg-[#1E1F25] border border-[#2E3340] p-2.5">
              <div className="text-xl font-bold text-[#58B4FF]">
                {codingProfiles.codechef.rating}
              </div>
              <div className="text-[11px] text-[#94A3B8]">Contest Rating</div>
            </div>
            <div className="rounded bg-[#1E1F25] border border-[#2E3340] p-2.5">
              <div className="text-xl font-bold text-[#E6EDF3]">
                {codingProfiles.codechef.solved}
              </div>
              <div className="text-[11px] text-[#94A3B8]">Solved</div>
            </div>
          </div>

          <div className="text-[11px] text-[#94A3B8] pt-1 border-t border-[#2E3340]">
            DSA Rating:{' '}
            <span className="text-[#93C5FD] font-semibold">
              {codingProfiles.codechef.dsaRating}
            </span>
          </div>
        </a>

        <a
          href={codingProfiles.gfg.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[#24262E] border border-[#3B4353] hover:border-[#58B4FF] transition-colors p-5 flex flex-col justify-between gap-4 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-md bg-[#1E1F25] border border-[#2E3340] text-[#58B4FF]">
                <GfgIcon className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-xs font-bold text-[#E6EDF3] group-hover:text-[#58B4FF] transition-colors">
                  GeeksforGeeks &amp; Total
                </h4>
                <div className="text-xs text-[#94A3B8]">@{codingProfiles.gfg.username}</div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#58B4FF]" />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded bg-[#1E1F25] border border-[#2E3340] p-2.5">
              <div className="text-xl font-bold text-[#93C5FD]">
                {codingProfiles.gfg.solved}
              </div>
              <div className="text-[11px] text-[#94A3B8]">GFG Solved</div>
            </div>
            <div className="rounded bg-[#1E1F25] border border-[#2E3340] p-2.5">
              <div className="text-xl font-bold text-[#58B4FF]">
                {totalAcrossPlatforms.toLocaleString()}+
              </div>
              <div className="text-[11px] text-[#94A3B8]">Combined Solved</div>
            </div>
          </div>

          <div className="text-[11px] text-[#94A3B8] pt-1 border-t border-[#2E3340]">
            {codingProfiles.gfg.badgesLabel}
          </div>
        </a>
      </section>

      {/* Grouped Achievement Cards */}
      {categories.map((cat) => {
        const items = achievementsData.filter((a) => a.category === cat.name);
        return (
          <section key={cat.name} className="space-y-3">
            <div className="flex items-center gap-2">
              {cat.icon}
              <h3 className="text-sm font-semibold text-[#E6EDF3]">{cat.name}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {items.map((item) => (
                <AchievementCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        );
      })}

      {/* GitHub Contribution Activity */}
      <section className="rounded-lg bg-[#24262E] border border-[#3B4353] overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#1B1C22] border-b border-[#2E3340]">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E6EDF3]">
            <Activity className="w-3.5 h-3.5 text-[#58B4FF]" />
            <span>GitHub Contributions (@{personalInfo.githubUsername})</span>
          </div>
          <ActionLink href={personalInfo.contact.github} external variant="secondary" size="sm">
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>Open GitHub</span>
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
              dark: ['#1B1C22', '#1E3A5F', '#2563EB', '#3B82F6', '#58B4FF'],
            }}
            style={{ color: '#94A3B8' }}
          />
        </div>
      </section>
    </div>
  );
}
