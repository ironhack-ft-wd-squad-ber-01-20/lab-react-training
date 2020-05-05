import React, { Fragment } from "react";

const BoxColor = (props) => {
  const divStyle = {
    color: props.color,
    backgroundColor: props.back,
  };
  return (
    <Fragment>
      <div style={divStyle}>
        {props.back}
        <br />
        {props.color}
      </div>
    </Fragment>
  );
};

export default BoxColor;
