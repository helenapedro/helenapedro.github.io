class GetInTouchSection extends HTMLElement {
     connectedCallback() {
       this.innerHTML = `
          <section id="three" class="container my-4">
               <div class="row">
                    <div class="col-md-4">
                         <ul class="list-unstyled">
                              <li>
                                   <style>
                                        .libutton, .credlybutton {
                                             color: #ffffff !important;
                                             display: flex;
                                             flex-direction: column;
                                             justify-content: center;
                                             padding: 7px;
                                             text-align: center;
                                             outline: none;
                                             text-decoration: none !important;
                                             width: 200px;
                                             height: 32px;
                                             border-radius: 16px;
                                             font-family: "SF Pro Text", Helvetica, sans-serif;

                                        }
                                        .libutton {
                                             background-color: #0A66C2;
                                             margin-bottom: 4px;
                                        }
                                        .credlybutton {
                                             background-color: #FF6F00;
                                        }
                                   </style>
                                   <a 
                                        class="libutton" 
                                        href="https://www.linkedin.com/in/helena-mbeua-pedro/" 
                                        target="_blank"
                                   >
                                        Follow on LinkedIn
                                   </a>
                              </li>

                              <li>
                                   <a 
                                        class="credlybutton" 
                                        href="https://www.credly.com/users/helena-pedro" 
                                        target="_blank"
                                   >
                                        View Credly Profile
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