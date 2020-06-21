import React, { Component } from "react";
import "../Home/contactme.css";
export default class Contactme extends Component {
  render() {
    return (
      <section className="contact-me jumbotron jumbotron-fluid">
        <div className=" container">
          <h2>Get in touch</h2>

          <p className="contact-message"></p>
          <a
            className="btn btn-outline-primary"
            href="mailto:ahmadfakhrozy@gmail.com"
          >
            E-MAIL
          </a>
        </div>
      </section>
    );
  }
}
