'use client';

import React, { useState, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Tag, X, PlayCircle, ChevronRight } from 'lucide-react';
import { projectsData, type ProjectItem } from '@/app/data/portfolio';
import { ProjectPreview } from '../project-preview';
import { ActionButton, ActionLink } from '../button';
import { SpotlightCard } from '../spotlight-card';

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
  index?: number;
}

export function ProjectCard({
  project,
  onExpandImage,
  expanded: controlledExpanded,
  onToggleExpand,
  index = 0,
}: ProjectCardProps) {
  const [localExpanded, setLocalExpanded] = useState(false);
  const expanded = controlledExpanded ?? localExpanded;
  const handleToggle = onToggleExpand ?? (() => setLocalExpanded((prev) => !prev));

  return (
    <SpotlightCard as="article" interactive index={index} className="p-4">
      <div className="flex flex-col gap-4">
        <div className="space-y-3.5">
          {project.image && (
            <ProjectPreview project={project} onExpandImage={onExpandImage} />
          )}

          <div className="flex items-start justify-between gap-3 pt-0.5">
            <h3 className="text-[16px] font-bold text-theme-text group-hover/card:text-theme-accentBright transition-colors duration-200 leading-snug">
              {project.name}
            </h3>
          </div>

          <p className="text-[14px] text-theme-textMuted leading-relaxed">
            {project.shortDescription}
          </p>

          <div>
            <button
              type="button"
              onClick={handleToggle}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1.5 py-0.5 text-xs font-bold uppercase tracking-[0.07em] text-theme-accent hover:text-theme-accentBright transition-colors"
            >
              <ChevronRight
                aria-hidden="true"
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  expanded ? 'rotate-90' : ''
                }`}
              />
              <span>description</span>
            </button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden mt-2.5 pl-3 border-l border-theme-accent/25 space-y-2 text-[13.5px] text-theme-textMuted leading-relaxed"
                >
                  {project.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-theme-accent shrink-0">→</span>
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
                className="tech-pill inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-theme-surfaceChip border border-theme-border text-[12px] text-theme-textMuted"
              >
                <Tag className="w-2.5 h-2.5 text-theme-accent/75" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3.5 border-t border-theme-borderSubtle flex flex-wrap items-center gap-2">
          {project.liveUrl && (
            <ActionLink href={project.liveUrl} external variant="secondary" size="sm" className="group/btn">
              <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              <span>Live</span>
            </ActionLink>
          )}
          {project.githubUrl && (
            <ActionLink
              href={project.githubUrl}
              external
              variant={project.liveUrl ? 'outline' : 'secondary'}
              size="sm"
              className="group/btn"
            >
              <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              <span>{project.secondaryRepoUrl ? 'Source code' : 'Source code'}</span>
            </ActionLink>
          )}
          {project.secondaryRepoUrl && (
            <ActionLink href={project.secondaryRepoUrl} external variant="outline" size="sm" className="group/btn">
              <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              <span>Backend</span>
            </ActionLink>
          )}
          {project.demoVideoUrl && (
            <ActionLink href={project.demoVideoUrl} external variant="outline" size="sm" className="group/btn">
              <PlayCircle className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:scale-110" />
              <span>Video</span>
            </ActionLink>
          )}
        </div>
      </div>
    </SpotlightCard>
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
            {leftColumnProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx * 2}
                expanded={!!expandedIds[project.id]}
                onToggleExpand={() => toggleExpanded(project.id)}
                onExpandImage={setPreviewProject}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 min-w-0">
            {rightColumnProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx * 2 + 1}
                expanded={!!expandedIds[project.id]}
                onToggleExpand={() => toggleExpanded(project.id)}
                onExpandImage={setPreviewProject}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              expanded={!!expandedIds[project.id]}
              onToggleExpand={() => toggleExpanded(project.id)}
              onExpandImage={setPreviewProject}
            />
          ))}
        </div>
      )}

      <AnimatePresence>
        {previewProject?.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setPreviewProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${previewProject.name} preview`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 6 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-4xl ide-panel border-t-[3px] border-t-theme-accent overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 bg-theme-surface border-b border-theme-border">
                <h3 className="text-sm font-bold text-theme-text truncate">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
