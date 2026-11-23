
export type TabId =
  | 'about'
  | 'projects'
  | 'experience'
  | 'achievements'
  | 'leadership'
  | 'skills'
  | 'contact';

export interface WorkspaceTab {
  id: TabId;
  fileName: string;
  label: string;
  ext: 'ts' | 'md' | 'json' | 'tsx';
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  category: 'AI / ML' | 'Backend' | 'Full-Stack';
  featured?: boolean;
  badge?: string;
  architecture?: string;
  metrics?: string;
  techStack: string[];
  features: string[];
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
  type: 'Internship' | 'Open Source';
  duration: string;
  logoText: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  link?: string;
}

export interface AchievementItem {
  id: string;
  category: 'Hackathons & Competitions' | 'Open Source' | 'Competitive Programming';
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
  roles: string[];
  duration: string;
  responsibilities: string[];
  highlights?: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  jsonKey: string;
  skills: string[];
}

export interface SocialLinkItem {
  id: 'github' | 'linkedin' | 'leetcode' | 'codechef' | 'gfg' | 'instagram' | 'terminal';
  name: string;
  handle: string;
  url: string;
}


export const workspaceTabs: WorkspaceTab[] = [
  { id: 'about', fileName: 'about.ts', label: 'About', ext: 'ts' },
  { id: 'projects', fileName: 'projects.md', label: 'Projects', ext: 'md' },
  { id: 'experience', fileName: 'experience.md', label: 'Experience', ext: 'md' },
  { id: 'achievements', fileName: 'achievements.md', label: 'Achievements', ext: 'md' },
  { id: 'leadership', fileName: 'leadership.md', label: 'Leadership', ext: 'md' },
  { id: 'skills', fileName: 'skills.json', label: 'Skills', ext: 'json' },
  { id: 'contact', fileName: 'contact.tsx', label: 'Contact', ext: 'tsx' },
];


export const personalInfo = {
  name: 'Saksham Agrawal',
  githubUsername: 'sksmagr23',
  roles: [
    'Software Engineer',
    'Full-Stack & Backend',
    'Agentic AI Engineer',
    'FDE',
  ],
  designation:
    'Software Engineer · Full-Stack & Backend · Agentic AI Engineer · FDE',
  shortRole: 'SWE · Agentic AI · FDE',
  educationShort: 'B.Tech, IIT (BHU) Varanasi',
  location: 'Varanasi, India',
  tagline: 'Building systems. Solving problems. Shipping impact.',
  intro:
    'I am a software engineer passionate about building scalable backend systems, full-stack applications, and intelligent agentic software solutions. I enjoy solving challenging problems, contributing to open source, and engineering products that solve real-world problems.',
  extendedBio: [
    'As a final-year B.Tech student at IIT (BHU) Varanasi, I focus on engineering reliable backend architectures, full-stack web platforms, and production agentic AI workflows that bridge research and customer impact.',
    'My work spans distributed backend services in Go and Node.js, schema-grounded AI agents with Google ADK and LangGraph, and data-intensive full-stack interfaces in TypeScript, React, and Next.js. Across competitive programming and 100+ open-source pull requests, I prioritize clean abstractions, database safety, observability, and maintainable code.',
  ],
  availability: {
    status: 'Open to Work',
    detail: 'SWE · Backend · Agentic AI · FDE Roles',
  },
  avatar: '/profile.png',
  resumeUrl: '/Saksham_Agrawal_Resume.pdf',
  resumeLabel: 'View Resume',
  email: 'sakshamag34@gmail.com',
  sidebarCoreStack: [
    'C++',
    'Go',
    'JavaScript',
    'Python',
    'Next.js',
    'FastAPI',
    'MongoDB',
    'Google ADK',
    'PostgreSQL',
    'Redis',
    'LangGraph',
  ],
  contact: {
    email: 'sakshamag34@gmail.com',
    github: 'https://github.com/sksmagr23',
    linkedin: 'https://linkedin.com/in/saksham-agrawal-a10387286',
    portfolio: 'https://portfolio-sksm.vercel.app',
    terminalPortfolio: 'https://sksm-terminal.vercel.app',
    leetcode: 'https://leetcode.com/algofire24',
    codechef: 'https://www.codechef.com/users/algofire24',
    gfg: 'https://www.geeksforgeeks.org/user/algofire24/',
    instagram: 'https://www.instagram.com/sksmagr18',
  },
};

export const socialLinks: SocialLinkItem[] = [
  {
    id: 'github',
    name: 'GitHub',
    handle: '@sksmagr23',
    url: 'https://github.com/sksmagr23',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'saksham-agrawal',
    url: 'https://linkedin.com/in/saksham-agrawal-a10387286',
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    handle: 'algofire24',
    url: 'https://leetcode.com/algofire24',
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    handle: 'algofire24',
    url: 'https://www.codechef.com/users/algofire24',
  },
  {
    id: 'gfg',
    name: 'GFG',
    handle: 'algofire24',
    url: 'https://www.geeksforgeeks.org/user/algofire24/',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@sksmagr18',
    url: 'https://www.instagram.com/sksmagr18',
  },
  {
    id: 'terminal',
    name: 'CLI Site',
    handle: 'sksm-terminal',
    url: 'https://sksm-terminal.vercel.app',
  },
];

export const codingProfiles = {
  leetcode: {
    username: 'algofire24',
    url: 'https://leetcode.com/algofire24',
    totalSolved: 813,
    easySolved: 305,
    mediumSolved: 434,
    hardSolved: 74,
    ranking: 67694,
    contestRating: 1909,
    contestGlobalRanking: 38597,
    contestTopPercentage: 4.45,
    attendedContests: 16,
    badge: 'Knight',
  },
  codechef: {
    username: 'algofire24',
    url: 'https://www.codechef.com/users/algofire24',
    rating: 1488,
    stars: '2-Star',
    solved: 670,
    dsaRating: 1888,
  },
  gfg: {
    username: 'algofire24',
    url: 'https://www.geeksforgeeks.org/user/algofire24/',
    solved: 255,
    badgesLabel: 'Knight · 365 Days · Top SQL 50',
  },
};

export const keyStats = [
  {
    id: 'prs',
    value: '100+',
    label: 'Open-Source PRs',
    sublabel: 'GoFr, COPS & community repos',
  },
  {
    id: 'problems',
    value: '1,738+',
    label: 'Problems Solved',
    sublabel: 'LeetCode · CodeChef · GFG',
  },
  {
    id: 'leetcode',
    value: '1909',
    label: 'LeetCode Knight',
    sublabel: 'Top 4.45% · 813 solved',
  },
  {
    id: 'selections',
    value: '2× OSS',
    label: 'OSS Selections',
    sublabel: 'GoFr SOC ’25 & GSSoC ’25',
  },
];

export const educationData = [
  {
    id: 'iitbhu',
    institution: 'Indian Institute of Technology (BHU), Varanasi',
    degree: 'Bachelor of Technology (B.Tech)',
    branch: 'Chemical Engineering',
    status: 'Final Year',
    highlights: [
      'Technical Contributor & Event Coordinator — Software Development Guild, COPS IIT (BHU)',
      'Training and Placement Tech Representative — T&P Cell, IIT (BHU)',
    ],
  },
  {
    id: 'school',
    institution: 'DALIMSS Sunbeam School, Varanasi',
    degree: 'Higher Secondary & Intermediate (CBSE)',
    branch: 'Science Stream',
    status: 'AISSCE 2023',
    highlights: [
      'Science Stream Topper — AISSCE 2023 Achievers Award',
      'Subject Topper in Chemistry & Mathematics',
    ],
  },
];

export const currentlyExploring = [
  'Backend engineering',
  'Distributed systems',
  'Scalable architectures',
  'AI agents & agentic workflows',
  'Forward deployed engineering',
  'System design',
  'Open-source development',
];

export const beyondCoding = [
  { label: 'Gaming', detail: 'Strategy & competitive multiplayer sessions' },
  { label: 'Cricket', detail: 'Playing on campus & following international tournaments' },
  { label: 'New Technologies', detail: 'Experimenting with AI tooling, developer frameworks & systems' },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    jsonKey: 'programming_languages',
    skills: ['C++', 'JavaScript', 'TypeScript', 'Python', 'Go', 'Java', 'SQL'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    jsonKey: 'frontend',
    skills: ['React.js', 'Next.js', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS', 'Ant Design'],
  },
  {
    id: 'backend',
    name: 'Backend',
    jsonKey: 'backend',
    skills: ['Node.js', 'Express.js', 'GoFr', 'Django', 'FastAPI', 'REST APIs', 'WebSockets'],
  },
  {
    id: 'databases',
    name: 'Databases & Infrastructure',
    jsonKey: 'databases_and_infrastructure',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'Redis',
      'Firebase',
      'Supabase',
      'Prisma',
      'Docker',
      'Apache Kafka',
      'Linux',
      'Git',
      'GitHub Actions',
    ],
  },
  {
    id: 'aiml',
    name: 'AI / Machine Learning',
    jsonKey: 'ai_and_ml',
    skills: [
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'GRU',
      'XGBoost',
      'U-Net',
      'Google ADK',
      'LangGraph',
      'Agentic AI',
      'LLM Integration',
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
    jsonKey: 'tools',
    skills: ['VS Code', 'Antigravity', 'Cursor', 'Postman', 'Figma', 'Git', 'GitHub'],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'codementor-ai',
    name: 'CodeMentor AI',
    tagline: 'Agentic DSA Pair Programmer & Algorithm Visualizer',
    shortDescription:
      'AI-powered coding assistant and code analysis platform that diagnoses C++ bugs, generates failing counterexamples, and renders visual dry-run traces.',
    detailedDescription:
      'CodeMentor AI combines an agentic planner built with Google ADK, FastAPI, and CopilotKit-inspired dynamic UI generation to act as an interactive DSA mentor. Users paste problem statements or code into an in-place Monaco editor; specialized tools dissect algorithmic patterns, pinpoint logical and boundary bugs, generate corrected solutions, compare asymptotic complexities, and synthesize step-by-step dry-run diagrams inside persistent multi-session workspaces.',
    category: 'AI / ML',
    featured: true,
    badge: 'Agentic AI',
    architecture: 'Planner Agent → 10 Specialized DSA Tools → Structured UI Registry',
    techStack: [
      'TypeScript',
      'React',
      'Vite',
      'FastAPI',
      'Google ADK',
      'CopilotKit',
      'MongoDB',
      'Pydantic',
      'Tailwind CSS',
    ],
    features: [
      'Understands problem statements, intended approaches, and submitted C++ solutions',
      'Identifies logical errors, off-by-one bugs, and concrete failing counterexamples',
      'Explains root causes, generates corrected solutions, and recommends optimal approaches',
      'Conversational AI experience with session-based context and dynamic action chips',
      'On-demand visual dry-run execution traces and dual-pane code/chat workspace',
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
    tagline: 'High-Performance GoFr URL Management & Analytics Service',
    shortDescription:
      'GoFr-based URL management microservice featuring branded aliases, link versioning & rollback, QR generation, Redis caching, and granular click analytics.',
    detailedDescription:
      'Built during GoFr Summer of Code ’25 (Templates Track), this production-ready Go microservice follows a clean Handler → Service → Store architecture. It supports idempotent link creation, custom branded domains, UTC link expiration, destination versioning with single-click rollback, Redis cache invalidation with MongoDB fallback, dual JWT & API-key authentication, OpenAPI/Swagger documentation, and real-time click telemetry.',
    category: 'Backend',
    featured: true,
    badge: 'GoFr SOC ’25',
    architecture: 'Handler → Service → Store (Redis Cache + MongoDB)',
    techStack: ['Go', 'GoFr', 'MongoDB', 'Redis', 'JWT', 'OpenAPI'],
    features: [
      'Branded short links, custom aliases, idempotent creation & dynamic QR code generation',
      'Link expiration, destination versioning, and one-click rollback functionality',
      'Redis caching with invalidation and resilient MongoDB fallback on redirects',
      'Click analytics tracking unique visitors, device, browser, OS, referrer & geolocation',
      'Dual JWT session auth and revocable developer API keys (usk_...) with OpenAPI docs',
    ],
    githubUrl: 'https://github.com/sksmagr23/url-shortener',
    liveUrl: null,
    demoVideoUrl: null,
    image: null,
    previewKind: 'url-shortener',
  },
  {
    id: 'renewable-energy-forecasting',
    name: 'Renewable Energy Forecasting System',
    tagline: 'AI-Powered Solar, Wind & Hydro Forecasting Platform (Shannon)',
    shortDescription:
      'Hack It Out (Technex ’25) 2nd-place platform predicting solar, wind, and hydro output using a GRU + XGBoost ensemble with Mapbox geospatial selection.',
    detailedDescription:
      'Built by Team Shannon for Hack It Out at Technex ’25 (IIT BHU), this platform combines historical meteorological datasets (Open-Meteo & NITI Aayog) with a GRU + XGBoost ensemble achieving an R² score of 0.7359. Users select coordinates on an interactive Mapbox map, inspect Recharts forecast visualizations, and receive actionable Groq AI optimization insights served via a FastAPI inference pipeline and Next.js dashboard.',
    category: 'AI / ML',
    featured: true,
    badge: '2nd · Technex ’25',
    metrics: 'Model R²: 0.7359',
    architecture: 'Next.js + Mapbox → FastAPI ML Inference (GRU + XGBoost) → Recharts & Groq AI',
    techStack: ['Python', 'GRU', 'XGBoost', 'Next.js', 'FastAPI', 'Mapbox', 'Recharts', 'Groq API'],
    features: [
      'Solar, wind, and hydro renewable generation forecasting with GRU + XGBoost ensemble',
      'Historical weather data integration with reported ensemble R² of 0.7359',
      'Interactive geospatial location picking and reverse geocoding using Mapbox',
      'Dynamic time-series forecast dashboards with Recharts and Ant Design',
      'AI-powered optimization recommendations and scalable FastAPI inference',
    ],
    githubUrl: 'https://github.com/sksmagr23/shannon_frontend',
    secondaryRepoUrl: 'https://github.com/sksmagr23/shannon_backend',
    liveUrl: 'https://shannonntpc.vercel.app/',
    demoVideoUrl: null,
    image: '/projects/2.png',
  },
  {
    id: 'querypilot',
    name: 'QueryPilot',
    tagline: 'Agentic Text-to-SQL Analytics Platform with Safety Guardrails',
    shortDescription:
      'LangGraph + Gemini analytics agent translating natural language into AST-validated SQL with EXPLAIN cost guardrails and human-in-the-loop approvals.',
    detailedDescription:
      'QueryPilot grounds natural-language business questions against live PostgreSQL schemas before generating SQL. Every query passes SQLGlot AST inspection to block destructive statements, runs cost analysis via PostgreSQL EXPLAIN, pauses expensive queries for human approval, executes on a read-only role with bounded self-correction retries, and computes verified metrics in Python for Recharts visualizations.',
    category: 'AI / ML',
    featured: true,
    badge: '99.05% Accuracy',
    metrics: '99.05% accuracy across 105 tests',
    architecture: 'LangGraph Agent → SQLGlot AST Guardrail → EXPLAIN Cost Gate → Read-Only Postgres',
    techStack: [
      'Python',
      'FastAPI',
      'LangGraph',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Docker',
    ],
    features: [
      'Schema-grounded natural-language to SQL generation with bounded retry self-correction',
      'SQLGlot AST validation blocking destructive queries and multi-statement injection',
      'PostgreSQL EXPLAIN cost estimation with human-in-the-loop approval queue',
      'Verified Python-side metric aggregation with interactive Recharts charts & CSV export',
    ],
    githubUrl: 'https://github.com/sksmagr23/QueryPilot',
    liveUrl: null,
    demoVideoUrl: null,
    image: null,
    previewKind: 'querypilot',
  },
  {
    id: 'flood-detection-unet',
    name: 'Flood Detection using U-Net',
    tagline: 'Sentinel-1 SAR Satellite Imagery Semantic Segmentation',
    shortDescription:
      'Deep learning pipeline segmenting flood-affected regions from cloud-penetrating Sentinel-1 SAR imagery (VV & VH channels) using a U-Net architecture.',
    detailedDescription:
      'Optical satellites fail under heavy storm cloud cover precisely when disaster-response flood maps are needed most. This project leverages Sentinel-1 Synthetic Aperture Radar (SAR) dual-polarization (VV and VH) tiles from the ETCI-2021 Flood Detection dataset and trains a TensorFlow/Keras U-Net semantic segmentation network to output pixel-accurate binary flood masks.',
    category: 'AI / ML',
    badge: 'Computer Vision',
    techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'U-Net', 'Computer Vision'],
    features: [
      'All-weather Sentinel-1 SAR satellite imagery preprocessing (ETCI-2021 dataset)',
      'Dual VV and VH radar polarization channel fusion (256×256 tiles)',
      'End-to-end U-Net semantic segmentation model trained with TensorFlow/Keras',
      'Pixel-level binary flood mask generation and visual ground-truth evaluation',
    ],
    githubUrl: 'https://github.com/sksmagr23/Flood-_mapping_ML',
    liveUrl: null,
    demoVideoUrl: null,
    image: '/projects/flood-sample.png',
  },
  {
    id: 'codeexchange',
    name: 'CodeExchange',
    tagline: 'Full-Stack Developer Q&A Platform with Stack Overflow Integration',
    shortDescription:
      'Developer Q&A web application inspired by Stack Overflow with JWT & Google OAuth authentication, Markdown posts, CRUD discussions, and live Stack Exchange API search.',
    detailedDescription:
      'CodeExchange is a full-stack community Q&A platform engineered with Node.js, Express.js, MongoDB, and Tailwind-styled EJS templates. It implements secure authentication via JWT and Google OAuth, persistent dark/light theme toggling, Markdown question rendering, answer reactions, user activity profiles, and live Stack Overflow search via the Stack Exchange API.',
    category: 'Full-Stack',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'EJS', 'Tailwind CSS'],
    features: [
      'Authentication and authorization with JWT, email/password, and Google OAuth',
      'Full CRUD Q&A workflows with Markdown rendering, tagging, and answer reactions',
      'User profiles displaying personal question and answer history',
      'Integrated Stack Exchange API for searching live Stack Overflow discussions',
      'Responsive Tailwind UI with persistent dark/light theme toggle',
    ],
    githubUrl: 'https://github.com/sksmagr23/CodeExchange',
    liveUrl: 'https://codeexchange-3s2g.onrender.com/',
    demoVideoUrl: null,
    image: '/projects/1.png',
  },
  {
    id: 'django-restaurant',
    name: 'Django Restaurant Management',
    tagline: 'Full-Stack Restaurant Ordering & Cart Management Platform',
    shortDescription:
      'Django and PostgreSQL restaurant ordering web app featuring authenticated menu browsing, dynamic cart updates, checkout summaries, and order history.',
    detailedDescription:
      'A full-stack e-commerce ordering system built on Django and PostgreSQL. Registered users can search and filter menu cards, inspect dish details in interactive popups, manage live database-backed cart quantities, place confirmed orders with full checkout summaries, and track past orders from their personal account dashboard.',
    category: 'Full-Stack',
    techStack: ['Python', 'Django', 'PostgreSQL', 'HTML5', 'CSS3'],
    features: [
      'User signup, login, logout, and protected menu/cart routes',
      'Searchable menu browsing with dish detail modals and ratings',
      'Database-backed add-to-cart, live quantity adjustments, and item removal',
      'Checkout flow with delivery details, order summary confirmation & order history',
    ],
    githubUrl: 'https://github.com/sksmagr23/restaurant-service',
    liveUrl: null,
    demoVideoUrl: null,
    image: '/projects/restaurant-service.jpg',
  },
  {
    id: 'microbubble-analyzer',
    name: 'Microbubble & Emulsion Stability Analyzer',
    tagline: 'Computer Vision & Kinetic Modeling Platform (UGP Research)',
    shortDescription:
      'Undergraduate research platform combining Watershed droplet segmentation, exponential decay kinetic modeling, and ML micrograph synthesis.',
    detailedDescription:
      'Developed as an Undergraduate Project (UGP) at IIT (BHU), this platform automates micro-scale emulsion droplet characterization from optical micrographs using marker-controlled Watershed segmentation, computes diameter histograms and Polydispersity Index (PDI), models macro-scale stability via first-order decay kinetics, and uses Gradient Boosted Regression Trees to synthesize morphology predictions.',
    category: 'AI / ML',
    badge: 'IIT BHU UGP',
    techStack: ['Python', 'Scikit-learn', 'Computer Vision', 'JavaScript'],
    features: [
      'Automated droplet detection and de-clumping via marker-controlled Watershed segmentation',
      'Spatial unit calibration (µm/px), diameter histograms, and Polydispersity Index evaluation',
      'First-order exponential decay kinetic modeling for emulsion half-life & retention',
      'Multi-parameter comparative studies across RPM, mixing duration, and pH',
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
    type: 'Internship',
    duration: 'May 2026 – July 2026',
    logoText: 'IR',
    summary:
      'Engineered agentic CRM workflows, Zoho CRM tool integrations, and structured dynamic UI rendering for intent-driven analytics.',
    responsibilities: [
      'Built agentic CRM workflows using Pydantic and Google ADK for context-aware customer management.',
      'Integrated Zoho CRM with agent tools for lead CRUD, email sending, and one-time & recurring email job scheduling.',
      'Engineered dynamic UI rendering using structured data for intent-driven agent interactions and CRM analytics.',
    ],
    techStack: ['FastAPI', 'Google ADK', 'Pydantic', 'Zoho CRM', 'Agentic AI', 'Dynamic UI'],
  },
  {
    id: 'gofr-soc',
    company: 'GoFr Summer of Code 2025',
    role: 'Template Track Contributor',
    type: 'Open Source',
    duration: 'June 2025 – Summer 2025',
    logoText: 'GF',
    summary:
      'Selected contributor in the Templates Track, architecting a production-grade URL Management & Analytics microservice using GoFr.',
    responsibilities: [
      'Built a GoFr backend service supporting custom aliases, expiration, destination versioning, rollback, and QR generation.',
      'Implemented idempotent link creation with Redis caching, cache invalidation, and resilient MongoDB fallback.',
      'Developed granular click analytics tracking unique visitors, browser/device breakdown, referrers, geolocation, and time-series trends.',
      'Secured APIs with JWT + revocable API-key authentication and documented endpoints using OpenAPI/Swagger.',
    ],
    techStack: ['Go', 'GoFr', 'MongoDB', 'Redis', 'JWT', 'OpenAPI'],
    link: 'https://github.com/sksmagr23/url-shortener',
  },
  {
    id: 'mittal-alliance',
    company: 'Mittal Alliance Industries Pvt. Ltd.',
    role: 'Full-Stack Developer Intern',
    type: 'Internship',
    duration: 'April 2025 – May 2025',
    logoText: 'MA',
    summary:
      'Built responsive frontend modules and connected backend APIs for the company web platform.',
    responsibilities: [
      'Built dynamic and interactive components for the company’s web platform using React, HTML, CSS, and JavaScript, improving UX, accessibility, and mobile responsiveness.',
      'Integrated backend functionalities via REST APIs to enable seamless frontend-backend interaction.',
    ],
    techStack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
  },
];

// ----------------------------------------------------------------------------
// 8. ACHIEVEMENTS
// ----------------------------------------------------------------------------
export const achievementsData: AchievementItem[] = [
  {
    id: 'technex-hackitout',
    category: 'Hackathons & Competitions',
    title: '2nd Position — Hack It Out, Technex ’25',
    organization: 'IIT (BHU) Varanasi · Team Shannon',
    highlight: '1st Runner-Up',
    description:
      'Engineered an AI-powered renewable energy forecasting system combining GRU + XGBoost models (R² = 0.7359), Mapbox geospatial selection, and Groq AI recommendations.',
    link: 'https://github.com/sksmagr23/shannon_frontend',
  },
  {
    id: 'flipkart-grid',
    category: 'Hackathons & Competitions',
    title: 'National Semi-Finalist — Flipkart GRiD 8.0',
    organization: 'Flipkart · SDE Track',
    highlight: 'Semi-Finalist',
    description:
      'Advanced to the national semi-finals in Flipkart’s flagship software engineering challenge competing across algorithmic problem-solving and system design rounds.',
  },
  {
    id: 'aissce-topper',
    category: 'Hackathons & Competitions',
    title: 'Science Stream Topper — AISSCE 2023',
    organization: 'DALIMSS Sunbeam School, Varanasi',
    highlight: 'Achievers Award',
    description:
      'Awarded the Achievers Award as Science Stream Topper in CBSE Class XII board examinations, with Subject Topper distinctions in Chemistry and Mathematics.',
  },
  {
    id: 'gofr-soc-25',
    category: 'Open Source',
    title: 'GoFr Summer of Code 2025 — Selected Contributor',
    organization: 'GoFr · Templates Track',
    highlight: 'Top Contributor',
    description:
      'Selected among top contributors in the Templates Track to design and deliver an observable GoFr URL Shortener & Click Analytics service.',
    link: 'https://github.com/sksmagr23/url-shortener',
  },
  {
    id: 'gssoc-25',
    category: 'Open Source',
    title: 'GirlScript Summer of Code 2025',
    organization: 'GirlScript Foundation',
    highlight: 'Selected Contributor',
    description:
      'Selected to contribute features, bug fixes, and documentation across open-source full-stack and backend repositories.',
  },
  {
    id: 'oss-100-prs',
    category: 'Open Source',
    title: '100+ Open-Source Pull Requests',
    organization: 'GitHub · Institutional & Community Repos',
    highlight: '100+ PRs',
    description:
      'Contributed over 100 pull requests spanning GoFr, JSON Schema, Rocket.Chat, COPS IIT (BHU) apps, and community web platforms.',
    link: 'https://github.com/sksmagr23',
  },
  {
    id: 'leetcode-knight',
    category: 'Competitive Programming',
    title: 'LeetCode Knight — 1909 Contest Rating',
    organization: 'LeetCode (@algofire24)',
    highlight: 'Top 4.45% Global',
    description:
      'Earned the Knight badge with a live verified 1909 contest rating across 16 contests, 813 problems solved, 365 Days Badge, and Top SQL 50.',
    link: 'https://leetcode.com/algofire24',
  },
  {
    id: 'codechef-2star',
    category: 'Competitive Programming',
    title: 'CodeChef 2-Star — 1488 Rating',
    organization: 'CodeChef (@algofire24)',
    highlight: '670 Solved',
    description:
      'Active competitive programmer on CodeChef with 1488 contest rating, 1888 DSA rating, and 670 problems solved.',
    link: 'https://www.codechef.com/users/algofire24',
  },
  {
    id: 'problems-1000-plus',
    category: 'Competitive Programming',
    title: '1,738+ Coding Problems Solved',
    organization: 'LeetCode · CodeChef · GeeksforGeeks',
    highlight: '1000+ Milestone',
    description:
      'Consistent DSA practice across LeetCode (813), CodeChef (670), and GeeksforGeeks (255), backed by a personal C++ DSA notes repository.',
    link: 'https://sksmagr23.github.io/code-notes/',
  },
];

export const leadershipData: LeadershipItem[] = [
  {
    id: 'cops-sdg',
    organization: 'Club of Programmers (COPS), IIT (BHU)',
    unit: 'Software Development Guild',
    roles: ['Technical Contributor', 'Event Coordinator'],
    duration: 'July 2024 – Present',
    responsibilities: [
      'Contributed to software development initiatives and open-source club repositories including Multiplayer UNO (MERN), COPS Website (React), Institute Grievance Portal, and Digital Permission System.',
      'Helped organize Freshers’ Orientation and curated structured web development and programming resources.',
      'Conducted hands-on Git and GitHub workshops for incoming cohorts.',
      'Supported campus-wide technical events and developer community activities.',
    ],
    highlights: ['Multiplayer UNO', 'Institute Grievance Portal', 'Digital Permission System', 'Git Workshops'],
  },
  {
    id: 'tnp-iitbhu',
    organization: 'Training and Placement Cell, IIT (BHU)',
    unit: 'Technical Team',
    roles: ['Training and Placement Tech Representative'],
    duration: 'June 2024 – Present',
    responsibilities: [
      'Represented technical operations and supported digital coordination for institute placement and internship processes.',
    ],
    highlights: ['Technical Operations', 'Campus Placement Support'],
  },
  {
    id: 'ecell-iitbhu',
    organization: 'E-Cell, IIT (BHU)',
    unit: 'Technical Team',
    roles: ['Technical Associate'],
    duration: 'July 2024 – April 2025',
    responsibilities: [
      'Built interactive UIs and APIs for the official E-Cell website and Campus Ambassador Portal using Next.js, serving hundreds of active users.',
      'Integrated dynamic registration forms and data pipelines backed by Firebase.',
      'Added Framer Motion interactions and managed web execution for E-Summit ’25.',
    ],
    highlights: ['E-Summit ’25', 'Campus Ambassador Portal', 'Next.js & Firebase'],
  },
  {
    id: 'sochem-iitbhu',
    organization: 'Society of Chemical Engineers (SoChem), IIT (BHU)',
    unit: 'Osmoze ’25 Web Team',
    roles: ['Technical Executive'],
    duration: 'July 2024 – April 2025',
    responsibilities: [
      'Led Next.js backend development for the Osmoze ’25 annual fest website, integrating Firebase services and alumni datasets.',
      'Engineered user onboarding and real-time event registration flows handling 100+ participant entries.',
    ],
    highlights: ['Osmoze ’25', '100+ Registrations', 'Next.js & Firebase'],
  },
];

export const contactContent = {
  eyebrow: 'Connect',
  heading: 'Get in Touch',
  subtitle:
    'Reach out regarding SWE, Backend, Full-Stack, Agentic AI, or Forward Deployed Engineer (FDE) roles and engineering collaborations.',
  availabilityNote:
    'Open to full-time and internship opportunities in Software Engineering, Backend Systems, Agentic AI, and FDE.',
};
