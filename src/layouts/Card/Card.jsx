import React from "react";
import CardItem from "./CardItem";

const Card = () => {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-8">
          <span className="text-uppercase fw-light">Myths</span>
          <h6 className="fs-h2 my-2">6 Coding Myths</h6>
          <p className="mb-5">
            There are a million and one myths about coding and coders that make
            people hesitant to pursue it as a skill. So in this post we`ll
            unravel some om the moste commande we have heard.
          </p>
        </div>

        <ul className="row list-unstyled">
          <CardItem />
        </ul>
      </div>
    </div>
  );
};

export default Card;
