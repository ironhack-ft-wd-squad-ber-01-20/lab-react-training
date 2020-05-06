import React from "react";
import "./style.css";

const BoxColor = (props) => {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  let hex = rgbToHex(props.r, props.g, props.b);

  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };
  return (
    <div style={divStyle} className='box BoxColor'>
      rgb({props.r},{props.g},{props.b}) <br />
      {hex}
    </div>
  );
};

export default BoxColor;
