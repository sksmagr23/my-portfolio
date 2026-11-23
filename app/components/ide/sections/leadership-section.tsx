'use client';

import React from 'react';
import { Users, Calendar, Sparkles } from 'lucide-react';
import { leadershipData } from '@/app/data/portfolio';

export function LeadershipSection() {
  return (
    <div className="space-y-7">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#58B4FF]">
          <Users className="w-3.5 h-3.5" />
          <span>Positions of Responsibility &amp; Community</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#E6EDF3]">
          Leadership &amp; Mentoring
        </h2>
        <p className="text-sm text-[#94A3B8]">
          Technical leadership, mentoring, and developer community building at IIT (BHU) Varanasi.
        </p>
      </div>

      <div className="space-y-4">
        {leadershipData.map((item) => (
          <article
            key={item.id}
            className="rounded-lg bg-[#24262E] border border-[#3B4353] hover:border-[#58B4FF]/70 transition-colors p-5 sm:p-6 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-[#E6EDF3] leading-snug">
                    {item.organization}
                  </h3>
                  {item.unit && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#58B4FF]/12 border border-[#58B4FF]/35 text-[#93C5FD]">
                      {item.unit}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {item.roles.map((role) => (
                    <span
                      key={role}
                      className="text-xs font-medium text-[#CBD5E1] px-2.5 py-0.5 rounded bg-[#1E1F25] border border-[#3B4353]"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#CBD5E1] bg-[#1E1F25] border border-[#2E3340] px-2.5 py-1.5 rounded-md self-start shrink-0">
                <Calendar className="w-3.5 h-3.5 text-[#58B4FF]" />
                <span>{item.duration}</span>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              {item.responsibilities.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#58B4FF] mt-0.5">›</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            {item.highlights && item.highlights.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#2E3340]">
                {item.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#1E1F25] border border-[#2E3340] text-[11px] text-[#94A3B8]"
                  >
                    <Sparkles className="w-2.5 h-2.5 text-[#58B4FF]" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
