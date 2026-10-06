import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ServicesSection } from "./components/ServicesSection/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { EducationSection } from "./components/EducationSection/EducationSection";
import { CareerTimeline } from "./components/CareerSection/CareerTimeline";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import ReactLenis from "lenis/react";
import { Home, User, GraduationCap, Briefcase, FolderKanban, Send, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [showDock, setShowDock] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const footer = document.querySelector("footer");
      const footerTop = footer ? footer.getBoundingClientRect().top + currentScrollY : Infinity;
      const viewportBottom = currentScrollY + window.innerHeight;

      if (currentScrollY < window.innerHeight * 0.5 || viewportBottom >= footerTop) {
        setShowDock(false);
      } else if (currentScrollY > lastScrollY) {
        setShowDock(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const dockItems = [
    { icon: <Home size={22} />, label: "Home", onClick: () => scrollToSection("hero") },
    { icon: <User size={22} />, label: "About", onClick: () => scrollToSection("about") },
    { icon: <Briefcase size={22} />, label: "Career", onClick: () => scrollToSection("career") },
    { icon: <FolderKanban size={22} />, label: "Projects", onClick: () => scrollToSection("projects") },
    { icon: <GraduationCap size={22} />, label: "Education", onClick: () => scrollToSection("education") },
    { icon: <MessageSquare size={22} />, label: "Testimonials", onClick: () => scrollToSection("testimonials") },
    { icon: <Send size={22} />, label: "Contact", onClick: () => scrollToSection("contact") },
  ];

  return (
    <div className="bg-transparent min-h-screen relative overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <ReactLenis root options={{ smoothWheel: true, duration: 1.2 }}>
        <Header />

        <main className="w-full flex flex-col pt-10 border-none">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <CareerTimeline />
          <EducationSection />
          <TestimonialsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="w-full py-12 text-center text-muted-foreground border-t border-foreground/10 mt-20 relative z-10 glass-panel border-b-0 rounded-t-[3rem]">
          <p className="text-sm">
            © {new Date().getFullYear()} Adel Abbaszare. AI & Software Engineer.
          </p>
        </footer>

        {/* Floating Dock */}
        <AnimatePresence>
          {showDock && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] glass-panel px-4 py-2 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-foreground/10 hidden md:flex items-center gap-1"
            >
              {dockItems.map((item, i) => (
                <button
                  key={i}
                  onClick={item.onClick}
                  className="p-3 text-muted-foreground hover:text-primary hover:bg-foreground/5 rounded-full transition-colors relative group"
                  title={item.label}
                >
                  {item.icon}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </ReactLenis>
    </div>
  );
}

export default App;

