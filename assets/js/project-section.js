class ProjectSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id="one" class="container my-4">
      <minkanda-project></minkanda-project>
    </section>
    <section id="two" class="container my-4">
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-body">
              <h4 class="title">Resume Feedback</h4>
              <h6 class="skills mb-2 text-muted">
                TypeScript | Node.js | Express | MongoDB | AWS S3 |
                React | Redux | Bootstrap 
              </h6>
              <a href="https://resumefeedback.mtcambrosio.com/" target="_blank" class="image fit thumb">
                <img src="images/thumbs/resume-istockphoto.webp" class="card-img-top" alt="Resume feedback project thumbnail">
              </a>
              <p class="paragraph">
                Collaborative web app where job seekers can give and receive valuable feedback
                on their resumes, designed for those who want honest, constructive insights from 
                peers.
              </p>
              <ul class="actions justify-content-center align-items-center">
                <li>
                  <a href="https://resumefeedback.mtcambrosio.com" target="_blank" class="button small fit">View Project</a>
                  <a href="https://github.com/helenapedro/feedback-frontend.git" target="_blank" class="button small fit">View Frontend Code</a>
                  <a href="https://github.com/helenapedro/feedback-backend.git" target="_blank" class="button small fit">View Backend Code</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-body">
              <h4 class="title">Rocket Launch Prediction Analysis </h4>
              <h6 class="skills mb-2 text-muted">
                Machine Learning | Python | Flask | Rest API | SQL | Dash | Webscraping | EDA  | Folium
              </h6>
              <a https://pedropublicfiles.s3.us-east-2.amazonaws.com/Spacex_falcon_9_data_analysis/index.html" target="_blank" class="image fit thumb">
                <img src="images/thumbs/capa.PNG" class="card-img-top" alt="SpaceX Falcon 9 analysis project thumbnail">
              </a>
              <p class="paragraph">
                Assessed the feasibility of SpaceY entering the rocket launch market to rival SpaceX, focusing on reducing 
                launch costs via reusable rocket stages. </br> Used Webscraping and SpaceX Rest API to collect and process data;
                conducted EDA to identify patterns in launch success factors; Built and
                evaluated classification models to predict first-stage rocket recovery success.
              </p>
              <ul class="actions justify-content-center align-items-center">
                <li>
                  <a href="https://rocket-launch-analysis-5c3ea0d2902d.herokuapp.com/" target="_blank" class="button small fit">View Project</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-body">
              <h4 class="title">Project Management Web App</h4>
              <h6 class="skills mb-2 text-muted">Firebase | AWS S3 & CloudFront | React | Bootstrap </h6>
              <a href="https://zepedro7.mtcambrosio.com" target="_blank" class="image fit thumb">
                <img src="images/thumbs/thisisengineering.jpg" class="card-img-top" alt="Resume feedback project thumbnail">
              </a>
              <p class="paragraph">Portfolio Web application that showcases a construction engineer's skills, and professionally completed projects.</p>
              <ul class="actions justify-content-center align-items-center">
                <li>
                  <a href="https://zepedro7.mtcambrosio.com/projects" target="_blank" class="button small fit">View Project</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-body">
              <h4 class="title">GasPump Dashboard</h2>
              <h6 class="skills mb-2 text-muted">
                Python | Flask | SQL | MongoDB | Dash | HTML | CSS | Heroku
              </h6>
              <a href="https://dashapp-gas-map-data-929aacd93b89.herokuapp.com/" target="_blank" class="image fit thumb">
                <img src="images/thumbs/fuelimage.jpg" class="card-img-top" alt="Resume feedback project thumbnail">
              </a>
              <p class="paragraph">
                Dynamic data visualization tool featuring interactive maps, statistical analysis, and tabular data presentation, 
                for users to explore gas station insights effortlessly.
              </p>
              <ul class="actions justify-content-center align-items-center">
                <li>
                  <a
                    href="https://dashapp-gas-map-data-929aacd93b89.herokuapp.com/" target="_blank" class="button small fit">View Project</a>
                </li>
              </ul>
            </div>
          </div>
      </div>
      </div>
    </section>
    `;
  }
}
customElements.define('project-section', ProjectSection);
