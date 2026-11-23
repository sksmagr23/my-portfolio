'use client';

import React from 'react';
import {
  ArrowRight,
  GraduationCap,
  Compass,
  Gamepad2,
  Sparkles,
} from 'lucide-react';
import {
  personalInfo,
  keyStats,
  educationData,
  currentlyExploring,
  beyondCoding,
  type TabId,
} from '@/app/data/portfolio';
import { ActionButton } from '../button';

interface AboutSectionProps {
  onSelectTab: (tab: TabId) => void;
}

export function AboutSection({ onSelectTab }: AboutSectionProps) {
  return (
    <div className="space-y-8">
      {/* Hero Introduction */}
      <section className="rounded-lg bg-[#24262E] border border-[#3B4353] p-6 sm:p-8 space-y-5">
        <div className="space-y-3">
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E6EDF3] leading-tight">
            {personalInfo.tagline}
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-3xl">
            {personalInfo.intro}
          </p>
        </div>

        

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <ActionButton
            variant="primary"
            size="lg"
            onClick={() => onSelectTab('projects')}
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </ActionButton>
          <ActionButton
            variant="secondary"
            size="lg"
            onClick={() => onSelectTab('experience')}
          >
            <span>Experience</span>
          </ActionButton>
          <ActionButton
            variant="outline"
            size="lg"
            onClick={() => onSelectTab('contact')}
          >
            <span>Contact Me</span>
          </ActionButton>
        </div>
      </section>


      {/* Education */}
      <section aria-labelledby="education-heading" className="space-y-3">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-[#58B4FF]" />
          <h3 id="education-heading" className="text-sm font-semibold text-[#E6EDF3]">
            Education
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="rounded-lg bg-[#24262E] border border-[#3B4353] p-5 space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold text-[#E6EDF3] leading-snug">
                    {edu.institution}
                  </h4>
                  <p className="text-sm text-[#58B4FF] mt-1">
                    {edu.degree} · {edu.branch}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#58B4FF]/12 border border-[#58B4FF]/35 text-[11px] font-semibold uppercase tracking-wider text-[#93C5FD] shrink-0">
                  {edu.status}
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                {edu.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#58B4FF] mt-0.5">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Currently Exploring & Beyond Coding */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-lg bg-[#24262E] border border-[#3B4353] p-5 space-y-3.5">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#58B4FF]" />
            <h3 className="text-sm font-semibold text-[#E6EDF3]">Currently Exploring</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentlyExploring.map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1E1F25] border border-[#2E3340] text-xs text-[#CBD5E1]"
              >
                <Sparkles className="w-3 h-3 text-[#58B4FF]" />
                <span>{topic}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-[#24262E] border border-[#3B4353] p-5 space-y-3.5">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-4 h-4 text-[#58B4FF]" />
            <h3 className="text-sm font-semibold text-[#E6EDF3]">Beyond Coding</h3>
          </div>
          <div className="space-y-2.5">
            {beyondCoding.map((hobby) => (
              <div
                key={hobby.label}
                className="flex items-start justify-between gap-3 rounded-md bg-[#1E1F25] border border-[#2E3340] px-3.5 py-2.5"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-[#93C5FD]">
                  {hobby.label}
                </span>
                <span className="text-xs text-[#94A3B8] text-right">{hobby.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
