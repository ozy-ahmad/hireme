import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardImg } from "reactstrap";
import axios from "axios";

const DetailArticle = () => {
  const { id } = useParams();

  let [data, setData] = useState({});
  useEffect(() => {
    const URL = "http://localhost:8000/article";
    axios
      .get(`${URL}/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        // window.alert("error ---");
      });
  }, [id]);
  return (
    <div className="container">
      <CardImg top width="100%" src={data.imgURL} alt="Article img" />
      <h1>{data.title}</h1>
      <h3>{data.subtitle}</h3>
      <p>{data.article1}</p> <br />
      <p>{data.article2}</p> <br />
      <p>{data.article3}</p> <br />
    </div>
  );
};
export default DetailArticle;
