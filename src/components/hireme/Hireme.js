import React, { Component } from "react";
import CV from "../hireme/CV.jpg";
class Hireme extends Component {
  render() {
    return (
      <div>
        <img className="CV" src={CV} alt="CV" />
      </div>
    );
  }
}
export default Hireme;
