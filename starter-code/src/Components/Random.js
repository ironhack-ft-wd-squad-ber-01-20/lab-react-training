import React from 'react'

// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const Random = (props) => {
    //let crazyNumber = {Math.floor(Math.random() * (props.max - props.min) + props.min)}
    
    return (
        <p>Random value between {props.min} and {props.max} - {Math.floor(Math.random() * (props.max - props.min) + props.min)} </p>
    )
}

export default Random