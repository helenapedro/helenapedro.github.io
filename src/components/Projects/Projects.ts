import { resumeFeedbackImages } from "./resumeFeedbackImages.generated";

const BASE_URL = "https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com";
const GITHUB_LINK = "https://github.com/helenapedro";
const RESUME_FEEDBACK_MAIN_IMAGE =
  "/project-images/resume-feedback-platform/main.png";
const RESUME_FEEDBACK_HANDSHAKE_IMAGE =
  "/project-images/resume-feedback-platform/handshake_featured.png";
const RESUME_FEEDBACK_ARCHITECTURE_IMAGE =
  "/project-images/resume-feedback-platform/RFP_Architecture_Diagram.jpg";

export type DescriptionBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  highlight?: string;
  highlightUrl?: string;
  summary: string;
  technologies: string[];
  url: string;
  images: string[];
  detailImages?: string[];
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
    subtitle: "AI Resume Review with Version Tracking",
    highlight:
      "Featured in the Handshake AI Showcase through the OpenAI Developers x Handshake Codex Creator Challenge",
    highlightUrl:
      "https://app.joinhandshake.com/ai-showcase?project_id=3056375",
    summary:
      "AI-powered resume feedback platform with version tracking, asynchronous feedback generation, progress analysis across resume iterations, and shareable review workflows.",
    technologies: [
      "React",
      "TypeScript",
      "Spring Boot",
      "MySQL",
      "MongoDB",
      "Apache Kafka",
      "LLM API",
      "AWS S3",
      "AWS Amplify",
      "Docker",
    ],
    url: "https://feedback.hmpedro.com/",
    images: [
      RESUME_FEEDBACK_HANDSHAKE_IMAGE,
      RESUME_FEEDBACK_MAIN_IMAGE,
    ].filter((image) => resumeFeedbackImages.includes(image)),
    detailImages: [RESUME_FEEDBACK_ARCHITECTURE_IMAGE].filter((image) =>
      resumeFeedbackImages.includes(image),
    ),
    descriptionBlocks: [
      {
        type: "heading",
        text: "Problem",
      },
      {
        type: "paragraph",
        text: "Most AI resume tools treat every upload as a one-time review. This platform is designed around continuous improvement: each resume version has its own feedback, progress can be compared against previous versions, and users can see whether they fixed old issues or introduced new ones.",
      },
      {
        type: "heading",
        text: "Frontend workflow",
      },
      {
        type: "list",
        items: [
          "Built a Vite React and TypeScript SPA that separates route-level screens, feature orchestration hooks, server state, domain services, and local UI state.",
          "Used a non-blocking upload flow: after a resume version is created, the user is taken to the resume detail screen while AI processing continues in the background.",
          "Implemented React Query polling against the latest AI job endpoint, with a timeout and retry path so users are not stuck in an indefinite loading state.",
        ],
      },
      {
        type: "heading",
        text: "Backend architecture",
      },
      {
        type: "list",
        items: [
          "Organized the backend into resume-api for REST workflows, resume-worker for AI processing, and common for shared contracts and document models.",
          "Kept uploads fast by creating an AI job with PENDING status instead of calling the LLM synchronously during the request.",
          "Designed the worker to load resume versions, extract text, call a LLM, store feedback, update job state, and generate progress analysis when a previous version exists.",
        ],
      },
      {
        type: "heading",
        text: "Version tracking and persistence",
      },
      {
        type: "list",
        items: [
          "Modeled each resume as a collection of resume versions, with a unique version number per resume so every AI artifact has a stable version anchor.",
          "Used MySQL for transactional state such as users, resumes, versions, comments, share links, AI jobs, and references to generated feedback.",
          "Used MongoDB for flexible AI payloads including summaries, strengths, improvements, progress scores, unchanged issues, and newly introduced issues.",
          "Stored resume files in AWS S3 bucket, keeping file storage separate from transactional metadata and AI-generated analysis.",
        ],
      },
      {
        type: "heading",
        text: "AI job lifecycle and reliability",
      },
      {
        type: "list",
        items: [
          "Tracked AI feedback jobs through explicit PENDING, PROCESSING, DONE, and FAILED states so the UI and operators can reason about delayed or failed processing.",
          "Added idempotency around job creation using the resume version ID, preventing duplicate feedback jobs during retries or repeated client requests.",
          "Implemented event-driven backend pipelines using Kafka for asynchronous AI processing and job queuing, with Redis-based caching/rate limiting.",
        ],
      },
      {
        type: "heading",
        text: "Key tradeoffs",
      },
      {
        type: "list",
        items: [
          "Avoided synchronous LLM calls to keep upload latency independent from provider response time, document length, parsing failures, and retry behavior.",
          "Chose MySQL plus MongoDB instead of storing all AI output relationally, giving the system strong ownership and version constraints while keeping AI schemas flexible.",
          "Used HTTP polling instead of WebSockets for job status because it simplified infrastructure and was sufficient for short AI processing windows.",
        ],
      },
      {
        type: "heading",
        text: "Result",
      },
      {
        type: "paragraph",
        text: "The final system supports a real resume improvement workflow: users can upload versions without waiting for AI processing, feedback is traceable to the exact document version, later versions can be compared against previous feedback, and provider failures do not break the core upload flow.",
      },
    ],
  },
  {
    id: "engineering-portfolio",
    title: "Engineering Project Showcase",
    subtitle: "Scalable React-Firestore Architecture",
    summary:
      "More than a digital resume, this technical case study proves that a high-end engineering portfolio can be as well-architected as a major professional application.",
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
        text: "By moving beyond a simple website and building a scalable React-Firestore architecture, the platform demonstrates technical credibility through performance, smart design, and production-minded engineering decisions.",
      },
      {
        type: "heading",
        text: "Speed and Cost Efficiency",
      },
      {
        type: "list",
        items: [
          "The why: Standard websites often fetch the same database records every time a visitor clicks through the interface, which makes the experience slower for users and more expensive to operate.",
          "The build: A multi-tier caching system stores portfolio data in browser memory and localStorage with one-hour TTL expiration, reducing repeated Firestore reads during active sessions.",
          "The impact: Once a project is loaded, it feels instant on later views during that session, cutting redundant database traffic while making the application faster and cheaper to run.",
        ],
      },
      {
        type: "heading",
        text: "Built to Grow",
      },
      {
        type: "list",
        items: [
          "The why: As a career grows, the portfolio grows with it. Loading every large engineering project at once would eventually create lag, especially on mobile devices.",
          "The build: Server-side Firestore querying and cursor-based pagination request only the project records the visitor is currently viewing.",
          "The impact: The platform remains responsive whether it showcases 10 projects or 1,000, demonstrating an architecture designed for future scale instead of a fixed-size static gallery.",
        ],
      },
      {
        type: "heading",
        text: "Global and Field-Ready",
      },
      {
        type: "list",
        items: [
          "The why: Civil engineering work often happens in remote areas with unreliable connectivity, including field environments such as Cabinda or Soyo, while serving both Portuguese-speaking local audiences and international partners.",
          "The build: The app was built as a Progressive Web App with multilingual support for English and Portuguese.",
          "The impact: Offline access lets an engineer continue viewing portfolio material without a stable signal, while language support helps international recruiters and Angolan clients navigate the experience professionally in their preferred language.",
        ],
      },
      {
        type: "heading",
        text: "Heavy-Duty Media Handling",
      },
      {
        type: "list",
        items: [
          "The why: Engineering portfolios rely on high-resolution images, interview clips, and complex project visuals that are too heavy to treat like ordinary page data.",
          "The build: AWS S3 and CloudFront deliver large assets separately from the Firestore-backed project data.",
          "The impact: Separating the data layer from media delivery keeps galleries, 4K video clips, and model imagery from slowing down the rest of the application experience.",
        ],
      },
      {
        type: "heading",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "By choosing this architecture, the developer did not just list technical skills; they demonstrated them. The result is a portfolio that feels like a professional enterprise tool, capable of handling real-world infrastructure data while remaining fast, accessible, and global.",
      },
    ],
    backendUrl: `${GITHUB_LINK}/zepedro-engineering-portfolio.git`,
  },
  {
    id: "fuel-station-explorer",
    title: "Angola Fuel Stations Explorer",
    summary:
      "Real-time Python dashboard that unifies fragmented public fuel station data into a searchable operational interface for logistics workflows and end users.",
    url: "https://gaspump.hmpedro.com/",
    images: [`${BASE_URL}/gaspump.jpeg`],
    descriptionBlocks: [
      {
        type: "list",
        items: [
          "Prioritized system availability with short upstream request timeouts and in-memory caching so the UI could remain functional during public API outages.",
          "Developed a Regex-based scraper to extract station data and migrated unstructured records into a structured MySQL-backed dataset.",
          "Built a map-first dashboard with clickable markers and detailed filtering by brand, province, and municipality, optimized for sub-second data retrieval.",
        ],
      },
    ],
    technologies: [
      "Python",
      "Cloud Infrastructure",
      "Resilience",
      "MySQL",
      "Data Management",
      "Dashboard Development",
    ],
    backendUrl: `${GITHUB_LINK}/Angola-Fuel-Station-Explorer`,
  },
  {
    id: "predictive-analytics-platform",
    title: "Applied ML Launch Analytics Platform ",
    summary:
      "End-to-end Python data pipeline and interactive dashboard that predicts mission success and booster reusability using validated machine learning models.",
    url: "https://predictive-analytics-for-rocket-launches.hmpedro.com/",
    images: [`${BASE_URL}/rocket_launch_img.jpg`],
    descriptionBlocks: [
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
    summary:
      "AI-assisted educational platform designed to provide safe, bounded guidance for international students by translating complex product constraints into a resilient software architecture.",
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
        type: "list",
        items: [
          "Designed a scoped AI chatbot as a narrow assistant focused strictly on U.S. education topics, proactively reducing hallucination risk in sensitive areas such as immigration and legal guidance.",
          "Chose an API-oriented Express architecture instead of embedding AI logic in the frontend, creating a clear boundary for independent prompt and model evolution while centralizing backend safety and observability controls.",
          "Implemented explicit persistent sessions with UUIDs in localStorage and a stored conversationId, enabling full conversation restoration across sessions and page reloads.",
          "Integrated Supabase Edge Functions and Cloudflare Turnstile for secure lead-capture workflows, and refactored the chatbot into reusable TypeScript services and hooks to improve maintainability.",
        ],
      },
    ],
    backendUrl:
      "https://github.com/helenapedro/ai-chatbot-app/tree/main/packages/server",
  },
];
