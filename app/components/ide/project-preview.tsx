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

export function ProjectPreview({ project, onExpandImage, large = false }: ProjectPreviewProps) {
  if (!project.image) {
    return null;
  }

  const heightClass = large ? 'h-[55vh] max-h-[520px]' : 'h-44 sm:h-48';

  return (
    <div
      className={`relative w-full ${heightClass} bg-[#111319] border border-[#262B3A] overflow-hidden group`}
    >
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        fill
        sizes={large ? '(max-width: 1024px) 95vw, 900px' : '(max-width: 1280px) 100vw, 50vw'}
        className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
      />

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
