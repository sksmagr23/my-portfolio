'use client';

import React from 'react';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import type { ProjectItem } from '@/app/data/portfolio';
import { ActionButton } from './button';

interface ProjectPreviewProps {
  project: ProjectItem;
  onExpandImage?: (project: ProjectItem) => void;
  large?: boolean;
}

function ArchitecturalPreview({ kind }: { kind: NonNullable<ProjectItem['previewKind']> }) {
  if (kind === 'codementor') {
    return (
      <div className="w-full h-full bg-[#16181F] p-3.5 flex flex-col justify-between text-[11px] select-none overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#2E3340] pb-1.5">
          <span className="text-[#93C5FD] font-semibold uppercase tracking-wider text-[10px] truncate">
            solution.cpp — CodeMentor AI
          </span>
          <span className="px-2 py-0.5 rounded bg-[#58B4FF]/15 text-[#58B4FF] text-[10px] font-medium shrink-0">
            Google ADK
          </span>
        </div>

        <div className="grid grid-cols-12 gap-2 my-1.5 flex-1 min-h-0">
          <div className="col-span-7 rounded bg-[#1E1F25] border border-[#2E3340] p-2 space-y-0.5 text-[10px] leading-snug overflow-hidden">
            <div className="text-[#64748B] truncate">3Sum · Two Pointers Analysis</div>
            <div className="text-[#CBD5E1]">
              <span className="text-[#58B4FF]">while</span> (l &lt; r) {'{'}
            </div>
            <div className="pl-2 bg-[#1E3A5F]/45 border-l-2 border-[#60A5FA] text-[#93C5FD] truncate">
              if (sum == 0) push(...); // check dup
            </div>
            <div className="pl-2 bg-[#58B4FF]/15 border-l-2 border-[#58B4FF] text-[#E6EDF3] truncate">
              while (a[l] == a[l+1]) l++;
            </div>
            <div className="text-[#CBD5E1]">{'}'}</div>
          </div>

          <div className="col-span-5 rounded bg-[#1E1F25] border border-[#2E3340] p-2 flex flex-col justify-between text-[10px]">
            <div>
              <div className="text-[#58B4FF] font-semibold uppercase text-[9.5px] mb-1">
                Counterexample
              </div>
              <div className="text-[#E6EDF3] bg-[#16181F] px-1.5 py-0.5 rounded border border-[#2E3340] truncate">
                [-1, 0, 1, 2, -1]
              </div>
            </div>
            <div className="space-y-0.5 mt-1">
              <div className="flex justify-between text-[#94A3B8]">
                <span>Time</span>
                <span className="text-[#58B4FF] font-medium">O(N²)</span>
              </div>
              <div className="flex justify-between text-[#94A3B8]">
                <span>Space</span>
                <span className="text-[#93C5FD] font-medium">O(1)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px]">
          <span className="px-2 py-0.5 rounded bg-[#24262E] border border-[#3B4353] text-[#58B4FF]">
            Dry Run
          </span>
          <span className="px-2 py-0.5 rounded bg-[#24262E] border border-[#3B4353] text-[#93C5FD]">
            Fix Applied
          </span>
          <span className="px-2 py-0.5 rounded bg-[#24262E] border border-[#3B4353] text-[#CBD5E1]">
            Optimal
          </span>
        </div>
      </div>
    );
  }

  if (kind === 'url-shortener') {
    return (
      <div className="w-full h-full bg-[#16181F] p-3.5 flex flex-col justify-between text-[11px] select-none overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#2E3340] pb-1.5">
          <span className="text-[#58B4FF] font-semibold text-[10px] truncate">
            GET /urls/gofr-soc/analytics
          </span>
          <span className="px-2 py-0.5 rounded bg-[#58B4FF]/15 text-[#93C5FD] text-[10px] shrink-0">
            200 OK · 4ms (Redis)
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-1.5">
          <div className="rounded bg-[#1E1F25] border border-[#2E3340] p-2 text-center">
            <div className="text-[#58B4FF] font-semibold uppercase text-[10px]">Handler</div>
            <div className="text-[9.5px] text-[#94A3B8] mt-0.5">JWT / API Key</div>
          </div>
          <div className="rounded bg-[#1E1F25] border border-[#58B4FF]/45 p-2 text-center">
            <div className="text-[#93C5FD] font-semibold uppercase text-[10px]">Service</div>
            <div className="text-[9.5px] text-[#94A3B8] mt-0.5">Version · Rollback</div>
          </div>
          <div className="rounded bg-[#1E1F25] border border-[#2E3340] p-2 text-center">
            <div className="text-[#60A5FA] font-semibold uppercase text-[10px]">Store</div>
            <div className="text-[9.5px] text-[#94A3B8] mt-0.5">Redis → MongoDB</div>
          </div>
        </div>

        <div className="rounded bg-[#1E1F25] border border-[#2E3340] p-2.5 flex items-center justify-between text-[10px]">
          <div className="space-y-0.5">
            <div className="text-[#94A3B8] uppercase text-[9.5px] font-medium">Telemetry Pipeline</div>
            <div className="text-[#E6EDF3]">Unique IPs · Geo · Referrer · Device</div>
          </div>
          <div className="flex items-end gap-1 h-7">
            {[35, 65, 50, 85, 70, 100, 80].map((h, i) => (
              <span
                key={i}
                className="w-1.5 rounded-t bg-[#58B4FF]/85"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'querypilot') {
    return (
      <div className="w-full h-full bg-[#16181F] p-3.5 flex flex-col justify-between text-[11px] select-none overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#2E3340] pb-1.5">
          <span className="text-[#58B4FF] font-semibold uppercase tracking-wider text-[10px]">
            QueryPilot · Agentic SQL
          </span>
          <span className="px-2 py-0.5 rounded bg-[#58B4FF]/15 text-[#93C5FD] text-[10px]">
            99.05% · 105 tests
          </span>
        </div>

        <div className="space-y-2 my-1.5 flex-1 flex flex-col justify-center">
          <div className="flex items-center justify-between gap-1 text-[9.5px]">
            <span className="px-2 py-1 rounded bg-[#1E1F25] border border-[#2E3340] text-[#E6EDF3]">
              NL Query
            </span>
            <span className="text-[#64748B]">→</span>
            <span className="px-2 py-1 rounded bg-[#1E1F25] border border-[#58B4FF]/45 text-[#58B4FF]">
              SQLGlot AST
            </span>
            <span className="text-[#64748B]">→</span>
            <span className="px-2 py-1 rounded bg-[#1E1F25] border border-[#3B82F6]/45 text-[#93C5FD]">
              EXPLAIN Gate
            </span>
            <span className="text-[#64748B]">→</span>
            <span className="px-2 py-1 rounded bg-[#1E1F25] border border-[#58B4FF]/45 text-[#60A5FA]">
              RO Postgres
            </span>
          </div>

          <div className="rounded bg-[#1E1F25] border border-[#2E3340] p-2 text-[10px] text-[#CBD5E1] truncate">
            <span className="text-[#58B4FF] font-semibold">SELECT</span> region,{' '}
            <span className="text-[#93C5FD]">SUM</span>(revenue){' '}
            <span className="text-[#58B4FF] font-semibold">FROM</span> orders{' '}
            <span className="text-[#58B4FF] font-semibold">GROUP BY</span> 1;
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#94A3B8]">
          <span>Guardrails: AST Read-Only + Cost Approval</span>
          <span className="text-[#58B4FF] font-semibold">SAFE ✓</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#16181F] p-3.5 flex flex-col justify-between text-[11px] select-none overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#2E3340] pb-1.5">
        <span className="text-[#58B4FF] font-semibold uppercase tracking-wider text-[10px]">
          Stocking · Real-Time Analytics
        </span>
        <span className="px-2 py-0.5 rounded bg-[#58B4FF]/15 text-[#93C5FD] text-[10px]">
          Firebase Live
        </span>
      </div>

      <div className="flex-1 flex items-center justify-center my-1.5">
        <svg viewBox="0 0 280 80" className="w-full h-20" aria-hidden="true">
          <defs>
            <linearGradient id="stockFillBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#58B4FF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#58B4FF" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path
            d="M 8 64 L 42 52 L 76 58 L 114 36 L 152 41 L 190 20 L 230 27 L 272 10 L 272 76 L 8 76 Z"
            fill="url(#stockFillBlue)"
          />
          <polyline
            fill="none"
            stroke="#58B4FF"
            strokeWidth="2.2"
            points="8,64 42,52 76,58 114,36 152,41 190,20 230,27 272,10"
          />
          <circle cx="190" cy="20" r="3.5" fill="#93C5FD" />
          <circle cx="272" cy="10" r="3.5" fill="#58B4FF" />
        </svg>
      </div>

      <div className="flex items-center justify-between text-[10px] text-[#94A3B8]">
        <span>Highcharts Multi-Series Comparison</span>
        <span className="text-[#58B4FF] font-medium">React + Firebase</span>
      </div>
    </div>
  );
}

export function ProjectPreview({ project, onExpandImage, large = false }: ProjectPreviewProps) {
  const heightClass = large ? 'h-[55vh] max-h-[520px]' : 'h-48 sm:h-52';

  return (
    <div
      className={`relative w-full ${heightClass} bg-[#16181F] border-b border-[#2E3340] overflow-hidden group`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          sizes={large ? '(max-width: 1024px) 95vw, 900px' : '(max-width: 1280px) 100vw, 50vw'}
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
      ) : project.previewKind ? (
        <ArchitecturalPreview kind={project.previewKind} />
      ) : null}

      {!large && onExpandImage && (
        <ActionButton
          variant="outline"
          size="sm"
          onClick={() => onExpandImage(project)}
          aria-label={`Inspect ${project.name} preview`}
          className="absolute bottom-2.5 right-2.5 !bg-[#18191E]/95 opacity-95 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100"
        >
          <Maximize2 className="w-3 h-3" />
          <span>Preview</span>
        </ActionButton>
      )}
    </div>
  );
}
