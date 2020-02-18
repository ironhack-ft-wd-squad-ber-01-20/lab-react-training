import React, { Component } from "react";

const BoxColor = props => {
  const style = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
  };

  return <div style={style} className="box-color"></div>;
};

export default BoxColor;
