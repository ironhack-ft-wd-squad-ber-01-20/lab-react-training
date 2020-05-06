import React from "react";

const random = props => {
    //create random number between props min and max
    let randomNum = Math.floor(Math.random() * (props.max - props.min)) + props.min;
    return (
        <div>
            <div className ="random">
                <p>Random value between {props.min} and {props.max} => {randomNum}</p>
            </div>
        </div>

    );
};

export default random;