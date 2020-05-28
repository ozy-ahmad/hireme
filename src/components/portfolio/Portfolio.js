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
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Tindog</CardTitle>
              <CardSubtitle>Company Website</CardSubtitle>
            </CardBody>
            <img width="100%" src={tindog} alt="Card images cap" />
            <CardBody>
              <CardText>
                tindog is a company website which is the cloning of tinder. this
                app build using HTML,CSS,Bootstrap.
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
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Drum kit</CardTitle>
              <CardSubtitle>Card s</CardSubtitle>
            </CardBody>
            <img width="100%" src="/assets/318x180.svg" alt="Card images cap" />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <CardLink href="#">Github Link</CardLink>
              <CardLink href="#">Website Link</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
            </CardBody>
            <img width="100%" src="/assets/318x180.svg" alt="Card images cap" />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <CardLink href="#">Github Link</CardLink>
              <CardLink href="#">Website Link</CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <p />
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
            </CardBody>
            <img width="100%" src="/assets/318x180.svg" alt="Card images cap" />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <CardLink href="#">Github Link</CardLink>
              <CardLink href="#">Website Link</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
            </CardBody>
            <img width="100%" src="/assets/318x180.svg" alt="Card images cap" />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <CardLink href="#">Github Link</CardLink>
              <CardLink href="#">Website Link</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
            </CardBody>
            <img width="100%" src="/assets/318x180.svg" alt="Card images cap" />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <CardLink href="#">Github Link</CardLink>
              <CardLink href="#">Website Link</CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
