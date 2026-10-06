import { motion } from "framer-motion";
import { BrainCircuit, Code2, Database, FlaskConical } from "lucide-react";

const focusAreas = [
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    label: "AI & Machine Learning",
    value: "AI / ML",
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    label: "Research Focus",
    value: "NeuroAI",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    label: "Software Engineering",
    value: "Python",
  },
  {
    icon: <Database className="w-6 h-6" />,
    label: "Data & Backend",
    value: "Django",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        className="flex flex-col md:flex-row gap-16 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am Adel Abbaszare, an AI / Software Engineer and Computer Engineering
              M.Sc. Student focused on Artificial Intelligence and Machine Learning.
              My interests span deep learning, data analysis, intelligent systems,
              and research-oriented software development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-5">
              I work primarily with Python and modern machine learning frameworks,
              while also building practical software with Django, React, and
              related web technologies. My current research interests include
              EEG analysis, NeuroAI, and medical AI, with a focus on turning
              research ideas into practical and well-engineered solutions.
            </p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.label}
              className="glass-panel p-6 rounded-2xl border border-foreground/10 hover:border-primary/50 transition-colors group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="text-primary mb-4 p-3 bg-primary/10 w-max rounded-xl">
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {area.value}
              </h3>
              <p className="text-sm font-medium text-muted-foreground">
                {area.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
