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
        description: "Integrated LiveKit WebRTC for live lectures and Server-Sent Events (SSE) for instant, lightweight client-side notifications and status alerts.",
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
        description: "Built the double-entry accounting ledger, subscription cycles, CRM leads tracker, and RBAC matrix. Integrated LiveKit WebRTC for interactive class rooms."
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
  "lisan-al-hikma": {
    slug: "lisan-al-hikma",
    title: "Lisān Al-Ḥikma — Educational Platform",
    subtitle: "A multi-mode educational platform with Live WebRTC, low-latency Recorded playback, and scalable microservices.",
    overview: `Lisān Al-Ḥikma is a comprehensive, low-latency learning management platform built to accommodate modern interactive learning. The system was designed around three main modules: Recorded Learning (with optimized video buffering pipelines), Interactive Classrooms (using WebRTC mesh connectivity for low-latency live feedback), and Live Broadcasts for large-scale viewing.

To ensure fast media loading times, I integrated Wasabi Cloud Storage (an S3-compatible, ultra-low-cost storage API) backed by dynamic streaming compression. The backend is powered by Django microservices that handle authentication, user progress, live classroom orchestrations, and instant messaging notifications using Redis as a pub/sub message broker.`,
    sketchImage: "/lisan_architecture.png",
    videoUrl: "",
    features: [
      {
        title: "Recorded learning with HLS",
        description: "Implemented HTTP Live Streaming (HLS) with multi-bitrate options to ensure buffer-free learning in areas with poor internet connection.",
        badge: "Media"
      },
      {
        title: "Interactive WebRTC Classrooms",
        description: "Integrated real-time WebRTC connections for video and audio, allowing teachers and students to interact with sub-second latency.",
        badge: "Real-time"
      },
      {
        title: "S3 Wasabi Storage API",
        description: "Implemented low-cost, high-speed storage bucket endpoints for video content delivery, reducing infrastructure costs by 50%.",
        badge: "Infrastructure"
      },
      {
        title: "Microservices Architecture",
        description: "Split authentication, class scheduling, and live chat into modular microservices running in Docker containers.",
        badge: "DevOps"
      }
    ],
    challenges: [
      {
        issue: "High bandwidth costs and buffering in video streaming.",
        solution: "Configured an asynchronous video processing pipeline that automatically converts raw uploads to multi-resolution HLS format, and cached static files using a custom CDN layout."
      }
    ],
    timeline: [
      {
        phase: "Phase 1: Conceptualization",
        title: "Feature Requirements",
        description: "Drafted project scopes for teacher tools and student dashboards. Settled on WebRTC for real-time video classrooms."
      },
      {
        phase: "Phase 2: Video Streaming & WebRTC",
        title: "Setting up Media Handlers",
        description: "Configured media conversion tasks in background workers. Set up WebRTC signaling channels to run classrooms."
      },
      {
        phase: "Phase 3: Launch",
        title: "Deploying to Production",
        description: "Deployed services in Docker containers, and optimized PostgreSQL query indexes for user progress tracking logs."
      }
    ],
    architectureNodes: [
      { id: "fe", label: "Next.js Web Client", details: "Responsive learning portal supporting interactive classrooms and HLS players.", status: "client" },
      { id: "api", label: "Django Web Services", details: "API endpoints for user authentication, course catalog, tracking, and payments.", status: "api" },
      { id: "webrtc", label: "LiveKit WebRTC Server", details: "Coordinates real-time audio, video, and screen sharing between users.", status: "external" },
      { id: "redis", label: "Redis Pub/Sub & Cache", details: "Stores websocket session statuses and delivers real-time notifications.", status: "queue" },
      { id: "db", label: "PostgreSQL Database", details: "Relational database storing user progress, courses, schedules, and billing history.", status: "db" }
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
  "bak-blog": {
    slug: "bak-blog",
    title: "BAK-Blog",
    subtitle: "A comprehensive blogging platform focused on programming, fitness, and lifestyle topics.",
    overview: `BAK-Blog is a full-featured Content Management System (CMS) designed for writers and readers. Built using Node.js, Express, EJS, and MongoDB, the site facilitates content drafting, image hosting, and user commenting. Key features include categories for programming, health, sports, and nutrition, making it a comprehensive lifestyle and tech blog.`,
    features: [
      { title: "Categorized CMS Engine", description: "Enables creating posts across custom sections (programming, sports, diet)." },
      { title: "Dynamic Commenting System", description: "Interactive comment threads allowing reader-author interactions." }
    ],
    challenges: [
      { issue: "Slowing database lookups during traffic spikes.", solution: "Optimized indexing of post categories and author references in MongoDB database configurations." }
    ],
    timeline: [
      { phase: "Phase 1", title: "Setup", description: "Configured Express routes, EJS template layouts, and user authentication modules." }
    ],
    architectureNodes: [
      { id: "fe", label: "EJS Templates", details: "Server-side rendered HTML templates with Tailwind and Bootstrap styling.", status: "client" },
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
  "blog-gym": {
    slug: "blog-gym",
    title: "Blog-Gym",
    subtitle: "A specialized blogging portal focused on fitness and gym training methodologies.",
    overview: `Blog-Gym is a community-centered publishing system. It enables fitness trainers to post tutorials, dietary recommendations, and exercise forms. Readers can browse content by target muscle groups and submit reviews. Powered by Node.js, Express, and MongoDB.`,
    features: [
      { title: "Diet and Exercise Categorization", description: "Articles are indexed by specific workout plans and dietary categories." },
      { title: "Trainer Publishing Dashboard", description: "Simplified text editor for registered coaches to publish media-rich blogs." }
    ],
    challenges: [
      { issue: "Structuring clean navigation for overlapping diet and workout tags.", solution: "Implemented a tagging database schema to dynamically fetch related articles." }
    ],
    timeline: [
      { phase: "Phase 1", title: "Development", description: "Coded standard CRUD endpoints, and connected Bootstrap templating layouts." }
    ],
    architectureNodes: [
      { id: "fe", label: "SSR Frontend", details: "EJS templates rendering responsive blog layouts and comment records.", status: "client" },
      { id: "api", label: "NodeJS Server", details: "Performs routing, session authentication, and category queries.", status: "api" },
      { id: "db", label: "MongoDB", details: "Maintains fitness logs, publisher bios, and comment records.", status: "db" }
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
  }
};
