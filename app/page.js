'use client';
import dynamic from "next/dynamic";
const AboutSection = dynamic(() => import("./components/fields/about"), { ssr: false });
const Education = dynamic(() => import("./components/fields/education"), { ssr: false });
const Experience = dynamic(() => import("./components/fields/experience"), { ssr: false });
const HeroSection = dynamic(() => import("./components/fields/hero-section"), { ssr: false });
const Projects = dynamic(() => import("./components/fields/projects"), { ssr: false });
const Skills = dynamic(() => import("./components/fields/skills"), { ssr: false });
const Achievement = dynamic(() => import("./components/fields/achievements"), { ssr: false });
const GitHubStats = dynamic(() => import("./components/fields/github"), { ssr: false });

export default function Home() {
  return (
    <div>
      <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <HeroSection />
      </section>
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