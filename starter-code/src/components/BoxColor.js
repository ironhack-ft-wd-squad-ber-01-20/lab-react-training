import React from 'react';

const BoxColor = (props) => {
    const divStyle = {
        width: '90%',
        height: '100px',
        backgroundColor: 'rgb(' + props.r + ', '+ props.g + ', '+ props.b + ')'
    }
    return (
        <div style={divStyle}>
            {'rgb(' + props.r + ', '+ props.g + ', '+ props.b + ')'}<br />
            This is just some text in a box.
        </div>
    )
}

export default BoxColor;