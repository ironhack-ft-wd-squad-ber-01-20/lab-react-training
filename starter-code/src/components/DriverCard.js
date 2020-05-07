import React from "react";
import Raiting from "./Rating";

const DriverCard = (props) => {
    let car =props.car
    return (
        <div>
        <h3>{props.name}</h3>
        <p>{props.rating}</p>
        <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    )
}
export default DriverCard;