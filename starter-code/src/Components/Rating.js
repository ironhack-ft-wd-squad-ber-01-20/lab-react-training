import React from "react";

const Rating = props => {
  let rating = Math.round(props.children);

  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += "★";
  }

  for (let i = rating; i < 5; i++) {
    stars += "☆";
  }

  return <div className="ratings">{stars}</div>;
};

export default Rating;
