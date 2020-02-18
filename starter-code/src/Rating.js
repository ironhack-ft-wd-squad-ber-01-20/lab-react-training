import React, { Component } from "react";

const Rating = props => {
  let rating = Math.round(props.children);
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += "★";
    } else {
      stars += "☆";
    }
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
