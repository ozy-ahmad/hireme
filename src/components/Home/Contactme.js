import React, { Component } from "react";
import "../Home/contactme.css";
export default class Contactme extends Component {
  render() {
    return (
      <section className="contact-me jumbotron jumbotron-fluid">
        <div className=" container">
          <h2>Get In Touch</h2>
          <h3>Lorem ipsum dolor sit amet, non elit.</h3>
          <p className="contact-message">
            Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales,
            tellus donec dui, ornare erat.
          </p>
          <a className="btn btn-primary" href="mailto:ahmadfakhrozy@gmail.com">
            CONTACT ME
          </a>
        </div>
      </section>
    );
  }
}
