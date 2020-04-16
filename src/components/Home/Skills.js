import React, { Component } from "react";
import HTML from "./img/html.png";
import CSS from "./img/css.png";
import JS from "./img/javascript.png";

import "../Home/skills.css";
class Skills extends Component {
  render() {
    return (
      <section className="skills jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img className="skills-image" src={HTML} alt="HTML" />
            </div>
            <div className="col-lg-4">
              <img className="skills-image" src={CSS} alt="CSS" />
            </div>
            <div className="col-lg-4">
              <img className="skills-image" src={JS} alt="JS" />
            </div>
            {/* <div className="col">
              <img className="skills-image" scr={Log1} alt="React" />
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}
export default Skills;
