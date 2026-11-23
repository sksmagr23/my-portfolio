'use client';

import React, { useMemo, useState } from 'react';
import { Code2, LayoutGrid, Copy, Check } from 'lucide-react';
import { skillCategories } from '@/app/data/portfolio';
import { CategoryIcon, SkillMiniIcon } from '../icons';
import { ActionButton } from '../button';

export function SkillsSection() {
  const [viewMode, setViewMode] = useState<'grid' | 'json'>('grid');
  const [copiedJson, setCopiedJson] = useState(false);

  const rawJson = useMemo(() => {
    const obj: Record<string, string[]> = {};
    for (const cat of skillCategories) {
      obj[cat.jsonKey] = cat.skills;
    }
    return JSON.stringify(obj, null, 2);
  }, []);

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(rawJson);
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 2000);
    } catch {
      // Ignore clipboard permission errors
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#58B4FF]">
            Engineering Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E6EDF3]">Technical Skills</h2>
          <p className="text-sm text-[#94A3B8]">
            Organized by engineering domain — languages, frameworks, infrastructure, AI/ML, and developer tooling.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <ActionButton
            variant={viewMode === 'grid' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Visual</span>
          </ActionButton>
          <ActionButton
            variant={viewMode === 'json' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setViewMode('json')}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Raw JSON</span>
          </ActionButton>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {skillCategories.map((category) => (
            <section
              key={category.id}
              className="rounded-lg bg-[#24262E] border border-[#3B4353] hover:border-[#58B4FF]/70 transition-colors p-5 space-y-4"
            >
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#2E3340]">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-md bg-[#1E1F25] border border-[#2E3340] text-[#58B4FF]">
                    <CategoryIcon id={category.id} className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm font-bold text-[#E6EDF3]">{category.name}</h3>
                </div>
                <span className="text-xs font-semibold text-[#93C5FD] px-2 py-0.5 rounded bg-[#58B4FF]/12 border border-[#58B4FF]/30">
                  {category.skills.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={`${category.id}-${skill}`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#1E1F25] border border-[#2E3340] hover:border-[#58B4FF]/60 text-xs text-[#E6EDF3] transition-colors"
                  >
                    <span className="text-[#58B4FF]">
                      <SkillMiniIcon name={skill} className="w-3.5 h-3.5" />
                    </span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="rounded-lg bg-[#18191E] border border-[#3B4353] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#24262E] border-b border-[#3B4353] text-xs">
            <span className="font-semibold text-[#58B4FF]">skills.json</span>
            <ActionButton variant="secondary" size="sm" onClick={handleCopyJson}>
              {copiedJson ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy JSON</span>
                </>
              )}
            </ActionButton>
          </div>
          <div className="p-4 overflow-x-auto text-xs leading-6">
            {rawJson.split('\n').map((line, index) => {
              const isKey = /^\s*"[^"]+":/.test(line);
              const isValue = /^\s*"[^"]+",?$/.test(line);
              return (
                <div key={index} className="flex">
                  <span className="w-10 shrink-0 select-none text-right pr-4 text-[#475569]">
                    {index + 1}
                  </span>
                  <span
                    className={
                      isKey
                        ? 'text-[#58B4FF] font-semibold'
                        : isValue
                        ? 'text-[#93C5FD]'
                        : 'text-[#94A3B8]'
                    }
                  >
                    {line}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
