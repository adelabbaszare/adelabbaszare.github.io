import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "ADHD EEG Classification",
      subtitle: "EEG signal analysis and ADHD vs. Control classification using machine learning and deep learning.",
      link: "https://github.com/adelabbaszare/ADHD_Classification_EEG",
      image: "/images/projects/adhd-eeg-classification.jpg",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      title: "MS Lesion Segmentation",
      subtitle: "Medical image segmentation project using U-Net and a Streamlit-based interface.",
      link: "https://github.com/adelabbaszare/MS-Lesion-Segmentation-Streamlit",
      image: "/images/projects/ms-lesion-segmentation.webp",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      title: "Learning Management System",
      subtitle: "Full-stack LMS built with Django REST Framework, Vue 3, and Tailwind CSS.",
      link: "https://github.com/adelabbaszare/Learning_management_system",
      image: "/images/projects/Learning_management_system.webp",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      title: "AI News Telegram Bot",
      subtitle: "Automated AI news aggregation, summarization, and Telegram publishing pipeline.",
      link: "https://github.com/adelabbaszare/AI-News-Telegram-Bot",
      image: "/images/projects/AI-News-Telegram-Bot.webp",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 5,
      title: "Mashhad Housing Market Analysis",
      subtitle: "Data analysis and visualization of apartment sales and housing market trends in Mashhad.",
      link: "https://github.com/adelabbaszare/Mashhad-housing-market-price-analysis",
      image: "/images/projects/mashhad-housing-market-analysis.jpg",
      className: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
          Selected <span className="text-gradient-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl">
          A selection of my work across AI, machine learning, data analysis, and full-stack software development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className={`group relative overflow-hidden rounded-[2rem] block shadow-xl ${project.className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="absolute inset-0 bg-neutral-900 border border-white/10 rounded-[2rem] overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
              <div className="flex items-end justify-between gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.subtitle}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rotate-45 group-hover:rotate-0 z-10">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
