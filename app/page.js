'use client';
import AboutSection from "./components/fields/about";
import Education from "./components/fields/education";
import Experience from "./components/fields/experience";
import Hero from "./components/fields/hero";
import Projects from "./components/fields/projects";
import Skills from "./components/fields/skills";
import Achievement from "./components/fields/achievements";
import GitHubStats from "./components/fields/github";
import ContactSection from "./components/fields/contact";

export default function Home() {
  return (
    <div>
      <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Hero />
      </section>
      <AboutSection />
      <Skills />
      <Experience />
      <Achievement />
      <Education />
      <Projects />
      <GitHubStats />
      <ContactSection />
    </div>
  )
};