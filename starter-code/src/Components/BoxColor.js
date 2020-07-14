import React, { Component, Fragment } from 'react'


const BoxColor = (props) => {
    return (
        <div style={{
            backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
            width: '100px',
            height: '50px'
        }}></div>

    )
}



export default BoxColor;