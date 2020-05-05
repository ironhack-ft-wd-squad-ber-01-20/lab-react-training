import React from "react";

const Random = (props) => {
    return (
        <p>
       Random number between {props.min} and {props.max} = >:
       {Math.floor(Math.random()*props.max)}
        </p>
    )
}

export default Random;