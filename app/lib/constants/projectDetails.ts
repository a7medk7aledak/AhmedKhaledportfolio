export interface Feature {
  title: string;
  description: string;
  badge?: string;
}

export interface Challenge {
  issue: string;
  solution: string;
}

export interface TimelinePhase {
  phase: string;
  title: string;
  description: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  sketchImage?: string;
  videoUrl?: string; // Optional actual URL
  subdomainFeature?: {
    title: string;
    description: string;
    flow: string[];
  };
  features: Feature[];
  challenges: Challenge[];
  timeline: TimelinePhase[];
  architectureNodes: {
    id: string;
    label: string;
    details: string;
    status: 'client' | 'api' | 'queue' | 'db' | 'external';
  }[];
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  roshd: {
    slug: "roshd",
    title: "Roshd — Multi-Tenant B2B SaaS Platform",
    subtitle: "A unified, schema-isolated educational ecosystem powering Academies and Teachers via Strategy Patterns and dynamic CNAME/Sub-domain routing.",
    overview: `Roshd was engineered to address a common B2B SaaS challenge: powering structurally distinct products (a hierarchical Academy with multi-level supervisor workflows and an autonomous Teacher platform) using a single, shared backend engine.

Instead of maintaining separate codebases or duplicating database tables, I designed a unified Strategy Pattern + Product Registry alongside a capability-based access layer to toggle features dynamically based on tenant subscription plans. 

To enforce strict privacy and security for corporate clients, the platform adopts a PostgreSQL schema-per-tenant model. When a tenant is registered, an asynchronous Celery pipeline automatically provisions a dedicated DB schema, runs migrations, and configures default rules in under 30 seconds. In addition, the system fully supports wildcard sub-domains (e.g., academy.roshed.tech) and custom white-labeled domains (e.g., learn.clientname.com) mapping directly to respective tenant schemas.`,
    sketchImage: "/roshed_architecture.png",
    videoUrl: "", // Empty to trigger premium voice-over walkthrough placeholder
    subdomainFeature: {
      title: "Automated Subdomain & Custom CNAME Provisioning System",
      description: "How Roshd dynamically routes requests to isolated PostgreSQL tenant schemas based on the request host name:",
      flow: [
        "DNS Routing: The server configures a wildcard DNS record (*.roshed.tech) pointing all subdomains to our central application proxy.",
        "Custom Domain Binding: Users can add their custom domains (e.g., learn.myacademy.com) by pointing a CNAME record to cname.roshed.tech.",
        "Django Host middleware: On every incoming request, middleware parses the HTTP Host header, resolves it against the tenant domain registry, and fetches the associated tenant metadata.",
        "Dynamic Search-Path Switcher: The middleware invokes a custom DB router which sets the PostgreSQL connection search path (`SET search_path TO tenant_schema_name`), routing all SQL queries to that tenant's database in real-time with zero overhead.",
        "Automatic SSL Provisioning: The platform utilizes a Cloudflare/Nginx reverse-proxy setup that dynamically provisions Let's Encrypt SSL certificates for newly mapped custom domains."
      ]
    },
    features: [
      {
        title: "PostgreSQL Schema Isolation",
        description: "Enforced physical data isolation by routing each tenant organization to a dedicated PostgreSQL schema, preventing cross-tenant data leaks.",
        badge: "Security"
      },
      {
        title: "Strategy Pattern Product Registry",
        description: "Shared a single core Django backend to serve two fundamentally different operational modes (Academy and Teacher platforms) without code duplication.",
        badge: "Architecture"
      },
      {
        title: "Concurrency-Safe Internal Wallet",
        description: "Designed a double-entry ledger database schema where balance mutations are guarded with unique idempotency keys and row-level locking (`select_for_update`) to prevent race conditions during billing transactions.",
        badge: "FinTech"
      },
      {
        title: "Asynchronous Provisioning Pipeline",
        description: "Implemented a Celery/Redis background worker system that spins up new tenants, creates schemas, executes migrations, and configures default RBAC data in under 30 seconds.",
        badge: "DevOps"
      },
      {
        title: "Next.js 14 Turborepo Monorepo",
        description: "Developed a monorepo workspace containing 4 client applications, sharing core authentication, UI styling packages, and custom ESLint security plugins.",
        badge: "Frontend"
      },
      {
        title: "Real-Time Systems & WebRTC",
        description: "Integrated WebRTC for live lectures and Server-Sent Events (SSE) for instant, lightweight client-side notifications and status alerts.",
        badge: "Streaming"
      }
    ],
    challenges: [
      {
        issue: "Preventing race conditions and balance discrepancies in concurrent wallet mutations.",
        solution: "Implemented a double-entry accounting ledger system. Every transaction flows through a centralized balance service wrapping DB transactions with row-level locks (SELECT FOR UPDATE) and unique idempotency keys generated on the client. If a request is retried, the system returns the cached transaction result without modifying the wallet balance twice."
      },
      {
        issue: "Managing database migrations across hundreds of tenant schemas without downtime.",
        solution: "Wrote a custom Django management wrapper that executes migrations sequentially or in parallel batches. The system utilizes Celery workers to run migrations schema-by-schema during off-peak hours, keeping track of migration states in a central control plane and pausing automatically if a schema migration fails."
      }
    ],
    timeline: [
      {
        phase: "Phase 1: Architecture & System Design",
        title: "Conceptualizing Multi-Tenancy",
        description: "Researched multi-tenancy models (Shared DB vs. Separate DB vs. Schema Isolation). Chose the schema-per-tenant design to provide strict security for enterprises while keeping maintenance simple. Designed the strategy-pattern classes."
      },
      {
        phase: "Phase 2: Database & Domain Middleware",
        title: "Building the Routing Core",
        description: "Coded the Host middleware in Django to intercept requests, parse domains/subdomains, and update PostgreSQL search paths. Configured Nginx proxy rules to test wildcard routing locally."
      },
      {
        phase: "Phase 3: Core SaaS Features & Wallet",
        title: "Developing Wallet and Billing",
        description: "Built the double-entry accounting ledger, subscription cycles, CRM leads tracker, and RBAC matrix. Integrated WebRTC for interactive class rooms."
      },
      {
        phase: "Phase 4: Frontend Monorepo & Deployment",
        title: "Turborepo Setup & CI/CD",
        description: "Configured pnpm workspaces and Turborepo for Next.js 14 apps. Orchestrated Docker files, Docker Compose, and Github Actions pipelines to deploy automatically to staging environments."
      }
    ],
    architectureNodes: [
      { id: "dns", label: "Cloudflare DNS Proxy", details: "Handles incoming wildcards (*.roshed.tech) and custom CNAME mappings dynamically.", status: "external" },
      { id: "fe", label: "Next.js Monorepo UI", details: "Client portals styled using a unified design system. Routes requests to API Gateway.", status: "client" },
      { id: "middleware", label: "Django Host Middleware", details: "Extracts request hostname, fetches tenant database schema details, and routes traffic.", status: "api" },
      { id: "celery", label: "Celery Task Queue", details: "Spins up tenant databases, manages subscription invoicing, and processes media files in background.", status: "queue" },
      { id: "redis", label: "Redis Broker & Cache", details: "Acts as a message broker for Celery, caching database queries and session data.", status: "queue" },
      { id: "db", label: "PostgreSQL Engine", details: "Performs queries inside isolated schemas. Uses search_path middleware to direct SQL traffic.", status: "db" }
    ]
  },
  "afaq-academy": {
    slug: "afaq-academy",
    title: "Afaq Academy — Educational Platform",
    subtitle: "A unified Arabic e-learning platform blending Islamic studies, language learning, and modern tech education in one modern, RTL-first experience.",
    overview: `Afaq Academy (أكاديمية آفاق) was built to bring together subjects that are usually scattered across separate platforms — Quran and Tajweed, Arabic grammar and rhetoric, modern foreign languages, programming and technology, core academic subjects, and life skills — into a single, coherent learning experience for Arabic-speaking students of all ages.

The platform is built on Next.js with a fully RTL-first interface, and organizes learning into three distinct modes: live 1-on-1 and small-group sessions (available now), pre-recorded courses, and interactive exercise-driven learning (both in active rollout). Beyond courses, the platform ships a dedicated student toolkit — a digital library, Hijri calendar, prayer times, Qibla direction finder, and an in-app Quran reader — designed to keep students engaged with their studies and their faith practice in one place.`,
    sketchImage: "",
    videoUrl: "",
    features: [
      {
        title: "Multi-Track Curriculum Catalog",
        description: "Structured learning paths spanning Islamic sciences, Arabic language, foreign languages (English, French, German, Turkish), programming & tech, and core academic subjects.",
        badge: "E-Learning"
      },
      {
        title: "Three Learning Modes",
        description: "Live teaching with real-time teacher interaction is available today, with recorded (self-paced, lifetime access) and interactive (smart exercises & instant grading) modes rolling out.",
        badge: "Product"
      },
      {
        title: "RTL-First Responsive UI",
        description: "A fully right-to-left interface built with Next.js and Bootstrap 5, designed for a native, comfortable Arabic reading and navigation experience across devices.",
        badge: "Frontend"
      },
      {
        title: "Student Companion Toolkit",
        description: "Built-in digital library, Hijri calendar, prayer times, Qibla direction, and Quran reader to support students' daily routine alongside their coursework.",
        badge: "Product"
      }
    ],
    challenges: [
      {
        issue: "Presenting a large, varied catalog (Islamic studies, languages, tech, academics) without overwhelming or confusing new visitors.",
        solution: "Grouped offerings into clearly labeled domains with a comparison table across learning modes (flexibility, interactivity, personalization, class size), letting students quickly match a mode and track to their goals."
      },
      {
        issue: "Delivering a genuinely native experience for an Arabic-speaking audience rather than a translated afterthought.",
        solution: "Designed the interface RTL-first from the layout system up, rather than mirroring an LTR design, ensuring typography, navigation, and component alignment feel natural in Arabic."
      }
    ],
    timeline: [
      {
        phase: "Phase 1: Product & Curriculum Design",
        title: "Structuring the Learning Domains",
        description: "Defined the five core learning domains and mapped out the three learning-mode experience (live, recorded, interactive) to support a phased rollout."
      },
      {
        phase: "Phase 2: Platform Build",
        title: "Building the RTL Next.js Experience",
        description: "Implemented the RTL-first Next.js frontend, course catalog browsing, and the student toolkit (prayer times, Qibla, Quran reader, Hijri calendar)."
      },
      {
        phase: "Phase 3: Launch",
        title: "Production Release",
        description: "Deployed the live-teaching mode to production, with onboarding flows for students and teachers, ahead of the recorded and interactive modes."
      }
    ],
    architectureNodes: [
      { id: "fe", label: "Next.js RTL Web App", details: "Server-rendered, RTL-first Arabic interface handling course discovery, booking, and the student toolkit.", status: "client" },
      { id: "ui", label: "Bootstrap 5 UI Layer", details: "Component and layout styling system powering responsive pages across devices.", status: "client" },
      { id: "api", label: "Application Backend", details: "Handles authentication, course/session data, and booking for live teaching sessions.", status: "api" }
    ]
  },
  "taki-academy": {
    slug: "taki-academy",
    title: "Taki Academy — Educational Platform",
    subtitle: "A Tunisian online learning academy with a fast, responsive Next.js frontend for course discovery and enrollment.",
    overview: `Taki Academy is a Tunisian e-learning platform connecting students with instructors and structured course content. I was brought in to build the entire frontend, translating the platform's design into a fast, responsive, and RTL-friendly Next.js interface.

The build focused on clean course browsing, a smooth enrollment flow, and consistent performance across devices, giving the academy a modern web presence to support its growing student base.`,
    sketchImage: "",
    videoUrl: "",
    features: [
      {
        title: "Course Catalog & Discovery",
        description: "Browsable course listings with clear categorization, helping students quickly find relevant classes.",
        badge: "Frontend"
      },
      {
        title: "RTL-First Responsive UI",
        description: "A fully right-to-left interface built with Next.js, ensuring a natural reading and navigation experience in Arabic.",
        badge: "Frontend"
      },
      {
        title: "Enrollment Flow",
        description: "Streamlined course enrollment screens designed to minimize friction from discovery to signup.",
        badge: "UX"
      }
    ],
    challenges: [
      {
        issue: "Delivering a fast, polished frontend on a tight timeline for a live academy launch.",
        solution: "Built with Next.js's file-based routing and component reuse to move quickly from design to production without sacrificing performance or responsiveness."
      }
    ],
    timeline: [
      {
        phase: "Phase 1: UI Implementation",
        title: "Building the Next.js Frontend",
        description: "Translated the platform design into responsive, RTL-first Next.js pages covering course discovery and enrollment."
      },
      {
        phase: "Phase 2: Launch",
        title: "Production Release",
        description: "Deployed the platform to production for Tunisian students and instructors."
      }
    ],
    architectureNodes: [
      { id: "fe", label: "Next.js RTL Web App", details: "Responsive, RTL-first frontend handling course discovery and enrollment.", status: "client" },
      { id: "api", label: "Application Backend", details: "Handles authentication, course data, and enrollment records.", status: "api" }
    ]
  },
  "garneau-school": {
    slug: "garneau-school",
    title: "Garneau School — Website",
    subtitle: "A modern, responsive Next.js marketing website for a private school in Morocco.",
    overview: `Garneau School needed a modern online presence to showcase its academic programs, admissions process, and school life to prospective families. I built the site end-to-end with Next.js, focused on fast load times, clean navigation, and full responsiveness across devices.`,
    sketchImage: "",
    videoUrl: "",
    features: [
      {
        title: "Academic Programs Overview",
        description: "Structured sections presenting the school's programs and academic stages with clear visual hierarchy.",
        badge: "Content"
      },
      {
        title: "Admissions & Contact Flow",
        description: "Clear calls-to-action guiding prospective families through admissions information and contact.",
        badge: "UX"
      },
      {
        title: "Fully Responsive Layout",
        description: "Built with Next.js and Tailwind CSS for a consistent experience across mobile, tablet, and desktop.",
        badge: "Frontend"
      }
    ],
    challenges: [
      {
        issue: "Presenting a school's identity and programs clearly for both desktop and mobile visitors.",
        solution: "Designed a component-based Next.js layout with Tailwind CSS, keeping navigation and content hierarchy consistent across all breakpoints."
      }
    ],
    timeline: [
      {
        phase: "Phase 1: Design & Build",
        title: "Building the Next.js Site",
        description: "Implemented the responsive layout, academic program pages, and admissions sections with Next.js and Tailwind CSS."
      },
      {
        phase: "Phase 2: Launch",
        title: "Production Release",
        description: "Deployed the site to production for the school's public rollout."
      }
    ],
    architectureNodes: [
      { id: "fe", label: "Next.js Frontend", details: "Responsive marketing site built with Next.js and Tailwind CSS.", status: "client" }
    ]
  },
  "gspa-school": {
    slug: "gspa-school",
    title: "GSPA — Private School Website",
    subtitle: "A responsive Next.js website for a Moroccan private school.",
    overview: `GSPA is a private school in Morocco that needed a clean, modern website to present its academic offerings, admissions details, and school news. Built with Next.js and Tailwind CSS for fast performance and a fully responsive layout.`,
    sketchImage: "",
    videoUrl: "",
    features: [
      {
        title: "Academic Programs & News",
        description: "Organized sections for academic programs and school news, keeping the site content current for visiting families.",
        badge: "Content"
      },
      {
        title: "Admissions Information",
        description: "Clear, accessible admissions details to guide prospective students and parents.",
        badge: "UX"
      },
      {
        title: "Responsive Design",
        description: "A mobile-first responsive layout ensuring a consistent experience across devices.",
        badge: "Frontend"
      }
    ],
    challenges: [
      {
        issue: "Building a clean, professional presentation for a school audience across all device sizes.",
        solution: "Used Next.js with Tailwind CSS's utility-first styling to keep the layout consistent and maintainable across breakpoints."
      }
    ],
    timeline: [
      {
        phase: "Phase 1: Build",
        title: "Building the Next.js Site",
        description: "Implemented the responsive layout, program pages, and admissions sections."
      },
      {
        phase: "Phase 2: Launch",
        title: "Production Release",
        description: "Deployed the site to production."
      }
    ],
    architectureNodes: [
      { id: "fe", label: "Next.js Frontend", details: "Responsive school website built with Next.js and Tailwind CSS.", status: "client" }
    ]
  },
  "spotlight-egypt": {
    slug: "spotlight-egypt",
    title: "Spotlight Egypt — Event Management Platform",
    subtitle: "An event management and ticket booking platform for organizers to publish events and sell tickets online.",
    overview: `Spotlight Egypt is an event management platform built solo, end-to-end, to let organizers publish events and sell tickets online through a fast, modern web experience. The frontend is built with Next.js, backed by a NestJS API organized as a modular monolith, with PostgreSQL as the primary database and Redis for caching. The UI is currently being refreshed — this page will be expanded with full architecture and feature details once the redesign ships.`,
    sketchImage: "",
    videoUrl: "",
    features: [
      {
        title: "Modular Monolith API",
        description: "A NestJS backend organized into self-contained feature modules (events, bookings, ticketing) — easier to maintain and reason about than a tangle of loose routes, without the operational overhead of microservices.",
        badge: "Architecture"
      },
      {
        title: "Event Publishing",
        description: "Lets organizers create and publish event listings for attendees to discover.",
        badge: "Product"
      },
      {
        title: "Online Ticket Booking",
        description: "Enables attendees to browse events and purchase tickets directly through the platform.",
        badge: "Product"
      }
    ],
    challenges: [
      {
        issue: "Delivering a reliable ticket booking flow under real event traffic.",
        solution: "Built the booking flow with a focus on performance and a straightforward, low-friction checkout path."
      }
    ],
    timeline: [
      {
        phase: "Phase 1: Platform Build",
        title: "Core Event & Booking Flows",
        description: "Implemented event publishing and the ticket booking flow."
      },
      {
        phase: "Phase 2: UI Refresh",
        title: "In Progress",
        description: "Currently updating the platform's UI and visual design."
      }
    ],
    architectureNodes: [
      { id: "fe", label: "Next.js Frontend", details: "Client-facing interface for browsing events and booking tickets.", status: "client" },
      { id: "api", label: "NestJS API (Modular Monolith)", details: "Handles event data, bookings, and ticketing logic, organized into self-contained feature modules.", status: "api" },
      { id: "redis", label: "Redis Cache", details: "Caches frequently-read data to keep event browsing and booking fast under load.", status: "queue" },
      { id: "db", label: "PostgreSQL", details: "Primary database storing events, bookings, and ticket records.", status: "db" }
    ]
  },
  "vitapsyche": {
    slug: "vitapsyche",
    title: "VitaPsyche — AI-Powered Mental Health Platform",
    subtitle: "A graduation project combining AI diagnosis, an empathetic virtual character, and real doctor consultations to close the gap in accessible mental health care.",
    overview: `VitaPsyche is a graduation project built to address the gap in mental health services by integrating AI tools, virtual support characters, and online doctor consultations into a single platform for users seeking mental health support and education.

The platform combines AI-powered emotional assessment models with an empathetic virtual character named Lina for emotional support, alongside real-time consultations with psychiatrists through booking, chat, and video. As team leader, I oversaw planning, execution, and coordination across the AI, backend, frontend, and mobile tracks, using Agile methodologies coordinated through Jira and Jira Align.`,
    sketchImage: "",
    videoUrl: "",
    features: [
      {
        title: "AI-Powered Emotional Assessment",
        description: "Built intelligent models using machine learning, NLP, and deep learning (Rasa, Hugging Face, TensorFlow) to help users assess their emotional well-being.",
        badge: "AI"
      },
      {
        title: "Virtual Support Character — Lina",
        description: "Designed an empathetic AI persona that provides emotional relief and guidance to users during challenging moments.",
        badge: "AI"
      },
      {
        title: "Online Doctor Consultation",
        description: "Enabled real-time communication with psychiatrists via appointment booking, chat, and video consultations.",
        badge: "Healthcare"
      },
      {
        title: "Educational Resources & Self-Assessment",
        description: "Curated articles, FAQs, and psychological tests to help users build knowledge and self-awareness around mental health.",
        badge: "Content"
      }
    ],
    challenges: [
      {
        issue: "Coordinating a cross-functional team across AI, backend, frontend, and mobile tracks toward a single cohesive product.",
        solution: "Led the team using Agile methodologies with sprint planning and tracking in Jira/Jira Align, and grounded the system design in a C4 Model architecture and UML diagrams so every track could work against a shared technical blueprint."
      },
      {
        issue: "Designing an AI persona (Lina) that feels genuinely supportive rather than a generic chatbot.",
        solution: "Combined NLP and deep learning models (Rasa, Hugging Face, TensorFlow) trained toward empathetic, context-aware responses, tuned specifically for emotionally sensitive conversations."
      }
    ],
    timeline: [
      {
        phase: "Phase 1: Requirements & Planning",
        title: "Defining the Problem Space",
        description: "Led requirements analysis and mapped the project flow using Use Case Diagrams and Process Flow Diagrams (PFD)."
      },
      {
        phase: "Phase 2: System & Architecture Design",
        title: "Designing for Scale",
        description: "Modeled the system with the C4 Model and UML diagrams, and designed the Django + MySQL backend for scalability and security."
      },
      {
        phase: "Phase 3: AI Model Development",
        title: "Building the Diagnosis Engine & Lina",
        description: "Implemented ML/NLP/deep learning models with Rasa, Hugging Face, and TensorFlow for personalized mental health diagnosis and the Lina support character."
      },
      {
        phase: "Phase 4: Frontend, Mobile & Integration",
        title: "Bringing It Together",
        description: "Built the web experience with React, Next.js, and TypeScript, and a companion Flutter mobile app, integrating booking, chat, and video consultation flows."
      }
    ],
    architectureNodes: [
      { id: "fe", label: "Next.js / React Web App", details: "Web client for assessments, Lina interactions, doctor discovery, and booking.", status: "client" },
      { id: "mobile", label: "Flutter Mobile App", details: "Companion mobile experience for on-the-go access to consultations and resources.", status: "client" },
      { id: "api", label: "Django Backend", details: "Core API layer handling authentication, bookings, consultations, and business logic.", status: "api" },
      { id: "ai", label: "AI Diagnosis & Lina Engine", details: "NLP/ML models (Rasa, Hugging Face, TensorFlow) powering emotional assessment and the virtual support character.", status: "external" },
      { id: "db", label: "MySQL & MongoDB", details: "Relational storage for core transactional data alongside MongoDB for flexible content and chat data.", status: "db" }
    ]
  },
  "capsule-gym": {
    slug: "capsule-gym",
    title: "Capsule Gym",
    subtitle: "A complete Full-Stack Gym management and fitness companion powered by AI integration.",
    overview: `Capsule Gym was developed to provide an all-in-one assistant for fitness enthusiasts. The system combines gym analytics (BMI tracking, workout logging) with modern convenience features, including an AI chatbot that drafts customized fitness and nutritional regimes based on user biometrics.

Built using Next.js and Tailwind CSS, the platform delivers fluid animations, interactive dashboards, and complete mobile responsiveness. The backend uses Node.js/Express with MongoDB to log workouts and feed data into the AI module.`,
    sketchImage: "",
    videoUrl: "",
    features: [
      {
        title: "Interactive BMI Dashboard",
        description: "A biometric dashboard tracking BMI over time with visual charts and weight recommendations.",
        badge: "Analytics"
      },
      {
        title: "AI Personal Trainer Chatbot",
        description: "An LLM-driven chatbot trained to respond with custom gym routines and healthy eating plans.",
        badge: "AI"
      },
      {
        title: "Workout Directory",
        description: "A database of fitness exercises categorized by target muscle groups with visual instruction guides.",
        badge: "Database"
      }
    ],
    challenges: [
      {
        issue: "Managing client state and real-time updates of biometric logs.",
        solution: "Leveraged React Context API and optimized MongoDB schema structures to save, load, and render tracking graphs with minimal loading delay."
      }
    ],
    timeline: [
      {
        phase: "Phase 1: Design",
        title: "UX/UI Prototyping",
        description: "Created interface designs focused on dark-mode aesthetics, responsive navigation, and user dashboards."
      },
      {
        phase: "Phase 2: Full-Stack Integration",
        title: "Developing API and DB",
        description: "Engineered Express routes, modeled MongoDB databases, and integrated OpenAI API for conversational training."
      }
    ],
    architectureNodes: [
      { id: "fe", label: "Next.js Frontend", details: "Visually stunning dashboard styling, exercises search grid, and AI chatbot console.", status: "client" },
      { id: "api", label: "Node.js & Express API", details: "Core server endpoints handling client authentication and biometric logging.", status: "api" },
      { id: "openai", label: "OpenAI API Integration", details: "Powers the fitness chatbot to deliver context-aware workout plans.", status: "external" },
      { id: "db", label: "MongoDB Database", details: "Flexible schema database for user tracking logs, exercises, and chat histories.", status: "db" }
    ]
  },
  "blog-app": {
    slug: "blog-app",
    title: "Blog App",
    subtitle: "A full-stack MERN blogging platform covering programming, fitness, and lifestyle topics.",
    overview: `Blog App is a full-stack blogging platform built with a React (Vite) frontend and an Express/MongoDB backend — a complete MERN stack project. It facilitates content drafting, image hosting, and user commenting. Key features include categories for programming, health, sports, and nutrition, making it a comprehensive lifestyle and tech blog.`,
    features: [
      { title: "Categorized CMS Engine", description: "Enables creating posts across custom sections (programming, sports, diet)." },
      { title: "Dynamic Commenting System", description: "Interactive comment threads allowing reader-author interactions." }
    ],
    challenges: [
      { issue: "Slowing database lookups during traffic spikes.", solution: "Optimized indexing of post categories and author references in MongoDB database configurations." }
    ],
    timeline: [
      { phase: "Phase 1", title: "Setup", description: "Configured the Express API routes, React (Vite) frontend, and user authentication modules." }
    ],
    architectureNodes: [
      { id: "fe", label: "React (Vite) Frontend", details: "Client-side single-page app handling browsing, post creation, and comments.", status: "client" },
      { id: "api", label: "Express Server", details: "Handles routing, post creation, comments, and file uploads.", status: "api" },
      { id: "db", label: "MongoDB", details: "Stores article content, comments, and user account metadata.", status: "db" }
    ]
  },
  "customer-management": {
    slug: "customer-management",
    title: "Customer Management System",
    subtitle: "An advanced CRM platform built to streamline client communications and track sales pipelines.",
    overview: `A corporate Client Management System built with a Node.js, Express, and MongoDB backend. It helps small-to-medium businesses track leads, client history, follow-up cycles, and sales metrics via a clean dashboard UI. Bootstrap styling ensures user-friendly navigation for admins.`,
    features: [
      { title: "Sales Lead Pipeline", description: "Tracks customers from initial contact through negotiation to closed-won deals." },
      { title: "Client Account Logging", description: "Maintains history notes, contact information, and billing logs per client." }
    ],
    challenges: [
      { issue: "Lead sorting was slow and confusing for administrators.", solution: "Built dynamic query filters on Express routing and added client-side pagination." }
    ],
    timeline: [
      { phase: "Phase 1", title: "Build", description: "Created relational MongoDB schemas and designed admin UI widgets." }
    ],
    architectureNodes: [
      { id: "fe", label: "Bootstrap Dashboard", details: "Admin frontend panel with dynamic query filters and export utilities.", status: "client" },
      { id: "api", label: "Express API Engine", details: "Performs client CRUD operations and export logic.", status: "api" },
      { id: "db", label: "MongoDB Store", details: "Database containing customer details, communication histories, and lead stages.", status: "db" }
    ]
  },
  "bindi-task-manager": {
    slug: "bindi-task-manager",
    title: "Bindi Task Manager",
    subtitle: "A clean and responsive Bootstrap task planning dashboard.",
    overview: `Bindi is a project management template built to explore high-fidelity layout styling and local state management. It provides visual trackers for task assignments, categories (To-Do, In Progress, Completed), and priority meters. Highly responsive styling makes task creation intuitive.`,
    features: [
      { title: "Priority Classification", description: "Marks tasks by Urgency and Importance using visual color-coded badges." },
      { title: "Local Storage Sync", description: "Preserves user task lists across page reloads using browser localStorage." }
    ],
    challenges: [
      { issue: "Managing responsive columns in Bootstrap on smaller screen heights.", solution: "Wrote custom CSS media rules to structure scrollable task blocks." }
    ],
    timeline: [
      { phase: "Phase 1", title: "Development", description: "Structured index HTML, added Bootstrap responsive grids, and connected custom JavaScript states." }
    ],
    architectureNodes: [
      { id: "fe", label: "Bootstrap & JS Client", details: "Client-side HTML5 document rendering task lists and tracking state locally.", status: "client" },
      { id: "local", label: "Browser LocalStorage", details: "Saves and loads task entries directly inside the user's web browser.", status: "db" }
    ]
  },
  "portfolio-website": {
    slug: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "A personal showcase site built with Next.js and Tailwind CSS.",
    overview: `This is an early iteration of a personal portfolio website, utilizing Next.js static page generation and Tailwind CSS layout properties. It showcases contact forms, skill catalogs, and project cards with clean animations and layouts.`,
    features: [
      { title: "Static Generation", description: "Fast load times enabled by static compilation and optimized images." }
    ],
    challenges: [
      { issue: "Ensuring high page performance scores.", solution: "Optimized image sizing, and structured layout scripts to load asynchronously." }
    ],
    timeline: [
      { phase: "Phase 1", title: "Development", description: "Coded core React sections, and deployed project assets on Vercel." }
    ],
    architectureNodes: [
      { id: "fe", label: "Next.js UI Engine", details: "Static React page layouts displaying skills and project directories.", status: "client" },
      { id: "vercel", label: "Vercel Hosting CDN", details: "Serves pre-rendered pages directly from edge locations for maximum speed.", status: "external" }
    ]
  },
  "social-media": {
    slug: "social-media",
    title: "Social Media Platform",
    subtitle: "A responsive client-side social media platform layout.",
    overview: `A social media interface prototyping layout featuring post drafting, card layouts, profile setups, and a light/dark mode switch. It leverages vanilla JavaScript and custom CSS parameters to handle DOM modifications and state rendering.`,
    features: [
      { title: "Light/Dark Mode Toggler", description: "Saves user theme preferences locally and applies color matrices immediately." },
      { title: "Dynamic Post Builder", description: "Enables drawing, appending, and deleting post cards directly in the DOM." }
    ],
    challenges: [
      { issue: "Maintaining consistent styling during DOM structural edits.", solution: "Organized CSS variable schemes to handle theme colors smoothly." }
    ],
    timeline: [
      { phase: "Phase 1", title: "Prototype", description: "Drafted structural HTML, wrote CSS stylesheet variables, and added JavaScript Event Listeners." }
    ],
    architectureNodes: [
      { id: "fe", label: "JavaScript & HTML Frontend", details: "Handles DOM events, updates layout feeds, and switches CSS variables.", status: "client" },
      { id: "local", label: "Local Memory Cache", details: "Keeps track of dark mode toggles and user profile details.", status: "db" }
    ]
  },
  "personal-website": {
    slug: "personal-website",
    title: "Personal Website",
    subtitle: "A modern SASS-styled responsive personal webpage.",
    overview: `An interactive personal landing page template built to demonstrate advanced styling practices using SASS. It focuses on hover transitions, layouts, and navigation animations.`,
    features: [
      { title: "SASS Variables & Nesting", description: "Stylesheets organized via modular files, custom functions, and nested rules." }
    ],
    challenges: [
      { issue: "Compiling SASS styles without breaking build pipelines.", solution: "Configured automated SASS-to-CSS watchers to output optimized files." }
    ],
    timeline: [
      { phase: "Phase 1", title: "Build", description: "Structured SASS layout variables and wrote JavaScript mobile menu triggers." }
    ],
    architectureNodes: [
      { id: "fe", label: "HTML5 & Compiled CSS", details: "Renders layout sheets, hover states, and responsive layout elements.", status: "client" }
    ]
  },
  "template-2": {
    slug: "template-2",
    title: "Template 2",
    subtitle: "A classic landing page template exploring CSS grid systems.",
    overview: `An implementation of a classic company template, mapping layouts using CSS flex and grid boxes. Built with accessibility and responsive layouts in mind.`,
    features: [
      { title: "CSS Grid Layouts", description: "Grid templates grouping feature grids and image layouts cleanly." }
    ],
    challenges: [
      { issue: "Aligning text contents neatly across columns on mobile devices.", solution: "Wrote CSS media queries to resize headings and columns at specific breakpoints." }
    ],
    timeline: [
      { phase: "Phase 1", title: "Code", description: "Coded layout structure using semantic HTML elements and CSS grid properties." }
    ],
    architectureNodes: [
      { id: "fe", label: "HTML & CSS Layout", details: "A static webpage styled with responsive grid cards.", status: "client" }
    ]
  },
  "template-1": {
    slug: "template-1",
    title: "My Template 1",
    subtitle: "An interactive landing page template built with vanilla JavaScript.",
    overview: `A standard client-side template implementing responsive navigation bars, accordion dropdowns, and basic image carousels. Designed to practice clean DOM scripting.`,
    features: [
      { title: "Interactive Accordions", description: "Dropdown elements toggled dynamically by intercepting click events." }
    ],
    challenges: [
      { issue: "Carousels would sometimes overflow on ultra-wide screens.", solution: "Added container limits and relative CSS bounds to constrain images." }
    ],
    timeline: [
      { phase: "Phase 1", title: "Build", description: "Coded DOM triggers and layout files." }
    ],
    architectureNodes: [
      { id: "fe", label: "Vanilla JS Page", details: "HTML5 document with embedded event triggers and styling configurations.", status: "client" }
    ]
  },
  "my-template-2": {
    slug: "my-template-2",
    title: "My Template 2",
    subtitle: "An advanced landing page template exploring animations and filters.",
    overview: `A detailed, responsive company webpage mockup. Includes multiple tabs, dynamic filter grids, and hover overlays.`,
    features: [
      { title: "Filtered Portfolio Grid", description: "JavaScript filters items dynamically by category without page reloads." }
    ],
    challenges: [
      { issue: "Animations were laggy on slower browsers.", solution: "Refactored properties to utilize hardware-accelerated transitions (transform, opacity)." }
    ],
    timeline: [
      { phase: "Phase 1", title: "Build", description: "Organized CSS scripts and connected filter triggers." }
    ],
    architectureNodes: [
      { id: "fe", label: "Animated UI Webpage", details: "Static webpage featuring filter scripts and CSS transitions.", status: "client" }
    ]
  },
  "template-1-elzero": {
    slug: "template-1-elzero",
    title: "Template 1",
    subtitle: "A responsive landing page template exploring modern layout and styling techniques.",
    overview: `A standard responsive website template built during HTML/CSS/JS training practice, focused on clean layout structure, semantic markup, and modern styling conventions.`,
    features: [
      { title: "Responsive Layout", description: "Grid and flexbox-based sections that adapt cleanly across screen sizes." }
    ],
    challenges: [
      { issue: "Keeping layout and spacing consistent across breakpoints.", solution: "Structured CSS with reusable utility classes and media queries for predictable responsive behavior." }
    ],
    timeline: [
      { phase: "Phase 1", title: "Build", description: "Coded the layout structure, styling, and responsive breakpoints." }
    ],
    architectureNodes: [
      { id: "fe", label: "HTML & CSS Layout", details: "A static, responsive webpage styled with modern CSS layout techniques.", status: "client" }
    ]
  },
  "html-css-course-template": {
    slug: "html-css-course-template",
    title: "HTML & CSS Course Template",
    subtitle: "A teaching template used to walk students through HTML & CSS fundamentals from scratch.",
    overview: `This template was built as course material for teaching students the fundamentals of HTML and CSS — page structure, semantic markup, box model, flexbox/grid layout, and responsive design practices. It walks through building a full page from an empty file up to a polished, responsive result.`,
    videoUrl: "https://www.youtube.com/embed/4axzLb35tj8",
    features: [
      { title: "Semantic HTML Structure", description: "Demonstrates proper use of semantic elements for accessible, well-structured markup." },
      { title: "Responsive Layout Techniques", description: "Covers flexbox and grid-based layouts that adapt across screen sizes." },
      { title: "Step-by-Step Styling", description: "Builds up styling incrementally to help students understand each CSS concept in context." }
    ],
    challenges: [
      { issue: "Explaining layout concepts in a way that's easy for beginners to follow and reproduce.", solution: "Broke the build into incremental steps, starting from plain HTML and progressively layering in CSS concepts one at a time." }
    ],
    timeline: [
      { phase: "Phase 1", title: "Course Design", description: "Planned the lesson structure, moving from HTML basics to CSS layout and responsive design." },
      { phase: "Phase 2", title: "Recording & Build", description: "Built the template live while recording the walkthrough for students." }
    ],
    architectureNodes: [
      { id: "fe", label: "HTML & CSS Page", details: "A static teaching template covering semantic structure and responsive styling.", status: "client" }
    ]
  }
};
