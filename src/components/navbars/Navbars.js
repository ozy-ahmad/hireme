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

const Navbars = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand to="/">
        <img className="logo-image" src={Logo} alt="Logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar style={{ padding: " 0 5rem" }}>
          <NavItem>
            <Link className="nav-link" to="/">
              Home
            </Link>{" "}
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/">
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
            <Link className="nav-link" to="/hireme">
              Hireme
            </Link>
          </NavItem>
          <NavItem>
            <Link to="https://github.com/ozy-ahmad" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navbars;
