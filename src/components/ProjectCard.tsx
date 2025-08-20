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
  
  // Get project type color based on category
  const getProjectColors = (category: string, section: string) => {
    if (category.toLowerCase().includes('ai')) {
      return {
        border: 'border-l-orange',
        shadow: 'hover:shadow-[0_8px_32px_-8px_hsl(25_95%_53%_/_0.4)]',
        badge: 'bg-orange/20 text-orange border-orange/30'
      };
    }
    if (category.toLowerCase().includes('blockchain') || category.toLowerCase().includes('web3')) {
      return {
        border: 'border-l-purple',
        shadow: 'hover:shadow-[0_8px_32px_-8px_hsl(271_91%_65%_/_0.4)]',
        badge: 'bg-purple/20 text-purple border-purple/30'
      };
    }
    if (category.toLowerCase().includes('cli')) {
      return {
        border: 'border-l-cyan',
        shadow: 'hover:shadow-[0_8px_32px_-8px_hsl(189_94%_43%_/_0.4)]',
        badge: 'bg-cyan/20 text-cyan border-cyan/30'
      };
    }
    if (section === 'web3') {
      return {
        border: 'border-l-purple',
        shadow: 'hover:shadow-[0_8px_32px_-8px_hsl(271_91%_65%_/_0.4)]',
        badge: 'bg-purple/20 text-purple border-purple/30'
      };
    }
    return {
      border: 'border-l-emerald',
      shadow: 'hover:shadow-[0_8px_32px_-8px_hsl(142_76%_36%_/_0.4)]',
      badge: 'bg-emerald/20 text-emerald border-emerald/30'
    };
  };
  
  const colors = getProjectColors(project.category, project.section);
  
  return (
    <Card 
      className={`border-border/50 ${colors.border} border-l-4 bg-card/50 backdrop-blur-sm hover:bg-card/70 ${colors.shadow} transition-all duration-300 animate-fade-in hover:scale-[1.02]`}
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
          {project.tech_stacks.slice(0, 4).map((tech, techIndex) => {
            const techColors = [
              "bg-emerald/20 text-emerald border-emerald/30",
              "bg-blue/20 text-blue border-blue/30", 
              "bg-purple/20 text-purple border-purple/30",
              "bg-orange/20 text-orange border-orange/30",
              "bg-pink/20 text-pink border-pink/30",
              "bg-cyan/20 text-cyan border-cyan/30"
            ];
            const colorClass = techColors[techIndex % techColors.length];
            
            return (
              <Badge key={tech} className={`text-xs border ${colorClass}`}>
                {tech}
              </Badge>
            );
          })}
          {project.tech_stacks.length > 4 && (
            <Badge className="text-xs border bg-muted/20 text-muted-foreground border-muted/30">
              +{project.tech_stacks.length - 4}
            </Badge>
          )}
        </div>
        
        <div className="flex gap-2 text-xs">
          <a
            href={project.repo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald/10 text-emerald hover:bg-emerald/20 transition-colors"
          >
            <Github className="w-3 h-3" />
            Code
          </a>
          {project.live_demo && (
            <a
              href={project.live_demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue/10 text-blue hover:bg-blue/20 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Demo
            </a>
          )}
          {project.viewPost && (
            <a
              href={project.viewPost}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-purple/10 text-purple hover:bg-purple/20 transition-colors"
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