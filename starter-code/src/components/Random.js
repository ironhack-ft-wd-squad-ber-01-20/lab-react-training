import React from "react";

const Random = (props) => {
  let randomNum = Math.floor(Math.random() * Math.floor(props.max) + props.min);
  return (
    <div className="random-card">
      <p>
        Random value between {props.min} and {props.max} => {randomNum}
      </p>
    </div>
  );
};

export default Random;
