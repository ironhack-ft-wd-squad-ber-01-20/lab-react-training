import React from 'react'; 

function CreditCard (props){
    function maskify(cc) {
        var replaced=cc.replace(/.(?=.{4,}$)/g, '*'); 
        return replaced; 
      }
    let ccNumber=maskify(props.number)

    const divStyle = {
        color: props.color,
        backgroundColor: props.bgColor
    }

    return (
        <div className="allcc">
        <div className="creditcard" style={divStyle}>
            <p>{props.type}</p> 
            <p className="ccNumber">{ccNumber}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>        
            <p>{props.owner}</p>
        </div>
        </div>
    )
}



export default CreditCard; 