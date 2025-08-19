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
      className={`group hover:shadow-${isWeb3 ? 'web3' : 'web2'} transition-all duration-500 hover:scale-105 border-border/50 backdrop-blur-sm bg-card/90 animate-fade-in`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge 
                variant="secondary" 
                className={`${isWeb3 ? 'bg-web3/20 text-web3' : 'bg-web2/20 text-web2'} border-none`}
              >
                {project.category}
              </Badge>
              {project.status && (
                <Badge variant="outline" className="text-xs">
                  {project.status}
                </Badge>
              )}
            </div>
          </div>
          <div className={`w-3 h-3 rounded-full ${isWeb3 ? 'bg-web3' : 'bg-web2'} animate-glow`}></div>
        </div>
        
        <CardDescription className="text-sm leading-relaxed">
          {project.desc}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Tech Stack</h4>
          <div className="flex flex-wrap gap-1">
            {project.tech_stacks.slice(0, 6).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.tech_stacks.length > 6 && (
              <Badge variant="outline" className="text-xs">
                +{project.tech_stacks.length - 6} more
              </Badge>
            )}
          </div>
        </div>
        
        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">Key Features</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className={`w-1 h-1 rounded-full ${isWeb3 ? 'bg-web3' : 'bg-web2'}`}></span>
                  {feature}
                </li>
              ))}
              {project.features.length > 3 && (
                <li className="text-xs italic">+{project.features.length - 3} more features</li>
              )}
            </ul>
          </div>
        )}
        
        {/* Role & Achievement */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-muted-foreground">Role:</span>
            <p className="font-medium">{project.role}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Achievement:</span>
            <p className="font-medium">{project.achievements}</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 hover:bg-primary hover:text-primary-foreground"
          asChild
        >
          <a href={project.repo_url} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
        
        {project.live_demo && (
          <Button 
            size="sm" 
            className={`flex-1 ${isWeb3 ? 'bg-web3 hover:bg-web3/90' : 'bg-web2 hover:bg-web2/90'} text-white`}
            asChild
          >
            <a href={project.live_demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </a>
          </Button>
        )}
        
        {project.viewPost && (
          <Button 
            variant="ghost" 
            size="sm"
            className="flex-1 hover:bg-accent"
            asChild
          >
            <a href={project.viewPost} target="_blank" rel="noopener noreferrer">
              <Eye className="h-4 w-4 mr-2" />
              View Post
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;