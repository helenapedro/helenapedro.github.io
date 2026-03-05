const BASE_URL = "https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com";
const GITHUB_LINK = "https://github.com/helenapedro";

export type DescriptionBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] };

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
    id: 'resume-feedback-platform',
    featured: true,
    title: 'Resume Feedback Platform',
    technologies: ['Java', 'Spring Boot', 'JPA/Hibernate', 'Apache Kafka', 'MySQL', 'MongoDB', 'Redis', 'Docker'],
    url: 'https://feedback.hmpedro.com/',
    images: [
      `https://resume-feedback-platform.s3.us-east-1.amazonaws.com/archtectureanddataflow.png`
    ],
    descriptionBlocks: [
      {
        type: 'paragraph',
        text: 'A backend-focused platform designed to process resume feedback at scale using asynchronous, event-driven architecture.',
      },
    ],
    backendUrl: `${GITHUB_LINK}/resume-feedback-platform.git`,
  },
  {
    id: 'engineering-portfolio',
    title: 'Engineering Portfolio',
    technologies: ['React', 'React Router', 'Firebase/Firestore', 'JavaScript', 'React Bootstrap', 'CloudFront', 'AWS S3'],
    url: 'https://zepedro-portfolio.hmpedro.com/',
    images: [`${BASE_URL}/thisisengineering.jpg`],
    descriptionBlocks: [
      {
        type: 'paragraph',
        text: 'A React single-page portfolio with routed project pages, filters, pagination, and Firestore-backed content, delivering a clean UX for showcasing projects, skills, and background.',
      },
    ],
    backendUrl: `${GITHUB_LINK}/zepedro-engineering-portfolio.git`,
  },
  {
    id: 'predictive-analytics-platform',
    title: 'Data Reliability & Predictive Analytics Platform',
    url: 'https://predictive-analytics-for-rocket-launches.hmpedro.com/',
    images: [`${BASE_URL}/rocket_launch_img.jpg`],
    descriptionBlocks: [
      {
        type: 'paragraph',
        text: 'An end-to-end data and machine learning project to analyze factors influencing launch success and cost reduction through booster reusability.',
      },
    ],
    technologies: ['Python', 'Pandas / NumPy', 'Scikit-learn', 'Plotly Dash', 'Flask Gunicorn', 'Requests'],
    backendUrl: `${GITHUB_LINK}/rocket_launchs_predictive_analysis`,
  },
];
