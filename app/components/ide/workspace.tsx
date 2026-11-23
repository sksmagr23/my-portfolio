'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PanelLeft,
  X,
  ArrowUp,
  FileDown,
  MapPin,
} from 'lucide-react';
import { personalInfo, workspaceTabs, type TabId } from '@/app/data/portfolio';
import { Sidebar } from './sidebar';
import { FileTabIcon } from './icons';
import { ActionButton, ActionLink } from './button';
import { AboutSection } from './sections/about-section';
import { ProjectsSection } from './sections/projects-section';
import { ExperienceSection } from './sections/experience-section';
import { AchievementsSection } from './sections/achievements-section';
import { LeadershipSection } from './sections/leadership-section';
import { SkillsSection } from './sections/skills-section';
import { ContactSection } from './sections/contact-section';

const VALID_TAB_IDS = new Set<TabId>(workspaceTabs.map((t) => t.id));

export function IDEWorkspace() {
  const [activeTab, setActiveTab] = useState<TabId>('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const mainScrollRef = useRef<HTMLDivElement>(null);

  const selectTab = useCallback((tab: TabId) => {
    setActiveTab(tab);
    if (typeof window !== 'undefined') {
      const targetHash = `#${tab}`;
      if (window.location.hash !== targetHash) {
        window.history.replaceState(null, '', targetHash);
      }
    }
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash.replace('#', '').toLowerCase() as TabId;
      if (VALID_TAB_IDS.has(raw)) {
        setActiveTab(raw);
      }
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  useEffect(() => {
    const el = mainScrollRef.current;
    const handleScroll = () => {
      const innerTop = el?.scrollTop ?? 0;
      const winTop = window.scrollY;
      setShowBackToTop(innerTop > 280 || winTop > 280);
    };
    el?.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      el?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Clipboard fallback ignored
    }
  }, []);

  const scrollToTop = () => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection onSelectTab={selectTab} />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'achievements':
        return <AchievementsSection />;
      case 'leadership':
        return <LeadershipSection />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return (
          <ContactSection
            onCopyEmail={handleCopyEmail}
            copiedEmail={copiedEmail}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden flex flex-col lg:flex-row bg-[#1E1F25] text-[#E6EDF3]">
      {/* Desktop Persistent Profile Sidebar */}
      <div className="hidden lg:block w-[360px] xl:w-[376px] shrink-0 h-full overflow-hidden">
        <Sidebar
          onSelectTab={selectTab}
          onCopyEmail={handleCopyEmail}
          copiedEmail={copiedEmail}
        />
      </div>

      {/* Tablet / Mobile Slide-Over Sidebar Drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden flex">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/65"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-[86vw] max-w-[360px] h-full shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#18191E] border-b border-r border-[#3B4353]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#93C5FD]">
                  Profile
                </span>
                <ActionButton
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close profile sidebar"
                  className="!p-1.5"
                >
                  <X className="w-4 h-4" />
                </ActionButton>
              </div>
              <div className="flex-1 min-h-0">
                <Sidebar
                  onSelectTab={selectTab}
                  onCopyEmail={handleCopyEmail}
                  copiedEmail={copiedEmail}
                  onCloseMobile={() => setSidebarOpen(false)}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Editor Workspace */}
      <div className="flex-1 flex flex-col min-w-0 lg:overflow-hidden">
        {/* Compact Mobile / Tablet Profile Bar (below lg) */}
        <div className="lg:hidden bg-[#1B1C22] border-b border-[#3B4353] px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <ActionButton
              variant="outline"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open profile sidebar"
              className="!p-2 shrink-0"
            >
              <PanelLeft className="w-4 h-4" />
            </ActionButton>
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-[#58B4FF]/40 bg-[#DCE4F0] shrink-0">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                sizes="40px"
                priority
                className="object-cover object-top"
              />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold uppercase tracking-wide text-[#E6EDF3] truncate">
                {personalInfo.name}
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#93C5FD] truncate">
                <MapPin className="w-3 h-3 text-[#58B4FF] shrink-0" />
                <span className="truncate">{personalInfo.shortRole}</span>
              </div>
            </div>
          </div>

          <ActionLink
            href={personalInfo.resumeUrl}
            external
            variant="primary"
            size="sm"
            className="shrink-0"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </ActionLink>
        </div>

        {/* IDE File Tab Bar */}
        <nav
          aria-label="Portfolio sections"
          role="tablist"
          className="shrink-0 bg-[#18191E] border-b border-[#3B4353] flex items-center overflow-x-auto no-scrollbar sticky top-0 lg:static z-20"
        >
          {workspaceTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => selectTab(tab.id)}
                className={`relative shrink-0 inline-flex items-center gap-2 px-4 py-3 text-xs font-medium tracking-wide border-r border-[#2E3340] transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1E1F25] text-[#E6EDF3]'
                    : 'bg-[#18191E] text-[#94A3B8] hover:text-[#93C5FD] hover:bg-[#1E1F25]/60'
                }`}
              >
                {isActive && (
                  <span
                    className="absolute top-0 left-0 right-0 h-[2px] bg-[#58B4FF]"
                    aria-hidden="true"
                  />
                )}
                <FileTabIcon ext={tab.ext} active={isActive} />
                <span>{tab.fileName}</span>
              </button>
            );
          })}
        </nav>

        {/* Scrollable Workspace Content */}
        <main
          ref={mainScrollRef}
          className="flex-1 lg:overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
        >
          <div className="max-w-5xl mx-auto pb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.16, ease: 'easeOut' }}
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="fixed bottom-5 right-5 z-30"
          >
            <ActionButton
              variant="secondary"
              size="sm"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="shadow-lg"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </ActionButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
