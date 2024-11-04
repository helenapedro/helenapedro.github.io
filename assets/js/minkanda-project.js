class MinkandaProject extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="featured card text-center">
      <div class="card-body">
        <h4 class="title">Minkanda: Note Taking</h4>
        <h6 class="skills mb-2 text-muted">Spring Boot | Jasypt | EhCache | JPA | Hibernate| HikariCP | Logback | Nginx | React | Redux | AWS EC2</h6>
        <a href="https://minkanda.mtcambrosio.com" target="_blank" class="image fit thumb">
          <img src="images/thumbs/hero.webp" class="img-fluid card-img-top" alt="Minkanda Project Thumbnail">
        </a>
        <p class="paragraph">
          Web app that securely creates, manages, and accesses private and public notes.<br /> 
          Login credentials for testing: (email: test@test.com, password: Test4321)
        </p>
        <ul class="actions justify-content-center align-items-center">
          <li>
            <a href="https://minkanda.mtcambrosio.com" target="_blank" class="button small">View Project</a>
            <a href="https://github.com/helenapedro/minkanda-frontend.git" target="_blank" class="button small">View Frontend Code</a>
            <a href="https://github.com/helenapedro/notesbackend.git" target="_blank" class="button small">View Backend Code</a>
          </li>
        </ul>
      </div>
    </div>
    `;
  }
}
customElements.define('minkanda-project', MinkandaProject);
   