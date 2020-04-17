import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Article = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/article")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const showData = data.map((item, index) => (
    <div key={index} className="col-4">
      <Card>
        <CardImg top width="100%" src={item.imgURL} alt="Card image" />
        <CardBody>
          <CardTitle>
            <strong>{item.title}</strong>
          </CardTitle>
          <CardSubtitle>{item.subtitle}</CardSubtitle>
          <CardText>{item.article1}.</CardText>
          <Link to={`/article/${item.id}`} className="btn btn-dark">
            Show more
          </Link>
        </CardBody>
      </Card>
    </div>
  ));
  return (
    <section className="article container">
      <div className="row">{showData}</div>
    </section>
  );
};

export default Article;
