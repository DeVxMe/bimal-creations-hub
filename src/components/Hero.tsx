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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Full Stack Developer
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Bimal
                </span>
                <br />
                <span className="text-foreground">Chalise</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Passionate developer crafting innovative solutions across Web2 & Web3 ecosystems. 
                Specializing in full-stack development, blockchain technologies, and cutting-edge AI applications.
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <Button
                    key={link.name}
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-primary">
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
                Download CV
              </Button>
            </div>
          </div>
          
          {/* Right content - Profile image */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img
                  src="https://res.cloudinary.com/dvb8lhl7t/image/upload/v1755016385/bimal_fwytql.jpg"
                  alt="Bimal Chalise"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;