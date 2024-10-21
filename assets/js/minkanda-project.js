class MinkandaProject extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="featured card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="https://minkanda.mtcambrosio.com">View Project</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h5 class="title">Minkanda: Note Taking</h5>
        <h6 class="skills mb-2 text-muted">Spring Boot | Spring Security | Spring Data JPA | Hibernate | Jenkins | jasypt | EhCache | Nginx | IP-based Rate Limiting | Load Balancing | HikariCP | Logback | CI/CD | Git | React | Redux | Bootstrap | SCSS</h6>
        <a href="https://minkanda.mtcambrosio.com" target="_blank" class="image fit thumb">
          <img src="images/thumbs/hero.webp" class="img-fluid card-img-top" alt="Minkanda Project Thumbnail">
        </a>
        <p class="paragraph">Web app that securely creates, manages, and accesses private and public notes. (Hosted on AWS EC2). Login credentials for testing: (email: test@test.com, password: Test4321)</p>
        <a href="https://minkanda.mtcambrosio.com" target="_blank" class="btn btn-secondary">View Backend</a>
        <a href="https://github.com/helenapedro/minkanda-frontend.git" target="_blank" class="btn btn-secondary">View Frontend</a>
      </div>
    </div>
    `;
  }
}
customElements.define('minkanda-project', MinkandaProject);
   