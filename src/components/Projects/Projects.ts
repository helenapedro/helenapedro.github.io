const BASE_URL = "https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com";
const GITHUB_LINK = "https://github.com/helenapedro";

export const projects = [
  {
    title: 'Resume Feedback Platform',
    technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'JPA/Hibernate', 'MySQL', 'MongoDB', 'Redis', 'Docker'],
    url: '',
    images: [
      `https://resume-feedback-platform.s3.us-east-1.amazonaws.com/archtectureanddataflow.png`
    ],
    description: `
      A backend-focused platform designed to process resume feedback at scale using asynchronous, event-driven architecture.
    `,
    frontendUrl: `${GITHUB_LINK}/feedback-frontend.git`,
    backendUrl: `${GITHUB_LINK}/resume-feedback-platform.git`,
  },

  {
    title: 'Engineering Portfolio & Project Showcase',
    technologies: ['React', 'Firebase', 'CloudFront', 'AWS S3', 'Amplify'],
    url: 'https://zepedro-portfolio.hmpedro.com/',
    image: `${BASE_URL}/thisisengineering.jpg`,
    description: 'A dynamic web application to showcase diverse construction engineering projects, each featuring extensive image galleries. Leverages Firebase for a robust, scalable, and serverless backend.',
    frontendUrl: '',
    backendUrl: `${GITHUB_LINK}/zepedro-engineering-portfolio.git`,
  },
];