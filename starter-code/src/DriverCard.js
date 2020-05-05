import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

const DriverCard=(props)=>{
    let car=props.car;
    return(
        <div className='DriverCardBox'>
<img  src={props.img} alt="profileImg"/>
<div className="textAboutDriver">
<h3>{props.name}</h3>
<Rating>{props.rating}</Rating>
<p>{props.car.model} - {props.car.licensePlate}</p>
</div>
</div>
    );

};

export default DriverCard;