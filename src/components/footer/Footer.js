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
        <a
          href="https://www.linkedin.com/in/ahmad-fakhrozy-9069741a1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="social-icon fab fa-linkedin"></i>
        </a>
        <Link to="https://instagram.com/ozy_ahmad" target="_blank">
          <i className="social-icon fab fa-instagram"></i>
        </Link>
        <a
          href="mailto:ahmadfakhrozy@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="social-icon fas fa-envelope"></i>
        </a>
        <p>
          Copyright &copy; Ahmad Fakhrozy {currentYear} | The design is base on
          inspiration at <i className="icon-heart4"></i>{" "}
          <a
            href="https://colorlib.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Colorlib
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
