import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import AnimatedCanvas from "@/components/AnimatedCanvas";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ProcessSection from "@/sections/ProcessSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* Grain cinématique */}
      <div className="grain" aria-hidden="true" />

      {/* Curseur personnalisé */}
      <CustomCursor />

      {/* Particules violettes (fixed, derrière tout) */}
      <AnimatedCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Contenu */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
