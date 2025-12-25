import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
