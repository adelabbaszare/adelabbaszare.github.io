import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "GraphQL", 
  "Tailwind CSS", "Framer Motion", "MongoDB", "PostgreSQL", 
  "AWS", "Docker", "Kubernetes", "Redis", "Figma", "Redux"
];

const TechStackSection = () => {
  return (
    <div className="w-full py-6 border-t border-foreground/5 bg-foreground/[0.02] flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }} // delayed so it fades in after hero
        viewport={{ once: true }}
        className="w-full overflow-hidden relative flex items-center"
      >
        {/* Gradients to fade edges */}
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Marquee Animation */}
        <div className="flex w-max animate-[marquee_30s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused]">
          {[...technologies, ...technologies].map((tech, i) => (
            <div 
              key={i} 
              className="mx-6 px-6 py-3 rounded-full border border-foreground/10 bg-background/50 backdrop-blur-sm text-muted-foreground font-semibold tracking-wider text-sm transition-colors hover:text-foreground hover:border-primary/50 hover:bg-foreground/5 cursor-default shadow-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* Shifts exactly exactly one set of the items */
        }
      `}} />
    </div>
  );
};

export default TechStackSection;
