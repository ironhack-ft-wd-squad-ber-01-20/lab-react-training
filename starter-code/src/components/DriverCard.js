import React from "react";

const DriverCard = (props) => {
  let stars = "";

  switch (true) {
    case props.rating < 0.5:
      stars = "✩✩✩✩✩";
      break;
    case props.rating < 1.5:
      stars = "★✩✩✩✩";
      break;
    case props.rating < 2.5:
      stars = "★★✩✩✩";
      break;
    case props.rating < 3.5:
      stars = "★★★✩✩";
      break;
    case props.rating < 4.5:
      stars = "★★★★✩";
      break;
    default:
      stars = "★★★★★";
      break;
  }

  return (
    <div className="driver-card-container">
      <img src={props.img} alt={props.name}></img>
      <div className="driver-info">
        <h2>{props.name}</h2>
        <div>{stars}</div>
        <div>
          {props.car.model} - {props.car.licensePlate}
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
