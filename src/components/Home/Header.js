import React, { Component } from "react";
import { Container } from "reactstrap";
import Logo from "./img/logo-personalweb.png";
import "../Home/Header.css";
class Header extends Component {
  render() {
    return (
      <Container>
        <img className="header-image" src={Logo} alt="Logo" />
        <p className="name-header">Ahmad Fakhrozy</p>
        <p className="title-header">Full-stack Javascript Developer</p>
      </Container>
    );
  }
}
export default Header;
