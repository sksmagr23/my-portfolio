'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Star,
  Layers,
  X,
  PlayCircle,
  Code2,
} from 'lucide-react';
import { projectsData, type ProjectItem } from '@/app/data/portfolio';
import { GitHubIcon } from '../icons';
import { ProjectPreview } from '../project-preview';
import { ActionButton, ActionLink } from '../button';

type FilterType = 'All' | 'Featured' | 'AI / ML' | 'Backend' | 'Full-Stack';

const FILTERS: FilterType[] = ['All', 'Featured', 'AI / ML', 'Backend', 'Full-Stack'];

interface ProjectCardProps {
  project: ProjectItem;
  onExpandImage: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onExpandImage }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="rounded-lg bg-[#24262E] border border-[#3B4353] hover:border-[#58B4FF]/75 transition-colors flex flex-col overflow-hidden">
      <ProjectPreview project={project} onExpandImage={onExpandImage} />

      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-3">
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {project.featured && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#58B4FF]/15 border border-[#58B4FF]/45 text-[#7CC4FF] text-[10px] font-semibold uppercase tracking-wider">
                  <Star className="w-2.5 h-2.5 fill-current" />
                  <span>Featured</span>
                </span>
              )}
              <span className="px-2 py-0.5 rounded bg-[#1E1F25] border border-[#2E3340] text-[#94A3B8] text-[10px] font-medium uppercase tracking-wider">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-2 py-0.5 rounded bg-[#1E293B] border border-[#58B4FF]/35 text-[#93C5FD] text-[10px] font-semibold uppercase tracking-wider">
                  {project.badge}
                </span>
              )}
            </div>
            {project.metrics && (
              <span className="text-[11px] font-semibold text-[#58B4FF]">{project.metrics}</span>
            )}
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-base font-bold text-[#E6EDF3] leading-snug">{project.name}</h3>
            <p className="text-xs font-medium text-[#58B4FF] mt-0.5">{project.tagline}</p>
            <p className="text-sm text-[#CBD5E1] leading-relaxed mt-2">{project.shortDescription}</p>
          </div>

          {project.architecture && (
            <div className="rounded bg-[#1E1F25] border border-[#2E3340] px-3 py-2 text-[11px] text-[#94A3B8] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#58B4FF] shrink-0" />
              <span className="truncate">{project.architecture}</span>
            </div>
          )}

          {/* Expandable Detailed Info & Key Features */}
          <div>
            <ActionButton
              variant="ghost"
              size="sm"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="!px-0 !py-1 text-[#58B4FF] hover:!bg-transparent hover:text-[#7CC4FF]"
            >
              {expanded ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>Hide Details</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5" />
                  <span>Inspect Features ({project.features.length})</span>
                </>
              )}
            </ActionButton>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 pt-3 border-t border-[#2E3340] space-y-3">
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {project.detailedDescription}
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#CBD5E1]">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#58B4FF] mt-0.5">›</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Tech Stack & Action Links */}
        <div className="space-y-3.5 pt-3 border-t border-[#2E3340]">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-[#1E1F25] border border-[#2E3340] text-[11px] text-[#CBD5E1]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {project.githubUrl && (
              <ActionLink href={project.githubUrl} external variant="outline" size="sm">
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>Repository</span>
              </ActionLink>
            )}
            {project.secondaryRepoUrl && (
              <ActionLink href={project.secondaryRepoUrl} external variant="outline" size="sm">
                <Code2 className="w-3.5 h-3.5" />
                <span>Backend</span>
              </ActionLink>
            )}
            {project.liveUrl && (
              <ActionLink href={project.liveUrl} external variant="secondary" size="sm">
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </ActionLink>
            )}
            {project.demoVideoUrl && (
              <ActionLink href={project.demoVideoUrl} external variant="secondary" size="sm">
                <PlayCircle className="w-3.5 h-3.5" />
                <span>Video Demo</span>
              </ActionLink>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<FilterType>('All');
  const [previewProject, setPreviewProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      if (filter === 'All') return true;
      if (filter === 'Featured') return Boolean(project.featured);
      return project.category === filter;
    });
  }, [filter]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#58B4FF]">
          Selected Engineering Work
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#E6EDF3]">Projects Showcase</h2>
        <p className="text-sm text-[#94A3B8]">
          Production microservices, agentic AI workflows, deep learning models, and full-stack web applications.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Project categories">
          {FILTERS.map((item) => (
            <ActionButton
              key={item}
              variant={filter === item ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter(item)}
            >
              {item}
            </ActionButton>
          ))}
        </div>
        <span className="text-xs text-[#94A3B8]">
          Showing {filteredProjects.length} of {projectsData.length}
        </span>
      </div>

      {/* Responsive 2-Column Project Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onExpandImage={setPreviewProject}
          />
        ))}
      </div>

      {/* Preview Lightbox Modal */}
      {previewProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75"
          onClick={() => setPreviewProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${previewProject.name} preview modal`}
        >
          <div
            className="w-full max-w-4xl rounded-lg bg-[#24262E] border border-[#3B4353] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-[#1B1C22] border-b border-[#3B4353]">
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-[#E6EDF3] truncate">
                  {previewProject.name}
                </h3>
                <div className="text-xs text-[#94A3B8] truncate">{previewProject.tagline}</div>
              </div>
              <ActionButton
                variant="ghost"
                size="sm"
                onClick={() => setPreviewProject(null)}
                aria-label="Close preview"
                className="!p-1.5"
              >
                <X className="w-4 h-4" />
              </ActionButton>
            </div>
            <ProjectPreview project={previewProject} large />
            <div className="px-4 py-3 bg-[#1B1C22] border-t border-[#2E3340] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#94A3B8]">{previewProject.techStack.join(' · ')}</span>
              <div className="flex items-center gap-2">
                {previewProject.githubUrl && (
                  <ActionLink href={previewProject.githubUrl} external variant="outline" size="sm">
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </ActionLink>
                )}
                {previewProject.liveUrl && (
                  <ActionLink href={previewProject.liveUrl} external variant="primary" size="sm">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Live</span>
                  </ActionLink>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
