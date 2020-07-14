import React, { Fragment } from "react";

const BoxColor = (props) => {
  const boxStyle = {
    color: props.color,
    backgroundColor: props.back,
  };
  return (
    <Fragment>
      <div style={boxStyle}>
        {props.back}
        <br />
        {props.color}
      </div>
    </Fragment>
  );
};

export default BoxColor;