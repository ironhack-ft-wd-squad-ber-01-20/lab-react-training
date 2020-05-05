import React from "react";
import Rating from "./Rating";

export default function DriverCard(props) {
  return (
    <div className="driver-card">
      <div className="driver-img-container">
        <img className="driver-img" src={props.img} alt="Driver Card" />
      </div>

      <div className="driver-details">
        <h1>{props.name}</h1>
        <Rating className="driver-rating">{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}
