import React from "react";
import './CreditCard.css';

const creditCard = props => {
    //create random number between props min and max
    let styleColor = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }
    // return masked string
    let creditNum = function (cc) {
    let str = "";
    for (let i = 0; i < cc.length - 4; i++) {
    str += "●";
    }
    
    for (let j = 4; j >= 1; j--) {
    let characters = cc.charAt(cc.length - j);
    let lastFour = characters;
    str += lastFour;
    }
    return str;
    }
        //create cardtype variable set to empty string
        let cardType = "";
        //create an object that contains image of each card type
        let types = {
        "Visa": "/img/visa.png",
        "Master Card": "/img/master-card.svg",
        };
        //set cardtype to image using a forEach
        Object.keys(types).forEach (type => {
            if (type === props.type) {
                cardType = types[type];
            }
        });
        return (
        <div>
            <div className ="CreditCard" style={styleColor}>
            <div className ="type"><img  type ={props.type} src={cardType}/></div>
            <p className ="number">{creditNum(props.number)}</p>
                    <div className="expires-bank">
          <span>Expires {('0'+props.expirationMonth).substr(-2)}/{props.expirationYear.toString().substr(2)} </span>
          <span className="bank">{props.bank}</span>
        </div>
        <div className="owner">{props.owner}</div>
            </div>
        </div>

    );
};

export default creditCard;