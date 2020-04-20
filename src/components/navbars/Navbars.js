import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../navbars/navbar.css";

class Navbars extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light sticky-top nav-style">
          <Link className="navbar-brand" to="/">
            21 AM
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/article">
                  Article
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hireme">
                  Hire me
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbars;
