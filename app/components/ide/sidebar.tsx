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
      className="flex flex-col h-full overflow-y-auto space-y-3.5 text-theme-text"
    >
      <section className="ide-panel border-t-[3px] border-t-theme-accent p-4 space-y-3.5">
        <div className="flex items-start gap-3.5">
          <div className="relative w-16 h-16 overflow-hidden border-2 border-theme-accent bg-[#DCE4F0] shrink-0">
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
            <h1 className="text-[17px] font-bold text-theme-text leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-theme-accent mt-1 leading-snug">
              {personalInfo.rolesLine}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-theme-textMuted">
          <MapPin className="w-3.5 h-3.5 text-theme-accent shrink-0" />
          <span>{personalInfo.location}</span>
        </div>

        <p className="text-[13px] text-theme-textMuted leading-relaxed">
          Final-year B.Tech · IIT (BHU) Varanasi
        </p>
      </section>

      <section className="ide-panel p-4 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="text-theme-accent">$</span>
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-theme-accent">
            {personalInfo.availability.status}
          </span>
        </div>

        <div className="text-xs text-theme-textMuted">{personalInfo.availability.detail}</div>

        <div className="flex items-center justify-between gap-2 text-[13px] text-theme-textSecondary">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 hover:text-theme-accent truncate transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-theme-textDim shrink-0" />
            <span className="truncate">{personalInfo.email}</span>
          </a>
        </div>
      </section>

      <section className="ide-panel p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-xs font-bold text-theme-accent flex items-center gap-2">
            <span className="text-theme-accent">#</span>
            <span>Tech Stack</span>
          </h4>
          <button
            type="button"
            onClick={() => {
              onCloseMobile?.();
              onOpenSkills();
            }}
            className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-theme-accentSoft hover:text-theme-accent transition-colors"
          >
            <span>View More</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {personalInfo.sidebarCoreSkills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-theme-surface border border-theme-border text-[12px] text-theme-textSecondary"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="ide-panel p-4 space-y-3.5">
        <h4 className="text-xs font-bold text-theme-accent flex items-center gap-2">
          <span className="text-theme-accent">#</span>
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
              className="h-9 flex items-center justify-center bg-theme-surfaceSubtle border border-theme-borderPanel text-theme-textMuted hover:border-theme-accent hover:text-theme-accent transition-colors"
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
