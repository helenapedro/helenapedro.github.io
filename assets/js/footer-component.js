class Footer extends HTMLElement {
     connectedCallback() {
       this.innerHTML = `
          <footer id="footer">
               <div class="inner">
                    <ul class="copyright">
                         <li>
                              Author:
                              <a
                                   href="https://pedropublicfiles.s3.us-east-2.amazonaws.com/AboutMe/about.html"
                              > Helena Pedro
                              </a 
                         </li>
                         <li>&copy; 2024</li>
                    </ul>
               </div>
          </footer>
       `;
     }
}
customElements.define('footer-component', Footer);
   