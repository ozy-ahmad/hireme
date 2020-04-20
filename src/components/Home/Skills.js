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
            <img className="col skills-image" src={HTML} alt="HTML" />

            <img className="col skills-image" src={CSS} alt="CSS" />

            <img className="col skills-image" src={JS} alt="JS" />

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
