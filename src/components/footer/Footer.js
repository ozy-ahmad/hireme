import React, { Component } from "react";
import "../footer/footer.css";
class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <hr />
        <div class="container-fluid">
          <a href="https://facebook.com/" target="_blank">
            <i class="social-icon fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <i class="social-icon fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/" target="_blank">
            <i class="social-icon fab fa-instagram"></i>
          </a>
          <a href="https://gmail.com/" target="_blank">
            <i class="social-icon fas fa-envelope"></i>
          </a>

          <p>© Copyright 2020 Ahmad Fakhrozy</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
