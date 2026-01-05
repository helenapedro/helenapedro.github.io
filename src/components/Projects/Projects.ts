const BASE_URL = "https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com";
const GITHUB_LINK = "https://github.com/helenapedro";

export const projects = [
  {
    title: 'Minkanda: Note Taking',
    url: 'https://minkanda.hmpedro.com/',
    image: `${BASE_URL}/minkanda.jpg`,
    technologies: [
      'Spring', 'Nginx', 'JPA', 'React/Redux', 'AWS EC2', 'Hostinger'
    ],
    description: `
      Minkanda is a Web app that securely creates, manages, and accesses private and public notes. 

      It ensures 𝗲𝗻𝗱-𝘁𝗼-𝗲𝗻𝗱 𝗲𝗻𝗰𝗿𝘆𝗽𝘁𝗶𝗼𝗻 for note titles and bodies using 𝗷𝗮𝘀𝘆𝗽𝘁, making all notes inaccessible-even 
      to the developer. By default, notes are private, with an optional feature to make them public.

      I’ve implemented 𝗿𝗮𝘁𝗲 𝗹𝗶𝗺𝗶𝘁𝗶𝗻𝗴 using 𝗡𝗴𝗶𝗻𝘅 to safeguard the backend API from excessive requests. 
      This API allows users to create, update, and delete notes, so protecting these endpoints is crucial. 

      I’ve also enabled 𝗜𝗻-𝗠𝗲𝗺𝗼𝗿𝘆-𝗖𝗮𝗰𝗵𝗶𝗻𝗴 using EhCache to store frequently accessed user notes. 

    `,
    frontendUrl: `${GITHUB_LINK}/minkanda-frontend.git`,
    backendUrl: `${GITHUB_LINK}/notesbackend.git`
  },

  {
    title: 'Resume Feedback',
    technologies: ['TypeScript', 'Node/Express', 'MongoDB', 'AWS S3', 'React/Redux'],
    url: 'https://master.d1cehne8ow0dq0.amplifyapp.com/',
    images: [
      `${BASE_URL}/feedback_io.webp`
    ],
    description: `
      This is a full-stack TypeScript implementation platform dedicated to helping professionals improve their resumes through community feedback.
      Users can upload their resumes, receive constructive feedback, and provide insights on others' resumes. 
      


      I used AWS 𝗦𝟯 for document storage and AWS CloudFront for 𝗖𝗗𝗡 integration to improve performance.
    `,
    frontendUrl: `${GITHUB_LINK}/feedback-frontend.git`,
    backendUrl: `${GITHUB_LINK}/feedback-backend.git`,
  },

  {
    title: 'Angola Fuel Station Explorer ',
    url: 'https://gaspump.hmpedro.com/',
    image: `${BASE_URL}/gaspump.jpeg`,
    description: `
      A Dash application that visualizes Angolan gas stations on an interactive map, 
      a filterable table, and stats view with totals plus operator and municipality distributions.
      It consumes a public stations API, and supports CSV export.
    `,
    technologies: ['Python', 'Flask', 'SQL', 'MongoDB', 'Dash', 'Plotly'],
    frontendUrl: '',
    backendUrl: `${GITHUB_LINK}/Angola-Fuel-Station-Explorer`,
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

  {
    title: 'Rocket Launchs Predictive Analysis',
    url: 'https://predictive-analytics-for-rocket-launches.hmpedro.com/',
    image: `${BASE_URL}/rocket_launch_img.jpg`,
    description: `
      This web application predicts rocket stage reusability and analyzes launch 
      locations with interactive visualizations. 
      
      
      


      It dynamically queries SpaceX launch data using SQL, allowing users to explore 
      performance metrics such as payload mass, mission success rates, and landing outcomes.
      The application features interactive maps and charts to visualize launch sites and results. 
      Additionally, it integrates historical launch data scraped from Wikipedia and performs Exploratory 
      Data Analysis (EDA) by fetching data via GET requests from the SpaceX REST API.
    `,
    technologies: ['Python', 'Flask', 'Dash', 'SQL', 'EDA', 'Webscraping', 'REST API', 'Folium'],
    frontendCodeLink: '',
    backendUrl: `${GITHUB_LINK}/rocket_launchs_predictive_analysis`,
  },

  {
    title: 'Coding Fun Land',
    url: 'https://codingfunland.hmpedro.com/',
    images: [
      `https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/codingfunland_1.webp`,
      `https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/codingfunland_1.webp`
    ],
    description: `
      Since December 2024, I’ve been guiding kids (ages 5–10) into the world of coding through fun, 
      hands-on projects using Python and Dash. Through Coding Fun Land, I’ve mentored 15 young learners, 
      helping them build simple yet engaging apps that spark creativity and problem-solving skills.

      Click the button below to see some of the fun and innovative projects our budding coders have built.
    `,
    technologies: ['Volunteer Work', 'Python', 'Dash'],
    frontendUrl: '',
    backendUrl: '',
  },

  {
    title: 'Helena Explora',
    url: 'https://helenaexplora.hmpedro.com/',
    image: `https://helenaexplora.hmpedro.com/assets/he-logo-BYYh-2WT.jpg`,
    description: `
      O Helena Explora é um espaço dedicado a quem deseja compreender melhor como funcionam os estudos, 
      a vida académica e o dia a dia nos Estados Unidos.

      A missão do projeto é inspirar, informar e aproximar a comunidade de conteúdos educativos que ajudem 
      cada pessoa a tomar decisões mais seguras sobre o seu futuro.
    `,
    technologies: ['Community'],
    frontendUrl: '',
    backendUrl: '',
  },
];