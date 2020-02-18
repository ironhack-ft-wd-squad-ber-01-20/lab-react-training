import React from "react";

const BoxColor = props => {
  let rgbToHex = function(rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };

  let red = rgbToHex(props.r);
  let green = rgbToHex(props.g);
  let blue = rgbToHex(props.b);
  let fullHex = "#" + red + green + blue;

  let divStyle = {
    backgroundColor: fullHex
  };

  return (
    <div className="container boxColor" style={divStyle}>
      <p>
        rgb({props.r},{props.b},{props.g})<br />
        {fullHex}
      </p>
    </div>
  );
};

export default BoxColor;
