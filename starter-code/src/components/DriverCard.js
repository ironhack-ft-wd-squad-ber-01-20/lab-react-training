import React from 'react'
import Rating from './Rating'

export default function DriverCard(props) {
    return (
        <div class="drivercard">
            <img src={props.img} alt={props.name}/>
            <div>
                <p>{props.name}</p>
                <Rating rating={props.rating}/>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}
