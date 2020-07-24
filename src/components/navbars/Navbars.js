import { Link } from "react-router-dom";
import React, { useState } from "react";
import Logo from "./img/logo font monoton.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import "../navbars/navbar.css";

const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand to="/">
        <img className="logo-image" src={Logo} alt="Logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/">
              Home
            </Link>{" "}
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </NavItem>
          {/* <NavItem>
            <Link className="nav-link" to="/article">
              Article
            </Link>
          </NavItem> */}
          <NavItem>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/ahmad-fakhrozy-9069741a1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className=" fab fa-linkedin fa-1x"></i>
            </a>
          </NavItem>
          <NavItem>
            <a
              href="https://github.com/ozy-ahmad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navbars;
