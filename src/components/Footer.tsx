import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Sankalp Kumar</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aspiring Software Engineer passionate about creating impactful web applications 
              and solving real-world problems through technology.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#home" 
                  className="text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/2004sankalp"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
              >
                <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sankalp-kumar-6a1990324/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
              >
                <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
              </motion.a>
              <motion.a
                href="https://twitter.com/sankalp95863197"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
              >
                <Twitter className="h-5 w-5 group-hover:text-primary transition-colors" />
              </motion.a>
              <motion.a
                href="mailto:2004sankalp@gmail.com"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
              >
                <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Sankalp Kumar. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false }}
        className="fixed bottom-8 right-8 z-40"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full w-12 h-12 shadow-lg hover:shadow-2xl group"
        >
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </motion.div>
    </footer>
  );
}
