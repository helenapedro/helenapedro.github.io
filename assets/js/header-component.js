class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="header">
        <div class="inner">
          <div class="col-md-4">
		        <img class="image avatar" src="images/me1.jpg" alt="Avatar">
	        </div>
          <h4>
            Hi, my name is <b>Helena Pedro</b> and I'm a <u>software engineer</u><br />
            with experience in full-stack development, microservices, database
            design, and cloud solutions. I am adept at bulding high-performance
            and scalable systems.
          </h4>
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
                <i class="fas fa-file"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="mailto:mbeua94@gmail.com" class="btn btn-danger btn-lg">
                <i class="fas fa-envelope"></i>
              </a>
            </li>
		      </ul>
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
