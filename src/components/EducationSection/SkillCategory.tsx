import { motion, AnimatePresence } from "framer-motion";

export default function SkillCategory() {
  const technicalSkills = [
    {
      category: "AI / Machine Learning",
      skills: ["Python", "scikit-learn", "PyTorch", "TensorFlow", "Keras", "Deep Learning", "NLP", "LLM", "Generative AI"],
    },
    {
      category: "Data / Research",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "EDA", "Statistical Analysis", "EEG / Biomedical Signal Processing"],
    },
    {
      category: "Backend / Frontend",
      skills: ["Django", "Django REST Framework", "REST APIs", "SQL", "PostgreSQL", "MySQL", "React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Engineering",
      skills: ["Git", "GitHub", "GitHub Actions", "pytest", "Linux", "C++"],
    },
  ];

  const aiAssistedDevelopment = [
    "ChatGPT",
    "Claude",
    "Cursor",
    "Prompt Engineering",
    "AI Pair Programming",
    "LLM-assisted Workflows",
    "Code Review",
    "Debugging",
    "Test Generation",
    "Documentation Automation",
  ];

  const professionalTraits = [
    "Problem Solving",
    "Analytical Thinking",
    "Research Mindset",
    "Clean Code",
    "Reproducible Workflows",
    "Continuous Learning",
    "Team Collaboration",
    "Technical Communication",
  ];

  return (
    <motion.section
      id="skills"
      className="space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <h3 className="text-2xl font-bold mb-2">Expertise & Skills</h3>
        <p className="text-muted-foreground text-sm max-w-3xl">
          A practical technology stack spanning AI/ML research, data analysis, software engineering, and AI-assisted development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-8 rounded-2xl border border-foreground/10 md:col-span-2">
          <h4 className="text-lg font-bold text-foreground mb-6">Technical Arsenal</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-sm font-semibold text-primary mb-3">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-medium text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl border border-foreground/10">
          <h4 className="text-lg font-bold text-foreground mb-6">AI-Assisted Development</h4>
          <div className="flex flex-wrap gap-3">
            <AnimatePresence>
              {aiAssistedDevelopment.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-full glass-panel border border-primary/20 text-sm font-medium text-primary shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                >
                  {skill}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl border border-foreground/10 flex flex-col">
          <h4 className="text-lg font-bold text-foreground mb-6">Professional Traits</h4>
          <div className="flex flex-wrap gap-3">
            <AnimatePresence>
              {professionalTraits.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-full glass-panel border border-primary/20 text-sm font-medium text-primary shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                >
                  {skill}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-auto pt-8">
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-sm text-muted-foreground">
              <strong className="text-primary block mb-1">Research & Engineering Focus</strong>
              Building reproducible AI and software workflows while continuously exploring practical applications of machine learning, biomedical signal processing, and modern AI-assisted development.
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
