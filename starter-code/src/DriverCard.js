import React, { Component } from "react";
import Rating from "./Rating.js";

const DriverCard = props => {
  let rating = Math.floor(props.rating);

  const imgStyle = {
    height: "100px",
    width: "100px",
    backgroundImage: `url(${props.img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "50%"
  };

  return (
    <div className="driver-card">
      <div className="driver-container" style={imgStyle}>
        {/* <img src={props.img} alt="driver image" style={imgStyle} /> */}
      </div>
      <div className="driver-content">
        <h2>{props.name}</h2>
        <h2>
          <Rating>{props.rating}</Rating>
        </h2>

        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
