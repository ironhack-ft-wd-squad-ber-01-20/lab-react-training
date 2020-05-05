import React from 'react'
import './CreditCard.css';
//import './starter-code/public/img/visa.png';
//import 'starter-code\public\img\master-card.svg'

const CreditCard=(props)=>{
    let CreditCardType={
        'Visa':"\img\visa.png",
        'Master card': "\img\master-card.svg",
    };
    let clientCard=CreditCardType[props.type];
    let cardNumber= props.number.split('');
    console.log(cardNumber);
    let newCardNumber= cardNumber.splice(0, cardNumber.length-4, '•').join('');
    return(
<div className='creditcard' style={{
    backgroundColor:props.bgColor,
    color:props.color
}}>

<p>{clientCard}</p>
<div className="cardText">
<h4>{newCardNumber}</h4>
<p>Expires {props.expirationMonth}/{props.expirationYear}</p>
<p>{props.bank}</p>
<p>{props.owner}</p>
</div>
</div>
    );
};

export default CreditCard;