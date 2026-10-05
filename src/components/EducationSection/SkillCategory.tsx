import { motion, AnimatePresence } from "framer-motion";

export default function ProfessionalProfile() {
  const technicalSkills = [
    { name: "React.js / Next.js", level: 95 },
    { name: "Node.js / Express", level: 90 },
    { name: "TypeScript & JavaScript", level: 92 },
    { name: "Database (MongoDB / PostgreSQL)", level: 88 },
    { name: "Cloud (AWS / Azure)", level: 85 },
  ];

  const softSkills = [
    "Leadership",
    "Problem Solving",
    "Agile Methodologies",
    "Mentorship",
    "Strategic Thinking",
    "Cross-Team Collaboration",
  ];

  return (
    <motion.section
      id="skills"
      className="space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-2xl font-bold mb-6">Expertise & Skills</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Technical Skills */}
        <div className="glass-panel p-8 rounded-2xl border border-foreground/10">
          <h4 className="text-lg font-bold text-foreground mb-6">Technical Arsenal</h4>
          <div className="space-y-5">
            {technicalSkills.map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-muted-foreground">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden border border-foreground/5">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full relative"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-foreground/20 w-full animate-pulse blur-[2px]" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="glass-panel p-8 rounded-2xl border border-foreground/10 flex flex-col">
          <h4 className="text-lg font-bold text-foreground mb-6">Professional Traits</h4>
          <div className="flex flex-wrap gap-3">
            <AnimatePresence>
              {softSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10, delay: i * 0.1 }}
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
              <strong className="text-primary block mb-1">Constant Learner</strong>
              Always staying adapting to evolving technologies to deliver scalable, state-of-the-art solutions.
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

