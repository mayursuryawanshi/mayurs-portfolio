import Navigation from "@/features/portfolio/components/Navigation";
import HeroSection from "@/features/portfolio/components/HeroSection";
import AboutSection from "@/features/portfolio/components/AboutSection";
import ExperienceSection from "@/features/portfolio/components/ExperienceSection";
import ProjectsSection from "@/features/portfolio/components/ProjectsSection";
import ContactSection from "@/features/portfolio/components/ContactSection";
import Footer from "@/features/portfolio/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
