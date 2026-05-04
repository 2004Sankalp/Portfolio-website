import { motion } from "motion/react";

export function Skills() {
  const skills = [
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-500" },
    { name: "Python", icon: "🐍", color: "from-blue-500 to-yellow-500" },
    { name: "FastAPI", icon: "⚡", color: "from-teal-400 to-emerald-600" },
    { name: "TensorFlow", icon: "🧠", color: "from-orange-500 to-red-600" },
    { name: "Gemini AI", icon: "✨", color: "from-purple-400 to-blue-600" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-teal-500" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-500" },
    { name: "Java", icon: "☕", color: "from-red-500 to-orange-600" },
    { name: "C++", icon: "🔵", color: "from-blue-600 to-indigo-700" }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Tools</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                y: -8,
              }}
              className="group cursor-pointer"
            >
              <div className="relative bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Gradient glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-center">{skill.name}</h3>
                </div>

                {/* Animated border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            ...and always learning more! 📚
          </p>
        </motion.div>
      </div>
    </section>
  );
}
