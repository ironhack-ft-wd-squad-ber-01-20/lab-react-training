import React from "react";
import Rating from "../components/Rating.js";
import "./style.css";

function DriverCard(props) {
  return (
    <div className='driverCard'>
      <img src={props.img} alt='' />
      <div>
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <span>
          {props.car.model} - {props.car.licensePlate}
        </span>
      </div>
    </div>
  );
}

export default DriverCard;
