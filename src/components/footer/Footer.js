import React from "react";
import "../footer/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
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
        <Link to="https://instagram.com/ozy_ahmad" target="_blank">
          <i className="social-icon fab fa-instagram"></i>
        </Link>
        <Link to="https://gmail.com/" target="_blank">
          <i className="social-icon fas fa-envelope"></i>
        </Link>
        <p>
          Copyright &copy; Ahmad Fakhrozy {currentYear} | The design is base on
          inspiration on <i class="icon-heart4" aria-hidden="true"></i>{" "}
          <a href="https://colorlib.com" target="_blank">
            Colorlib
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
