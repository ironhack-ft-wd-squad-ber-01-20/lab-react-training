import React from 'react';
import './IdCard.css';

const IdCard = (props) =>{
    return(
        <ul className='eachIdBox'>
            <img src={props.picture} alt="IdImage"/>
            <div className='IdText'>
            <li>First Name:{props.firstName}</li>
            <li>Last Name: {props.lastName}</li>  
            <li>Gender: {props.gender}</li>     
            <li>Height: {props.height}</li>
            <li>Birth: {props.birt}</li>

</div>
 </ul>
    );
};

export default IdCard;