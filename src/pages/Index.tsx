import Navigation from "@/features/portfolio/components/Navigation";
import FloatingShapes from "@/features/portfolio/components/FloatingShapes";
import HeroSection from "@/features/portfolio/components/HeroSection";
import AboutSection from "@/features/portfolio/components/AboutSection";
import ProjectsSection from "@/features/portfolio/components/ProjectsSection";
import ContactSection from "@/features/portfolio/components/ContactSection";
import Footer from "@/features/portfolio/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden diagonal-lines">
      {/* <FloatingShapes /> */}
      <Navigation />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
