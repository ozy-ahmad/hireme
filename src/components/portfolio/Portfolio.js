import React from "react";
import "../portfolio/portfolio.css";
// import Images from "./Image";
// // import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container,
} from "reactstrap";
import tindog from "./img/tindog.png";
import dice from "./img/dice-game.png";
import drum from "./img/drumkit.png";
import circle from "./img/circle.png";
import am from "./img/21am.png";
import thisisozy from "./img/thisisozy.png";

const Portfolio = () => {
  return (
    <Container>
      <div>
        <div className="container">
          <div className="row text-center">
            <h2 className="bold">Portfolio</h2>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
              <span>Works</span>
              <h2>Done Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="rotate">
                <h2 className="heading">Portfolio</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Row>
        <Col className="cardM">
          <Card>
            <CardBody>
              <CardTitle>
                <strong>tindog</strong>
              </CardTitle>
              <CardSubtitle>Company Website</CardSubtitle>
            </CardBody>
            <img width="100%" src={tindog} alt="tindog" />
            <CardBody>
              <CardText>
                tindog is a company website which is using tinder as the
                benchmark. this app build using HTML,CSS,Bootstrap.
              </CardText>
              <CardLink
                href="https://github.com/ozy-ahmad/tindog-company-website"
                target="_blank"
              >
                Github Link
              </CardLink>
              <CardLink href="https://tindogo.netlify.app/" target="_blank">
                Website Link
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col className="cardM">
          <Card>
            <CardBody>
              <CardTitle>
                <strong>Drum kit </strong>
              </CardTitle>
              <CardSubtitle>Document Object Model Manipulation</CardSubtitle>
            </CardBody>
            <img width="100%" src={drum} alt="Card images cap" />
            <CardBody>
              <CardText>
                This is a project Drumkit so user can play around with drumkit
                web app by pressing their keyboard or click the elements. this
                web app build using HTML,CSS,JS
              </CardText>
              <CardLink
                href="https://github.com/ozy-ahmad/Drum-kit/tree/master/Drum%20Kit%20Starting%20Files"
                target="_blank"
              >
                Github Link
              </CardLink>
              <CardLink href="https://mydrumkits.netlify.app/" target="_blank">
                Website Link
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col className="cardM">
          <Card>
            <CardBody>
              <CardTitle>
                <strong>CircleMessenger </strong>
              </CardTitle>
              <CardSubtitle> Web chat application</CardSubtitle>
            </CardBody>
            <img width="100%" src={circle} alt="Circle Messenger" />
            <CardBody>
              <CardText>
                It is an executive real time web chat application for
                professionals. this app is build by using ReactJS, NodeJs.
              </CardText>
              <CardLink href="https://github.com/Glints-x-IB-Chat-box">
                Github Link
              </CardLink>
              <CardLink href="https://circlemessenger.com" target="_blank">
                Website Link
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <p />
      <Row>
        <Col className="cardM">
          <Card>
            <CardBody>
              <CardTitle>
                <strong>Dice game</strong>
              </CardTitle>
              <CardSubtitle>Document Object Model</CardSubtitle>
            </CardBody>
            <img width="100%" src={dice} alt="Dice game" />
            <CardBody>
              <CardText>
                This is a dice game board for 2 player can be the for who have
                bigger number will be the winner. this app build using HTML,CSS,
                JS
              </CardText>
              <CardLink
                href="https://github.com/ozy-ahmad/learn-DOM-dice-game-udemy"
                target="_blank"
              >
                Github Link
              </CardLink>
              <CardLink href="https://dicegamedom.netlify.app/" target="_blank">
                Website Link
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col className="cardM">
          <Card>
            <CardBody>
              <CardTitle>
                {" "}
                <strong>21AM</strong>
              </CardTitle>
              <CardSubtitle>Personal website</CardSubtitle>
            </CardBody>
            <img width="100%" src={am} alt="Card images cap" />
            <CardBody>
              <CardText>
                This is personal website that I made when first time learn HTML
                and CSS
              </CardText>
              <CardLink
                href="https://github.com/ozy-ahmad/Personal-web"
                target="_blank"
              >
                Github Link
              </CardLink>
              <CardLink href="https://21am.netlify.app/" target="_blank">
                Website Link
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col className="cardM">
          <Card>
            <CardBody>
              <CardTitle>
                {" "}
                <strong>thisisme</strong>
              </CardTitle>
              <CardSubtitle>Personal website</CardSubtitle>
            </CardBody>
            <img width="100%" src={thisisozy} alt="personal website" />
            <CardBody>
              <CardText>
                This is personal website that i made which is one of th project
                of my udemy course. this website build using HTML, CSS (SASS),
              </CardText>
              <CardLink
                href="https://github.com/ozy-ahmad/udemy-personal-web"
                target="_blank"
              >
                Github Link
              </CardLink>
              <CardLink href="https://thisisozy.netlify.app/" target="_blank">
                Website Link
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Portfolio;
