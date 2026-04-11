const BASE_URL = "https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com";
const GITHUB_LINK = "https://github.com/helenapedro";

export type DescriptionBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export interface Project {
  id: string;
  title: string;
  technologies: string[];
  url: string;
  images: string[];
  descriptionBlocks: DescriptionBlock[];
  featured?: boolean;
  frontendUrl?: string;
  backendUrl?: string;
}

export const projects: Project[] = [
  {
    id: "resume-feedback-platform",
    featured: true,
    title: "Resume Feedback Platform",
    technologies: [
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "AWS S3",
      "System Design",
      "AI-Native Architecture",
      "MySQL",
      "MongoDB",
      "Analytical Judgment",
    ],
    url: "https://feedback.hmpedro.com/",
    images: [
      `https://resume-feedback-platform.s3.us-east-1.amazonaws.com/archtectureanddataflow.png`,
    ],
    descriptionBlocks: [
      {
        type: "paragraph",
        text: "Enterprise-grade Spring Boot platform that automates resume reviews through a decoupled asynchronous pipeline designed for consistency, responsiveness, and system reliability.",
      },
      {
        type: "list",
        items: [
          "Architected a multi-module monorepo with Spring Boot and Apache Kafka to separate concerns and scale workers independently.",
          "Chose an asynchronous Kafka-based pipeline over synchronous REST orchestration to decouple user-facing latency from slower AI processing and support version-aware AI memory for auditability.",
          "Implemented dual persistence with MySQL for core state and MongoDB for feedback documents, while managing environment-specific risks such as Kafka SSL configuration and post-commit event publishing.",
        ],
      },
    ],
    backendUrl: `${GITHUB_LINK}/resume-feedback-platform.git`,
  },
  {
    id: "engineering-portfolio",
    title: "Engineering Portfolio",
    technologies: [
      "React 18",
      "TypeScript",
      "AWS S3",
      "CloudFront",
      "Firebase",
      "Firestore",
      "Performance Optimization",
    ],
    url: "https://zepedro-portfolio.hmpedro.com/",
    images: [`${BASE_URL}/thisisengineering.jpg`],
    descriptionBlocks: [
      {
        type: "paragraph",
        text: "High-performance React single-page application built to showcase technical credibility through scalable frontend architecture and optimized content delivery.",
      },
      {
        type: "list",
        items: [
          "Architected the frontend around fast page loads using a multi-tier caching strategy with in-memory caching, localStorage fallback, and TTL-based expiration to reduce redundant Firestore reads.",
          "Implemented server-side querying and cursor-based pagination in Firestore to avoid loading entire collections into the browser as project data grows.",
          "Leveraged AWS S3 and CloudFront for global asset delivery and built reusable hooks for data fetching and state management to keep the codebase maintainable.",
        ],
      },
    ],
    backendUrl: `${GITHUB_LINK}/zepedro-engineering-portfolio.git`,
  },
  {
    id: "fuel-station-explorer",
    title: "Angola Fuel Stations Explorer",
    url: "https://gaspump.hmpedro.com/",
    images: [`${BASE_URL}/gaspump.jpeg`],
    descriptionBlocks: [
      {
        type: "paragraph",
        text: "Real-time Python dashboard that unifies fragmented public fuel station data into a searchable operational interface for logistics workflows and end users.",
      },
      {
        type: "list",
        items: [
          "Prioritized system availability with short upstream request timeouts and in-memory caching so the UI could remain functional during public API outages.",
          "Developed a Regex-based scraper to extract station data and migrated unstructured records into a structured MySQL-backed dataset.",
          "Built a map-first dashboard with clickable markers and detailed filtering by brand, province, and municipality, optimized for sub-second data retrieval.",
        ],
      },
    ],
    technologies: ["Python", "Cloud Infrastructure", "Resilience", "MySQL", "Data Management", "Dashboard Development"],
    backendUrl: `${GITHUB_LINK}/Angola-Fuel-Station-Explorer`,
  },
  {
    id: "predictive-analytics-platform",
    title: "Data Reliability & Predictive Analytics Platform",
    url: "https://predictive-analytics-for-rocket-launches.hmpedro.com/",
    images: [`${BASE_URL}/rocket_launch_img.jpg`],
    descriptionBlocks: [
      {
        type: "paragraph",
        text: "End-to-end Python data pipeline and interactive dashboard that predicts mission success and booster reusability using validated machine learning models.",
      },
      {
        type: "list",
        items: [
          "Built a robust ingestion and transformation pipeline with Pandas and NumPy to clean fragmented launch datasets and improve data integrity before modeling.",
          "Implemented a comparative modeling framework across Logistic Regression, SVM, KNN, and related Scikit-learn workflows to select models using precision-based evaluation instead of relying on a black-box approach.",
          "Deployed an interactive Plotly Dash experience on AWS so users can inspect payload ranges, launch-site outcomes, and prediction behavior in real time.",
        ],
      },
    ],
    technologies: [
      "Python (Pandas/NumPy)",
      "Machine Learning",
      "AWS",
      "Scikit-learn",
      "Plotly Dash",
      "Data Engineering",
      "MLOps",
    ],
    backendUrl: `${GITHUB_LINK}/rocket_launchs_predictive_analysis`,
  },
  {
    id: "helena-explora",
    title: "Helena Explora: Responsible AI Platform",
    technologies: [
      "TypeScript",
      "React",
      "Express",
      "Supabase",
      "Cloud-Native",
      "Application Security",
      "Prompt Engineering",
      "Responsible AI",
    ],
    url: "https://helenaexplora.hmpedro.com/",
    images: [
      "https://raw.githubusercontent.com/helenaexplora/he-connect/main/src/assets/he-logo.jpg",
    ],
    descriptionBlocks: [
      {
        type: "paragraph",
        text: "AI-assisted educational platform designed to provide safe, bounded guidance for international students by translating complex product constraints into a resilient software architecture.",
      },
      {
        type: "list",
        items: [
          "Designed a scoped AI chatbot as a narrow assistant focused strictly on U.S. education topics, proactively reducing hallucination risk in sensitive areas such as immigration and legal guidance.",
          "Chose an API-oriented Express architecture instead of embedding AI logic in the frontend, creating a clear boundary for independent prompt and model evolution while centralizing backend safety and observability controls.",
          "Implemented explicit persistent sessions with UUIDs in localStorage and a stored conversationId, enabling full conversation restoration across sessions and page reloads.",
          "Integrated Supabase Edge Functions and Cloudflare Turnstile for secure lead-capture workflows, and refactored the chatbot into reusable TypeScript services and hooks to improve maintainability.",
        ],
      },
    ],
    backendUrl: "https://github.com/helenapedro/ai-chatbot-app/tree/main/packages/server",
  },
];
