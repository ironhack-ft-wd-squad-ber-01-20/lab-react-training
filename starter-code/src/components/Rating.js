import React from "react";

export default function Rating(props) {
  let rating = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.round(props.children)) {
      rating += "★";
    } else {
      rating += "☆";
    }
  }
  return (
    <div>
      <h1>{rating}</h1>
    </div>
  );
}
