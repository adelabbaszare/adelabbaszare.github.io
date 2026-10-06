import { motion } from "framer-motion";
import {
  BrainCircuit,
  BookOpen,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: "AI & Machine Learning",
    description:
      "Developing practical machine learning and deep learning solutions for classification, data analysis, and intelligent systems using Python and modern ML frameworks.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "AI Research & Academic Projects",
    description:
      "Working on research-oriented AI projects in areas such as EEG analysis, NeuroAI, and medical AI, with a focus on reproducible experiments and scientific methodology.",
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Building modern web applications and full-stack projects with React, Vue, Tailwind CSS, Django, and Django REST Framework.",
    color: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500/50",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "AI-Assisted Development",
    description:
      "Using tools such as ChatGPT, Claude, and Cursor for AI pair programming, code review, debugging, test generation, documentation, and more efficient development workflows.",
    color: "from-green-500/20 to-emerald-500/20",
    border: "group-hover:border-green-500/50",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient-primary">
          What I Do
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Combining AI research, software engineering, and modern development
          tools to turn ideas into practical and well-engineered solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className={`glass-panel p-8 rounded-[2rem] border border-foreground/10 transition-colors duration-500 group relative overflow-hidden ${service.border}`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div className="text-foreground/80 group-hover:text-foreground transition-colors mb-6 p-4 bg-foreground/5 w-max rounded-2xl glass-panel">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
