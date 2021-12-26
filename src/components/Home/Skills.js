import React, { Component } from "react";

import "../Home/skills.css";

class Skills extends Component {
  render() {
    return (
      <section id="colorlib-services">
        <div className="container">
          <div className="row text-center">
            <h2 className="bold">Skills</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="services-flex">
                <div className="one-third">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-0 animate-box intro-heading">
                      <span>Stack</span>
                      <h2>Skills</h2>
                      <p>
                        Talent you have naturally, skill only developed by hours
                        and hours and hours of beating on your craft <br></br>
                        -Will Smith
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="rotate">
                        <h2 className="heading">Skills</h2>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="services animate-box">
                        <h3>1 - Proramming and web development </h3>
                        <p>
                          {" "}
                          - Designing, and building website with mockup, HTML,
                          CSS, Vanilla JS, ReactJS, JQuery and until hosting it
                          on the Internet.
                        </p>
                        <p>
                          {" "}
                          - Build a web API service with Node.js, ExpressJS and
                          then designing data flow in an actual database
                          including SQL and NoSQL.
                        </p>
                      </div>
                      {/* <div className="services animate-box">
                        <h3>2 - Back-end</h3>
                        <p>
                          Build a web API service with Node.js, ExpressJS and
                          then structure our data in an actual database
                          including SQL and NoSQL.
                        </p>
                      </div> */}
                      <div className="services animate-box">
                        <h3>2 - Infrastucure and Others</h3>
                        <p>- Algorithms and Data Structures.</p>
                        <p>- Collaborated through Git project-based.</p>
                        <p>- Agile and SCRUM development.</p>
                        <p>
                          - Amazon Web Service, Microsoft Azure and Google Cloud
                          Platform.
                        </p>
                        <p>
                          - Containerization and Orchestration using Docker and
                          Kubernetes.
                        </p>
                        <p>- Linux and Windows administrator, bash, vim.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="one-forth services-img"
                  // style="background-image: url(images/services-img-1.jpg);"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Skills;
