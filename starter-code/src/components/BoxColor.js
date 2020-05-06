import React from "react";

const boxColor = props => {
    //create random number between props min and max
    let styleColor = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    }
    //rgb to hex function
    let rgbToHex = function (rgb) { 
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
             hex = "0" + hex;
        }
        return hex;
      };
      //add all hex together for full color
      let fullColorHex = function(r,g,b) {   
        let red = rgbToHex(r);
        let green = rgbToHex(g);
        let blue = rgbToHex(b);
        return red+green+blue;
      };

        return (
        <div>
            <div className ="boxcolor" style={styleColor}>
                <p>rgb({props.r},{props.g},{props.b})</p>
                <p>{fullColorHex(props.r,props.g,props.b)}</p>
            </div>
        </div>

    );
};

export default boxColor;