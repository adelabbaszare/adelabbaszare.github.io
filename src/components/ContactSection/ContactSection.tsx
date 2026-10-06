import { motion } from "framer-motion";
import { Send, MapPin, Mail, Github, Linkedin, GraduationCap } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-[3rem] border border-foreground/10 relative overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Let's <span className="text-gradient-primary">Connect</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I am open to AI/ML and software engineering opportunities, research collaborations,
                and technically challenging projects. Feel free to reach out for professional inquiries,
                project discussions, or research collaboration.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:adelzre@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">learningwithadel@gmail.com</span>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">Mashhad, Iran</span>
              </div>

              <a href="https://github.com/adelabbaszare" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <span className="font-medium">GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/adel-abbaszare/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>

              <a href="https://scholar.google.com/citations?user=K2Umz54AAAAJ&hl=en" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-medium">Google Scholar</span>
              </a>
            </div>
          </div>

          <div className="flex-1 glass-panel p-8 rounded-[2rem] border border-foreground/10 relative">
            <form
              className="space-y-4"
              action="mailto:adelzre@gmail.com"
              method="POST"
              encType="text/plain"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Your Name</label>
                <input
                  id="name"
                  name="Name"
                  type="text"
                  required
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Your Email</label>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  required
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                <textarea
                  id="message"
                  name="Message"
                  rows={5}
                  required
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-muted-foreground/50"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] mt-6"
              >
                Send Message <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
