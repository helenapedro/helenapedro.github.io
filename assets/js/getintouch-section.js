class GetInTouchSection extends HTMLElement {
     connectedCallback() {
       const whatsapp = this.getAttribute('whatsapp') || 'https://wa.me/+244936457069';
       const email = this.getAttribute('email') || 'mbeua94@gmail.com';
       const linkedinLink = this.getAttribute('linkedin-link') || 'https://www.linkedin.com/in/helena-mbeua-pedro/';
       const credlyLink = this.getAttribute('credly-link') || 'https://www.credly.com/users/helena-pedro';

       this.innerHTML = `
          <section id="three" class="container my-4 bg-custom">
               <div class="row">
                    <div class="col-md-4 text-center">
                         <div class="vertical-line">
                              <h2 class="contact">Get In Touch</h2>
                         </div>
                    </div>
               </div>
               <div class="row">
                    <div class="col-md-4">
                         <ul class="list-unstyled">
                              <li>
                                   <a href="mailto:${email}" class="btn btn-info btn-lg" aria-label="Email">
                                        <i class="fas fa-envelope"></i>
                                   </a>
                                   <a href="${whatsapp}" class="btn btn-success btn-lg" aria-label="WhatsApp">
                                        <i class="fab fa-whatsapp"></i>
                                   </a>
                                   <a href="${credlyLink}" target="_blank" class="btn btn-warning btn-lg" aria-label="Credly">
                                        <i class="fas fa-award"></i>
                                   </a>
                              </li>
                         </ul>
                    </div>
               </div>
          </section>
       `;
     }
}

customElements.define('getintouch-section', GetInTouchSection);