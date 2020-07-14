import React, { Component, Fragment } from 'react'
import BoxColor from "./BoxColor"
// import Visa from "../visa"
// import MasterCard from "../master-card"

// function cardSelector(card) {
//     switch (card) {
//         case "Visa":
//             return "Visa";
//         default:
//             return "MasterCard"
//     }
// }

function securityNumber(number) {
        if (number.length < 5) return number;
        return '⚫'.repeat(number.length - 4) + number.slice(- 4);
    }

// function expirationDate(month) {
//     return month.getMonth()
// }

// function expirationDate(year) {
//     return year.getYear()
// }

function bank(bankName) {
    switch (bankName) {
        case "BNP":
            return "BNP";
        case "N26":
            return "N26";
        default:
            return "Name of the bank";
    }
}

// function owner(name) {
//     return 
// }


const CreditCard = (props) => {
    return (
        <Fragment>
            {/* <img src={cardSelector(props.type)} />  */}
            <p>{securityNumber(props.number)}</p>
            <p>{props.expirationMonth.getMonth}</p>
            <p>{props.expirationYear.getYear}</p>
            <p>{props.bankName}</p>
            <p>{props.owner}</p>
            <div>{props.bgColor}</div>
            <p>{props.color}</p>  
        </Fragment>
    )
}


export default CreditCard