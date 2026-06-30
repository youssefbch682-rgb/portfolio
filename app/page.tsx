import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import AnimatedCanvas from "@/components/AnimatedCanvas";
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
      {/* Ambient particle canvas (fixed, behind everything) */}
      <AnimatedCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </SmoothScrollProvider>
  );
}
