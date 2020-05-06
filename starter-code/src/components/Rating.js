import React from "react";
import "./style.css";

const Rating = (props) => {
  let stars = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.round(props.children)) {
      stars += "★";
    } else {
      stars += "✩";
    }
  }

  return <div className='stars'>{stars}</div>;
};

export default Rating;
