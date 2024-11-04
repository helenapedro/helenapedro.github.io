class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="header" class="bg-light py-5">
        <div class="container text-center">
          <div class="row justify-content-center align-items-center">
            <div class="col-md-8 mb-3">
              <img class="img-fluid rounded-circle" src="images/me1.jpg" alt="Avatar" style="max-width: 150px;">
            </div>
            <div class="col-md-8">
              <h1 class="display-4 font-weight-bold">
                Hi, my name is <b>Helena</b>.
              </h1>
              <p class="lead">
                I'm a <u>software engineer</u> with experience in full-stack development, microservices, database
                design, and cloud solutions. I am adept at building high-performance and scalable systems.
              </p>
              <ul class="list-inline mt-4">
                <li class="list-inline-item">
                  <a href="https://github.com/helenapedro" target="_blank" class="btn btn-dark btn-lg">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.linkedin.com/in/helena-mbeua-pedro/" target="_blank" class="btn btn-primary btn-lg">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://hmpedropublicfiles.s3.us-east-2.amazonaws.com/Resume_HMPedro.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg">
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

{/* <li class="list-inline-item">
  <a href="mailto:mbeua94@gmail.com" class="btn btn-danger btn-lg">
    <i class="fas fa-envelope"></i>
  </a>
</li> */}
