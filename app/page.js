'use client';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import("./components/fields/hero"));
const AboutSection = dynamic(() => import("./components/fields/about"));
const Skills = dynamic(() => import("./components/fields/skills"));
const Experience = dynamic(() => import("./components/fields/experience"));
const Achievement = dynamic(() => import("./components/fields/achievements"));
const Education = dynamic(() => import("./components/fields/education"));
const Projects = dynamic(() => import("./components/fields/projects"));
const Stats = dynamic(() => import("./components/fields/stats"));
const ContactSection = dynamic(() => import("./components/fields/contact"));


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
      <Stats />
      <ContactSection />
    </div>
  )
};