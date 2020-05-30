import React, { Component } from "react";
// import CV from "../hireme/CV.jpg";
import picone from "../about/img/768x1024.png";
import pictwo from "../about/img/433x577.png";
import picthree from "./img/1.png";
import { Row, Col } from "reactstrap";

import "../about/style.css";
class About extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <div className="container">
            <div className="row text-center">
              <h2 className="bold">About</h2>
            </div>
            <div className="row">
              <div className="col-md-12">
                <img className="aboutimg" src={picthree} alt=" avatar ozy" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                <span>me</span>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="rotate">
                  <h2 className="heading">About</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
