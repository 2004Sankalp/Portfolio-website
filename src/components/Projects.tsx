import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Projects() {
  const projects = [
    {
      title: "ManagerZero",
      description: "An AI-powered 'Chief of Staff' platform that automates task management and provides strategic insights using Gemini API. Built with Next.js and FastAPI.",
      image: "./image.png",
      technologies: ["Next.js", "FastAPI", "MongoDB", "Gemini API"],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Jan Sahayak",
      description: "AI-driven civic issue reporter that automatically classifies complaints and routes them to authorities. Featured in multiple hackathons.",
      image: "./image copy.png",
      technologies: ["React", "FastAPI", "TensorFlow", "SQLite"],
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      title: "OMNIBRAIN",
      description: "A multi-class heart risk predictor using deep learning models to analyze medical data with 90%+ accuracy.",
      image: "./omnibrain.png",
      technologies: ["TensorFlow", "Scikit-learn", "React", "Python"],
      gradient: "from-red-500 to-pink-600"
    },
    {
      title: "AI Assisted IDE",
      description: "A browser-based code editor with real-time AI assistance, code completion, and error detection.",
      image: "./ai_ide.png",
      technologies: ["Node.js", "Monaco Editor", "Gemini API"],
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="overflow-hidden h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl bg-card">
                {/* Project image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
