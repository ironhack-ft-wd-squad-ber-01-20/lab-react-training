import React from "react";

export default function Random(props) {
  let random = Math.floor(Math.random() * (props.max - props.min) + props.min);
  return (
    <div className="container">
      <p>
        Random value between {props.min} and {props.max} => {random}
      </p>
    </div>
  );
}
