import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ExternalLink } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
  techStack: string[];
  type: "current" | "past" | "internship";
  links?: { name: string; url: string }[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    duration: "Current",
    description: "Building full-stack applications with modern technologies, focusing on Web3 and blockchain integration.",
    techStack: ["React", "Node.js", "Solana", "Rust", "TypeScript", "PostgreSQL"],
    type: "current",
  },
  {
    title: "Blockchain Developer",
    company: "Various Projects",
    duration: "2024",
    description: "Developing decentralized applications, smart contracts, and Web3 solutions on Solana blockchain.",
    techStack: ["Solana", "Rust", "Anchor", "Web3.js", "TypeScript"],
    type: "past",
  },
  {
    title: "Full-Stack Developer",
    company: "Personal Projects",
    duration: "2023-2024",
    description: "Built various full-stack applications including chat platforms, payment systems, and productivity tools.",
    techStack: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
    type: "past",
  },
];

const Experience = () => {
  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-3">Experience</h2>
          <p className="text-muted-foreground">
            Here's a timeline of my professional journey, showcasing my roles and contributions in blockchain and full-stack development.
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card 
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{experience.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {experience.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      experience.type === "current" 
                        ? "bg-primary/20 text-primary" 
                        : experience.type === "internship"
                        ? "bg-accent/20 text-accent-foreground"
                        : "bg-muted/20 text-muted-foreground"
                    }`}>
                      {experience.duration}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {experience.links && (
                  <div className="flex gap-2 pt-2">
                    {experience.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;