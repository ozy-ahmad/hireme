import React, { Component } from "react";
import Example from "./img/example.jpg";
import "../portfolio/portfolio.css";
class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card bg-dark text-white">
                <img className="card-img" src={Example} alt="Card image" />
                <div className="card-img-overlay">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card bg-dark text-white">
                <img className="card-img" src={Example} alt="Card image" />
                <div className="card-img-overlay">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="card bg-dark text-white">
                <img className="card-img" src={Example} alt="Card image" />
                <div className="card-img-overlay">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="card bg-dark text-white">
                <img className="card-img" src={Example} alt="Card image" />
                <div className="card-img-overlay">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
