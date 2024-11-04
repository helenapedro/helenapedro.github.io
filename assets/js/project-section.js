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
              <a href="https://github.com/helenapedro/resume-feedback-backend.git" target="_blank" class="image fit thumb">
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
              <h4 class="title">SpaceX Falcon 9</h4>
              <h6 class="skills mb-2 text-muted">Python | Webscraping | Rest API | EDA | SQL | Flask | Folium | Plotly Dash | Machine Learning</h6>
              <img src="images/thumbs/capa.PNG" class="card-img-top" alt="SpaceX Falcon 9 analysis project thumbnail">
              <p class="paragraph">The project delves into the feasibility of establishing a new player in the rocket industry, SpaceY, to rival SpaceX, the brainchild of billionaire industrialist Elon Musk.</p>
              <ul class="actions justify-content-center align-items-center">
                <li>
                  <a href="https://pedropublicfiles.s3.us-east-2.amazonaws.com/Spacex_falcon_9_data_analysis/index.html" target="_blank" class="button small fit">View Project</a>
                  <a href="https://dashboard-spacexlaunch-app-1872ac792790.herokuapp.com/" target="_blank" class="button small fit">View Dashboard</a> 
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