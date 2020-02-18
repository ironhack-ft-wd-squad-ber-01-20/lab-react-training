import React, { Component } from "react";

const CreditCard = props => {
  // type: A string that can be "Visa" or "Master Card"
  // number: A string that is number of the credit card. You will only display the 4 last digits for security reasons 😉
  // expirationMonth: A number that represents the month, between 1 and 12
  // expirationYear: A number that represents the year
  // bank: A string that represents the name of the bank
  // owner: A string the reprensents the name of the owner
  // color: A string for the text color of the card
  const style = {
    height: "150px",
    margin: "10px",
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
    display: "inline-block",
    backgroundColor: props.bgColor,
    color: props.color
  };
  const h2Stlye = {
    textAlign: "center",
    margin: "30px auto"
  };
  const typeStyle = {
    textAlign: "right"
  };
  const imgStyle = {
    width: "50px"
  };
  let img = "";
  if (props.type == "Visa") {
    img = "../img/master-card.svg";
  } else if (props.type == "Master Card") {
    img = "../img/visa.png";
  }

  return (
    <div style={style} className="credit-card">
      <div style={typeStyle}>
        <img src={img} alt="credit card logo" style={imgStyle} />
      </div>
      <h2 style={h2Stlye}>
        •••• •••• •••• {props.number.substring(props.number.length - 4)}
      </h2>
      Expires: {props.expirationMonth}/{props.expirationYear}
      <span>{props.bank}</span>
      <br />
      {props.owner}
    </div>
  );
};

export default CreditCard;
