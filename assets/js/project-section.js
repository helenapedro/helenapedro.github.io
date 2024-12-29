class ProjectSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id="one" class="container my-4">
      <minkanda-project></minkanda-project>
    </section>
    <section id="two" class="container my-4">
      <div class="row">
        <!-- Resume Feedback -->
        <div class="col-md-6 mb-4">
          <project-card
            title="Resume Feedback"
            skills="TypeScript | Node.js | Express | MongoDB | AWS S3 | React | Redux | Bootstrap"
            project-link="https://resumefeedback.mtcambrosio.com/"
            image-src="images/thumbs/feedback.webp"
            image-alt="Resume feedback project thumbnail"
            description="Collaborative web app where job seekers can give and receive valuable feedback on their resumes, designed for those who want honest, constructive insights from peers."
            frontend-code-link="https://github.com/helenapedro/feedback-frontend.git"
            backend-code-link="https://github.com/helenapedro/feedback-backend.git">
          </project-card>
        </div>

        <!-- GasPump Dashboard -->
        <div class="col-md-6 mb-4">
          <project-card
            title="GasPump Dashboard"
            skills="Python | Flask | SQL | MongoDB | WebScraping | Dash | HTML | CSS"
            project-link="https://dashapp-gas-map-data-929aacd93b89.herokuapp.com/"
            image-src="images/thumbs/fuelimage.jpg"
            image-alt="GasPump Dashboard project thumbnail"
            description="Dynamic data visualization tool featuring interactive maps, statistical analysis, and tabular data presentation, for users to explore gas station insights effortlessly."
          </project-card>
        </div>

        <!-- Rocket Launch Prediction Analysis -->
        <div class="col-md-6 mb-4">
          <project-card
            title="Predictive Analytics for Rocket Launch Costs and Reusability"
            skills="Machine Learning | Python | Flask | Rest API | SQL | Dash | Webscraping | EDA | Folium"
            project-link="https://rocket-launch-analysis-5c3ea0d2902d.herokuapp.com/"
            image-src="images/thumbs/rocket_launch_img.jpg"
            image-alt="Rocket Launch Prediction Analysis project thumbnail"
            description="Analyzed SpaceX data to help SpaceY estimate launch costs and predict first-stage reusability. Created dashboards for key metrics and developed a machine learning model to assess reusability based on launch conditions."
          </project-card>
        </div>

        <!-- Project Management Web App -->
        <div class="col-md-6 mb-4">
            <project-card
              title="Project Management Web App"
              skills="Firebase | AWS S3 & CloudFront | React | Bootstrap"
              project-link="https://zepedro-portfolio-6acbe0f9989c.herokuapp.com"
              image-src="images/thumbs/thisisengineering.jpg"
              image-alt="Project Management Web App project thumbnail"
              description="Portfolio Web application that showcases a construction engineer's skills, and professionally completed projects."
            </project-card>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}
customElements.define('project-section', ProjectSection);
