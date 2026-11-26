'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { skillCategories } from '@/app/data/portfolio';
import { CategoryIcon, SkillMiniIcon } from './icons';
import { ActionButton } from './button';
import { SpotlightCard } from './spotlight-card';

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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Full technical stack"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-3xl max-h-[86vh] flex flex-col ide-panel border-t-[3px] border-t-theme-accent overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-theme-border bg-theme-card">
              <div>
                <h2 className="text-base font-bold text-theme-text">Technical Stack</h2>
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

            <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2">
              {skillCategories.map((category, idx) => (
                <SpotlightCard
                  key={category.id}
                  as="section"
                  interactive
                  index={idx}
                  className="p-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-theme-borderSubtle">
                      <div className="flex items-center gap-2">
                        <span className="text-theme-accent">
                          <CategoryIcon id={category.id} className="w-4 h-4" />
                        </span>
                        <h3 className="text-xs font-bold text-theme-text">{category.name}</h3>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={`${category.id}-${skill}`}
                          className="tech-pill inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] border border-theme-borderPanel text-xs text-theme-textSecondary"
                        >
                          <SkillMiniIcon name={skill} className="w-3.5 h-3.5" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
