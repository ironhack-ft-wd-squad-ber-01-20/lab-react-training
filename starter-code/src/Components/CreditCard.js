import React from "react";

const CreditCard = props => {
  // console.log(props.number);
  let num = props.number.toString();
  let creditCard = "•••• •••• •••• " + num.substring(num.length - 4);
  // console.log(creditCard);
  let divStyle = {
    backgroundColor: props.bgColor,
    color: props.color
  };

  let imgUrl;
  if (props.type === "Visa") {
    imgUrl = "/img/visa.png";
  }
  if (props.type === "Master Card") {
    imgUrl = "/img/master-card.svg";
  }
  return (
    <div className="creditCard" style={divStyle}>
      <p className="cardType">
        <img src={imgUrl} alt={props.type} height="20px" />
      </p>
      <p className="cardNumber">{creditCard}</p>
      <p>
        Expires: {props.expirationMonth}/{props.expirationYear} {props.bank}
        <br />
        {props.owner}
      </p>
    </div>
  );
};

export default CreditCard;
