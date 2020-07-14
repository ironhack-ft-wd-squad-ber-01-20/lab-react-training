import React, { Component, Fragment } from "react";

const BoxColor = (props) => {
  const style = {
    backgroundColor: "rgb(" + props.r + "," + props.g + "," + props.b + ")",
  };

  const RGBToHex = (r, g, b) => {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
  };

  return (
    <div style={style}>
      rgb ({props.r},{props.g},{props.b}) <br />
      {RGBToHex(props.r, props.g, props.b)}
    </div>
  );
};

export default BoxColor;
