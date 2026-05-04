import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export function About() {
  const handleDownload = () => {
  const resumeUrl = "./resume.pdf"; // or "/Sankalp_Resume.pdf" if that's your file name
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Sankalp_Resume.pdf";
  link.click();
};

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-3xl blur-2xl"></div>
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src="./vansh.jpg"
                  alt="Sankalp Kumar"
                  className="w-full aspect-square object-cover"
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl rotate-12"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-2xl -rotate-12"></div>
            </div>
          </motion.div>

          {/* Right side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold">Who I Am</h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a student at <span className="text-foreground font-medium">SRM University</span> (CGPA: 9.49) and a passionate Full-Stack Developer specializing in <span className="text-primary font-medium">MERN Stack, Python, and FastAPI</span>. I have a deep interest in <span className="text-primary font-medium">Artificial Intelligence</span> and building AI-driven solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive in hackathons and collaborative environments where I can solve real-world problems. My recent work focuses on integrating large language models (like Gemini) into productivity tools and civic applications.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-muted-foreground">🎓 Student at SRM University</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-muted-foreground">💻 Full-Stack Web Developer</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-muted-foreground">🏆 Hackathon Enthusiast</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-muted-foreground">🚀 Problem Solver & Innovator</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleDownload}
              className="mt-6 rounded-full group"
              size="lg"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
