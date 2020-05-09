import React from "react";

const BoxColor = (props) => {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    color: `${props.fcolor}`,
  };

  return (
    <div style={divStyle} className="box-color">
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
};

export default BoxColor;
