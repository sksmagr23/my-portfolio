'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { skillCategories } from '@/app/data/portfolio';
import { CategoryIcon, SkillMiniIcon } from './icons';
import { ActionButton } from './button';

interface SkillsModalProps {
  open: boolean;
  onClose: () => void;
}

export function SkillsModal({ open, onClose }: SkillsModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-[2px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Full technical stack"
    >
      <div
        className="w-full max-w-3xl max-h-[86vh] flex flex-col ide-panel border-t-[3px] border-t-[#58B4EE] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#2C3242] bg-[#12172e91]">
          <div>
            <h2 className="text-base font-bold text-[#E6EDF3]">Technical Stack</h2>
          </div>
          <ActionButton
            variant="outline"
            size="sm"
            onClick={onClose}
            aria-label="Close technical stack overlay"
            className="!p-1.5"
          >
            <X className="w-4 h-4" />
          </ActionButton>
        </div>

        <div className="flex-1 overflow-y-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((category) => (
            <section
              key={category.id}
              className="bg-[#151820] border border-[#2A3040] p-4 space-y-3"
            >
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#252A38]">
                <div className="flex items-center gap-2">
                  <span className="text-[#58B4EE]">
                    <CategoryIcon id={category.id} className="w-4 h-4" />
                  </span>
                  <h3 className="text-xs font-bold text-[#E6EDF3]">{category.name}</h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={`${category.id}-${skill}`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1C202B] border border-[#2E3547] text-xs text-[#CBD5E1]"
                  >
                    <span className="text-[#58B4EE]">
                      <SkillMiniIcon name={skill} className="w-3 h-3" />
                    </span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
