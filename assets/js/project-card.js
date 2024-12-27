class ProjectCard extends HTMLElement {
     connectedCallback() {
       const title = this.getAttribute('title') || 'Project Title';
       const skills = this.getAttribute('skills') || 'Skills';
       const projectLink = this.getAttribute('project-link') || '#';
       const imageSrc = this.getAttribute('image-src') || 'images/thumbs/default.webp';
       const imageAlt = this.getAttribute('image-alt') || 'Project Thumbnail';
       const description = this.getAttribute('description') || 'Project description';
       const frontendCodeLink = this.getAttribute('frontend-code-link');
       const backendCodeLink = this.getAttribute('backend-code-link');
       const buttonClass = this.getAttribute('button-class') || 'button small fit';
   
       this.innerHTML = `
         <div class="card">
           <div class="card-body">
             <h4 class="title">${title}</h4>
             <h6 class="skills mb-2 text-muted">${skills}</h6>
             <a href="${projectLink}" target="_blank" class="image fit thumb">
               <img src="${imageSrc}" class="card-img-top" alt="${imageAlt}">
             </a>
             <p class="paragraph">${description}</p>
             <ul class="actions justify-content-center align-items-center">
               <li>
                 <a href="${projectLink}" target="_blank" class="${buttonClass}">View Project</a>
                 ${frontendCodeLink ? `<a href="${frontendCodeLink}" target="_blank" class="${buttonClass}">View Frontend Code</a>` : ''}
                 ${backendCodeLink ? `<a href="${backendCodeLink}" target="_blank" class="${buttonClass}">View Backend Code</a>` : ''}
               </li>
             </ul>
           </div>
         </div>
       `;
     }
   }
   
   customElements.define('project-card', ProjectCard);