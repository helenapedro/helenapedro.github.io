class MinkandaProject extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="row">
        <div class="col-12 work-item featured">
          <h2 class="title">Minkanda: Note Taking</h2>
          <h4 class="skills">
            Spring Boot | Spring Security | Spring Data JPA | Hibernate | Jenkins | jasypt |
            EhCache | Nginx | IP-based Rate Limiting | Load Balancing | HikariCP | Logback |
            CI/CD | Git | React | Redux | Bootstrap | SCSS 
          </h4>
          <a href="images/fulls/hero.webp" class="image fit thumb">
            <img src="images/thumbs/hero.webp" class="img-fluid" alt="" />
          </a>
          <p class="paragraph large-text">
            Web app that securely creates, manages, and accesses private and public notes.
            (Hosted on AWS EC2) </br>
            Login credentials for testing: (email: test@test.com, password: Test4321)
          </p></br>
          <ul class="actions">
            <li>
              <a href="https://minkanda.mtcambrosio.com" target="_blank" class="btn btn-primary btn-sm">View Project</a>
            </li>
          </ul>
        </div>
      </div>
       `;
     }
   }
   customElements.define('minkanda-project', MinkandaProject);
   