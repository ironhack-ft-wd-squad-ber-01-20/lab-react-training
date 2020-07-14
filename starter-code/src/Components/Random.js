import React, { Fragment } from "react";

const Random = (props) => {
  let randomic = Math.random() * props.max + props.min;
  return (
    <Fragment>
      <p>
        Random number betwen {props.min} and {props.max} =>   
        <span>
          {randomic}
        </span> 
      </p>
    </Fragment>
  );
};
export default Random;