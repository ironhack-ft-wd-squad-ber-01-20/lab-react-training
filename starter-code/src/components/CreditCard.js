import React from 'react';

const CreditCard = (props) => {

    const divStyle = {
        backgroundColor: props.bgColor,
        color: props.color,
    };
    return (
      <div className="CreditCard" style={divStyle}>
        <div className="type">
            {/* <img src={'/img/'+ props.type + '.svg'} alt='cardpicture'></img> */}
        </div>
        <div className="number">
            {props.number}
        </div>
        <div className="expires-bank">
            <span>{'Expires ' + props.expirationMonth + '/'+ props.expirationYear}</span>
            <span className="bank">{props.bank}</span>
        </div>
        <div className="owner">{props.owner}</div>
      </div>
    )
}

export default CreditCard;