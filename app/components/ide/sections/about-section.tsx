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
    <div className="space-y-6">
      <section className="bg-[#161820] border border-[#2C3242] p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {personalInfo.roles.map((role) => (
            <span
              key={role}
              className="px-2.5 py-1 bg-[#1B2232] border border-[#58B4FF]/45 text-[11px] font-semibold uppercase tracking-wider text-[#93C5FD]"
            >
              {role}
            </span>
          ))}
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-[#E6EDF3] leading-snug">
          {personalInfo.tagline}
        </h2>

        <p className="text-[14.5px] text-[#94A3B8] leading-relaxed max-w-3xl">
          {personalInfo.intro}
        </p>

        <div className="pt-4 border-t border-[#252A38] space-y-2.5">
          <h3 className="text-xs font-bold text-[#58B4FF] flex items-center gap-2">
            <span className="text-[#58B4FF]" >#</span>
            <span>Education</span>
          </h3>
          <div className="divide-y divide-[#232735]">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="py-2.5 first:pt-1 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
              >
                <div>
                  <div className="text-[14.5px] font-semibold text-[#E6EDF3]">
                    {edu.institution}
                  </div>
                  <div className="text-[13px] text-[#94A3B8]">{edu.degree}</div>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#58B4FF] shrink-0">
                  {edu.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#161820] border border-[#2C3242] p-5 space-y-3">
          <h3 className="text-xs font-bold text-[#58B4FF] flex items-center gap-2">
            <span className="text-[#58B4FF]" >#</span>
            <span>Interests</span>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {currentlyExploring.map((topic) => (
              <span
                key={topic}
                className="px-2.5 py-1 bg-[#1B1E28] border border-[#2C3242] text-xs text-[#CBD5E1]"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#161820] border border-[#2C3242] p-5 space-y-3">
          <h3 className="text-xs font-bold text-[#58B4FF] flex items-center gap-2">
            <span className="text-[#58B4FF]" >#</span>
            <span>Extra Curricular</span>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {Extracuricular.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 bg-[#1B1E28] border border-[#2C3242] text-xs text-[#CBD5E1]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
