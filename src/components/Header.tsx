import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("home")}
            className="text-xl font-semibold tracking-tight hover:text-primary transition-colors"
          >
            Sankalp Kumar
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection("resume")}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Resume
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-secondary transition-all"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
