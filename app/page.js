import AboutSection from "./components/homepage/about";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Achievement from "./components/homepage/achievements";

export default async function Home() {
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Skills />
      <Experience />
      <Achievement />
      <Education />
      <Projects />
    </div>
  )
};