import React from "react";
import "../footer/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <hr />
      <div className="container-fluid">
        <a
          href="https://www.linkedin.com/in/ahmad-fakhrozy-9069741a1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="social-icon fab fa-linkedin"></i>
        </a>
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
