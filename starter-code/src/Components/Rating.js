import React, { Fragment } from "react";

const Rating = (props) => {
  let ramndomn = Math.round(props.number);
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
    size: "30px",
    fontSize: "50px",
  };

  return (
    <Fragment>
      <p style={styliing}>{stars}</p>
    </Fragment>
  );
};
export default Rating;
