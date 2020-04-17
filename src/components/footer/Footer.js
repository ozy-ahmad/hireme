import React, { Component } from "react";
import "../footer/footer.css";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <hr />
        <div className="container-fluid">
          <Link to="https://facebook.com/" target="_blank">
            <i className="social-icon fab fa-facebook-f"></i>
          </Link>
          <Link to="https://twitter.com/" target="_blank">
            <i className="social-icon fab fa-twitter"></i>
          </Link>
          <Link to="https://instagram.com/" target="_blank">
            <i className="social-icon fab fa-instagram"></i>
          </Link>
          <Link to="https://gmail.com/" target="_blank">
            <i className="social-icon fas fa-envelope"></i>
          </Link>

          <p>© Copyright 2020 Ahmad Fakhrozy</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
