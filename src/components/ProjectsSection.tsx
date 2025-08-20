import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionToggle from "./SectionToggle";

const ProjectsSection = () => {
  const [activeSection, setActiveSection] = useState<"web2" | "web3">("web2");
  
  const filteredProjects = projects.filter(project => project.section === activeSection);
  
  return (
    <section id="projects" className="py-16">
      <div className="max-w-2xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-3">Projects</h2>
          <p className="text-muted-foreground mb-8">
            Showcasing my blockchain and full-stack projects.
          </p>
          
          <SectionToggle 
            activeSection={activeSection} 
            onToggle={setActiveSection} 
          />
        </div>
        
        <div className="space-y-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found for {activeSection} section.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;