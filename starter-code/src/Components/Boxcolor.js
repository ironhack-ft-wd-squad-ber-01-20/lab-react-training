import React from "react";


const Boxcolor = (props) => {

    const divStyle = {
        height: 80,
        width: 500,
        margin: 30,
        backgroundColor: `rgb(${props.r}, ${props.g},${props.b})`
        }
    

    return (

        <div style={divStyle}> </div>
    )


}



export default Boxcolor;