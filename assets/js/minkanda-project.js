class MinkandaProject extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container my-4">
        <div class="row">
          <div class="col-12 work-item featured card">
            <div class="card-body">
              <h2 class="title">Minkanda: Note Taking</h2>
              <h4 class="skills mb-2 text-muted">Spring Boot | Spring Security | Spring Data JPA | Hibernate | Jenkins | jasypt | EhCache | Nginx | IP-based Rate Limiting | Load Balancing | HikariCP | Logback | CI/CD | Git | React | Redux | Bootstrap | SCSS</h4>
              <a href="https://minkanda.mtcambrosio.com" target="_blank" class="image fit thumb">
                <img src="images/thumbs/hero.webp" class="img-fluid card-img-top" alt="Minkanda Project Thumbnail">
              </a>
              <p class="paragraph">Web app that securely creates, manages, and accesses private and public notes. (Hosted on AWS EC2) <br> Login credentials for testing: (email: test@test.com, password: Test4321)</p>
              <div class="d-flex">
                <a href="https://minkanda.mtcambrosio.com" target="_blank" class="btn btn-primary">View Project</a>
                <a href="https://github.com/helenapedro/notesbackend.git" target="_blank" class="btn btn-secondary ml-2">View Backend</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('minkanda-project', MinkandaProject);
   