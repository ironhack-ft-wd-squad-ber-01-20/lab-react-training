import React, { Component } from "react";
import Rating from "./Rating.js";

const DriverCard = props => {
  let rating = Math.floor(props.rating);

  return (
    <div className="driver-card">
      <div class="driver-content">
        <img src="{props.img}" alt="driver image" />
        <h2>{props.name}</h2>
        <Rating>5</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
