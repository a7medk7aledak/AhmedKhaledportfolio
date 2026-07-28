// Personal Information
export const PERSONAL_INFO = {
  name: "Ahmed Khaled",
  title: "Software Engineer",
  subtitle: "Full Stack Developer",
  location: "Alexandria, Egypt",
  email: "ahmadkhaled20011@gmail.com",
  phone: "+20 01005701983",
  website: "https://ahmed-khaled-portfolio.vercel.app",
  resume: "/assets/Ahmed-Khaled-Resume.pdf"
};

// Hero Section Content
export const HERO_CONTENT = `Hi, I am Ahmed Khaled, a Full-Stack Software Engineer specializing in building scalable, high-performance web platforms using modern JavaScript and Python ecosystems — including React, Next.js, Node.js, Django, Exprees, Nuxtjs, PostgreSQL, and MongoDB.

I transform ideas into fully functional, production-ready digital products through solid architectural planning, clean code, and a deep understanding of system design. I design and implement robust application architectures, including modular monoliths and microservices, ensuring maintainability, scalability, and smooth user experience from end to end.

I help startups, companies, and freelance clients turn their concepts into real, reliable software — from initial planning and technical roadmap creation to development, deployment, and long-term optimization.`; 


// About Section Content
export const ABOUT_TEXT = `I am Ahmed Khaled, a Communications Engineering student and passionate Full-stack web developer. I specialize in the MERN stack and have experience with modern technologies including React, Next.js, TypeScript, Node.js, and MongoDB. I'm also skilled in Machine Learning, AI integration, and competitive programming (ECPC participant). My journey in web development is driven by curiosity and a commitment to creating efficient, user-friendly applications that solve real-world problems.`;

export const EXPERIENCES = [
  {
    year: "Oct 2023 - Jun 2024",
    role: "Full Stack Developer(MERN-Stack)",
    company: "Upwork",
    companyLogo: "https://res.cloudinary.com/dapho0f5c/image/upload/v1763132967/upwork_nqbiij.png",
    description: `Developed and deployed modern, responsive web applications using React.js, Next.js, and Tailwind CSS, ensuring high performance and scalability.
• Collaborated with international clients to transform design concepts into fully functional interfaces with optimized UX/UI flows.
• Implemented reusable components and clean architecture, reducing development time by 30% across multiple projects.
• Improved overall client satisfaction by 40%, resulting in repeat contracts and 5-star feedback ratings.`,
    technologies: [
      "react",
      "typescript",
      "Nextjs",
      "nodejs",
      "mongodb",
      "express",
      "tailwind",
      "Bootstrap",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Roshd — Multi-Tenant B2B SaaS Platform",
    slug: "roshd",
    image: "/roshed.png",
    description:
      "Architected a multi-tenant educational SaaS where a single shared backend engine powers two structurally different products (an Academy and a Teacher platform) via Strategy Pattern. Enforced PostgreSQL schema-per-tenant isolation, dynamic search-path routing, Celery provisioning, and full support for tenant sub-domains (e.g., tenant.roshed.tech) and custom domain SSL mappings. Built a concurrency-safe wallet, custom RBAC, LiveKit streams, and a Next.js 14 monorepo.",
    technologies: [
      "Next.js 14",
      "Django 5.2",
      "PostgreSQL",
      "Redis",
      "Celery",
      "LiveKit WebRTC",
      "Turborepo",
      "Docker"
    ],
    link: "https://roshed.tech/",
    github: "#",
    featured: true,
    status: "Production Release, 2026"
  },
  {
    title: "Lisān Al-Ḥikma — Educational Platform",
    slug: "lisan-al-hikma",
    image: "https://res.cloudinary.com/dapho0f5c/image/upload/v1763211336/%D8%AB23%D8%AB23%D8%AB3_kovjhc.png",
    description:
      "A comprehensive multi-mode learning platform supporting Recorded, Interactive, and Live learning experiences with real-time engagement via WebRTC and scalable microservices architecture. Features secure authentication, role-based access, and efficient video streaming with low latency.",
    technologies: [
      "Next.js",
      "Django",
      "WebRTC",
      "Docker",
      "PostgreSQL",
      "Redis",
      "Wasabi Storage",
      "GitHub Actions",
      "Render",
      "Vercel"
    ],
    link: "https://lisan-alhekma-main.vercel.app",
    github: "#",
    featured: true,
    status: "Production Release, 2025"
  },
  {
    title: "Sallam Physics — Educational Platform",
    slug: "sallam-physics",
    image: "/mohamed-sallam.png",
    description:
      "An interactive educational platform designed for physics students, featuring online video lectures, homework submissions, instant exam grading, and detailed performance tracking dashboard.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel"
    ],
    link: "https://mohamed-sallam.com",
    github: "#",
    featured: true,
    status: "Production Release, 2025"
  },
  {
    title: "Afaq Academy — Educational Platform",
    slug: "afaq-academy",
    image: "/afaq-academy.png",
    description:
      "A comprehensive Arabic (RTL) e-learning platform unifying Islamic studies (Quran, Tajweed, Fiqh), Arabic language, modern foreign languages, programming/tech, and academic subjects under one modern learning experience. Supports live 1-on-1 and small-group teaching sessions today, with recorded and interactive course modes in active development, alongside a student toolkit including a digital library, prayer times, Qibla direction, and a Quran reader.",
    technologies: [
      "Next.js",
      "React",
      "Bootstrap 5",
      "RTL/Arabic UI",
      "Responsive Design"
    ],
    link: "https://afaq-academy.online/",
    github: "#",
    featured: true,
    status: "Production Release, 2026"
  },
  {
    title: "VitaPsyche — AI-Powered Mental Health Platform",
    slug: "vitapsyche",
    image: "/Vitapsyche.png",
    description:
      "A graduation project addressing gaps in mental health care by combining AI-powered emotional assessment, an empathetic virtual support character (Lina), and real-time online consultations with psychiatrists via booking, chat, and video. Served as team leader, running the project with Agile/Jira, designing the system architecture with the C4 Model and UML, and building the Django + MySQL backend alongside the AI diagnosis models.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Django",
      "MySQL",
      "MongoDB",
      "Rasa",
      "Hugging Face",
      "TensorFlow",
      "Flutter",
      "Figma"
    ],
    link: "https://mind-med-graduation-project.vercel.app/en",
    github: "#",
    featured: true,
    status: "Graduation Project, 2025"
  },
  {
    title: "Al-Awael Private School — Website",
    slug: "al-awael-private-school",
    image: "/alawaelprivate.png",
    description:
      "A multi-section marketing and information website for a private school, covering admissions, academic stages (kindergarten through secondary), news, video gallery, and parent testimonials. Built the frontend end-to-end — responsive layout, animated hero sliders, and scroll-triggered animations — while a teammate handled the PHP backend.",
    technologies: [
      "Tailwind CSS",
      "jQuery",
      "Swiper.js",
      "AOS (Animate On Scroll)",
      "Font Awesome",
      "Responsive Design"
    ],
    link: "https://alawaelprivate.com/",
    github: "#",
    featured: false,
    status: "Production Release, 2025"
  },
  {
    title: "Capsule Gym",
    slug: "capsule-gym",
    image: "https://res.cloudinary.com/dapho0f5c/image/upload/v1763132959/project0_ipufke.png",
    description:
      "A full stack fitness project with many features including chatbot, BMI calculator, exercises for bodybuilding and fitness, and healthy food recommendations",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Tailwind CSS",
      "AI Chatbot",
    ],
    link: "https://capsulegym-v1.vercel.app/",
    github: "https://github.com/a7medk7aledak/capsulegym-V1",
  },
  {
    title: "BAK-Blog",
    slug: "bak-blog",
    image: "https://res.cloudinary.com/dapho0f5c/image/upload/v1763132742/blog_nvgveg.png",
    description:
      "A comprehensive blogging platform specialized in programming and technology topics, with additional sections for sports, nutrition, and fitness",
    technologies: ["Node.js", "MongoDB", "Express", "EJS", "Bootstrap"],
    link: "https://capsule-blog.onrender.com/",
    github: "https://github.com/a7medk7aledak/bak-blog",
  },
  {
    title: "Customer Management System",
    slug: "customer-management",
    image: "https://res.cloudinary.com/dapho0f5c/image/upload/v1763132952/project1_fvvgni.png",
    description:
      "An advanced client management platform designed to streamline and enhance customer relationship management with modern UI/UX",
    technologies: [
      "Node.js",
      "MongoDB",
      "Express",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
    ],
    link: "https://cilent-list-nodejs-project.onrender.com/",
    github: "https://github.com/a7medk7aledak/cilent-list-nodejs-project",
  },
  {
    title: "Blog-Gym",
    slug: "blog-gym",
    image: "https://res.cloudinary.com/dapho0f5c/image/upload/v1763132845/bloggym_rzy5eu.png",
    description:
      "A specialized blogging platform focused on fitness, nutrition, and gym-related content with user-friendly interface",
    technologies: ["Node.js", "MongoDB", "Express", "EJS", "Bootstrap"],
    link: "https://bak-blog-1.onrender.com/",
    github: "https://github.com/belalwws/capsule-blog",
  },
  {
    title: "Bindi Task Manager",
    slug: "bindi-task-manager",
    image: "/project-2.png",
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    link: "https://a7medk7aledak.github.io/Project-bootstrap/",
    github: "https://github.com/a7medk7aledak/Project-bootstrap",
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    image: "https://res.cloudinary.com/dapho0f5c/image/upload/v1763132953/project-3_wuutjz.png",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information with modern design",
    technologies: ["HTML5", "CSS3", "Next.js", "Tailwind CSS"],
    link: "https://nextjsproject-jet.vercel.app/",
    github: "https://github.com/a7medk7aledak/small-project-nextjs",
  },
  {
    title: "Social Media Platform",
    slug: "social-media",
    image: "/project-4.png",
    description:
      "A responsive social media platform with features like post creation/deletion, user authentication, and light/dark mode toggle",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://666b6ccae5d72bc237cf7e1f--chimerical-sprite-ba8f2f.netlify.app/",
    github: "https://github.com/a7medk7aledak/social-media-platform-project",
  },
  {
    title: "Personal Website",
    slug: "personal-website",
    image: "/project-7.png",
    description:
      "A modern personal website built with SASS, featuring clean design and smooth animations",
    technologies: ["HTML5", "CSS3", "SASS", "JavaScript"],
    link: "https://a7medk7aledak.github.io/SassProject-personalWebside/",
    github: "https://github.com/a7medk7aledak/SassProject-personalWebside",
  },
  {
    title: "Template 2",
    slug: "template-2",
    image: "https://res.cloudinary.com/dapho0f5c/image/upload/v1763132965/project-6_snmh3d.png",
    description:
      "A responsive website template with modern design principles and clean code structure",
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    link: "https://belalwws.github.io/HTML_CSS_TEMP-2/",
    github: "https://github.com/a7medk7aledak/templet2-elzero",
  },
  {
    title: "My Template 1",
    slug: "template-1",
    image: "https://res.cloudinary.com/dapho0f5c/image/upload/v1763132951/project-5_zopc2l.png",
    description:
      "A custom website template featuring interactive elements and modern web development practices",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    link: "https://a7medk7aledak.github.io/MyTemple1/",
    github: "https://github.com/a7medk7aledak/MyTemple1",
  },
  {
    title: "My Template 2",
    slug: "my-template-2",
    image: "/project-8.png",
    description:
      "An advanced website template with enhanced functionality and user experience features",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    link: "https://a7medk7aledak.github.io/MyTemple2/",
    github: "https://github.com/a7medk7aledak/MyTemple2",
  },
];

export const CONTACT = {
  address: "Sidi Bishr, Alexandria, Egypt",
  phoneNo: "+20 01005701983",
  email: "ahmadkhaled20011@gmail.com",
};

// Social Media Links
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/%E2%80%AAahmed-khaled-a3852b21a/",
  github: "https://github.com/a7medk7aledak",
};

// Technologies Data
export const TECHNOLOGIES = {
  frontend: [
    { name: "React", icon: "RiReactjsLine", color: "text-cyan-400" },
    { name: "Next.js", icon: "TbBrandNextjs", color: "text-white" },
    { name: "TypeScript", icon: "SiTypescript", color: "text-blue-400" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "text-cyan-500" },
  ],
  backend: [
    { name: "Node.js", icon: "FaNodeJs", color: "text-green-500" },
    { name: "Express", icon: "SiExpress", color: "text-gray-400" },
    { name: "MongoDB", icon: "SiMongodb", color: "text-green-500" },
    { name: "PostgreSQL", icon: "BiLogoPostgresql", color: "text-sky-700" },
  ],
  tools: [
    { name: "Git", icon: "FaGitAlt", color: "text-orange-500" },
    { name: "Docker", icon: "FaDocker", color: "text-blue-500" },
    { name: "Redis", icon: "DiRedis", color: "text-red-700" },
    { name: "Vercel", icon: "SiVercel", color: "text-white" },
  ]
};

// Navigation Items
export const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Technologies", href: "#technologies" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Skills Data
export const SKILLS = {
  technical: [
    "JavaScript/TypeScript",
    "React.js & Next.js",
    "Node.js & Express",
    "MongoDB & PostgreSQL",
    "RESTful APIs",
    "Git & Version Control",
    "Responsive Design",
    "Agile Development"
  ],
  soft: [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Continuous Learning",
    "Attention to Detail"
  ]
};

// My Numbers Data
export const MY_NUMBERS = [
  { number: 2, label: "Years of Coding", suffix: "+" },
  { number: 40, label: "Projects Completed", suffix: "+" },
  { number: 10, label: "Technologies Mastered", suffix: "+" },
  { number: 20, label: "Frameworks & Libraries Used", suffix: "+" },
];