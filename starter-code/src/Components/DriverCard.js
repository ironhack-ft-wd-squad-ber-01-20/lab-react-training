import React from "react";
import Rating from "./Rating";

const DriverCard = props => {
  return (
    <div className="driverCard">
      <img src={props.img} alt={props.name}></img>
      <div className="driverInfo">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <br />
        {props.car.model} - {props.car.licensePlate}
      </div>
    </div>
  );
};

export default DriverCard;
