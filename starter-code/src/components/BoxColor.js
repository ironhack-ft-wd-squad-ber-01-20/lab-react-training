import React from "react";

const BoxColor = (props) => {
    
    const divStyle = {
        backgroundColor: 'rgb(' + props.r + ', '+ props.g + ', '+ props.b + ')',
        color: "white",
    };
    return (
      <div className="BoxColor box" style={divStyle}>
          {'rgb(' + props.r + ', '+ props.g + ', '+ props.b + ')'}
      </div>
    )
}

export default BoxColor;