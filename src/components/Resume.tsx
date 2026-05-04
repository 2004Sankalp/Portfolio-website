import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Download, FileText } from "lucide-react";

export function Resume() {
  const handleDownload = () => {
  const resumeUrl = "./resume.pdf"; // or "/Sankalp_Resume.pdf" if that's your file name
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Sankalp_Resume.pdf";
  link.click();
};


  return (
    <section id="resume" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-purple-600 p-1">
            <div className="bg-card rounded-3xl p-12 md:p-16 text-center space-y-8">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-purple-600 text-white mx-auto"
              >
                <FileText className="h-12 w-12" />
              </motion.div>

              {/* Title and description */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">Download My Resume</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Get a comprehensive overview of my education, experience, skills, and achievements. Available in PDF format for easy viewing.
                </p>
              </div>

              {/* Download button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button 
                  onClick={handleDownload}
                  size="lg"
                  className="group rounded-full text-lg px-8 py-6 shadow-lg hover:shadow-2xl transition-all"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume (PDF)
                </Button>
              </motion.div>

              {/* Last updated */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="pt-6 border-t border-border"
              >
                <p className="text-sm text-muted-foreground">
                  Last updated: May 2026
                </p>
              </motion.div>

              {/* Optional: Resume preview thumbnail placeholder */}
              <div className="grid md:grid-cols-2 gap-6 pt-8">
                <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                  <h4 className="font-semibold mb-2">What's Inside</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Educational Background
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Technical Skills & Tools
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Project Highlights
                    </li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                  <h4 className="font-semibold mb-2">Achievements</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Hackathon Participation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Certifications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Awards & Recognition
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
