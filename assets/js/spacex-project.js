class SpaceXProject extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <article class="col-6 col-12-xsmall work-item">
        <h2 class="title">SPACEX FALCON 9 ANALYSIS</h2>
        <h4 class="skills text-muted">
          Python | Webscraping | Rest API | EDA | Visualization
          | SQL | Flask | Folium | Plotly Dash | Machine Learning
        </h4>
        <a href="images/fulls/capa.PNG" class="image fit thumb d-block mb-3" target="_blank">
          <img src="images/thumbs/capa.PNG" alt="" class="img-fluid rounded"/>
        </a>
        <p class="paragraph">
          The project delves into the feasibility of establishing a new player
          in the rocket industry, SpaceY, to rival SpaceX, the brainchild of
          billionaire industrialist Elon Musk.
        </p></br>
        <ul class="actions list-unstyled">
          <li>
            <a href="https://pedropublicfiles.s3.us-east-2.amazonaws.com/Spacex_falcon_9_data_analysis/index.html" target="_blank" class="btn btn-primary btn-sm">View Project</a>
          </li>
          <li>
            <a href="https://dashboard-spacexlaunch-app-1872ac792790.herokuapp.com/" target="_blank" class="btn btn-primary btn-sm">View Dashboard</a>
          </li>
        </ul>
      </article>
    `;
  }
}
customElements.define('spacex-project', SpaceXProject);
