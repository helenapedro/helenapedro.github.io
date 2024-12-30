class Header extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name') || 'Helena';
    const jobTitle = this.getAttribute('job-title') || 'software engineer';
    const githubLink = this.getAttribute('github-link') || 'https://github.com/helenapedro';
    const linkedinLink = this.getAttribute('linkedin-link') || 'https://www.linkedin.com/in/helena-mbeua-pedro/';
    const resumeLink = this.getAttribute('resume-link') || 'https://hmpedropublicfiles.s3.us-east-2.amazonaws.com/Resume_HMPedro.pdf';
    const credlyLink = this.getAttribute('credly-link') || 'https://www.credly.com/users/helena-pedro';

    this.innerHTML = `
      <header id="header" class="bg-light py-5">
        <div class="container text-center text-md-left">
          <div class="row justify-content-center align-items-center">
            <div class="col-md-12 mb-3 mb-md-0">
              <img class="img-fluid rounded-circle" src="images/me.jpg" alt="Avatar of ${name}" style="max-width: 200px;">
            </div>
            <div class="col-md-12">
              <h1 class="display-4 font-weight-bold">
                Hi, my name is <b>${name}</b>.
              </h1>
              <p class="lead">
                I'm a <u>${jobTitle}</u> with experience in full-stack development, microservices, database
                design, cloud solutions and data science. I am adept at building high-performance and scalable systems.
              </p>
              <ul class="list-inline mt-4">
                <li class="list-inline-item">
                  <a href="${linkedinLink}" target="_blank" class="btn btn-primary btn-lg" aria-label="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="${githubLink}" target="_blank" class="btn btn-dark btn-lg" aria-label="GitHub">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="${resumeLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg" aria-label="Resume">
                    <i class="fas fa-file-pdf"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', Header);