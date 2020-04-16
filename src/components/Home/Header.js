import React, { Component } from "react";
import Character from "./img/headerpic.png";
import "../Home/Header.css";
class Header extends Component {
  render() {
    return (
      <section className="header jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="big-heading">Hello, </h1>
              <h3>
                I am a full stack developer <br></br>
                you can see some of my works on Portfolio <br></br>
              </h3>
              <button
                type="button"
                className="btn btn-primary btn-md contact-button"
              >
                Contact me
              </button>
            </div>
            <div className="col-lg-6">
              <img className="header-image" src={Character} alt="Character" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Header;
