import profilePicture from "../img/profilPicture.png"
import cv from '../cv.pdf'

function Welcome() {
    return(
      <section id="section1">
          <div id="section1-header">
              <img src={profilePicture} alt="me" id="profilepicture"/>
              <div id="welcome">
                  <div id="portfolio">My Portfolio</div>
                  <div id="author">by Firmin Exertier</div>
                  <a id="resume" href={cv} download>Download my resume</a>
              </div>
          </div>
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                   preserveAspectRatio="none">
                  <path
                      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                      className="shape-fill"></path>
              </svg>
      </section>
    );
}

export default Welcome;