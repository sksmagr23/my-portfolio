'use client';
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("./components/homepage/about"), { ssr: false });
const Education = dynamic(() => import("./components/homepage/education"), { ssr: false });
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });
const Achievement = dynamic(() => import("./components/homepage/achievements"), { ssr: false });
const GitHubStats = dynamic(() => import("./components/homepage/github"), { ssr: false });

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Experience />
      <Achievement />
      <Education />
      <Projects />
      <GitHubStats />
    </div>
  )
};