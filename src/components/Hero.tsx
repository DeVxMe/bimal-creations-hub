import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { socialLinks } from "@/data/projects";

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

const Hero = () => {
  return (
    <section className="py-20 relative">
      {/* Header with social links */}
      <div className="absolute top-6 right-6 z-20">
        <div className="flex gap-3">
          {socialLinks.map((link, index) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Profile image */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border border-border/50">
            <img
              src="https://res.cloudinary.com/dvb8lhl7t/image/upload/v1755016385/bimal_fwytql.jpg"
              alt="Bimal Chalise"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Main content */}
        <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div>
            <h1 className="text-4xl font-bold mb-2">Hi, I'm Bimal</h1>
            <p className="text-muted-foreground">21, Nepal | Full Stack Engineer</p>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            I'm a Full Stack Blockchain Developer crafting cutting-edge dApps and DeFi solutions. 
            From writing secure smart contracts to building intuitive Web3 interfaces, I turn complex 
            blockchain concepts into user-friendly experiences.
          </p>
          
          {/* Status indicator */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;