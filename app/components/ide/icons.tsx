'use client';

import React, { useState } from 'react';
import {
  Mail,
  Code2,
  Database,
  Cpu,
  Wrench,
  Layers,
  Server,
} from 'lucide-react';

export function GitHubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function LeetCodeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

export function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function CodeChefIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7.1 18.5h9.8a3.1 3.1 0 0 0 1.55-5.78
        4.65 4.65 0 0 0-4.15-7.15
        4.2 4.2 0 0 0-7.9 1.5
        3.55 3.55 0 0 0 .7 7.05v4.38Z"
        fill="currentColor"
      />
      <path
        d="M7.1 18.5h9.8v2.3H7.1z"
        fill="currentColor"
        opacity=".85"
      />
      <path
        d="M9 11.2c.7-1.2 1.4-1.8 2.2-1.8m3.8 1.8c-.7-1.2-1.4-1.8-2.2-1.8"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlatformIcon({ id, className = 'w-4 h-4' }: { id: string; className?: string }) {
  switch (id) {
    case 'github':
      return <GitHubIcon className={className} />;
    case 'linkedin':
      return <LinkedInIcon className={className} />;
    case 'leetcode':
      return <LeetCodeIcon className={className} />;
    case 'codechef':
      return <CodeChefIcon className={className} />;
    case 'instagram':
      return <InstagramIcon className={className} />;
    case 'email':
    default:
      return <Mail className={className} />;
  }
}

export function CategoryIcon({ id, className = 'w-4 h-4' }: { id: string; className?: string }) {
  switch (id) {
    case 'languages':
      return <Code2 className={className} />;
    case 'frontend':
      return <Layers className={className} />;
    case 'backend':
      return <Server className={className} />;
    case 'databases':
      return <Database className={className} />;
    case 'aiml':
      return <Cpu className={className} />;
    case 'tools':
    default:
      return <Wrench className={className} />;
  }
}

/**
 * Verified official brand icons & favicons stored locally in /public/icons/skills/
 */
const LOCAL_SKILL_ICONS: Record<string, string> = {
  // Languages
  'c++': '/icons/skills/cplusplus.svg',
  cpp: '/icons/skills/cplusplus.svg',
  javascript: '/icons/skills/javascript.svg',
  js: '/icons/skills/javascript.svg',
  typescript: '/icons/skills/typescript.svg',
  ts: '/icons/skills/typescript.svg',
  python: '/icons/skills/python.svg',
  go: '/icons/skills/go.svg',
  golang: '/icons/skills/go.svg',
  sql: '/icons/skills/sql.svg',

  // Frontend
  react: '/icons/skills/react.svg',
  'react.js': '/icons/skills/react.svg',
  reactjs: '/icons/skills/react.svg',
  'next.js': '/icons/skills/nextjs.svg',
  nextjs: '/icons/skills/nextjs.svg',
  vite: '/icons/skills/vite.svg',
  html: '/icons/skills/html5.svg',
  html5: '/icons/skills/html5.svg',
  css: '/icons/skills/css3.svg',
  css3: '/icons/skills/css3.svg',
  'tailwind css': '/icons/skills/tailwindcss.svg',
  tailwindcss: '/icons/skills/tailwindcss.svg',
  tailwind: '/icons/skills/tailwindcss.svg',
  astro: '/icons/skills/astro.svg',
  ejs: '/icons/skills/ejs.svg',

  // Backend
  'node.js': '/icons/skills/nodejs.svg',
  nodejs: '/icons/skills/nodejs.svg',
  node: '/icons/skills/nodejs.svg',
  'express.js': '/icons/skills/express.svg',
  expressjs: '/icons/skills/express.svg',
  express: '/icons/skills/express.svg',
  gofr: '/icons/skills/gofr.png',
  django: '/icons/skills/django.svg',
  fastapi: '/icons/skills/fastapi.svg',
  'rest apis': '/icons/skills/restapi.svg',
  'rest api': '/icons/skills/restapi.svg',
  swagger: '/icons/skills/swagger.svg',
  jwt: '/icons/skills/jwt.png',

  // Databases & Infra
  mongodb: '/icons/skills/mongodb.svg',
  postgresql: '/icons/skills/postgresql.svg',
  postgres: '/icons/skills/postgresql.svg',
  redis: '/icons/skills/redis.svg',
  firebase: '/icons/skills/firebase.svg',
  docker: '/icons/skills/docker.svg',
  linux: '/icons/skills/linux.svg',
  git: '/icons/skills/git.svg',
  'github actions': '/icons/skills/githubactions.svg',

  // AI, ML & Data
  'google adk': '/icons/skills/google-adk.png',
  adk: '/icons/skills/google-adk.png',
  langgraph: '/icons/skills/langgraph.svg',
  langchain: '/icons/skills/langgraph.svg',
  pydantic: '/icons/skills/pydantic.svg',
  'agentic ai': '/icons/skills/agentic-ai.svg',
  prompting: '/icons/skills/prompting.svg',
  'structured data': '/icons/skills/structured-data.svg',
  gemini: '/icons/skills/gemini.svg',
  xgboost: '/icons/skills/xgboost.png',
  'scikit-learn': '/icons/skills/scikitlearn.svg',
  scikitlearn: '/icons/skills/scikitlearn.svg',
  cv: '/icons/skills/opencv.svg',
  opencv: '/icons/skills/opencv.svg',
  tensorflow: '/icons/skills/tensorflow.svg',
  keras: '/icons/skills/keras.svg',
  'u-net': '/icons/skills/keras.svg',
  numpy: '/icons/skills/numpy.svg',
  mapbox: '/icons/skills/mapbox.svg',

  // Tools & Platforms
  'vs code': '/icons/skills/vscode.svg',
  vscode: '/icons/skills/vscode.svg',
  antigravity: '/icons/skills/antigravity.png',
  cursor: '/icons/skills/cursor.png',
  postman: '/icons/skills/postman.svg',
  github: '/icons/skills/github.svg',
  chatgpt: '/icons/skills/chatgpt.svg',
  openai: '/icons/skills/chatgpt.svg',
  'zoho crm': '/icons/skills/zoho.png',
  zoho: '/icons/skills/zoho.png',
};

/**
 * Domain map for automatic Google Favicon lookup when new tech items are added
 */
const FAVICON_DOMAINS: Record<string, string> = {
  supabase: 'supabase.com',
  prisma: 'prisma.io',
  graphql: 'graphql.org',
  rust: 'rust-lang.org',
  kubernetes: 'kubernetes.io',
  aws: 'aws.amazon.com',
  gcp: 'cloud.google.com',
  azure: 'azure.microsoft.com',
  vercel: 'vercel.com',
  cloudflare: 'cloudflare.com',
  kafka: 'kafka.apache.org',
  pytorch: 'pytorch.org',
  anthropic: 'anthropic.com',
  claude: 'claude.ai',
  groq: 'groq.com',
  streamlit: 'streamlit.io',
  pinecone: 'pinecone.io',
  qdrant: 'qdrant.tech',
};

function getSkillIconCandidates(name: string): string[] {
  const normalized = name.trim().toLowerCase();
  const candidates: string[] = [];

  if (LOCAL_SKILL_ICONS[normalized]) {
    candidates.push(LOCAL_SKILL_ICONS[normalized]);
  }

  if (FAVICON_DOMAINS[normalized]) {
    candidates.push(`https://www.google.com/s2/favicons?domain=${FAVICON_DOMAINS[normalized]}&sz=64`);
  }

  const slug = normalized.replace(/[^a-z0-9]/g, '');
  if (slug) {
    candidates.push(`https://cdn.simpleicons.org/${slug}`);
    candidates.push(`https://www.google.com/s2/favicons?domain=${slug}.com&sz=64`);
  }

  return candidates;
}

export function SkillMiniIcon({
  name,
  className = 'w-3.5 h-3.5',
}: {
  name: string;
  className?: string;
}) {
  const candidates = getSkillIconCandidates(name);
  const [candidateIdx, setCandidateIdx] = useState(0);

  const src = candidates[candidateIdx];

  if (!src) {
    return (
      <span
        aria-hidden="true"
        className={`${className} inline-flex items-center justify-center rounded-[2px] bg-theme-surfaceTint text-[8px] font-bold uppercase text-theme-accent shrink-0`}
      >
        {name.trim().charAt(0) || '•'}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      onError={() => setCandidateIdx((prev) => prev + 1)}
      className={`${className} object-contain shrink-0 select-none`}
    />
  );
}
