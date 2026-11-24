'use client';

import React, { useState, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Tag, X, PlayCircle } from 'lucide-react';
import { projectsData, type ProjectItem } from '@/app/data/portfolio';
import { ProjectPreview } from '../project-preview';
import { ActionButton, ActionLink } from '../button';

const XL_MEDIA_QUERY = '(min-width: 1280px)';

function subscribeXl(callback: () => void) {
  const mql = window.matchMedia(XL_MEDIA_QUERY);
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getXlSnapshot() {
  return window.matchMedia(XL_MEDIA_QUERY).matches;
}

function getXlServerSnapshot() {
  return false;
}

interface ProjectCardProps {
  project: ProjectItem;
  onExpandImage: (project: ProjectItem) => void;
  expanded?: boolean;
  onToggleExpand?: () => void;
}

export function ProjectCard({
  project,
  onExpandImage,
  expanded: controlledExpanded,
  onToggleExpand,
}: ProjectCardProps) {
  const [localExpanded, setLocalExpanded] = useState(false);
  const expanded = controlledExpanded ?? localExpanded;
  const handleToggle = onToggleExpand ?? (() => setLocalExpanded((prev) => !prev));

  return (
    <article className="bg-[#12172e91] border border-[#2C3242] hover:border-[#3D4760] transition-colors p-4 flex flex-col gap-4 shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
      <div className="space-y-3.5">
        {project.image && (
          <ProjectPreview project={project} onExpandImage={onExpandImage} />
        )}

        <div className="flex items-start justify-between gap-3 pt-0.5">
          <h3 className="text-[16px] font-bold text-[#E6EDF3] leading-snug">
            {project.name}
          </h3>
        </div>

        <p className="text-[14px] text-[#94A3B8] leading-relaxed">
          {project.shortDescription}
        </p>

        <div>
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.07em] text-[#58B4EE] hover:text-[#7CC4FF] transition-colors"
          >
            <span className="text-[10px]" aria-hidden="true">
              {expanded ? '▼' : '▶'}
            </span>
            <span>description</span>
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="overflow-hidden mt-2.5 space-y-2 text-[13.5px] text-[#94A3B8] leading-relaxed"
              >
                {project.description.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#58B4EE] shrink-0">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Compact Tag Pills */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#1B1E28] border border-[#2C3242] text-[12px] text-[#94A3B8]"
            >
              <Tag className="w-2.5 h-2.5 text-[#58B4EE]/70" />
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="pt-3.5 border-t border-[#252A38] flex flex-wrap items-center gap-2">
        {project.liveUrl && (
          <ActionLink href={project.liveUrl} external variant="secondary" size="sm">
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live</span>
          </ActionLink>
        )}
        {project.githubUrl && (
          <ActionLink
            href={project.githubUrl}
            external
            variant={project.liveUrl ? 'outline' : 'secondary'}
            size="sm"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>{project.secondaryRepoUrl ? 'Source code' : 'Source code'}</span>
          </ActionLink>
        )}
        {project.secondaryRepoUrl && (
          <ActionLink href={project.secondaryRepoUrl} external variant="outline" size="sm">
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Backend</span>
          </ActionLink>
        )}
        {project.demoVideoUrl && (
          <ActionLink href={project.demoVideoUrl} external variant="outline" size="sm">
            <PlayCircle className="w-3.5 h-3.5" />
            <span>Video</span>
          </ActionLink>
        )}
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [previewProject, setPreviewProject] = useState<ProjectItem | null>(null);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const isTwoCol = useSyncExternalStore(
    subscribeXl,
    getXlSnapshot,
    getXlServerSnapshot
  );

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const leftColumnProjects = projectsData.filter((_, idx) => idx % 2 === 0);
  const rightColumnProjects = projectsData.filter((_, idx) => idx % 2 === 1);

  return (
    <div className="space-y-5">
      {isTwoCol ? (
        <div className="grid grid-cols-2 gap-4 items-start">
          <div className="flex flex-col gap-4 min-w-0">
            {leftColumnProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                expanded={!!expandedIds[project.id]}
                onToggleExpand={() => toggleExpanded(project.id)}
                onExpandImage={setPreviewProject}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 min-w-0">
            {rightColumnProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                expanded={!!expandedIds[project.id]}
                onToggleExpand={() => toggleExpanded(project.id)}
                onExpandImage={setPreviewProject}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              expanded={!!expandedIds[project.id]}
              onToggleExpand={() => toggleExpanded(project.id)}
              onExpandImage={setPreviewProject}
            />
          ))}
        </div>
      )}

      {previewProject?.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-[2px]"
          onClick={() => setPreviewProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${previewProject.name} preview`}
        >
          <div
            className="w-full max-w-4xl ide-panel border-t-[3px] border-t-[#58B4EE] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-[#14161D] border-b border-[#2C3242]">
              <h3 className="text-sm font-bold text-[#E6EDF3] truncate">
                {previewProject.name}
              </h3>
              <ActionButton
                variant="outline"
                size="sm"
                onClick={() => setPreviewProject(null)}
                aria-label="Close preview"
                className="!p-1.5"
              >
                <X className="w-4 h-4" />
              </ActionButton>
            </div>
            <div className="p-4">
              <ProjectPreview project={previewProject} large />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
