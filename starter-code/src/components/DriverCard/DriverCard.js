import React from "react";
import Rating from "../Rating.js";
import './DriverCard.css';

const DriverCard = props => {
  let rating = Math.round(props.rating);

  return (
  <div className="drivercard">
  <div className="img-div"><img className="img" src={props.img}/>
  </div>
  <div className="info">  
    <h2>{props.name}</h2>
  <div><Rating>{props.rating}</Rating></div>
  <p>{props.car.model} - {props.car.licensePlate}</p></div>

 
  </div>
  );
};

export default DriverCard;