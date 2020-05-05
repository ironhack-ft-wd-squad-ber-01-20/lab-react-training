import React, { Fragment } from "react";

const Random = (props) => {
  let ramndomn = Math.random() * props.max + props.min;

  return (
    <Fragment>
      <p>
        Random number betwen {props.min} and {props.max} =>
        {ramndomn}
      </p>
    </Fragment>
  );
};
export default Random;
