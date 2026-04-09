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
      "JPA/Hibernate",
      "Apache Kafka",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    url: "https://feedback.hmpedro.com/",
    images: [
      `https://resume-feedback-platform.s3.us-east-1.amazonaws.com/archtectureanddataflow.png`,
    ],
    descriptionBlocks: [
      {
        type: "paragraph",
        text: "Resume review platform designed around reliability, asynchronous processing, and collaborative workflows.",
      },
      {
        type: "list",
        items: [
          "Built resilient backend services for resume ingestion, versioning, sharing, and AI-assisted feedback workflows.",
          "Used Spring Boot, Kafka, Redis, MySQL, MongoDB, Docker, and React/Redux with TypeScript to support decoupled processing, state management, and operational scalability.",
          "Focused on system design decisions that improve responsiveness, fault tolerance, and maintainability in real-world usage.",
        ],
      },
    ],
    backendUrl: `${GITHUB_LINK}/resume-feedback-platform.git`,
  },
  {
    id: "engineering-portfolio",
    title: "Engineering Portfolio",
    technologies: [
      "React",
      "React Router",
      "Firebase/Firestore",
      "JavaScript",
      "React Bootstrap",
      "CloudFront",
      "AWS S3",
    ],
    url: "https://zepedro-portfolio.hmpedro.com/",
    images: [`${BASE_URL}/thisisengineering.jpg`],
    descriptionBlocks: [
      {
        type: "paragraph",
        text: "Portfolio platform with structured project data, routing, and scalable presentation layers.",
      },
      {
        type: "list",
        items: [
          "Implemented routed project pages, filtering, and pagination to improve discoverability and reduce friction for recruiters reviewing technical work.",
          "Used React with Firestore-backed content management to support scalable updates.",
          "Designed the experience to communicate engineering identity, project depth, and technical credibility in a clear hiring-focused flow.",
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
        text: "Operational search and analytics dashboard for Angola fuel station data.",
      },
      {
        type: "list",
        items: [
          "Integrated public station data into a single dashboard with filtering by brand, province, municipality, and station name.",
          "Used Python, Flask, Dash, SQL, and MongoDB to support interactive exploration and scalable handling of location-driven data.",
          "Improved discoverability for end users by converting a fragmented dataset into a searchable operational interface.",
        ],
      },
    ],
    technologies: ["Python", "Flask", "SQL", "MongoDB", "Dash", "Plotly"],
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
        text: "End-to-end data reliability and predictive analytics system for launch outcomes.",
      },
      {
        type: "list",
        items: [
          "Built a pipeline for collecting, cleaning, and analyzing launch data to support prediction experiments around mission success and booster reusability.",
          "Integrated machine learning workflows with interactive dashboards so users can explore trends, evaluate predictions, and inspect operational factors.",
        ],
      },
    ],
    technologies: [
      "Python",
      "Pandas / NumPy",
      "Scikit-learn",
      "Plotly Dash",
      "Flask Gunicorn",
      "Requests",
    ],
    backendUrl: `${GITHUB_LINK}/rocket_launchs_predictive_analysis`,
  },
];
