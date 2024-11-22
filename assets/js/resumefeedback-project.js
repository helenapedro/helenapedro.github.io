class ResumeFeedbackProject extends HTMLElement {
     connectedCallback() {
       this.innerHTML = `
          <div class="col-md-6 mb-4">
               <div class="card">
                    <div class="card-body">
                         <h4 class="title">Resume Feedback</h4>
                         <h6 class="skills mb-2 text-muted">
                              TypeScript | Node.js | Express | MongoDB | AWS S3 |
                              React | Redux | Bootstrap 
                         </h6>
                         <a href="https://resumefeedback.mtcambrosio.com/" target="_blank" class="image fit thumb">
                              <img src="images/thumbs/resume-istockphoto.webp" class="card-img-top" alt="Resume feedback project thumbnail">
                         </a>
                         <p class="paragraph">
                              Collaborative web app where job seekers can give and receive valuable feedback
                              on their resumes, designed for those who want honest, constructive insights from 
                              peers.
                         </p>
                         <ul class="actions justify-content-center align-items-center">
                              <li>
                              <a href="https://resumefeedback.mtcambrosio.com" target="_blank" class="button small fit">View Project</a>
                              <a href="https://github.com/helenapedro/feedback-frontend.git" target="_blank" class="button small fit">View Frontend Code</a>
                              <a href="https://github.com/helenapedro/feedback-backend.git" target="_blank" class="button small fit">View Backend Code</a>
                              </li>
                         </ul>
                    </div>
               </div>
        </div>
       `;
     }
   }
   customElements.define('resumefeedback-project', ResumeFeedbackProject);
   