import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Github, Linkedin, Send } from "lucide-react";
import TechStackSection from "../TechStackSection/TechStackSection";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[100vh] flex flex-col pt-20 overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 pb-16">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-6 md:pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel mb-6 border-foreground/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-muted-foreground">Available for work</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm <br className="hidden md:block" />
            <span className="text-gradient-primary">Adel Abbaszare</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            AI & Software Engineer focused on machine learning, intelligent systems, and modern web development. I enjoy turning ideas and research into practical, well-engineered solutions.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#projects" className="h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-1">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="h-12 px-6 rounded-full glass-panel text-foreground font-semibold flex items-center gap-2 hover:bg-foreground/10 transition-all hover:-translate-y-1">
              Contact Me <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-5 justify-center md:justify-start w-full md:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { label: "GitHub", href: "https://github.com/adelabbaszare", Icon: Github },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/adel-abbaszare/", Icon: Linkedin },
              { label: "Google Scholar", href: "https://scholar.google.com/citations?user=K2Umz54AAAAJ&hl=en", Icon: BookOpen },
              { label: "Telegram", href: "https://t.me/adelzre", Icon: Send },
            ].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-1 transform duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Visual */}
        <motion.div 
          className="flex-1 w-full max-w-[280px] sm:max-w-sm md:max-w-md relative pb-10 overflow-visible"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-[2rem] transform rotate-3 scale-105 pointer-events-none" />
          
          <div className="glass-panel p-2 rounded-[2rem] relative z-10 shadow-2xl">
            <img 
              src="/images/profile/adel-zare.webp"
              alt="Adel Zare"
              className="w-full aspect-[4/5] object-cover rounded-[1.5rem] filter contrast-125 hover:scale-105 transition-transform duration-700 select-none"
            />
          </div>

          {/* Floating Tags */}
          <motion.div
            className="absolute top-8 -left-3 md:-left-8 z-20 glass-panel px-4 py-2 rounded-xl text-xs font-semibold shadow-xl whitespace-nowrap"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Python · AI / ML
          </motion.div>
          <motion.div
            className="absolute bottom-14 -right-3 md:-right-8 z-20 glass-panel px-4 py-2 rounded-xl text-xs font-semibold shadow-xl whitespace-nowrap"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            React · Django
          </motion.div>
        </motion.div>

      </div>

      {/* Marquee appended natively to the bottom to span Full Width */}
      <div className="w-full relative z-10 mt-auto">
        <TechStackSection />
      </div>
    </section>
  );
};

