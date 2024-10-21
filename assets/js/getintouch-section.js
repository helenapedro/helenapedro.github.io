class GetInTouchSection extends HTMLElement {
     connectedCallback() {
       this.innerHTML = `
          <section id="three" class="container my-4">
               <h2 class="contact">Get In Touch</h2>
               <div class="row">
                    <div class="col-md-4">
                    <ul class="list-unstyled">
                         <li><i class="fas fa-mobile-alt"></i> (+244) 936-457-069</li>
                         <li><i class="fas fa-envelope"></i> <a href="mailto:mbeua94@gmail.com">mbeua94@gmail.com</a></li>
                    </ul>
                    </div>
               </div>
          </section>
          `;
     }
}
customElements.define('getintouch-section', GetInTouchSection);