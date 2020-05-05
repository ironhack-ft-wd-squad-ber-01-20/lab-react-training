import React, { Fragment } from "react";

const DriverCard = (props) => {
  let ramndomn = Math.round(props.rating);
  let stars;
  if (ramndomn === 0) {
    stars = "☆☆☆☆☆";
  }
  if (ramndomn === 1) {
    stars = "☆☆☆☆★";
  }
  if (ramndomn === 2) {
    stars = "☆☆☆★★";
  }
  if (ramndomn === 3) {
    stars = "☆☆★★★";
  }
  if (ramndomn === 4) {
    stars = "☆★★★★";
  }
  if (ramndomn === 5) {
    stars = "★★★★★";
  }
  const styliing = {
    maxHeight: "100px",
    maxWidth: "100px",

    borderRadius: "100%",
  };
  const styliing2 = {
    backgroundColor: "blue",
    maxWidth: "400px",
    color: "white",
  };

  return (
    <Fragment>
      <div style={styliing2}>
        <p>{props.name}</p>
        <p>{stars}</p>

        <img src={props.img} style={styliing} alt="dioni" />
        <p>
          {props.car.model}
          {props.car.licensePlate}
        </p>
      </div>
    </Fragment>
  );
};

export default DriverCard;
