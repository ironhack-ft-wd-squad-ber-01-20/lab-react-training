import React from 'react'
import Rating from './Rating.js';

const DriverCard = (props) => {
    const {name,rating,img,car} = props
  

    return (
        <div className ="driverCard">
            <div>
           <img src={img} alt="" />
            </div>
            <div className = "bodyDriver">
            <h3>{name}</h3>
            <Rating>{rating}</Rating>
            <h4>{car.model} - {car.licensePlate}</h4>
            </div>
       
        </div>
    )
    }

export default DriverCard;