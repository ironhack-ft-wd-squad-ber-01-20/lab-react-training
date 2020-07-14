import React from 'react'; 
import Rating from './Rating'; 

function DriverCard(props) {
    return (
        <div className="drivers">
            <div className="singledriver">
                <img src={props.img} alt="pic"/>
                <div>
                <p>{props.name}</p>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
                </div>
            </div>
        </div>
    )
}; 

export default DriverCard; 