class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="header" class="text-center py-5 bg-light">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-md-4">
              <img class="img-fluid rounded-circle mb-3" src="images/me1.jpg" alt="">
            </div>
            <div class="col-md-8">
              <h1 class="display-4">
                Hi, my name is <a href="https://www.linkedin.com/in/helena-mbeua-pedro/">Helena.</a>
              </h1>
              <p class="lead">
                I am a Software Engineer with experience in full-stack development, microservices 
                architecture, web services, database design, and cloud solutions. I am adept at building 
                high-performance, scalable systems and securing APIs.
              </p>
              <ul class="list-inline mt-4">
                <li class="list-inline-item">
                  <a href="https://github.com/helenapedro" target="_blank" class="icon brands fa-github btn btn-dark btn-lg">
                    <span class="label">Github</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.linkedin.com/in/helena-mbeua-pedro/" target="_blank" class="icon brands fa-linkedin btn btn-primary btn-lg">
                    <span class="label">LinkedIn</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://pedropublicfiles.s3.us-east-2.amazonaws.com/Resume_HelenaPedro.pdf" target="_blank" rel="noopener noreferrer" class="icon fa-file btn btn-secondary btn-lg">
                    <span class="label">Resume</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="mailto:mbeua94@gmail.com" class="icon fa-envelope btn btn-danger btn-lg">
                    <span class="label">Email</span>
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
