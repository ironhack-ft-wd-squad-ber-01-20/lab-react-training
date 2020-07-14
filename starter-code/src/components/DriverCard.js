import React from "react";
import Rating from "./Rating.js";

const DriverCard = (props) => {
  const style = {
    backgroundColor: "teal",
    color: "white",
    margin: "10px",
    borderRadius: "10px",
  };

  const imgStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "100px",
  };

  return (
    <div style={style}>
      <img src={props.img} style={imgStyle} alt=""/> <br />
      {props.name}
      <Rating>{props.rating}</Rating>
      {props.car.model} - {props.car.licensePlate}
    </div>
  );
};

export default DriverCard;
