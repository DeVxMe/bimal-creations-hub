import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface SectionToggleProps {
  activeSection: "web2" | "web3";
  onToggle: (section: "web2" | "web3") => void;
}

const SectionToggle = ({ activeSection, onToggle }: SectionToggleProps) => {
  return (
    <div className="flex items-center gap-1 bg-muted/30 rounded-lg p-1 w-fit">
      <button
        onClick={() => onToggle("web2")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
          activeSection === "web2" 
            ? "bg-background text-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Personal Projects
      </button>
      <button
        onClick={() => onToggle("web3")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
          activeSection === "web3" 
            ? "bg-background text-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Client Work
      </button>
    </div>
  );
};

export default SectionToggle;