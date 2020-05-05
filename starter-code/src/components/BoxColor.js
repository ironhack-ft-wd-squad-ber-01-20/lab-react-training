import React from "react";

const BoxColor = (props) =>{
    
    const {r,g,b} = props
    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`
      };

    return (
        <div className="boxColor" style={divStyle}>rgb({r}{g}{b})</div>
    )
}


export default BoxColor; 

