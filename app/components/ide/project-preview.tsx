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

  const heightClass = large ? 'h-[55vh] max-h-[520px]' : 'h-48 sm:h-72';

  return (
    <div
      className={`relative w-full ${heightClass} border-theme-borderSubtle/20 bg-theme-surfaceInput overflow-hidden group/preview shadow-[0_2px_10px_rgba(0,0,0,0.3)]`}
    >
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        fill
        sizes={large ? '(max-width: 1024px) 95vw, 900px' : '(max-width: 1280px) 100vw, 50vw'}
        className={`object-cover object-top transition-transform duration-500 ease-out ${
          large ? '' : 'group-hover/card:scale-[1.03] group-hover/preview:scale-[1.03]'
        }`}
      />

      {!large && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 group-hover/card:opacity-85 transition-opacity duration-300"
        />
      )}

    </div>
  );
}
