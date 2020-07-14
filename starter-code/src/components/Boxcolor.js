import React from 'react'; 


function Boxcolor (props) {
    function componentToHex(c) {
        var hex=c.toString(16);
        return hex.length==1? "0" +hex : hex;
    }
    function rgbToHex(r,g,b) {
        return "#"+componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    let hex=rgbToHex(props.r,props.g,props.b);
    return (
        <div className="container" style={{ backgroundColor: "rgb(" + props.r + "," + props.g + "," + props.b + ")", }}>

               <p>rgb({props.r},{props.g},{props.b})</p> 
               <p>{hex}</p>

        </div>
    )
}



export default Boxcolor;