import React from 'react'


const CreditCard = (props) => {
    const {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color} = props
    function splitToDigit(n){
        return (n + '').split('').map((i) => { return Number(i); })
      }
    const newNumber = splitToDigit(number)
    console.log(newNumber)
    let hiddenNumber = "●●●● ●●●● ●●●●"  + newNumber.splice(12).join("");
    console.log(hiddenNumber)
    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
      };
    return (
        <div style={divStyle} className = "creditCard" >
            <div className="type">
            <p>{type}</p>
            </div>
            <div className="bodyCard">
            <p>{hiddenNumber}</p>
            <p>Expires {expirationMonth} / {expirationYear} {bank}</p>
            <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;