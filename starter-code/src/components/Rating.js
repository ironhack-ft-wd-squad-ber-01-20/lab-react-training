import React from "react";

const Rating = (props) => {
  let starRating = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.round(props.children)) {
      // console.log("math-round statement", props.children);
      starRating += "★";
    } else starRating += "✩";
  }

  return (
    <div className="rating-container">
      <div>{starRating}</div>
    </div>
  );
};

export default Rating;
