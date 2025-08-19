import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface SectionToggleProps {
  activeSection: "web2" | "web3";
  onToggle: (section: "web2" | "web3") => void;
}

const SectionToggle = ({ activeSection, onToggle }: SectionToggleProps) => {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center space-x-4 bg-card border border-border rounded-full p-2">
        <Label 
          htmlFor="section-toggle" 
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
            activeSection === "web2" 
              ? "bg-web2 text-white shadow-web2" 
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => onToggle("web2")}
        >
          Web2 Projects
        </Label>
        
        <Switch
          id="section-toggle"
          checked={activeSection === "web3"}
          onCheckedChange={(checked) => onToggle(checked ? "web3" : "web2")}
          className="data-[state=checked]:bg-web3 data-[state=unchecked]:bg-web2"
        />
        
        <Label 
          htmlFor="section-toggle" 
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
            activeSection === "web3" 
              ? "bg-web3 text-white shadow-web3" 
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => onToggle("web3")}
        >
          Web3 Projects
        </Label>
      </div>
    </div>
  );
};

export default SectionToggle;