import React from "react";

const Random = props => {
  let randomNumber = Math.random() * (props.max - props.min) + props.min;
  randomNumber = Math.floor(randomNumber);

  return (
    <div className="random">
      <p>
        Random value between {props.min} and {props.max} => {randomNumber}
      </p>
    </div>
  );
};

export default Random;
