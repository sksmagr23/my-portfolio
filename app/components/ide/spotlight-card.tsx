'use client';

import React, { useCallback, useRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type CardTag = 'article' | 'section' | 'div';

interface SpotlightCardProps {
  as?: CardTag;
  interactive?: boolean;
  index?: number;
  animateEntrance?: boolean;
  className?: string;
  children: React.ReactNode;
}

const MOTION_TAGS = {
  article: motion.article,
  section: motion.section,
  div: motion.div,
} as const;

export function SpotlightCard({
  as = 'div',
  interactive = true,
  index = 0,
  animateEntrance = true,
  className = '',
  children,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }, []);

  const Component = MOTION_TAGS[as];
  const modeClass = interactive ? 'portfolio-card-interactive' : 'portfolio-card-static';

  return (
    <Component
      ref={cardRef as React.Ref<never>}
      onMouseMove={handleMouseMove}
      initial={animateEntrance ? { opacity: 0, y: 10 } : false}
      animate={animateEntrance ? { opacity: 1, y: 0 } : undefined}
      transition={
        animateEntrance
          ? {
              duration: 0.26,
              delay: Math.min(index * 0.045, 0.25),
              ease: [0.22, 1, 0.36, 1],
            }
          : undefined
      }
      className={`portfolio-card ${modeClass} group/card ${className}`.trim()}
    >
      <div aria-hidden="true" className="portfolio-card-spotlight" />
      <div className="relative z-10 flex flex-col flex-1 min-w-0">{children}</div>
    </Component>
  );
}

interface SpotlightLinkCardProps extends Omit<HTMLMotionProps<'a'>, 'children'> {
  index?: number;
  animateEntrance?: boolean;
  children: React.ReactNode;
}

export function SpotlightLinkCard({
  index = 0,
  animateEntrance = true,
  className = '',
  children,
  onMouseMove,
  ...props
}: SpotlightLinkCardProps) {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const el = linkRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }
      onMouseMove?.(e);
    },
    [onMouseMove]
  );

  return (
    <motion.a
      ref={linkRef}
      onMouseMove={handleMouseMove}
      initial={animateEntrance ? { opacity: 0, y: 10 } : false}
      animate={animateEntrance ? { opacity: 1, y: 0 } : undefined}
      transition={
        animateEntrance
          ? {
              duration: 0.26,
              delay: Math.min(index * 0.045, 0.25),
              ease: [0.22, 1, 0.36, 1],
            }
          : undefined
      }
      className={`portfolio-card portfolio-card-interactive group/card block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-theme-accent ${className}`.trim()}
      {...props}
    >
      <div aria-hidden="true" className="portfolio-card-spotlight" />
      <div className="relative z-10">{children}</div>
    </motion.a>
  );
}
