'use client';

import React from 'react';
import Image from 'next/image';
import {
  MapPin,
  Mail,
  Copy,
  Check,
  FileText,
  MessageSquare,
  ArrowUpRight,
  Terminal
} from 'lucide-react';
import { personalInfo, socialLinks, type TabId } from '@/app/data/portfolio';
import { PlatformIcon } from './icons';
import { ActionButton, ActionLink } from './button';

interface SidebarProps {
  onSelectTab: (tab: TabId) => void;
  onOpenSkills: () => void;
  onCopyEmail: () => void;
  copiedEmail: boolean;
  onCloseMobile?: () => void;
}

export function Sidebar({
  onSelectTab,
  onOpenSkills,
  onCopyEmail,
  copiedEmail,
  onCloseMobile,
}: SidebarProps) {
  return (
    <aside
      aria-label="Developer profile sidebar"
      className="flex flex-col h-full overflow-y-auto space-y-3.5 text-[#E6EDF3]"
    >
      <section className="ide-panel border-t-[3px] border-t-[#58B4FF] p-4 space-y-3.5">
        <div className="flex items-start gap-3.5">
          <div className="relative w-16 h-16 overflow-hidden border-2 border-[#58B4FF] bg-[#DCE4F0] shrink-0">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              sizes="64px"
              priority
              className="object-cover object-top"
            />
          </div>
          <div className="min-w-0 pt-0.5">
            <h1 className="text-[17px] font-bold text-[#E6EDF3] leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#58B4FF] mt-1 leading-snug">
              {personalInfo.rolesLine}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
          <MapPin className="w-3.5 h-3.5 text-[#58B4FF] shrink-0" />
          <span>{personalInfo.location}</span>
        </div>

        <p className="text-[13px] text-[#94A3B8] leading-relaxed">
          Final-year B.Tech · IIT (BHU) Varanasi
        </p>
      </section>

      {/* 2. Open To Work Card */}
      <section className="ide-panel p-4 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#58B4FF] inline-block shrink-0" />
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#58B4FF]">
            {personalInfo.availability.status}
          </span>
        </div>

        <div className="text-xs text-[#94A3B8]">{personalInfo.availability.detail}</div>

        <div className="flex items-center justify-between gap-2 text-[13px] text-[#CBD5E1]">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 hover:text-[#58B4FF] truncate transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#7C8BA1] shrink-0" />
            <span className="truncate">{personalInfo.email}</span>
          </a>
          <button
            type="button"
            onClick={onCopyEmail}
            title="Copy email"
            aria-label="Copy email address"
            className="p-1 text-[#7C8BA1] hover:text-[#58B4FF] transition-colors shrink-0"
          >
            {copiedEmail ? (
              <Check className="w-3.5 h-3.5 text-[#58B4FF]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </section>

      <section className="ide-panel p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-xs font-bold text-[#58B4FF] flex items-center gap-2">
            <span className="text-[#58B4FF]" >#</span>
            <span>Tech Stack</span>
          </h4>
          <button
            type="button"
            onClick={() => {
              onCloseMobile?.();
              onOpenSkills();
            }}
            className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#93C5FD] hover:text-[#58B4FF] transition-colors"
          >
            <span>View More</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {personalInfo.sidebarCoreSkills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-[#141720] border border-[#2C3347] text-[12px] text-[#CBD5E1]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="ide-panel p-4 space-y-3.5">
        <h4 className="text-xs font-bold text-[#58B4FF] flex items-center gap-2">
          <span className="text-[#58B4FF]" >#</span>
          <span>Socials</span>
        </h4>

        <div className="grid grid-cols-6 gap-1.5">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target={item.id === 'email' ? undefined : '_blank'}
              rel={item.id === 'email' ? undefined : 'noopener noreferrer'}
              title={item.name}
              aria-label={item.name}
              className="h-9 flex items-center justify-center bg-[#151821] border border-[#2E3446] text-[#94A3B8] hover:border-[#58B4FF] hover:text-[#58B4FF] transition-colors"
            >
              <PlatformIcon id={item.id} className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="space-y-2.5 pt-1">
  <div className="grid grid-cols-2 gap-2.5">
    <ActionLink
      href={personalInfo.resumeUrl}
      external
      variant="primary"
      size="lg"
      className="w-full"
    >
      <FileText className="w-4 h-4" />
      <span>Resume</span>
    </ActionLink>

    <ActionLink
      href={personalInfo.terminalUrl}
      external
      variant="secondary"
      size="lg"
      className="w-full"
    >
      <Terminal className="w-4 h-4" />
      <span>Terminal</span>
    </ActionLink>
  </div>

  <ActionButton
    variant="secondary"
    size="lg"
    onClick={() => {
      onSelectTab('contact');
      onCloseMobile?.();
    }}
    className="w-full"
  >
    <MessageSquare className="w-4 h-4" />
    <span>Send a Message</span>
  </ActionButton>
</div>
      </section>
    </aside>
  );
}
