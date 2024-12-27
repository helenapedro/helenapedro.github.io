class MinkandaProject extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Minkanda: Note Taking';
    const skills = this.getAttribute('skills') || 'Spring Boot | Spring Security | Jasypt | EhCache | JPA | Hibernate | HikariCP | Logback | Nginx | React | Redux | AWS EC2';
    const projectLink = this.getAttribute('project-link') || 'https://minkanda.mtcambrosio.com';
    const imageSrc = this.getAttribute('image-src') || 'images/thumbs/hero.webp';
    const imageAlt = this.getAttribute('image-alt') || 'Minkanda Project Thumbnail';
    const description = this.getAttribute('description') || 'Web app that securely creates, manages, and accesses private and public notes.<br /> Login credentials for testing: (email: test@test.com, password: Test4321)';
    const frontendCodeLink = this.getAttribute('frontend-code-link') || 'https://github.com/helenapedro/minkanda-frontend.git';
    const backendCodeLink = this.getAttribute('backend-code-link') || 'https://github.com/helenapedro/notesbackend.git';

    this.innerHTML = `
    <div class="featured card text-center">
      <div class="card-body">
        <h4 class="title">${title}</h4>
        <h6 class="skills mb-2 text-muted">${skills}</h6>
        <a href="${projectLink}" target="_blank" class="image fit thumb">
          <img src="${imageSrc}" class="img-fluid card-img-top" alt="${imageAlt}">
        </a>
        <p class="paragraph">
          ${description}
        </p>
        <ul class="actions justify-content-center align-items-center">
          <li>
            <a href="${projectLink}" target="_blank" class="button small">View Project</a>
            <a href="${frontendCodeLink}" target="_blank" class="button small">View Frontend Code</a>
            <a href="${backendCodeLink}" target="_blank" class="button small">View Backend Code</a>
          </li>
        </ul>
      </div>
    </div>
    `;
  }
}

customElements.define('minkanda-project', MinkandaProject);