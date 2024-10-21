class ResumeFeedbackProject extends HTMLElement {
     connectedCallback() {
       this.innerHTML = `
          <article class="col-6 col-12-xsmall work-item">
               <h2 class="title">Resume Feedback</h2>
               <h4 class="skills text-muted">
                    Node.js | Express | MongoDB | Mongoose | AWS S3 | JWT | Winston
                    | express-rate-limit | Caching | Helmet | CORS
               </h4>
               <a href="images/fulls/resume-istockphoto.webp" class="image fit thumb" target="_blank">
               <img src="images/thumbs/resume-istockphoto.webp" alt="" />
               </a>
               <p class="paragraph">
                    This app is designed to facilitate a collaborative feedback process on resumes,
                    allowing users to submit, comment on, and manage resumes efficiently.
               </p>
               <footer>
                    <ul class="actions list-unstyled">
                         <li>
                              <a 
                                   href="https://pedropublicfiles.s3.us-east-2.amazonaws.com/Spacex_falcon_9_data_analysis/index.html" 
                                   target="_blank" 
                                   class="btn btn-primary btn-sm"
                                   >
                                   View Project
                              </a>
                         </li>

                         <li>
                              <a 
                                   href="https://dashboard-spacexlaunch-app-1872ac792790.herokuapp.com/" 
                                   target="_blank" 
                                   class="btn btn-primary btn-sm"
                                   >
                                   View Backend
                              </a>
                         </li>
                    </ul>
               </footer>
         </article>
       `;
     }
   }
   customElements.define('resumefeedback-project', ResumeFeedbackProject);
   