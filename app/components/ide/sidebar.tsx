'use client';

import React from 'react';
import Image from 'next/image';
import {
  MapPin,
  Mail,
  Copy,
  Check,
  FileDown,
  ExternalLink,
  GraduationCap,
  ArrowUpRight,
} from 'lucide-react';
import {
  personalInfo,
  socialLinks,
  skillCategories,
  type TabId,
} from '@/app/data/portfolio';
import { PlatformIcon } from './icons';
import { ActionButton, ActionLink } from './button';

interface SidebarProps {
  onSelectTab: (tab: TabId) => void;
  onCopyEmail: () => void;
  copiedEmail: boolean;
  onCloseMobile?: () => void;
}

export function Sidebar({
  onSelectTab,
  onCopyEmail,
  copiedEmail,
  onCloseMobile,
}: SidebarProps) {
  const totalSkills = skillCategories.reduce((acc, c) => acc + c.skills.length, 0);

  return (
    <aside
      aria-label="Developer profile sidebar"
      className="flex flex-col h-full bg-[#1B1C22] border-r border-[#3B4353] text-[#E6EDF3]"
    >
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {/* Profile Card */}
        <section className="rounded-lg bg-[#24262E] border border-[#3B4353] p-4 space-y-3.5">
          <div className="flex items-start gap-3.5">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-[#58B4FF]/40 bg-[#DCE4F0] shrink-0">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                sizes="64px"
                priority
                className="object-cover object-top"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-base font-bold text-[#E6EDF3] leading-snug">
                {personalInfo.name}
              </h1>
              <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] mt-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#58B4FF] shrink-0" />
                <span className="truncate">{personalInfo.educationShort}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#58B4FF] shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Roles */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#2E3340]">
            {personalInfo.roles.map((role) => (
              <span
                key={role}
                className="px-2 py-0.5 rounded bg-[#58B4FF]/12 border border-[#58B4FF]/35 text-[11px] font-medium text-[#93C5FD]"
              >
                {role}
              </span>
            ))}
          </div>
        </section>

        {/* Availability + Prominently Highlighted Resume CTA */}
        <section className="rounded-lg bg-[#24262E] border border-[#58B4FF]/45 p-4 space-y-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#58B4FF] opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#58B4FF]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#58B4FF]">
                {personalInfo.availability.status}
              </span>
            </div>
            <p className="text-xs text-[#CBD5E1]">{personalInfo.availability.detail}</p>
          </div>

          <ActionLink
            href={personalInfo.resumeUrl}
            external
            variant="primary"
            size="lg"
            className="w-full"
          >
            <FileDown className="w-4 h-4" />
            <span>{personalInfo.resumeLabel}</span>
            <ArrowUpRight className="w-4 h-4" />
          </ActionLink>
        </section>

        {/* Direct Email */}
        <section className="rounded-lg bg-[#24262E] border border-[#3B4353] p-3.5 space-y-2">
          <h4 className="text-[11px] font-semibold text-[#94A3B8]">Direct Email</h4>
          <div className="flex items-center justify-between gap-2 rounded-md bg-[#1E1F25] border border-[#2E3340] px-2.5 py-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-xs text-[#E6EDF3] hover:text-[#58B4FF] truncate transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#58B4FF] shrink-0" />
              <span className="truncate">{personalInfo.email}</span>
            </a>
            <ActionButton
              variant="ghost"
              size="sm"
              onClick={onCopyEmail}
              title="Copy email address"
              aria-label="Copy email address"
              className="!p-1.5 shrink-0"
            >
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-[#58B4FF]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </ActionButton>
          </div>
          {copiedEmail && (
            <div className="text-[11px] text-[#58B4FF] font-medium">
              Email copied to clipboard
            </div>
          )}
        </section>

        {/* Core Tech Stack Snapshot */}
        <section className="rounded-lg bg-[#24262E] border border-[#3B4353] p-3.5 space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-[11px] font-semibold text-[#94A3B8]">Core Stack</h4>
            <ActionButton
              variant="ghost"
              size="sm"
              onClick={() => {
                onSelectTab('skills');
                onCloseMobile?.();
              }}
              className="!px-2 !py-0.5 text-[10px] text-[#58B4FF]"
            >
              All ({totalSkills})
            </ActionButton>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {personalInfo.sidebarCoreStack.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded bg-[#1E1F25] border border-[#2E3340] text-[11px] text-[#CBD5E1]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Social & Coding Platform Links */}
        <section className="space-y-2">
          <h4 className="px-0.5 text-[11px] font-semibold text-[#94A3B8]">Profiles</h4>
          <div className="grid grid-cols-2 gap-1.5">
            {socialLinks.map((profile) => (
              <a
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-1.5 px-2.5 py-2 rounded-md bg-[#24262E] border border-[#2E3340] hover:border-[#58B4FF] text-xs text-[#CBD5E1] hover:text-[#58B4FF] transition-colors group"
              >
                <span className="flex items-center gap-2 min-w-0">
                  <span className="text-[#58B4FF] shrink-0">
                    <PlatformIcon id={profile.id} className="w-3.5 h-3.5" />
                  </span>
                  <span className="truncate font-medium">{profile.name}</span>
                </span>
                <ExternalLink className="w-3 h-3 text-[#64748B] group-hover:text-[#58B4FF] shrink-0" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
