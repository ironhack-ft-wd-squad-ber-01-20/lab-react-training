import React, { Component } from "react";

const Random = props => {
  let randomNubmer = Math.random() * (props.max - props.min) + props.min;
  randomNubmer = Math.floor(randomNubmer);

  return (
    <div className="random">
      Random value between {props.min} and {props.max} => {randomNubmer}
    </div>
  );
};

export default Random;
