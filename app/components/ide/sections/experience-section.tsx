'use client';

import React from 'react';
import { Calendar, ExternalLink, Briefcase } from 'lucide-react';
import { experienceData, type ExperienceItem } from '@/app/data/portfolio';
import { ActionLink } from '../button';

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="relative pl-8 sm:pl-10">
      <span
        className="absolute left-0 top-5 w-3.5 h-3.5 rounded-full border-2 border-[#1E1F25] bg-[#58B4FF]"
        aria-hidden="true"
      />

      <article className="rounded-lg bg-[#24262E] border border-[#3B4353] hover:border-[#58B4FF]/70 transition-colors p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="flex items-start gap-3.5">
            <div
              className="w-11 h-11 rounded-lg border border-[#58B4FF]/45 bg-[#1E1F25] text-[#58B4FF] flex items-center justify-center text-sm font-bold shrink-0"
              aria-hidden="true"
            >
              {item.logoText}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-[#E6EDF3] leading-snug">{item.role}</h3>
                <span className="px-2 py-0.5 rounded bg-[#58B4FF]/12 border border-[#58B4FF]/35 text-[10px] font-semibold uppercase tracking-wider text-[#93C5FD]">
                  {item.type}
                </span>
              </div>
              <div className="text-sm font-semibold text-[#58B4FF] mt-0.5">{item.company}</div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#CBD5E1] bg-[#1E1F25] border border-[#2E3340] px-2.5 py-1.5 rounded-md self-start shrink-0">
            <Calendar className="w-3.5 h-3.5 text-[#58B4FF]" />
            <span>{item.duration}</span>
          </div>
        </div>

        <p className="text-sm text-[#CBD5E1] leading-relaxed">{item.summary}</p>

        <ul className="space-y-2 text-sm text-[#94A3B8]">
          {item.responsibilities.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-[#58B4FF] mt-0.5">›</span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#2E3340]">
          <div className="flex flex-wrap gap-1.5">
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded bg-[#1E1F25] border border-[#2E3340] text-[11px] text-[#CBD5E1]"
              >
                {tech}
              </span>
            ))}
          </div>

          {item.link && (
            <ActionLink href={item.link} external variant="secondary" size="sm">
              <span>Inspect Repo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </ActionLink>
          )}
        </div>
      </article>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <div className="space-y-7">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#58B4FF]">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional &amp; Open-Source Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#E6EDF3]">
          Internship &amp; Engineering Experience
        </h2>
        <p className="text-sm text-[#94A3B8]">
          Verified software engineering internships and selective open-source programs.
        </p>
      </div>

      <div className="relative space-y-6 before:content-[''] before:absolute before:left-[6px] before:top-4 before:bottom-4 before:w-[2px] before:bg-[#3B4353]">
        {experienceData.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
