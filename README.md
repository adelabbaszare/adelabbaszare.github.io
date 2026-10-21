# Adel Abbaszare — Personal Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?logo=framer&logoColor=white)](https://motion.dev/)
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/adelabbaszare/adelabbaszare.github.io/ci.yml?branch=main&label=CI)](https://github.com/adelabbaszare/adelabbaszare.github.io/actions/workflows/ci.yml)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222?logo=github&logoColor=white)](https://pages.github.com/)

**English | [فارسی](./README_fa.md)**

A modern, responsive personal portfolio website for **Adel Abbaszare**, focused on AI/ML engineering, research, software development, and selected technical projects.

The site is built as a static React application with a component-based architecture, TypeScript, Vite, and Tailwind CSS. It is deployed automatically to GitHub Pages.

## ✨ Highlights

- Responsive portfolio experience for desktop, tablet, and mobile.
- Dark/light theme switching with persisted user preference.
- Animated navigation with responsive mobile menu.
- Smooth scrolling powered by Lenis.
- Motion and reveal animations powered by Framer Motion.
- Glassmorphism-inspired UI with a purple/blue visual system.
- Sections for profile, services, projects, career, education, testimonials, and contact.
- Dedicated project cards linking to GitHub repositories.
- Reusable React components organized by page section.
- Strict TypeScript configuration and ESLint-based code quality checks.
- Automated CI for linting and production builds.
- Automated GitHub Pages deployment on pushes to `main`.

## 🧰 Technology Stack

| Category | Technologies |
| --- | --- |
| UI | React 19, TypeScript |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Smooth scrolling | Lenis |
| Icons | Lucide React |
| Fonts | Geist Sans via Fontsource |
| Code quality | ESLint, TypeScript |
| Deployment | GitHub Pages |
| Automation | GitHub Actions |

> **Note:** The portfolio itself uses React. Technologies such as Django, Vue.js, Python, PyTorch, MNE-Python, and others are represented in the portfolio as part of Adel's broader development and research stack, but they are not runtime dependencies of this website.

## 📁 Project Structure

```text
adelabbaszare.github.io/
├── .github/
│   └── workflows/
│       ├── ci.yml                 # Lint + production build checks
│       └── deploy.yml             # GitHub Pages deployment
├── public/
│   └── images/                    # Profile, project, and testimonial assets
├── src/
│   ├── components/
│   │   ├── AboutSection/
│   │   ├── CareerSection/
│   │   ├── ContactSection/
│   │   ├── EducationSection/
│   │   ├── Header/
│   │   ├── HeroSection/
│   │   ├── ProjectsSection/
│   │   ├── ServicesSection/
│   │   ├── TechStackSection/
│   │   ├── TestimonialsSection/
│   │   └── lightswind/
│   ├── App.tsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer is recommended
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/adelabbaszare/adelabbaszare.github.io.git
cd adelabbaszare.github.io
```

Install the exact dependency versions recorded in the lockfile:

```bash
npm ci
```

### Start the development server

```bash
npm run dev
```

Vite will start the local development server and provide the local URL in the terminal.

### Production build

```bash
npm run build
```

The production output is generated in the `dist/` directory.

### Preview the production build

```bash
npm run preview
```

## 🧪 Quality Checks

The repository currently uses ESLint and TypeScript/Vite production builds as its automated validation layer.

Run linting locally:

```bash
npm run lint
```

Run the full production build check:

```bash
npm run build
```

GitHub Actions runs these checks automatically for pushes and pull requests targeting `main`.

## 🔄 Continuous Integration

The CI workflow is defined in [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) and validates that the application remains lint-clean and buildable.

The pipeline:

1. Checks out the repository.
2. Installs Node.js.
3. Runs `npm ci`.
4. Runs `npm run lint`.
5. Runs `npm run build`.

The deployment workflow remains separate in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) and publishes the `dist/` directory to GitHub Pages after changes are pushed to `main`.

## 🌐 Deployment

This portfolio is deployed through **GitHub Pages**.

- Repository: https://github.com/adelabbaszare/adelabbaszare.github.io
- Live website: https://adelabbaszare.github.io/
- Deployment workflow: [GitHub Actions](https://github.com/adelabbaszare/adelabbaszare.github.io/actions/workflows/deploy.yml)

The deployment workflow builds the application with Node.js 20 and publishes the generated `dist/` directory using the official GitHub Pages Actions.

## 📌 Featured Projects

The portfolio currently highlights projects across AI, machine learning, medical AI, data analysis, and web development, including:

- **Persian Sentiment Analysis of Digikala Comments** — Persian NLP pipeline with web scraping, preprocessing, TF-IDF, classical ML models, cross-validation, pytest, and CI.
- **MS Lesion Segmentation** — Medical image segmentation with U-Net and a Streamlit interface.
- **Learning Management System** — Full-stack LMS using Django REST Framework, Vue 3, and Tailwind CSS.
- **AI News Telegram Bot** — Automated AI news aggregation, summarization, and Telegram publishing.
- **Mashhad Housing Market Analysis** — Data analysis and visualization of apartment sales and housing-market trends.

See the live portfolio for the latest project descriptions and links.

## 🎨 Design & UX

The interface follows a modern visual language centered around:

- Purple and blue gradients.
- Glassmorphism panels.
- Responsive layouts.
- Smooth scrolling and motion-based transitions.
- Dark and light themes.
- Mobile-first navigation behavior.
- Accessible labels for interactive controls and project links.

## 👤 About Adel

**Adel Abbaszare** is an AI/ML Software Engineer and researcher working across:

- Artificial intelligence and machine learning
- Deep learning
- EEG and biomedical signal processing
- Medical AI
- Data analysis
- Modern web development

For professional details, research interests, and selected work, visit the portfolio and linked profiles.

## 🔗 Links

- **Portfolio:** https://adelabbaszare.github.io/
- **GitHub:** https://github.com/adelabbaszare
- **LinkedIn:** https://www.linkedin.com/in/adel-abbaszare/
- **LearnwithAdel:** https://learnwithadel.ir/

## 📄 License

This repository contains a personal portfolio website and its source code. Unless otherwise stated, the original source code and personal assets are the property of Adel Abbaszare.

Third-party libraries, icons, fonts, and other dependencies remain subject to their respective licenses.

---

**[English](./README.md) | فارسی**  
