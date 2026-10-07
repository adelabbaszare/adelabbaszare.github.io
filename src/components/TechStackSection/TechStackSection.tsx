import { motion } from "framer-motion";

type Technology = {
  name: string;
  logo: string;
};

const technologies: Technology[] = [
  { name: "Python", logo: "https://cdn.simpleicons.org/python" },
  { name: "PyTorch", logo: "https://cdn.simpleicons.org/pytorch" },
  { name: "TensorFlow", logo: "https://cdn.simpleicons.org/tensorflow" },
  { name: "MNE-Python", logo: "https://mne.tools/stable/_images/mne_logo.svg" },
  { name: "scikit-learn", logo: "https://cdn.simpleicons.org/scikitlearn" },
  { name: "Django", logo: "https://cdn.simpleicons.org/django" },
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "Vue.js", logo: "https://cdn.simpleicons.org/vuedotjs" },
  { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
  { name: "SQL", logo: "https://cdn.simpleicons.org/postgresql" },
  { name: "Linux", logo: "https://cdn.simpleicons.org/linux" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
  { name: "Pandas", logo: "https://cdn.simpleicons.org/pandas" },
  { name: "Numpy", logo: "https://cdn.simpleicons.org/numpy" },
  { name: "Jupyter", logo: "https://cdn.simpleicons.org/jupyter" },
];

const TechStackSection = () => {
  const marqueeItems = [...technologies, ...technologies];

  return (
    <div className="w-full py-6 border-t border-foreground/5 bg-foreground/[0.02] flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="w-full overflow-hidden relative flex items-center"
      >
        {/* Gradients to fade edges */}
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Animation */}
        <div className="flex w-max animate-[marquee_36s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused]">
          {marqueeItems.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              title={tech.name}
              className="group mx-3 sm:mx-4 px-4 sm:px-5 py-3 rounded-2xl border border-foreground/10 bg-background/50 backdrop-blur-sm text-muted-foreground transition-all hover:text-foreground hover:border-primary/50 hover:bg-foreground/5 hover:-translate-y-0.5 cursor-default shadow-sm flex items-center gap-3"
            >
              <span className="flex h-7 w-7 items-center justify-center shrink-0 rounded-lg bg-foreground/5 p-1.5">
                <img
                  src={tech.logo}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-contain opacity-80 transition-opacity group-hover:opacity-100"
                />
              </span>
              <span className="text-sm font-semibold tracking-wide">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default TechStackSection;
