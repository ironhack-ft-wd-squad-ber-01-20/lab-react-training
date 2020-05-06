import React from "react";
import "./style.css";

const Random = (props) => {
  let number = Math.floor(Math.random() * props.max) + props.min;

  return <div className='box'>{number}</div>;
};

export default Random;
