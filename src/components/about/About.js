import React, { Component } from "react";
// import CV from "../hireme/CV.jpg";
// import picone from "../about/img/768x1024.png";
// import pictwo from "../about/img/433x577.png";
// import picthree from "./img/1.png";
import picfour from "./img/picfour.jpg";
import { Link } from "react-router-dom";

import "../about/style.css";
class About extends Component {
  render() {
    return (
      <div id="colorlib-about">
        <div className="container">
          <div className="row text-center">
            <h2 className="bold">About</h2>
          </div>
          <div className="row row-padded-bottom">
            <div className="col-md-5 animate-box">
              <img
                className="img-responsive about-img"
                src={picfour}
                alt=" avatar ozy"
              />
            </div>
            <div className="col-md-6 col-md-push-1 animate-box">
              <div className="about-desc">
                <h2>
                  <span>Ahmad</span>
                  <span>Fakhrozy</span>
                </h2>
                <div className="desc">
                  <div className="rotate">
                    <h2 className="heading">About</h2>
                  </div>
                  <p>
                    Full-stack developer which love to challenge himself to
                    learn new things. i've build my own fullstack apps using
                    HTML, CSS, Javascript, reactJS, MongoDB, Mongoose,
                    Sequelize, MySql, git and deploy my own app into a amazon
                    web server and google cloud. Open to job opportunities!
                  </p>
                  <p className="colorlib-social-icons">
                    <a
                      href="https://www.facebook.com/ahmadfakhrozy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="social-icon fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ahmad-fakhrozy-9069741a1/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="social-icon fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/ozy_ahmad"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="social-icon fab fa-instagram"></i>
                    </a>
                    <a
                      href="mailto:ahmadfakhrozy@gmail.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="social-icon fas fa-envelope"></i>
                    </a>
                  </p>
                  <p>
                    <Link to="/portfolio" className="btn btn-outline-primary ">
                      View Portfolio
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 animate-box">
                <p>
                  In my Four years at Universitas Brawijaya, I’ve completed a
                  great deal of coursework on Teaching English as Foreign
                  Language (TEFL) and Teaching methodology, including
                  Linguistics, where I learned and applied skills such as
                  teaching and volunteering in elementary school. I also joined
                  a lot of organizations. Then, In my last semester I joined
                  International Invention & Innovative competition in Malaysia.
                  Me and my team bring a media (board game) for learning tenses
                  which awarded as Bronze medal.
                </p>
              </div>
              <div className="col-md-4 animate-box">
                <p>
                  In addition, I spent one year Internship program for UB Radio
                  which one of broadcasting media in my campus. I handle the
                  Event organizer team arranged event for radio activity and as
                  an announcer which Handles the preparation of program content,
                  interview guests, and discuss issues with listeners. I also
                  make my own podcast as a technical director, producer, and
                  including as a Podcaster . but i wanted to move into more tech
                  stuff. then, I decided to learn some technology that used in
                  developing website by taking some online course in udemy and
                  join Glints Academy x ImpactByte as a fullstack javascript
                  developer.
                </p>
              </div>
              <div className="col-md-4 animate-box">
                <p>
                  In Glints Academy, I've completed this academy as a Full-stack
                  Javascript developer. the stack that I learn are HTML, CSS
                  (SASS), Javascript including ReactJS, NodeJS, ExpressJS,
                  MongoDB, Mysql, mongoose, sequelize, and more. I also learn
                  how to deploy client side and server side to cloud such as
                  Google Cloud and Amazon web service which also using Nginx.
                  After all of the technical skill that I learn from ImpactByte
                  as the collaborator in Glints Academy. This program also
                  provides me with some soft skill such as interview techniques
                  including technical mock interview and interview simulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
