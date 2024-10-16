class ProjectSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="two" class="container">
        <minkanda-project></minkanda-project>
      </section>
    `;
  }
}
customElements.define('project-section', ProjectSection);