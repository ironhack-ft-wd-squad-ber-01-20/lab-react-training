import React from 'react'

export default function CreditCard(props) {

    const divStyle = {
        color: props.color,
        backgroundColor: props.bgColor
    }

    return (
        <div className="creditcard" style={divStyle}>
            <p>{props.type}</p>
            <p>{props.number.replace(/.(?=.{4})/g, 'x')}</p>
            <div>
                <p>Expires  {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
                <p>{props.owner}</p>
            </div>

        </div>
    )
}
