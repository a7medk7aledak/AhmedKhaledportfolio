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
export const HERO_CONTENT = `Hi, I am Ahmed Khaled, a Full-Stack Software Engineer specializing in building scalable, high-performance web platforms — currently focused on Next.js and NestJS, with hands-on experience across React, Node.js, Express, Django, PostgreSQL, and MongoDB.

I transform ideas into fully functional, production-ready digital products through solid architectural planning, clean code, and a deep understanding of system design. I design and implement robust application architectures, including modular monoliths and microservices, ensuring maintainability, scalability, and smooth user experience from end to end.

I help startups, companies, and freelance clients turn their concepts into real, reliable software — from initial planning and technical roadmap creation to development, deployment, and long-term optimization.`; 


// About Section Content
export const ABOUT_TEXT = `I am Ahmed Khaled, a Full-Stack Software Engineer and Software Architect currently focused on Next.js and NestJS, alongside hands-on experience across React, TypeScript, Node.js, Express, Django, PostgreSQL, and MongoDB. I put a strong emphasis on system design — planning out project architecture, drawing system diagrams, and thinking through trade-offs before writing a single line of code. I work comfortably with modern AI tooling and orchestration as part of my engineering workflow, and apply the same discipline to debugging and testing that I do to building features. My work is driven by curiosity and a commitment to building efficient, reliable, and user-friendly applications that solve real-world problems.`;

export const EXPERIENCES = [
  {
    year: "Oct 2023 - Jan 2024",
    role: "Freelance Front-End Web Developer",
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
  {
    year: "Jan 2024 - Sep 2024",
    role: "Full Stack Engineer",
    company: "Mostaql.com | مستقل",
    companyLogo: "",
    description: `Delivered full-stack web applications for freelance clients through Mostaql, the Arab world's leading freelance marketplace, handling both frontend and backend development from planning through deployment.`,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
    ],
  },
  {
    year: "Oct 2024 - Mar 2025",
    role: "Frontend Developer",
    company: "QeemaTech",
    companyLogo: "",
    description: `Worked as a Frontend Developer on two separate platform projects for QeemaTech while still a student, building responsive, production-focused user interfaces with React.`,
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
    ],
  },
  {
    year: "Nov 2025 - Present",
    role: "Full-Stack Developer & Software Architect",
    company: "Roshd Tech",
    companyLogo: "/roshedTech.png",
    description: `Joined Roshd Tech immediately after graduating and have been with the team ever since, working as a Full-Stack Developer and the platform's lead software architect.
Roshd is a multi-tenant B2B SaaS platform serving educational academies and independent teachers. I've been responsible for architecting the platform end-to-end — from tenant management to the billing/wallet system, an admin control panel, role-based permissions, and live class streaming.
Refactored the backend from Flask to Django early on to support the team's scaling needs, and led the frontend rebuild as a Next.js monorepo. Still working full-time on the platform today as one of the company's core products.`,
    technologies: [
      "Next.js",
      "Django",
      "PostgreSQL",
      "Redis",
      "Docker",
      "CI/CD",
      "WebRTC",
      "LiveKit",
    ],
  },
];

export interface Project {
  title: string;
  slug: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  video?: string;
  featured?: boolean;
  status?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Roshd — Multi-Tenant B2B SaaS Platform",
    slug: "roshd",
    image: "/roshed.png",
    description:
      "Architected a multi-tenant educational SaaS where a single shared backend engine powers two structurally different products (an Academy and a Teacher platform) via Strategy Pattern. Enforced PostgreSQL schema-per-tenant isolation, dynamic search-path routing, Celery provisioning, and full support for tenant sub-domains (e.g., tenant.roshed.tech) and custom domain SSL mappings. Built a concurrency-safe wallet, custom RBAC, WebRTC streams, and a Next.js 14 monorepo.",
    technologies: [
      "Next.js 14",
      "Django 5.2",
      "PostgreSQL",
      "Redis",
      "Celery",
      "WebRTC",
      "LiveKit",
      "Turborepo",
      "Docker",
      "CI/CD"
    ],
    link: "https://roshed.tech/",
    github: "#",
    featured: true,
    status: "Production Release, 2026"
  },
  {
    title: "Spotlight Egypt — Event Management Platform",
    slug: "spotlight-egypt",
    image: "/spotlightegypt.png",
    description:
      "A ticketing and event-operations platform for an Egyptian concert/event promoter, architected and built solo end-to-end. In under three weeks the NestJS backend went from an empty skeleton to a near-complete platform — multi-provider auth with MFA, a full events/tickets catalog with two overselling-prevention strategies, Paymob payments with a checkout queue, ticket-level refunds, coupons, a BullMQ notification pipeline, and a live WebSocket analytics dashboard — all deployed on Render. The customer storefront UI is now being wired up to it.",
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Paymob",
      "WebSockets",
      "Tailwind CSS",
      "Docker",
      "CI/CD"
    ],
    link: "https://spotlightegypt.online/",
    github: "#",
    featured: true,
    status: "In Development, 2026"
  },
  {
    title: "Afaq Academy — Educational Platform",
    slug: "afaq-academy",
    image: "/afaq-academy.png",
    description:
      "A full-stack live-teaching platform for Gulf students — real-time 1-on-1 and small-group classes only, no recorded courses, sold through simple monthly session packages. Built end-to-end: a Next.js frontend with role-based dashboards (Admin, Teacher, Student, Academic Supervisor) on top of a Django REST backend, video powered by a self-hosted LiveKit SFU, with Celery/Redis handling background jobs, assignments/grading, and automated teacher payouts.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Django",
      "PostgreSQL",
      "Redis",
      "Celery",
      "LiveKit",
      "WebSockets",
      "Docker",
      "CI/CD"
    ],
    link: "https://afaq-academy.online/",
    github: "#",
    featured: true,
    status: "Production Release, 2026"
  },
  {
    title: "Taki Academy — Educational Platform",
    slug: "taki-academy",
    image: "/takiac-ademy-tonas.png",
    description:
      "A Tunisian online learning academy offering students structured access to courses and instructors through a fast, modern web experience. Built the entire frontend with Next.js — course browsing, enrollment flows, and a fully responsive, RTL-friendly interface.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "RTL/Arabic UI",
      "Responsive Design"
    ],
    link: "https://takiacademy.com/",
    github: "#",
    featured: true,
    status: "Production Release, 2026"
  },
  {
    title: "Garneau School — Website",
    slug: "garneau-school",
    image: "/garneauschool.png",
    description:
      "A modern marketing and information website for a private school in Morocco, covering admissions, academic programs, school life, and news. Built end-to-end with Next.js for a fast, fully responsive experience.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Responsive Design"
    ],
    link: "https://www.garneauschool.ma/",
    github: "#",
    featured: true,
    status: "Production Release, 2026"
  },
  {
    title: "GSPA — Private School Website",
    slug: "gspa-school",
    image: "/gspa.png",
    description:
      "A responsive Next.js website for a Moroccan private school, showcasing academic programs, admissions information, and school news with a clean, modern design.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Responsive Design"
    ],
    link: "https://gspa.ma/",
    github: "#",
    featured: false,
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
    github: "https://github.com/a7medk7aledak/VitaPsyche-Graduation-Project",
    featured: true,
    status: "Graduation Project, 2025"
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
    title: "Blog App",
    slug: "blog-app",
    image: "https://res.cloudinary.com/dapho0f5c/image/upload/v1763132742/blog_nvgveg.png",
    description:
      "A full-stack MERN blogging platform with a React (Vite) frontend and an Express/MongoDB backend, covering programming and technology topics alongside sports, nutrition, and fitness content.",
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    link: "https://full-stack-blog-app-nine-amber.vercel.app/",
    github: "https://github.com/a7medk7aledak/Full-Stack-BlogApp",
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
    title: "Bindi Task Manager",
    slug: "bindi-task-manager",
    image: "/project-2.png",
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    link: "https://project-bootstrap-lilac.vercel.app/",
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
    title: "HTML & CSS Course Template",
    slug: "html-css-course-template",
    image: "/templet-htmlcss-course.png",
    description:
      "A hands-on website template built as teaching material for an HTML & CSS course, covering layout, styling, and responsive design fundamentals for beginner students.",
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    link: "https://templet-htmlcss-course.vercel.app/",
    github: "https://github.com/a7medk7aledak/TempletHTMLCSSCourse",
    video: "https://www.youtube.com/watch?v=4axzLb35tj8",
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
    link: "https://sass-project-personal-webside.vercel.app/",
    github: "https://github.com/a7medk7aledak/SassProject-personalWebside",
  },
  {
    title: "Template 2",
    slug: "template-2",
    image: "https://res.cloudinary.com/dapho0f5c/image/upload/v1763132965/project-6_snmh3d.png",
    description:
      "A responsive website template with modern design principles and clean code structure",
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    link: "https://templet2-elzero.vercel.app/",
    github: "https://github.com/a7medk7aledak/templet2-elzero",
  },
  {
    title: "Template 1",
    slug: "template-1-elzero",
    image: "/templet1-elzero.png",
    description:
      "A responsive website template exploring modern layout and styling techniques, built during HTML/CSS/JS training practice.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://templet1-elzero.vercel.app/",
    github: "https://github.com/a7medk7aledak/templet1-elzero",
  },
  {
    title: "My Template 1",
    slug: "template-1",
    image: "https://res.cloudinary.com/dapho0f5c/image/upload/v1763132951/project-5_zopc2l.png",
    description:
      "A custom website template featuring interactive elements and modern web development practices",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    link: "https://my-temple1.vercel.app/",
    github: "https://github.com/a7medk7aledak/MyTemple1",
  },
  {
    title: "My Template 2",
    slug: "my-template-2",
    image: "/project-8.png",
    description:
      "An advanced website template with enhanced functionality and user experience features",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    link: "https://my-temple2.vercel.app/",
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
    "Next.js & NestJS (Primary Stack)",
    "Full-Stack Development (MERN + Python/Django)",
    "System Design & Software Architecture",
    "Multi-Tenant SaaS & Scalable Backends",
    "PostgreSQL, MySQL & MongoDB",
    "Docker & CI/CD",
    "Real-Time Systems (WebRTC & WebSockets)",
    "AI Tooling & Orchestration",
    "RESTful API Design"
  ],
  soft: [
    "Technical Leadership",
    "Client Communication & Requirement Gathering",
    "Agile Project Planning",
    "Cross-Functional Team Collaboration",
    "Problem Solving & Debugging",
    "Adaptability & Continuous Learning"
  ]
};

// My Numbers Data
export const MY_NUMBERS = [
  { number: 1, label: "Years of Coding", suffix: "+" },
  { number: 20, label: "Projects Completed", suffix: "+" },
  { number: 10, label: "Technologies Mastered", suffix: "+" },
  { number: 20, label: "Frameworks & Libraries Used", suffix: "+" },
];