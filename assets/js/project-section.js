class ProjectSection extends HTMLElement {
  connectedCallback() {
    const feedbackTitle = 'Resume Feedback';
    const feedbackSkills = 'TypeScript | Node.js | Express | MongoDB | AWS S3 | React | Redux | Bootstrap';
    const feedbackProjectLink = 'https://resumefeedback.mtcambrosio.com/';
    const feedbackImageSrc = this.getAttribute('image-src') || 'images/thumbs/rfeedback.webp';
    const feedbackImageAlt = this.getAttribute('image-alt') || 'Resume feedback project thumbnail';
    const feedbackDescription = this.getAttribute('description') || 'Collaborative web app where job seekers can give and receive valuable feedback on their resumes, designed for those who want honest, constructive insights from peers.';
    const feedbackFrontendCodeLink = this.getAttribute('frontend-code-link') || 'https://github.com/helenapedro/feedback-frontend.git';
    const feedbackBackendCodeLink = this.getAttribute('backend-code-link') || 'https://github.com/helenapedro/feedback-backend.git';
   
    const gasPumpTitle = this.getAttribute('title') || 'GasPump';
    const gasPumpSkills = this.getAttribute('skills') || 'Python | Flask | SQL | MongoDB | WebScraping | Dash | HTML | CSS';
    const gasPumpProjectLink = 'https://gaspump.mtcambrosio.com/';
    const gasPumpImageSrc = 'images/thumbs/gaspump.jpeg';
    const gasPumpImageAlt = 'GasPump Dashboard project thumbnail';
    const gasPumpDescription = 'Dynamic data visualization tool featuring interactive maps, statistical analysis, and tabular data presentation, for users to explore gas station insights effortlessly.';
    
    const rocketLaunchTitle = 'Rocket Launch Analytics App';
    const rocketLaunchSkills = 'Machine Learning | Python | Flask | Rest API | SQL | Dash | Webscraping | EDA | Folium';
    const rocketLaunchProjectLink = 'https://predictive-analytics-for-rocket-launches.mtcambrosio.com/';
    const rocketLaunchImageSrc = 'images/thumbs/rocket_launch_img.jpg';
    const rocketLaunchImageAlt = 'Rocket Launch Prediction Analysis project thumbnail';
    const rocketLaunchDescription = 'Analyzed SpaceX data to help SpaceY estimate launch costs and predict first-stage reusability.';
    
    const projectManagementTitle = 'Project Management Web App';
    const projectManagementSkills = 'Firebase | React | Bootstrap | AWS (S3, CloudFront & Amplify)';
    const projectManagementProjectLink = 'https://master.d2p23rnvlomq8x.amplifyapp.com/';
    const projectManagementImageSrc = 'images/thumbs/thisisengineering.jpg';
    const projectManagementImageAlt = 'Project Management Web App project thumbnail';
    const projectManagementDescription = 'Portfolio Web application that showcases a construction engineer\'s skills, and professionally completed projects.';  

    this.innerHTML = `
    <section id="one" class="container my-4">
      <minkanda-project></minkanda-project>
    </section>
    <section id="two" class="container my-4">
      <div class="row">
        <!-- Resume Feedback -->
        <div class="col-md-6 mb-4">
          <project-card
            title="${feedbackTitle}"
            skills="${feedbackSkills}"
            project-link="${feedbackProjectLink}"
            image-src="${feedbackImageSrc}"
            image-alt="${feedbackImageAlt}"
            description="${feedbackDescription}"
            frontend-code-link="${feedbackFrontendCodeLink}"
            backend-code-link="${feedbackBackendCodeLink}">
          </project-card>
        </div>

        <!-- GasPump Dashboard -->
        <div class="col-md-6 mb-4">
          <project-card
            title="${gasPumpTitle}"
            skills="${gasPumpSkills}"
            project-link="${gasPumpProjectLink}"
            image-src="${gasPumpImageSrc}"
            image-alt="${gasPumpImageAlt}"
            description="${gasPumpDescription}">
          </project-card>
        </div>

        <!-- Rocket Launch Prediction Analysis -->
        <div class="col-md-6 mb-4">
          <project-card
            title="${rocketLaunchTitle}"
            skills="${rocketLaunchSkills}"
            project-link="${rocketLaunchProjectLink}"
            image-src="${rocketLaunchImageSrc}"
            image-alt="${rocketLaunchImageAlt}"
            description="${rocketLaunchDescription}"
          ></project-card>
        </div>

        <!-- Project Management Web App -->
        <div class="col-md-6 mb-4">
          <project-card
            title="${projectManagementTitle}"
            skills="${projectManagementSkills}"
            project-link="${projectManagementProjectLink}"
            image-src="${projectManagementImageSrc}"
            image-alt="${projectManagementImageAlt}"
            description="${projectManagementDescription}"
          ></project-card>
        </div>
      </div>
    </section>
    `;
  }
}
customElements.define('project-section', ProjectSection);