export type TabId =
  | 'about'
  | 'projects'
  | 'experience'
  | 'achievements'
  | 'leadership'
  | 'contact';

export interface WorkspaceTab {
  id: TabId;
  fileName: string;
  prefix: 'TS' | 'MD' | 'TSX';
}

export interface ProjectItem {
  id: string;
  name: string;
  shortDescription: string;
  featured?: boolean;
  techStack: string[];
  description: string[];
  githubUrl: string | null;
  secondaryRepoUrl?: string | null;
  liveUrl: string | null;
  demoVideoUrl: string | null;
  image: string | null;
  previewKind?: 'codementor' | 'url-shortener' | 'querypilot' | 'stocking';
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  highlightBadge: string;
  logoText: string;
  responsibilities: string[];
  techStack: string[];
  link?: string;
}

export interface AchievementItem {
  id: string;
  category: 'Key Highlights' | 'Open Source';
  title: string;
  organization: string;
  highlight: string;
  description: string;
  link?: string;
}

export interface LeadershipItem {
  id: string;
  organization: string;
  unit?: string;
  roleLabel: string;
  duration: string;
  responsibilities: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface SocialLinkItem {
  id: 'github' | 'linkedin' | 'email' | 'leetcode' | 'codechef' | 'instagram';
  name: string;
  url: string;
}

export const workspaceTabs: WorkspaceTab[] = [
  { id: 'about', fileName: 'about.md', prefix: 'MD' },
  { id: 'projects', fileName: 'projects.md', prefix: 'MD' },
  { id: 'experience', fileName: 'experience.md', prefix: 'MD' },
  { id: 'achievements', fileName: 'achievements.md', prefix: 'MD' },
  { id: 'leadership', fileName: 'leadership.md', prefix: 'MD' },
  { id: 'contact', fileName: 'contact.md', prefix: 'MD' },
];

export const personalInfo = {
  name: 'Saksham Agrawal',
  githubUsername: 'sksmagr23',
  rolesLine: 'SDE | Agentic AI | FDE',
  roles: [
    'Software Engineer',
    'Full-Stack & Backend',
    'Agentic AI Engineer',
    'FDE',
  ],
  location: 'Varanasi, India',
  tagline: 'Building systems. Solving problems. Shipping impact.',
  intro:
    'Final-year student at IIT (BHU) Varanasi building scalable backend systems, full-stack web applications, and agentic AI workflows. Passionate about distributed systems, open source, and shipping reliable software.',
  availability: {
    status: 'Open to Work',
    detail: 'SDE · Backend · Agentic AI · FDE',
  },
  avatar: '/profile.png',
  resumeUrl: '/Saksham_Agrawal_Resume.pdf',
  email: 'sakshamag34@gmail.com',
  sidebarCoreSkills: [
    'C++',
    'JavaScript',
    'Python',
    'Next.js',
    'React',
    'FastAPI',
    'Node.js',
    'PostgreSQL',
    'LangGraph',
    'MongoDB',
    'Docker'
  ],
  contact: {
    email: 'sakshamag34@gmail.com',
    github: 'https://github.com/sksmagr23',
    linkedin: 'https://linkedin.com/in/saksham-agrawal-a10387286',
    instagram: 'https://www.instagram.com/sksmagr18',
    leetcode: 'https://leetcode.com/algofire24',
    codechef: 'https://www.codechef.com/users/algofire24',
  },
};

export const socialLinks: SocialLinkItem[] = [
  { id: 'email', name: 'Email', url: 'mailto:sakshamag34@gmail.com' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/sksmagr23' },
  { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/saksham-agrawal-a10387286' },
  { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/sksmagr18' },
  { id: 'leetcode', name: 'LeetCode', url: 'https://leetcode.com/algofire24' },
  { id: 'codechef', name: 'CodeChef', url: 'https://www.codechef.com/users/algofire24' },
];

export const codingProfiles = {
  leetcode: {
    username: 'algofire24',
    url: 'https://leetcode.com/algofire24',
    contestRating: 1909,
    contestTopPercentage: 4.45,
    badge: 'Knight',
    badges: ['Knight', '365 Days Badge', 'Top SQL 50'],
  },
  codechef: {
    username: 'algofire24',
    url: 'https://www.codechef.com/users/algofire24',
    rating: 1488,
    stars: '2-Star',
    dsaRating: 1888,
    badges: ['2-Star Coder', 'DSA Rating 1888'],
  },
};

export const educationData = [
  {
    id: 'iitbhu',
    institution: 'Indian Institute of Technology (BHU), Varanasi',
    degree: 'B.Tech in Chemical Engineering (2023 – 2027)',
    status: 'Final Year',
  },
  {
    id: 'school',
    institution: 'DALIMSS Sunbeam School, Varanasi',
    degree: 'CBSE (Science Stream)',
    status: '',
  },
];

export const currentlyExploring = [
  'Backend engineering',
  'Distributed systems',
  'Scalable architectures',
  'AI agents & agentic workflows',
  'Open-source development',
];

export const Extracuricular = ['Gaming', 'Cricket', 'Exploring new technologies'];

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    skills: ['C++', 'JavaScript', 'TypeScript', 'Python', 'Go', 'SQL'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    skills: ['React.js', 'Next.js', 'Vite', 'HTML', 'CSS', 'Tailwind CSS', 'Astro'],
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'GoFr', 'Django', 'FastAPI', 'REST APIs', ],
  },
  {
    id: 'databases',
    name: 'Databases & Infra',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'Redis',
      'Firebase',
      'Docker',
      'Linux',
      'Git',
      'GitHub Actions',
    ],
  },
  {
    id: 'aiml',
    name: 'AI Engineering',
    skills: [
      'Google ADK',
      'LangGraph',
      'Agentic AI',
      'LLM Integration',
      'Prompting',
      'Pydantic',
      'Structured Data',
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
    skills: ['VS Code', 'Antigravity', 'Cursor', 'Postman', 'GitHub', 'ChatGPT'],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'querypilot',
    name: 'QueryPilot',
    shortDescription:
      'Agentic Text-to-SQL analytics platform with SQLGlot AST guardrails, EXPLAIN cost gates, and HITL approvals.',
    featured: true,
    techStack: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'React', 'TypeScript'],
    description: [
      'Schema-grounded natural-language to SQL generation with bounded self-correction retries (99.05% accuracy across 105 tests).',
      'Blocks destructive statements via SQLGlot AST inspection and executes exclusively on a read-only PostgreSQL role.',
      'Estimates query cost using EXPLAIN and pauses expensive scans for human-in-the-loop approval.',
    ],
    githubUrl: 'https://github.com/sksmagr23/QueryPilot',
    liveUrl: null,
    demoVideoUrl: null,
    image: null,
    previewKind: 'querypilot',
  },
  {
    id: 'codementor-ai',
    name: 'CodeMentor AI',
    shortDescription:
      'Agentic DSA assistant that diagnoses C++ bugs, surfaces failing counterexamples, and renders dry-run traces.',
    featured: true,
    techStack: ['TypeScript', 'React', 'FastAPI', 'Google ADK', 'Gemini', 'MongoDB'],
    description: [
      'Analyzes problem statements and submitted C++ solutions to pinpoint logical errors and edge-case bugs.',
      'Explains root causes, generates corrected solutions, and compares complexity against optimal approaches.',
      'Session-based conversational context powered by Google ADK, CopilotKit dynamic UI, and visual dry-run traces.',
    ],
    githubUrl: 'https://github.com/sksmagr23/CodeMentor-AI',
    liveUrl: null,
    demoVideoUrl: null,
    image: null,
    previewKind: 'codementor',
  },
  {
    id: 'url-shortener',
    name: 'URL Shortener with Insights',
    shortDescription:
      'GoFr URL management microservice with versioning, rollback, QR generation, Redis caching, and click analytics.',
    featured: true,
    techStack: ['Go', 'GoFr', 'MongoDB', 'Redis', 'JWT', 'Swagger'],
    description: [
      'Clean Handler → Service → Store architecture with branded short links, custom aliases, expiration, and rollback.',
      'Redis cache-aside redirect resolution with automatic invalidation and resilient MongoDB fallback.',
      'Tracks unique visitors, device/browser/OS, referrers, geolocation, and secures endpoints via JWT + API keys.',
    ],
    githubUrl: 'https://github.com/sksmagr23/url-shortener',
    liveUrl: null,
    demoVideoUrl: null,
    image: null,
    previewKind: 'url-shortener',
  },
  {
    id: 'renewable-energy-forecasting',
    name: 'Renewable Energy Forecasting',
    shortDescription:
      'AI forecasting platform for solar, wind, and hydro output using a GRU + XGBoost ensemble (R² = 0.7359).',
    featured: true,
    techStack: ['Python', 'Recharts', 'XGBoost', 'Next.js', 'FastAPI', 'Mapbox'],
    description: [
      'Secured 2nd position at Hack It Out, Technex ’25 (IIT BHU) using historical weather data and ensemble modeling.',
      'Interactive Mapbox geospatial selection paired with Recharts forecast dashboards and Groq AI recommendations.',
      'FastAPI-based ML inference backend serving real-time location forecasts to the Next.js web app.',
    ],
    githubUrl: 'https://github.com/sksmagr23/shannon_frontend',
    liveUrl: 'https://shannonntpc.vercel.app/',
    demoVideoUrl: null,
    image: '/projects/2.png',
  },
  {
    id: 'flood-detection-unet',
    name: 'Flood Detection using U-Net',
    shortDescription:
      'Sentinel-1 SAR satellite imagery segmentation pipeline identifying flood regions through cloud cover.',
    techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'U-Net'],
    description: [
      'Processes all-weather Sentinel-1 SAR imagery using dual VV and VH polarization channels from ETCI-2021.',
      'Trained a TensorFlow/Keras U-Net semantic segmentation model for pixel-level binary flood mask generation.',
    ],
    githubUrl: 'https://github.com/sksmagr23/Flood-_mapping_ML',
    liveUrl: null,
    demoVideoUrl: null,
    image: '/projects/flood-sample.png',
  },
  {
    id: 'codeexchange',
    name: 'CodeExchange',
    shortDescription:
      'Stack Overflow-inspired developer Q&A platform with JWT & Google OAuth, Markdown, and Stack Exchange API search.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'EJS', 'Tailwind CSS'],
    description: [
      'Full CRUD Q&A workflows with JWT + Google OAuth authentication, Markdown posts, tags, and answer reactions.',
      'Integrated Stack Exchange API to search live Stack Overflow discussions alongside community posts.',
    ],
    githubUrl: 'https://github.com/sksmagr23/CodeExchange',
    liveUrl: 'https://codeexchange-3s2g.onrender.com/',
    demoVideoUrl: null,
    image: '/projects/1.png',
  },
  {
    id: 'django-restaurant',
    name: 'Django Restaurant Management',
    shortDescription:
      'Full-stack restaurant ordering web app with menu search, live cart management, checkout, and order history.',
    techStack: ['Python', 'Django', 'PostgreSQL'],
    description: [
      'Authenticated menu browsing with dish detail popups, live database-backed cart updates, and checkout summaries.',
      'Account dashboard tracking saved delivery description and past order history.',
    ],
    githubUrl: 'https://github.com/sksmagr23/restaurant-service',
    liveUrl: null,
    demoVideoUrl: null,
    image: '/projects/restaurant-service.jpg',
  },
  {
    id: 'microbubble-analyzer',
    name: 'Microbubble Stability Analyzer',
    shortDescription:
      'Computer vision and kinetic modeling platform characterizing emulsion droplet morphology and stability.',
    techStack: ['Python', 'Scikit-learn', 'CV', 'JS'],
    description: [
      'Marker-controlled Watershed segmentation for automated droplet sizing and Polydispersity Index evaluation.',
      'First-order decay kinetic modeling and ML micrograph synthesis across formulation parameters.',
    ],
    githubUrl: 'https://github.com/sksmagr23/Microbubble-analyzer',
    liveUrl: 'https://microbubble-analyzer.vercel.app',
    demoVideoUrl: null,
    image: '/projects/microbubble.png',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'irisidea',
    company: 'Irisidea',
    role: 'Software Developer Intern',
    duration: 'May 2026 – Aug 2026',
    highlightBadge: 'Agentic CRM',
    logoText: 'IR',
    responsibilities: [
      'Built agentic CRM workflows using Pydantic and Google ADK for context-aware customer management.',
      'Integrated Zoho CRM with agent tools for lead CRUD, email sending, and one-time & recurring email job scheduling.',
      'Engineered dynamic UI rendering using structured data for intent-driven agent interactions and CRM analytics.',
    ],
    techStack: ['FastAPI', 'Google ADK', 'Pydantic', 'Zoho CRM', 'Agentic AI'],
  },
  {
    id: 'gofr-soc',
    company: 'GoFr Summer of Code 2025',
    role: 'Template Track Contributor',
    duration: 'June 2025 – Oct 2025',
    highlightBadge: 'Open Source',
    logoText: 'GF',
    responsibilities: [
      'Built a GoFr URL shortening & tracking service supporting aliases, expiration, versioning, rollback, and QR codes.',
      'Implemented idempotent link creation with Redis caching, invalidation, and resilient MongoDB fallback.',
      'Added granular click analytics, JWT + API-key authentication, and OpenAPI/Swagger documentation.',
    ],
    techStack: ['Go', 'GoFr', 'MongoDB', 'Redis', 'JWT', 'Swagger'],
    link: 'https://github.com/sksmagr23/url-shortener',
  },
  {
    id: 'mittal-alliance',
    company: 'Mittal Alliance Industries Pvt. Ltd.',
    role: 'Full-Stack Developer Intern',
    duration: 'April 2025 – May 2025',
    highlightBadge: 'Full-Stack',
    logoText: 'MA',
    responsibilities: [
      'Built responsive interactive UI components using React, HTML, CSS, and JavaScript, improving UX and accessibility.',
      'Integrated backend REST APIs for seamless frontend-backend data flows.',
    ],
    techStack: ['React.js', 'JavaScript', 'REST APIs'],
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'technex-hackitout',
    category: 'Key Highlights',
    title: '2nd Position — Hack It Out, Technex ’25',
    organization: 'IIT (BHU) Varanasi · Team Shannon',
    highlight: 'PS by NTPC',
    description:
      'Built an AI renewable energy forecasting platform using GRU + XGBoost (R² = 0.7359) and Mapbox geospatial dashboards.',
    link: 'https://github.com/sksmagr23/shannon_frontend',
  },
  {
    id: 'flipkart-grid',
    category: 'Key Highlights',
    title: 'National Semi-Finalist — Flipkart GRiD 8.0',
    organization: 'Flipkart | SDE Track',
    highlight: 'Semi-Finalist',
    description: ''
  },
  {
    id: 'aissce-topper',
    category: 'Key Highlights',
    title: 'Science Stream Topper — AISSCE 2023',
    organization: 'DALIMSS Sunbeam School, Varanasi',
    highlight: 'Achievers Award',
    description:
      'Awarded Science Stream Topper in Class XII CBSE boards with Subject Topper honors in Chemistry & Mathematics.',
  },
  {
    id: 'gofr-soc-25',
    category: 'Key Highlights',
    title: 'GoFr Summer of Code 2025',
    organization: 'GoFr | Templates Track',
    highlight: 'Open Source',
    description:
      'Selected among top contributors in the Templates Track to deliver an observable GoFr URL management service.',
    link: 'https://github.com/sksmagr23/url-shortener',
  }
];

export const leadershipData: LeadershipItem[] = [
  {
    id: 'cops-sdg',
    organization: 'Club of Programmers (COPS), IIT BHU',
    unit: 'Software Development Guild',
    roleLabel: 'Technical Contributor · Event Coordinator',
    duration: 'July 2024 – Present',
    responsibilities: [
      'Contributed to club open-source projects: Multiplayer UNO (MERN), COPS Website (React), Institute Grievance Portal, and Digital Permission System.',
      'Helped organize Freshers’ Orientation and conducted hands-on Git & GitHub workshops.',
      'Mentored students and evaluated projects during DebugIt COPS Week ’25 and Summer of Code ’25 in the web track.',
    ],
  },
  {
    id: 'tnp-iitbhu',
    organization: 'TPC, IIT BHU',
    roleLabel: 'Training and Placement Tech Representative',
    duration: 'April 2025 – May 2026',
    responsibilities: [
      'Built a student willingness system for company opportunities, enabling interest submission and retrieval',
      'Developed REST APIs for willingness management with structured validation and persistent storage'
    ],
  },
  {
    id: 'ecell-iitbhu',
    organization: 'E-Cell, IIT BHU',
    roleLabel: 'Technical Associate',
    duration: 'July 2024 – April 2025',
    responsibilities: [
      'Built interactive UIs and Apis for the official website and Campus Ambassador Portal using Next.js',
      'Integrated dynamic forms to improve user interaction and data handling with Firebase.',
      'Added Framer Motion animations and managed web updates for E-Summit’25 technical execution.'
    ],
  },
  {
    id: 'sochem-iitbhu',
    organization: 'Society of Chemical Engineers (SoChem), IIT (BHU)',
    roleLabel: 'Technical Executive · Osmoze ’25',
    duration: 'July 2024 – April 2025',
    responsibilities: [
      'Led Next.js backend development for Osmoze (annual fest) site, integrating  Firebase services & alumni data',
      'Built seamless user onboarding and event registration flow (100+ entries) with real-time updates'
    ],
  },
];

export const contactContent = {
  heading: 'Contact me',
  subtitle:
    'Reach out for collaborations or just to say hi!. Feel free to drop me a message, and I’ll get back to you as soon as possible.',
};
