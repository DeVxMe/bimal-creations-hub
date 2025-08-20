import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Experience />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
