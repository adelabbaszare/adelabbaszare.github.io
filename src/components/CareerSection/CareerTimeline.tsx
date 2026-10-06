import { ScrollTimeline } from "../lightswind/scroll-timeline";
import {
  Briefcase,
  GraduationCap,
  Shield,
  Code2,
  BrainCircuit,
  BookOpen,
} from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2025 – Present",
      title: "M.Sc. Student — Artificial Intelligence",
      subtitle: "Islamic Azad University of Mashhad",
      description:
        "Pursuing an M.Sc. in Computer Engineering with a focus on Artificial Intelligence. Research interests include EEG and biomedical signal processing, brain connectivity, computational neuroscience, AI for healthcare, and neuropsychiatric applications.",
      icon: <BrainCircuit className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025 – Present",
      title: "Software Developer & Data Analyst",
      subtitle: "Mashhad, Iran",
      description:
        "Developing end-to-end web applications with Django/DRF and React, while building reusable Python workflows for data cleaning, preprocessing, analysis, visualization, and data-driven reporting. Uses AI-assisted development tools for prototyping, debugging, code review, testing, and documentation.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024",
      title: "Teaching Assistant — Computer Engineering",
      subtitle: "Islamic Azad University of Mashhad",
      description:
        "Taught algorithms, data structures, and object-oriented programming in C++. Reviewed student projects and provided feedback on debugging, software quality, and clean-code practices.",
      icon: <Code2 className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023",
      title: "IT Support Specialist",
      subtitle: "Islamic Culture and Communication Organization",
      description:
        "Maintained internal LAN infrastructure and endpoint security software, troubleshooting connectivity and system-reliability issues.",
      icon: <Shield className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Feb 2022 – Oct 2023",
      title: "Mandatory Military Service",
      subtitle: "Iranian Army — Air Defense Force",
      description:
        "Completed mandatory military service in an air defense unit. Served as a sergeant and trained team member, gaining experience in teamwork, accountability, decision-making under pressure, discipline, and time management.",
      icon: <Shield className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023 – 2025",
      title: "B.Sc. — Computer Software Engineering",
      subtitle: "Islamic Azad University of Mashhad",
      description:
        "Completed a B.Sc. in Computer Software Engineering, building a foundation in software engineering, programming, algorithms, data structures, and computer science.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2017 – 2020",
      title: "A.S. — Materials Science and Engineering",
      subtitle: "Ferdowsi University of Mashhad",
      description:
        "Completed an Associate of Science degree in Materials Science and Engineering.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025 – Present",
      title: "Research & AI Projects",
      subtitle: "EEG, Biomedical AI & Machine Learning",
      description:
        "Developing an EEG-based ADHD vs. Control classification research pipeline using Python and PyTorch, with emphasis on preprocessing, representation learning, subject-level validation, robust evaluation, and error analysis.",
      icon: <BookOpen className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career & Education"
        subtitle="A journey across software engineering, AI research, data analysis, and computer engineering"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
