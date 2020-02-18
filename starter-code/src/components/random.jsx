import React from "react";

const random = props => {
  console.log(props);

  let randomNumber = Math.floor(Math.random() * props.max + props.min);
  console.log(randomNumber);
  return (
    <div>
      <p>
        Random number between {props.min} and {props.max} => {randomNumber}
      </p>
    </div>
  );
};

export default random;
