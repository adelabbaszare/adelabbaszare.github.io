import SkillCategory from "./SkillCategory";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "M.Sc. in Computer Engineering — Artificial Intelligence",
      school: "Islamic Azad University of Mashhad",
      year: "2025 – Present",
      details: [
        "Advanced study in artificial intelligence, machine learning, and deep learning",
        "Research interests in EEG and biomedical signal processing, computational neuroscience, and medical AI",
        "Developing applied AI research workflows with Python and PyTorch",
      ],
    },
    {
      degree: "B.Sc. in Computer Software Engineering",
      school: "Islamic Azad University of Mashhad",
      year: "2023 – 2025",
      details: [
        "Built a foundation in software engineering, programming, algorithms, and data-driven development",
        "Applied Python, C++, web development, and machine learning concepts across academic and personal projects",
        "Developed practical experience with software development and research-oriented programming workflows",
      ],
    },
    {
      degree: "Associate of Science in Materials Science and Engineering",
      school: "Ferdowsi University of Mashhad",
      year: "2017 – 2020",
      details: [
        "Developed analytical and quantitative problem-solving foundations through engineering coursework",
      ],
    },
  ];

  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-24 space-y-24">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
              <GraduationCap className="text-primary w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Academic <span className="text-gradient-primary">Background</span>
            </h2>
          </div>
          <p className="text-muted-foreground ml-16 max-w-2xl">
            An engineering foundation evolving toward artificial intelligence, biomedical signal processing, and applied machine learning research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl border border-foreground/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] transition-colors group-hover:bg-primary/20 pointer-events-none" />

              <h3 className="text-xl font-bold text-foreground mb-1 shadow-sm relative z-10">
                {edu.degree}
              </h3>
              <p className="text-sm font-medium text-primary mb-6 relative z-10">
                {edu.school} • {edu.year}
              </p>

              <ul className="space-y-3 relative z-10">
                {edu.details.map((detail, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-3">
                    <span className="text-primary/50 mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="ml-0 md:ml-16">
        <SkillCategory />
      </div>
    </section>
  );
};
