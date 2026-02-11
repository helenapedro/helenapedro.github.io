const BASE_URL = "https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com";
const GITHUB_LINK = "https://github.com/helenapedro";

export const projects = [
  {
    title: 'Resume Feedback Platform',
    technologies: ['Java', 'Spring Boot', 'JPA/Hibernate', 'Apache Kafka', 'JPA/Hibernate', 'MySQL', 'MongoDB', 'Redis', 'Docker'],
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
    title: 'Engineering Portfolio',
    technologies: ['React', 'React Router', 'Firebase/Firestore', 'JavaScript','React Bootstrap', 'CloudFront', 'AWS S3'],
    url: 'https://zepedro-portfolio.hmpedro.com/',
    image: `${BASE_URL}/thisisengineering.jpg`,
    description: 'A React single-page portfolio with routed project pages, filters, pagination, and Firestore-backed content, delivering a clean UX for showcasing projects, skills, and background.',
    frontendUrl: '',
    backendUrl: `${GITHUB_LINK}/zepedro-engineering-portfolio.git`,
  },

  {
    title: 'Data Reliability & Predictive Analytics Platform',
    url: 'https://predictive-analytics-for-rocket-launches.hmpedro.com/',
    image: `${BASE_URL}/rocket_launch_img.jpg`,
    description: `
      An end-to-end data and machine learning project to analyze factors influencing launch success and cost reduction through booster reusability.\n
      
      Scope

      - Data ingestion from multiple sources including SpaceX API.
      - Data transformation pipeline for exploration and model-ready datasets.
      - Interactive dashboard to analyze payload ranges, launch-site success rates, and operational patterns.
      - Predictive modeling with algorithm comparison (Logistic Regression, SVM, Decision Tree, KNN) and performance-based selection.
      - Web deployment packaging using Gunicorn.
    `,
    technologies: ['Python', 'Pandas / NumPy', 'Scikit-learn', 'Plotly Dash', 'Flask Gunicorn', 'Requests'],
    frontendCodeLink: '',
    backendUrl: `${GITHUB_LINK}/rocket_launchs_predictive_analysis`,
  },
];
