'use client';

import React from 'react';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import type { ProjectItem } from '@/app/data/portfolio';

interface ProjectPreviewProps {
  project: ProjectItem;
  onExpandImage?: (project: ProjectItem) => void;
  large?: boolean;
}

function ArchitecturalPreview({ kind }: { kind: NonNullable<ProjectItem['previewKind']> }) {
  if (kind === 'codementor') {
    return (
      <div className="w-full h-full bg-[#111319] p-3.5 flex flex-col justify-between text-[11px] select-none overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#252A38] pb-1.5">
          <span className="text-[#93C5FD] font-semibold uppercase tracking-wider text-[10px] truncate">
            solution.cpp — CodeMentor AI
          </span>
          <span className="px-2 py-0.5 bg-[#58B4FF]/15 text-[#58B4FF] text-[10px] font-medium shrink-0">
            Google ADK
          </span>
        </div>

        <div className="grid grid-cols-12 gap-2 my-1.5 flex-1 min-h-0">
          <div className="col-span-7 bg-[#171A23] border border-[#252A38] p-2 space-y-0.5 text-[10px] leading-snug overflow-hidden">
            <div className="text-[#64748B] truncate">3Sum · Two Pointers</div>
            <div className="text-[#CBD5E1]">
              <span className="text-[#58B4FF]">while</span> (l &lt; r) {'{'}
            </div>
            <div className="pl-2 bg-[#1E3A5F]/45 border-l-2 border-[#60A5FA] text-[#93C5FD] truncate">
              if (sum == 0) push(...);
            </div>
            <div className="pl-2 bg-[#58B4FF]/15 border-l-2 border-[#58B4FF] text-[#E6EDF3] truncate">
              while (a[l] == a[l+1]) l++;
            </div>
            <div className="text-[#CBD5E1]">{'}'}</div>
          </div>

          <div className="col-span-5 bg-[#171A23] border border-[#252A38] p-2 flex flex-col justify-between text-[10px]">
            <div>
              <div className="text-[#58B4FF] font-semibold uppercase text-[9.5px] mb-1">
                Counterexample
              </div>
              <div className="text-[#E6EDF3] bg-[#111319] px-1.5 py-0.5 border border-[#252A38] truncate">
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
          <span className="px-2 py-0.5 bg-[#1C202B] border border-[#2E3547] text-[#58B4FF]">
            Dry Run
          </span>
          <span className="px-2 py-0.5 bg-[#1C202B] border border-[#2E3547] text-[#93C5FD]">
            Fix Applied
          </span>
          <span className="px-2 py-0.5 bg-[#1C202B] border border-[#2E3547] text-[#CBD5E1]">
            Optimal
          </span>
        </div>
      </div>
    );
  }

  if (kind === 'url-shortener') {
    return (
      <div className="w-full h-full bg-[#111319] p-3.5 flex flex-col justify-between text-[11px] select-none overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#252A38] pb-1.5">
          <span className="text-[#58B4FF] font-semibold text-[10px] truncate">
            GET /urls/gofr-soc/analytics
          </span>
          <span className="px-2 py-0.5 bg-[#58B4FF]/15 text-[#93C5FD] text-[10px] shrink-0">
            200 OK · Redis
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-1.5">
          <div className="bg-[#171A23] border border-[#252A38] p-2 text-center">
            <div className="text-[#58B4FF] font-semibold uppercase text-[10px]">Handler</div>
            <div className="text-[9.5px] text-[#94A3B8] mt-0.5">JWT / API Key</div>
          </div>
          <div className="bg-[#171A23] border border-[#58B4FF]/45 p-2 text-center">
            <div className="text-[#93C5FD] font-semibold uppercase text-[10px]">Service</div>
            <div className="text-[9.5px] text-[#94A3B8] mt-0.5">Version · Rollback</div>
          </div>
          <div className="bg-[#171A23] border border-[#252A38] p-2 text-center">
            <div className="text-[#60A5FA] font-semibold uppercase text-[10px]">Store</div>
            <div className="text-[9.5px] text-[#94A3B8] mt-0.5">Redis → Mongo</div>
          </div>
        </div>

        <div className="bg-[#171A23] border border-[#252A38] p-2 flex items-center justify-between text-[10px]">
          <div className="space-y-0.5">
            <div className="text-[#94A3B8] uppercase text-[9.5px] font-medium">Telemetry</div>
            <div className="text-[#E6EDF3]">Unique IPs · Geo · Device · Referrer</div>
          </div>
          <div className="flex items-end gap-1 h-6">
            {[35, 65, 50, 85, 70, 100, 80].map((h, i) => (
              <span key={i} className="w-1.5 bg-[#58B4FF]/85" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'querypilot') {
    return (
      <div className="w-full h-full bg-[#111319] p-3.5 flex flex-col justify-between text-[11px] select-none overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#252A38] pb-1.5">
          <span className="text-[#58B4FF] font-semibold uppercase tracking-wider text-[10px]">
            QueryPilot · Agentic SQL
          </span>
          <span className="px-2 py-0.5 bg-[#58B4FF]/15 text-[#93C5FD] text-[10px]">
            99.05% Accuracy
          </span>
        </div>

        <div className="space-y-2 my-1.5 flex-1 flex flex-col justify-center">
          <div className="flex items-center justify-between gap-1 text-[9.5px]">
            <span className="px-2 py-1 bg-[#171A23] border border-[#252A38] text-[#E6EDF3]">
              NL Query
            </span>
            <span className="text-[#64748B]">→</span>
            <span className="px-2 py-1 bg-[#171A23] border border-[#58B4FF]/45 text-[#58B4FF]">
              SQLGlot AST
            </span>
            <span className="text-[#64748B]">→</span>
            <span className="px-2 py-1 bg-[#171A23] border border-[#3B82F6]/45 text-[#93C5FD]">
              EXPLAIN
            </span>
            <span className="text-[#64748B]">→</span>
            <span className="px-2 py-1 bg-[#171A23] border border-[#58B4FF]/45 text-[#60A5FA]">
              Postgres
            </span>
          </div>

          <div className="bg-[#171A23] border border-[#252A38] p-2 text-[10px] text-[#CBD5E1] truncate">
            <span className="text-[#58B4FF] font-semibold">SELECT</span> region,{' '}
            <span className="text-[#93C5FD]">SUM</span>(revenue){' '}
            <span className="text-[#58B4FF] font-semibold">FROM</span> orders{' '}
            <span className="text-[#58B4FF] font-semibold">GROUP BY</span> 1;
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#94A3B8]">
          <span>Read-Only AST + Cost Approval Gate</span>
          <span className="text-[#58B4FF] font-semibold">SAFE ✓</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#111319] p-3.5 flex flex-col justify-between text-[11px] select-none overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#252A38] pb-1.5">
        <span className="text-[#58B4FF] font-semibold uppercase tracking-wider text-[10px]">
          Stocking · Equity Analytics
        </span>
        <span className="px-2 py-0.5 bg-[#58B4FF]/15 text-[#93C5FD] text-[10px]">
          Firebase Live
        </span>
      </div>

      <div className="flex-1 flex items-center justify-center my-1.5">
        <svg viewBox="0 0 280 80" className="w-full h-20" aria-hidden="true">
          <defs>
            <linearGradient id="stockFillSharp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#58B4FF" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#58B4FF" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path
            d="M 8 64 L 42 52 L 76 58 L 114 36 L 152 41 L 190 20 L 230 27 L 272 10 L 272 76 L 8 76 Z"
            fill="url(#stockFillSharp)"
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
  const heightClass = large ? 'h-[55vh] max-h-[520px]' : 'h-44 sm:h-48';

  return (
    <div
      className={`relative w-full ${heightClass} bg-[#111319] border border-[#262B3A] overflow-hidden group`}
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
        <button
          type="button"
          onClick={() => onExpandImage(project)}
          aria-label={`Preview ${project.name}`}
          className="absolute bottom-2 right-2 inline-flex items-center gap-1 px-2 py-1 bg-[#14161D]/90 border border-[#3B4459] text-[10px] font-semibold uppercase tracking-wider text-[#CBD5E1] hover:border-[#58B4FF] hover:text-[#58B4FF] opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 transition-opacity"
        >
          <Maximize2 className="w-3 h-3" />
          <span>Zoom</span>
        </button>
      )}
    </div>
  );
}
