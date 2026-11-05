export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  liveUrl: string;
  githubUrl: string;
  previewImage: string;
  visualType: "queue" | "rag" | "creative";
  accentColor: string;
}

export interface Service {
  number: string;
  title: string;
  tag: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  watermark: string;
  headline: string;
  description: string;
  skills: { name: string; level?: string; tag?: string }[];
}

export const PERSONAL_INFO = {
  name: "JAYAVARDHAN MALAMANTI",
  shortName: "JAYAVARDHAN",
  initials: "JM",
  role: "AI/ML DEVELOPER • FULL-STACK DEVELOPER • CREATIVE TECHNOLOGIST",
  heroHeadline: "BUILDING BEYOND THE ORDINARY.",
  heroSubheadline: "TRANSFORMING COMPLEX PROBLEMS INTO USEFUL DIGITAL EXPERIENCES THROUGH ARTIFICIAL INTELLIGENCE, MODERN SOFTWARE ENGINEERING, AND CREATIVE EXPERIMENTATION.",
  location: "Based in India",
  locationDetailed: "India • Global Availability",
  education: "B.Tech Computer Science Engineering (AI & ML)",
  status: "AVAILABLE FOR WORK • 2026",
  email: "jayavardhanmalmanti143@gmail.com",
  linkedin: "https://www.linkedin.com/in/jayavardhan-malamanti-000011380",
  github: "https://github.com/Jayavardhan137",
  bioHeadline: "CURIOUS MIND. CREATIVE THINKER. TECHNOLOGY BUILDER.",
  bioParagraphs: [
    "I'm Jayavardhan, a Computer Science student specializing in AI & Machine Learning. I enjoy transforming complex problems into useful digital experiences through software development, artificial intelligence, and creative experimentation.",
    "I build applications, experiment with emerging technologies, and constantly explore new ways to make technology useful in everyday life."
  ],
  focusAreas: [
    "AI & Machine Learning Systems",
    "Full-Stack Web Engineering",
    "Retrieval-Augmented Generation (RAG)",
    "Workflow & Process Automation"
  ],
  interests: [
    "Building Useful Products",
    "First-Principles Problem Solving",
    "Emerging AI Architectures",
    "Technological Innovation"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "qflow-ai",
    number: "01",
    title: "QFLOW AI",
    tagline: "Intelligent Queue Management Platform",
    category: "AI SYSTEM • FULL-STACK PLATFORM",
    description: "An intelligent queue management platform engineered for high-throughput environments including hospitals, banks, supermarkets, and public service organizations to eliminate physical bottlenecks.",
    features: [
      "QR-based token booking",
      "Real-time queue tracking",
      "Admin dashboard",
      "Estimated waiting time",
      "AI-powered voice notifications",
      "Token rescheduling"
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Supabase",
      "AI Voice Synthesis",
      "REST APIs",
      "Tailwind CSS"
    ],
    metrics: [
      { label: "Deployment", value: "Multi-Org Architecture" },
      { label: "Updates", value: "Real-Time Sync" },
      { label: "Interface", value: "QR & Voice First" }
    ],
    liveUrl: "https://github.com/Jayavardhan137",
    githubUrl: "https://github.com/Jayavardhan137",
    previewImage: "/projects/qflow.svg",
    visualType: "queue",
    accentColor: "#ffffff"
  },
  {
    id: "studyassistant",
    number: "02",
    title: "STUDYASSISTANT",
    tagline: "AI-Powered Learning Assistant via RAG",
    category: "GENERATIVE AI • RAG ARCHITECTURE",
    description: "An intelligent learning copilot built using Retrieval-Augmented Generation (RAG) that ingests academic literature and documents to synthesize contextual, fact-grounded tutoring across multiple dynamic AI personalities.",
    features: [
      "Document-based question answering",
      "Context-aware responses",
      "Multiple AI personalities",
      "LLM integration",
      "Knowledge retrieval"
    ],
    technologies: [
      "Python",
      "RAG Architecture",
      "LangChain",
      "ChromaDB",
      "Hugging Face",
      "LLM Integrations",
      "Next.js"
    ],
    metrics: [
      { label: "Retrieval", value: "Vector Embedding" },
      { label: "Personas", value: "Adaptive Tone" },
      { label: "Grounding", value: "Zero Hallucination" }
    ],
    liveUrl: "https://github.com/Jayavardhan137",
    githubUrl: "https://github.com/Jayavardhan137",
    previewImage: "/projects/studyassistant.svg",
    visualType: "rag",
    accentColor: "#f4f4f5"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-ml",
    name: "AI & ML",
    watermark: "INTELLIGENCE",
    headline: "INTELLIGENT SYSTEMS & RAG PIPELINES",
    description: "Architecting generative AI applications, vector search retrieval, context engineering, and automated agent workflows.",
    skills: [
      { name: "Python", tag: "Core" },
      { name: "RAG Applications", tag: "Architecture" },
      { name: "LangChain", tag: "Framework" },
      { name: "Hugging Face", tag: "Models" },
      { name: "ChromaDB", tag: "Vector DB" },
      { name: "LLM Integrations", tag: "APIs" },
      { name: "AI Automation", tag: "Workflows" }
    ]
  },
  {
    id: "frontend",
    name: "FRONTEND",
    watermark: "INTERFACES",
    headline: "SCALABLE & IMMERSIVE CLIENT EXPERIENCES",
    description: "Building responsive, editorial-grade web applications with modern component architectures, type safety, and fluid motion.",
    skills: [
      { name: "Next.js", tag: "App Router" },
      { name: "React", tag: "Components" },
      { name: "TypeScript", tag: "Type System" },
      { name: "Tailwind CSS", tag: "Styling" },
      { name: "JavaScript", tag: "ES6+" },
      { name: "HTML5 & CSS3", tag: "Foundations" }
    ]
  },
  {
    id: "backend",
    name: "BACKEND",
    watermark: "SERVICES",
    headline: "ROBUST SERVER & DATA ARCHITECTURE",
    description: "Designing RESTful services, database schemas, secure authentication, and real-time event streaming.",
    skills: [
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "HTTP Server" },
      { name: "Supabase", tag: "BaaS & Postgres" },
      { name: "REST APIs", tag: "Protocols" }
    ]
  },
  {
    id: "tools",
    name: "TOOLS & DEV",
    watermark: "WORKFLOW",
    headline: "TOOLCHAIN & DEPLOYMENT PIPELINES",
    description: "Version control, continuous deployment, automated workflows, and rapid UI prototyping tools.",
    skills: [
      { name: "Git", tag: "VCS" },
      { name: "GitHub", tag: "Collaboration" },
      { name: "Vercel", tag: "Deployment" },
      { name: "n8n", tag: "Automation" },
      { name: "Gradio", tag: "ML Prototyping" }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    tag: "WEB APPS • PLATFORMS",
    description: "End-to-end development of modern, high-performance web applications with clean architecture, responsive layouts, and robust backend integrations.",
    deliverables: [
      "Custom Web Applications",
      "Responsive Frontend Architecture",
      "Backend APIs & Database Design",
      "Authentication & State Management"
    ],
    techStack: ["Next.js", "React", "Node.js", "Supabase", "Tailwind CSS"]
  },
  {
    number: "02",
    title: "AI-Powered Applications",
    tag: "COGNITIVE • GENERATIVE",
    description: "Infusing machine intelligence into user-facing software through LLM integrations, predictive models, voice synthesis, and automated reasoning.",
    deliverables: [
      "LLM-Powered Features",
      "AI Voice Notifications & Audio",
      "Autonomous Agent Workflows",
      "Intelligent Chatbots & Assistants"
    ],
    techStack: ["Python", "OpenAI / Open Models", "Hugging Face", "LangChain"]
  },
  {
    number: "03",
    title: "RAG-Based AI Solutions",
    tag: "KNOWLEDGE RETRIEVAL",
    description: "Building zero-hallucination knowledge retrieval pipelines that connect custom documents, PDFs, and enterprise databases to large language models.",
    deliverables: [
      "Document Embedding & Ingestion",
      "Vector Database Setup",
      "Context-Aware Semantic Search",
      "Domain-Specific QA Engines"
    ],
    techStack: ["LangChain", "ChromaDB", "Python", "Vector Embeddings"]
  },
  {
    number: "04",
    title: "Business Website Development",
    tag: "EDITORIAL • SPEED",
    description: "Crafting distinct, high-conversion web presences for businesses, startups, and public service organizations that stand far apart from boilerplate templates.",
    deliverables: [
      "Cinematic Landing Pages",
      "Brand-Aligned Editorial Design",
      "SEO & Performance Optimization",
      "Content Management Integration"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"]
  },
  {
    number: "05",
    title: "Workflow Automation",
    tag: "OPERATIONS • EFFICIENCY",
    description: "Eliminating repetitive operational tasks through automated pipelines, webhook integrations, and intelligent multi-step event triggers.",
    deliverables: [
      "Automated Business Processes",
      "Multi-Service Webhook Sync",
      "Notification Dispatch Engines",
      "Custom API Bridges"
    ],
    techStack: ["n8n", "Node.js", "REST APIs", "Webhooks"]
  },
  {
    number: "06",
    title: "Modern UI/UX Development",
    tag: "INTERACTION • MOTION",
    description: "Translating bold creative visions into fluid, interactive browser experiences with micro-interactions, custom cursors, and physics-based animations.",
    deliverables: [
      "Experimental Layouts",
      "Micro-Interactions & Physics",
      "Accessible Motion Systems",
      "High-Fidelity Component Libraries"
    ],
    techStack: ["Framer Motion", "GSAP", "Lenis", "Tailwind CSS"]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    period: "2023 — PRESENT",
    title: "B.Tech Computer Science Engineering (AI & ML)",
    category: "ACADEMIC FOUNDATION",
    description: "Immersed in deep theoretical and applied computer science, focusing on artificial intelligence, machine learning algorithms, discrete mathematics, and computational structures.",
    highlights: [
      "Specialization in Artificial Intelligence & Machine Learning",
      "In-depth study of data structures, algorithms, and system design",
      "Hands-on machine learning projects and model training"
    ]
  },
  {
    period: "2023 — PRESENT",
    title: "Full-Stack Software Development",
    category: "ENGINEERING CRAFT",
    description: "Architecting end-to-end applications from database models to reactive user interfaces, mastering the modern React and Next.js ecosystems alongside scalable backend runtimes.",
    highlights: [
      "Building production-ready web apps with Next.js App Router",
      "Relational & document database design with Supabase & Postgres",
      "RESTful API architectures and secure client-server communication"
    ]
  },
  {
    period: "2024 — PRESENT",
    title: "AI/ML Experimentation & RAG Research",
    category: "INTELLIGENT SYSTEMS",
    description: "Diving into state-of-the-art Generative AI, Retrieval-Augmented Generation pipelines, vector embeddings with ChromaDB, and multi-agent systems via LangChain.",
    highlights: [
      "Engineered vector retrieval pipelines for academic document synthesis",
      "Explored prompt orchestration and dynamic agent personas",
      "Integrated Hugging Face open weights and proprietary LLMs"
    ]
  },
  {
    period: "2024 — PRESENT",
    title: "Hackathon Participation & Sprint Innovation",
    category: "COLLABORATIVE PROBLEM SOLVING",
    description: "Engaging in competitive hackathons to rapidly prototype practical solutions under tight time constraints, validating architectural choices through immediate testing.",
    highlights: [
      "Rapid ideation and zero-to-one product development",
      "Collaborative teamwork and technical execution under pressure",
      "Translating ambiguous real-world friction into functional prototypes"
    ]
  },
  {
    period: "2025 — PRESENT",
    title: "Independent Product Engineering",
    category: "FLAGSHIP INITIATIVES",
    description: "Designing and engineering self-driven software solutions like QFLOW AI and StudyAssistant to solve high-friction everyday human problems.",
    highlights: [
      "End-to-end design, implementation, and deployment",
      "Integrating AI voice synthesis into operational queue management",
      "Building grounded, contextual educational AI copilots"
    ]
  }
];

export const NAVIGATION_LINKS = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "SKILLS", href: "#skills" },
  { label: "JOURNEY", href: "#journey" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" }
];

