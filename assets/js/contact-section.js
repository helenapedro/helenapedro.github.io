class ContactSection extends HTMLElement {
     connectedCallback() {
       this.innerHTML = `
          <section id="three">
               <div class="row">
                    <div class="col-4 col-12-small">
                         <ul class="labeled-icons">
                              <li>
                                   <h3 class="icon brands fa-linkedin" target="_blank">
                                        <span class="label">LinkedIn</span>
                                   </h3>
                                   <a href="https://www.linkedin.com/in/helena-mbeua-pedro/" target="_blank">LinkedIn Profile</a>
                              </li>
                              <li>
                                   <h3 class="icon solid fa-envelope">
                                        <span class="label">Email</span>
                                   </h3>
                                   <a href="#">mbeua94@gmail.com</a>
                              </li>
                         </ul>
                    </div>
               </div>
          </section>
       `;
     }
}
customElements.define('contact-section', ContactSection);
   