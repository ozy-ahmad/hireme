import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "./img/header.png";
import "../Home/Header.css";
class Header extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <img className="header-image" src={Logo} alt="Logo" />
            <p className="name-header">Ahmad Fakhrozy</p>
            <p className="title-header">Full-stack Developer</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Header;
