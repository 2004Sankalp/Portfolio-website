import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, rgba(0, 120, 215, 0.05) 0%, rgba(0, 120, 215, 0.1) 100%)"
      }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-primary font-medium mb-2">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Sankalp Kumar
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              Full-Stack Developer & AI Enthusiast | Building the future with MERN Stack & LLMs
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button 
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group rounded-full"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="rounded-full"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Illustration/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl"></div>
              
              {/* Tech icon circles floating around */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-10 right-10 w-16 h-16 bg-card rounded-2xl shadow-lg flex items-center justify-center border border-border"
              >
                <span className="text-2xl">💻</span>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-20 left-10 w-16 h-16 bg-card rounded-2xl shadow-lg flex items-center justify-center border border-border"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 8, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 left-0 w-16 h-16 bg-card rounded-2xl shadow-lg flex items-center justify-center border border-border"
              >
                <span className="text-2xl">⚡</span>
              </motion.div>

              {/* Central illustration placeholder */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 500 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="250" cy="250" r="200" fill="url(#gradient1)" opacity="0.1"/>
                  <circle cx="250" cy="250" r="150" fill="url(#gradient2)" opacity="0.15"/>
                  <circle cx="250" cy="250" r="100" fill="url(#gradient3)" opacity="0.2"/>
                  <defs>
                    <linearGradient id="gradient1" x1="50" y1="50" x2="450" y2="450">
                      <stop offset="0%" stopColor="#0078D7" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="100" y1="100" x2="400" y2="400">
                      <stop offset="0%" stopColor="#0078D7" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="150" y1="150" x2="350" y2="350">
                      <stop offset="0%" stopColor="#0078D7" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
