import React, { Component } from "react";
import "../Home/contactme.css";
export default class Contactme extends Component {
  render() {
    return (
      <section className="contact-me jumbotron jumbotron-fluid">
        <div className=" container">
          <h2>Get In Touch</h2>
          <h3>Send me something interesting</h3>
          <p className="contact-message"></p>
          <a
            className="btn btn-outline-primary"
            href="mailto:ahmadfakhrozy@gmail.com"
          >
            CONTACT ME
          </a>
        </div>
      </section>
    );
  }
}
