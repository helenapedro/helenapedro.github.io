class GasPumpProject extends HTMLElement {
     connectedCallback() {
       this.innerHTML = `
         <article class="col-6 col-12-xsmall work-item card mb-4 shadow-sm">
           <div class="card-body">
             <h2 class="card-title">GasPump Dashboard</h2>
             <h4 class="card-subtitle text-muted mb-2">Python | Node.js | Express | SQL | MongoDB </h4>
             <a href="images/fulls/fuelimage.jpg" class="image fit thumb d-block mb-3">
               <img src="images/thumbs/fuelimage.jpg" alt="" class="img-fluid rounded"/>
             </a>
             <p class="card-text">
               Dynamic data visualization tool developed with Dash. Features include 
               interactive maps, statistical analysis, and tabular data presentation,
               enabling users to explore gas station insights effortlessly (hosted on Heroku).
             </p>
             <ul class="actions list-unstyled">
               <li>
                 <a href="https://gaspumpmap-93cc318f9fc5.herokuapp.com/" target="_blank" class="btn btn-primary btn-sm">View Project</a>
               </li>
             </ul>
           </div>
         </article>
       `;
     }
   }
   customElements.define('gaspump-project', GasPumpProject);
   