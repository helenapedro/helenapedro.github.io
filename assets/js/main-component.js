class Project extends HTMLElement {
     connectedCallback() {
       this.innerHTML = `
          <div id="main">
               <project-section></project-section>
	     </div>
       `;
     }
}
customElements.define('main-component', Project);
   