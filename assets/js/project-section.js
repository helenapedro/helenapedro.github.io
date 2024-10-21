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
              <h6 class="skills mb-2 text-muted">TypeScript | Node.js | Express | MongoDB | AWS S3 | JWT | Winston | Rate Limit | Caching | Helmet </h6>
              <a href="https://github.com/helenapedro/resume-feedback-backend.git" target="_blank" class="image fit thumb">
                <img src="images/thumbs/resume-istockphoto.webp" class="card-img-top" alt="Resume feedback project thumbnail">
              </a>
              <p class="paragraph">This app facilitates a collaborative feedback process on resumes, allowing users to submit, comment on, and manage resumes efficiently.</p>
              <div class="d-flex">
                <a href="https://github.com/helenapedro/resume-feedback-backend.git" target="_blank" class="btn btn-primary">View Project</a>
                <a href="https://github.com/helenapedro/resume-feedback-backend.git" target="_blank" class="btn btn-secondary ml-2">View Backend Code</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-body">
              <h4 class="title">SpaceX Falcon 9</h4>
              <h6 class="skills mb-2 text-muted">Python | Webscraping | Rest API | EDA | SQL | Flask | Folium | Plotly Dash | Machine Learning</h6>
              <img src="images/thumbs/capa.PNG" class="card-img-top" alt="SpaceX Falcon 9 analysis project thumbnail">
              <p class="paragraph">The project delves into the feasibility of establishing a new player in the rocket industry, SpaceY, to rival SpaceX, the brainchild of billionaire industrialist Elon Musk.</p>
              <div class="d-flex">
                <a href="https://pedropublicfiles.s3.us-east-2.amazonaws.com/Spacex_falcon_9_data_analysis/index.html" target="_blank" class="btn btn-primary">View Project</a>
                <a href="https://dashboard-spacexlaunch-app-1872ac792790.herokuapp.com/" target="_blank" class="btn btn-secondary ml-2">View Dashboard</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <getintouch-section></getintouch-section>
          `;
  }
}
customElements.define('project-section', ProjectSection);