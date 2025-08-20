import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isWeb3 = project.section === "web3";
  
  return (
    <Card 
      className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
            <CardDescription className="text-sm leading-relaxed">
              {project.desc}
            </CardDescription>
          </div>
          {project.live_demo && (
            <a
              href={project.live_demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech_stacks.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.tech_stacks.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{project.tech_stacks.length - 4}
            </Badge>
          )}
        </div>
        
        <div className="flex gap-2 text-xs">
          <a
            href={project.repo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
          >
            <Github className="w-3 h-3" />
            Code
          </a>
          {project.viewPost && (
            <a
              href={project.viewPost}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
            >
              <Eye className="w-3 h-3" />
              View Post
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;