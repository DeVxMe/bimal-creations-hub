import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Eye, X } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

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

const modalOverlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.25)",
  zIndex: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.3s",
};

const modalBaseClass =
  "fixed left-1/2 top-1/2 z-50 bg-card/95 shadow-2xl border border-border rounded-xl p-0";
const modalSizeClass =
  "w-[95vw] max-w-xs sm:max-w-sm md:max-w-md min-h-[180px] max-h-[90vh]";

const modalAnimBase =
  "transform transition-all duration-400 ease-in-out opacity-0 scale-90 translate-x-[200px]";
const modalAnimOpen =
  "opacity-100 scale-100 translate-x-0 -translate-y-1/2 -translate-x-1/2";
const modalAnimClosed =
  "opacity-0 scale-90 translate-x-[200px] -translate-y-1/2 -translate-x-1/2";

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [open, setOpen] = useState(false);

  const colors = getProjectColors(project.category, project.section);

  // Card click handler to open modal
  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent link clicks from opening modal
    const target = e.target as HTMLElement;
    if (target.closest("a")) return;
    setOpen(true);
  };

  // Modal content (small card, centered, animated)
  const Modal = () => (
    <div
      style={modalOverlayStyle}
      onClick={() => setOpen(false)}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`
          ${modalBaseClass}
          ${modalSizeClass}
          ${modalAnimBase}
          ${open ? modalAnimOpen : modalAnimClosed}
        `}
        style={{
          transition: "all 0.4s cubic-bezier(.4,1.2,.4,1)",
          top: "50%",
          left: "50%",
        }}
        onClick={e => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-border">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <button
            className="ml-2 p-1 rounded hover:bg-muted/40 transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-4 py-3 space-y-3">
          <CardDescription className="text-sm leading-relaxed">
            {project.desc}
          </CardDescription>
          <div className="flex flex-wrap gap-2">
            {project.tech_stacks.map((tech, techIndex) => {
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
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Card
        className={`cursor-pointer border-border/50 ${colors.border} border-l-4 bg-card/50 backdrop-blur-sm hover:bg-card/70 ${colors.shadow} transition-all duration-300 animate-fade-in hover:scale-[1.02]`}
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={handleCardClick}
        tabIndex={0}
        role="button"
        aria-label={`Open details for ${project.title}`}
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
                onClick={e => e.stopPropagation()}
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
              onClick={e => e.stopPropagation()}
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
                onClick={e => e.stopPropagation()}
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
                onClick={e => e.stopPropagation()}
              >
                <Eye className="w-3 h-3" />
                View Post
              </a>
            )}
          </div>
        </CardContent>
      </Card>
      {open && <Modal />}
    </>
  );
};

export default ProjectCard;