class MinkandaProject extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Minkanda: Note Taking';
    const skills = this.getAttribute('skills') || 'Spring Boot | Spring Security | Jasypt | EhCache | JPA | Hibernate | HikariCP | Logback | Nginx | React | Redux | AWS EC2';
    const projectLink = this.getAttribute('project-link') || 'https://minkanda.mtcambrosio.com';
    const imageSrc = this.getAttribute('image-src') || 'images/thumbs/minkanda.jpg';
    const imageAlt = this.getAttribute('image-alt') || 'Minkanda Project Thumbnail';
    const description = this.getAttribute('description') || 'Web app that securely creates, manages, and accesses private and public notes.<br /> Login credentials for testing: (email: test@test.com, password: Test4321)';
    const frontendCodeLink = this.getAttribute('frontend-code-link') || 'https://github.com/helenapedro/minkanda-frontend.git';
    const backendCodeLink = this.getAttribute('backend-code-link') || 'https://github.com/helenapedro/notesbackend.git';
    const buttonClass = 'button small';

    this.innerHTML = `
      <project-card
        title="${title}"
        skills="${skills}"
        project-link="${projectLink}"
        image-src="${imageSrc}"
        image-alt="${imageAlt}"
        description="${description}"
        frontend-code-link="${frontendCodeLink}"
        backend-code-link="${backendCodeLink}"
        button-class="${buttonClass}">
      </project-card>
    `;
  }
}

customElements.define('minkanda-project', MinkandaProject);