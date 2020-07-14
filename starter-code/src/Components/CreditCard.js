import React from 'react';
import './style.css';

function CreditCard(props) {
    
    const styling = {
      fontSize: 12, 
      color: props.color,
      backgroundColor: props.bgColor
    }
    
   
      return (
      <div className="creditCard" style={styling} >
            <p>{props.type}</p>
            <p>{props.number}</p>
            <p>{props.expirationMonth} / {props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
      );
    
  } 

export default CreditCard;