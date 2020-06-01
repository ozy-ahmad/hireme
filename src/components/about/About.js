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
                    <Link to="https://facebook.com/" target="_blank">
                      <i className="social-icon fab fa-facebook-f"></i>
                    </Link>
                    <Link to="https://twitter.com/" target="_blank">
                      <i className="social-icon fab fa-twitter"></i>
                    </Link>
                    <Link to="https://instagram.com/ozy_ahmad" target="_blank">
                      <i className="social-icon fab fa-instagram"></i>
                    </Link>
                    <Link to="https://gmail.com/" target="_blank">
                      <i className="social-icon fas fa-envelope"></i>
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/portfolio"
                      className="btn btn-primary btn-outline"
                    >
                      View Portfolio
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 animate-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer vel imperdiet nunc. Quisque imperdiet varius elit,
                  quis laoreet tortor dictum sit amet. Curabitur nibh ipsum,
                  vehicula id sollicitudin non, laoreet at dui. Fusce pulvinar
                  urna enim, vitae viverra risus volutpat id. Duis eget pretium
                  urna, eget convallis sapien. Sed arcu diam, porttitor ut risus
                  pretium, bibendum egestas libero. Sed libero tortor, aliquam
                  vitae rhoncus a, porttitor vel odio.
                </p>
              </div>
              <div className="col-md-4 animate-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer vel imperdiet nunc. Quisque imperdiet varius elit,
                  quis laoreet tortor dictum sit amet. Curabitur nibh ipsum,
                  vehicula id sollicitudin non, laoreet at dui. Fusce pulvinar
                  urna enim, vitae viverra risus volutpat id. Duis eget pretium
                  urna, eget convallis sapien. Sed arcu diam, porttitor ut risus
                  pretium, bibendum egestas libero. Sed libero tortor, aliquam
                  vitae rhoncus a, porttitor vel odio.
                </p>
              </div>
              <div className="col-md-4 animate-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer vel imperdiet nunc. Quisque imperdiet varius elit,
                  quis laoreet tortor dictum sit amet. Curabitur nibh ipsum,
                  vehicula id sollicitudin non, laoreet at dui. Fusce pulvinar
                  urna enim, vitae viverra risus volutpat id. Duis eget pretium
                  urna, eget convallis sapien. Sed arcu diam, porttitor ut risus
                  pretium, bibendum egestas libero. Sed libero tortor, aliquam
                  vitae rhoncus a, porttitor vel odio.
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
