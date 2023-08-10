import * as React from "react"
import "../styles.css"
import { Link } from "gatsby"
export default function Home() {
  return <div className="Home">

    <div className="landing">
      <h1>Tanika Jangam</h1>
      <h2>CS & Math at UMD</h2>

      <p>I develop different user applications and experiences.</p>

      <nav className="links">
        <Link to="/">About</Link>
        <br></br>
        <Link to="/">Resume</Link>
        <br></br>
        <Link to="/">Projects</Link>
      </nav>

      <div className="contact">
        <img src="/github.svg">
        </img>
        <img src="/gmail.svg">
        </img>
        <img src="/linkedin.svg">
        </img>

      </div>
    </div>

    <div className="landing landing-2">
      <p>
        Lorem ipsum dolor sit amet, debet accommodare disputationi an has, usu stet eirmod no, pri an iriure epicuri interpretaris. Sit ne feugiat dissentiunt. Falli iriure duo ad, ea sed harum movet facilisi, assum harum congue an cum. Alii vidit zril at vel, ne error adipisci eam, velit paulo sit te.
        Per cu electram abhorreant efficiendi.
        <br>
        </br>
        <br></br>
        Lorem ipsum dolor sit amet, debet accommodare disputationi an has, usu stet eirmod no, pri an iriure epicuri interpretaris. Sit ne feugiat dissentiunt. Falli iriure duo ad, ea sed harum movet facilisi, assum harum congue an cum. Alii vidit zril at vel, ne error adipisci eam, velit paulo sit te.
        Per cu electram abhorreant efficiendi, cu convenire mediocrem splendide qui. Ea homero maiestatis nam, vidit delenit et ius. Vim in altera possim. An timeam praesent consectetuer eam, no brute menandri disputationi ius. Recusabo sadipscing nam eu.
      </p>


      <div className="resume">
        <div className="resume-inner">
          <div>Date</div>
          <div>
            Notifly
            Developed application that provides easy speech-to-text notetaking and organization for students
            Built speech recognition system using SpeechRecognition API
            Created organized backend with MongoDB & ExpressJS
            Won 2nd Place @ ThetaHacks out of 400+ participantsDeveloped application that provides easy speech-to-text notetaking and organization for students Built speech recognition system using SpeechRecognition API Created organized backend with MongoDB & ExpressJS Won 2nd Place @ ThetaHacks out of 400+ participants
            Skills: MongoDB · Express.js · Speech Recognition
          </div>
        </div>

        <Link to="/">View Full Resume</Link>
      </div>
      <br>
      </br>
      <div className="projects">
        <div className="projects-inner">
          <div>Image of project</div>
          <div>
            Plantify
            Description
            Tech stacks used
          </div>
        </div>
        <div className="projects-inner">
          <div>Image of project</div>
          <div>Records and detects scratching, biting nails, and other habits exhibited by users to decrease stress symptoms
            Uses Tensorflow Object Detection API to create bounding box predictions to detect hand movements
            Developed an organized MERN backend system to track user habits over time
            StarHacks submissionRecords and detects scratching, biting nails, and other habits exhibited by users to decrease stress symptoms Uses Tensorflow Object Detection API to create bounding box predictions to detect hand movements Developed an organized MERN backend system to track user habits over time StarHacks submission
            Skills: TensorFlow · Object Detection · MERN Stack
          </div>
        </div>
        <div className="projects-inner">
          <div>Image of project</div>
          <div>
            KodaHacks Website
            https://penguinwebsite.netlify.app
            Tech stacks used
          </div>
        </div>

        <div className="projects-inner">
          <div>Notifly</div>
          <div>
            Project Title
            Description
            Tech stacks used
          </div>
        </div>
        <Link to="/">View Full Project Archive</Link>
      </div>

    </div>



  </div>

}
