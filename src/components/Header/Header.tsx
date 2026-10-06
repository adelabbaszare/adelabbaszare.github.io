import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants, MotionProps } from "framer-motion";
import { Menu, X, Sun, Moon, Hexagon } from "lucide-react";
import { useLenis } from "lenis/react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Career", href: "#career" },
  { name: "Projects", href: "#projects" },
];

export default function Header() {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return;

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const scrollY = window.scrollY;
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;

    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.left = "0";
    bodyStyle.right = "0";
    bodyStyle.width = "100%";
    bodyStyle.overflow = "hidden";
    htmlStyle.overflow = "hidden";

    return () => {
      bodyStyle.position = "";
      bodyStyle.top = "";
      bodyStyle.left = "";
      bodyStyle.right = "";
      bodyStyle.width = "";
      bodyStyle.overflow = "";
      htmlStyle.overflow = "";

      window.scrollTo(0, scrollY);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScrollTo = (id: string) => {
    closeMobileMenu();

    requestAnimationFrame(() => {
      if (lenis) {
        lenis.scrollTo(id);
      } else {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  const menuVariants: Variants = {
    open: {
      clipPath: "circle(1500px at 90% 5%)",
      transition: { type: "spring", stiffness: 20, restDelta: 2 },
    },
    closed: {
      clipPath: "circle(0px at 90% 5%)",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const listVariants: Variants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const itemVariants: Variants = {
    open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
    closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0, transition: { duration: 0.4 } }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
          <div className="glass-panel w-full max-w-4xl rounded-[2rem] flex items-center justify-between px-6 py-4 shadow-xl">
            <a
              onClick={() => handleScrollTo("#hero")}
              className="cursor-pointer font-bold text-xl flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Hexagon size={18} fill="currentColor" />
              </div>
            </a>

            <nav className="hidden md:flex flex-1 justify-center">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <motion.li key={item.name} className="relative group text-sm font-medium text-muted-foreground transition-colors">
                    <a onClick={() => handleScrollTo(item.href)} className="cursor-pointer hover:text-foreground">
                      {item.name}
                    </a>
                    <motion.span
                      className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-primary/80 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.8)]"
                      initial={{ width: 0, x: "-50%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors hidden md:flex items-center justify-center border border-transparent hover:border-foreground/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === "dark" ? (
                    <motion.div key="moon" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Moon size={18} className="text-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div key="sun" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Sun size={18} className="text-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-foreground hover:text-primary transition-colors p-2"
                aria-label="Open mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                {...({
                  initial: "closed",
                  animate: "open",
                  exit: "closed",
                  variants: menuVariants,
                } as MotionProps)}
                className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center overflow-hidden overscroll-none"
              >
                <motion.button
                  onClick={closeMobileMenu}
                  className="absolute top-8 right-8 text-foreground"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  aria-label="Close mobile menu"
                >
                  <X size={32} />
                </motion.button>

                <motion.ul
                  {...({ variants: listVariants } as MotionProps)}
                  className="flex flex-col items-center justify-center h-full space-y-10"
                >
                  {navItems.map((item) => (
                    <motion.li key={item.name} {...({ variants: itemVariants } as MotionProps)}>
                      <a
                        onClick={() => handleScrollTo(item.href)}
                        className="text-4xl font-bold text-muted-foreground hover:text-primary hover:tracking-wider transition-all cursor-pointer"
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
