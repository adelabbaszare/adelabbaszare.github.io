# عادل عباسزاده — وب‌سایت شخصی و Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?logo=framer&logoColor=white)](https://motion.dev/)
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/adelabbaszare/adelabbaszare.github.io/ci.yml?branch=main&label=CI)](https://github.com/adelabbaszare/adelabbaszare.github.io/actions/workflows/ci.yml)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222?logo=github&logoColor=white)](https://pages.github.com/)

**[English](./README.md) | فارسی**

یک وب‌سایت شخصی مدرن و واکنش‌گرا با تمرکز بر مهندسی هوش مصنوعی و یادگیری ماشین، پژوهش، توسعه نرم‌افزار و معرفی پروژه‌های فنی منتخب.

این وب‌سایت به‌صورت یک برنامه استاتیک React با معماری کامپوننت‌محور، TypeScript، Vite و Tailwind CSS ساخته شده و به‌صورت خودکار روی GitHub Pages منتشر می‌شود.

## ✨ ویژگی‌های اصلی

- تجربه کاربری واکنش‌گرا برای دسکتاپ، تبلت و موبایل.
- پشتیبانی از تغییر حالت تاریک و روشن با ذخیره ترجیح کاربر.
- منوی ناوبری متحرک و منوی اختصاصی برای موبایل.
- اسکرول نرم با استفاده از Lenis.
- انیمیشن‌ها و افکت‌های نمایشی با Framer Motion.
- رابط کاربری مدرن با سبک Glassmorphism و سیستم رنگی بنفش/آبی.
- بخش‌های معرفی، خدمات، پروژه‌ها، سوابق شغلی، تحصیلات، نظرات و تماس.
- کارت‌های پروژه با لینک مستقیم به مخازن GitHub.
- ساختار کامپوننتی و قابل نگهداری در React.
- تنظیمات Strict در TypeScript و کنترل کیفیت کد با ESLint.
- CI خودکار برای بررسی lint و build تولیدی.
- استقرار خودکار در GitHub Pages با هر push به شاخه `main`.

## 🧰 فناوری‌های مورد استفاده

| دسته | فناوری‌ها |
| --- | --- |
| رابط کاربری | React 19، TypeScript |
| Build | Vite 7 |
| استایل | Tailwind CSS 4 |
| انیمیشن | Framer Motion |
| اسکرول نرم | Lenis |
| آیکون‌ها | Lucide React |
| فونت | Geist Sans با Fontsource |
| کنترل کیفیت | ESLint، TypeScript |
| استقرار | GitHub Pages |
| اتوماسیون | GitHub Actions |

> **نکته:** خود این وب‌سایت با React ساخته شده است. فناوری‌هایی مانند Django، Vue.js، Python، PyTorch، MNE-Python و سایر ابزارها بخشی از استک کلی توسعه و پژوهش عادل هستند و در محتوای Portfolio معرفی می‌شوند، اما وابستگی اجرایی این وب‌سایت نیستند.

## 📁 ساختار پروژه

```text
adelabbaszare.github.io/
├── .github/
│   └── workflows/
│       ├── ci.yml                 # بررسی lint و production build
│       └── deploy.yml             # استقرار در GitHub Pages
├── public/
│   └── images/                    # تصاویر پروفایل، پروژه‌ها و نظرات
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

## 🚀 راه‌اندازی پروژه

### پیش‌نیازها

- Node.js نسخه 20 یا بالاتر
- npm نسخه 10 یا بالاتر پیشنهاد می‌شود
- Git

### نصب

ابتدا مخزن را Clone کنید:

```bash
git clone https://github.com/adelabbaszare/adelabbaszare.github.io.git
cd adelabbaszare.github.io
```

سپس نسخه‌های دقیق وابستگی‌های ثبت‌شده در lockfile را نصب کنید:

```bash
npm ci
```

### اجرای محیط توسعه

```bash
npm run dev
```

Vite سرور توسعه محلی را اجرا می‌کند و آدرس آن را در ترمینال نمایش می‌دهد.

### ساخت نسخه Production

```bash
npm run build
```

خروجی نهایی در پوشه `dist/` تولید می‌شود.

### مشاهده نسخه Production به‌صورت محلی

```bash
npm run preview
```

## 🧪 بررسی کیفیت و تست

در وضعیت فعلی، لایه اعتبارسنجی خودکار پروژه بر پایه ESLint و بررسی موفقیت TypeScript/Vite در ساخت نسخه Production است.

اجرای lint:

```bash
npm run lint
```

اجرای کامل بررسی build:

```bash
npm run build
```

GitHub Actions این بررسی‌ها را برای pushها و Pull Requestهای مربوط به `main` به‌صورت خودکار اجرا می‌کند.

## 🔄 Continuous Integration

Workflow مربوط به CI در [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) قرار دارد و بررسی می‌کند که پروژه بدون خطای lint و قابل build باشد.

مراحل CI:

1. دریافت کد مخزن.
2. نصب Node.js.
3. اجرای `npm ci`.
4. اجرای `npm run lint`.
5. اجرای `npm run build`.

Workflow استقرار در [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) جدا نگه داشته شده و پس از push به `main`، پوشه `dist/` را روی GitHub Pages منتشر می‌کند.

## 🌐 استقرار

این Portfolio با استفاده از **GitHub Pages** منتشر می‌شود.

- Repository: https://github.com/adelabbaszare/adelabbaszare.github.io
- وب‌سایت: https://adelabbaszare.github.io/
- Workflow استقرار: [GitHub Actions](https://github.com/adelabbaszare/adelabbaszare.github.io/actions/workflows/deploy.yml)

Workflow استقرار با Node.js 20 پروژه را build کرده و پوشه `dist/` را با GitHub Pages Actions رسمی منتشر می‌کند.

## 📌 پروژه‌های منتخب

در Portfolio مجموعه‌ای از پروژه‌ها در حوزه‌های هوش مصنوعی، یادگیری ماشین، Medical AI، تحلیل داده و توسعه وب معرفی شده‌اند، از جمله:

- **Persian Sentiment Analysis of Digikala Comments** — خط لوله NLP فارسی شامل Web Scraping، پیش‌پردازش متن، TF-IDF، مدل‌های کلاسیک ML، Cross-Validation، pytest و CI.
- **MS Lesion Segmentation** — پروژه Segmentation تصاویر پزشکی با U-Net و رابط Streamlit.
- **Learning Management System** — سامانه LMS فول‌استک با Django REST Framework، Vue 3 و Tailwind CSS.
- **AI News Telegram Bot** — سامانه خودکار جمع‌آوری، خلاصه‌سازی و انتشار اخبار هوش مصنوعی در Telegram.
- **Mashhad Housing Market Analysis** — تحلیل و مصورسازی داده‌های معاملات و روند بازار مسکن مشهد.

برای آخرین توضیحات و لینک پروژه‌ها، Portfolio آنلاین را مشاهده کنید.

## 🎨 طراحی و تجربه کاربری

رابط کاربری پروژه بر پایه یک زبان بصری مدرن طراحی شده است:

- گرادیان‌های بنفش و آبی.
- پنل‌های Glassmorphism.
- Layout واکنش‌گرا.
- اسکرول نرم و Transitionهای مبتنی بر Motion.
- پشتیبانی از Dark و Light Mode.
- رفتار مناسب ناوبری در موبایل.
- استفاده از Labelهای دسترس‌پذیر برای کنترل‌های تعاملی و لینک پروژه‌ها.

## 🔗 لینک‌ها

- **Portfolio:** https://adelabbaszare.github.io/
- **GitHub:** https://github.com/adelabbaszare
- **LinkedIn:** https://www.linkedin.com/in/adel-abbaszare/
- **LearnwithAdel:** https://learnwithadel.ir/

## 📄 مجوز

این مخزن شامل وب‌سایت شخصی Portfolio و کد منبع آن است. مگر در مواردی که خلاف آن ذکر شده باشد، کد منبع اصلی و دارایی‌های شخصی متعلق به عادل عباسزاده هستند.

کتابخانه‌ها، آیکون‌ها، فونت‌ها و سایر وابستگی‌های شخص ثالث تابع مجوزهای مربوط به خود هستند.

---

**English | [فارسی](./README_fa.md)**
