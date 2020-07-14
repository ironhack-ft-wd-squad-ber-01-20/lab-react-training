import React from 'react';
import Rating from './Rating';
const DriverCard = (props) => {
    const { name, rating, img, car } = props;
    let imgStyling = {
        position: 'relative',
        width: '100px',
        height: '100px',
        overflow: 'hidden',
        borderRadius:'50%'

}
return (
    <>
        <div>
            <img style={imgStyling} src={img} />
            <h2>{name}</h2>
            <Rating>{rating}</Rating>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    </>
)
}

export default DriverCard