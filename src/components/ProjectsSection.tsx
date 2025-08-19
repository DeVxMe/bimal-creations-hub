import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionToggle from "./SectionToggle";

const ProjectsSection = () => {
  const [activeSection, setActiveSection] = useState<"web2" | "web3">("web2");
  
  const filteredProjects = projects.filter(project => project.section === activeSection);
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my journey through modern web development and blockchain innovation
          </p>
        </div>
        
        <SectionToggle 
          activeSection={activeSection} 
          onToggle={setActiveSection} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found for {activeSection.toUpperCase()} section.
            </p>
          </div>
        )}
        
        <div className="text-center mt-16">
          <div className="inline-block bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground mb-2">
              Showing {filteredProjects.length} {activeSection.toUpperCase()} projects
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-web2 rounded-full"></div>
                <span>Web2: {projects.filter(p => p.section === "web2").length} projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-web3 rounded-full"></div>
                <span>Web3: {projects.filter(p => p.section === "web3").length} projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;