import React from "react";
import "./style.css";

function CreditCard(props) {
  const cardStyle = {
    width: "300px",
    height: "144px",
    margin: "10px",
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
    borderRadius: "10px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  let cardNumber = props.number.toString().substring(12);
  let cardNumberHashed = `••••  ••••  ••••  ${cardNumber}`;

  let cardYear = props.expirationYear.toString().substring(2);
  let cardMonth =
    (props.expirationMonth < 10 ? "0" : "") + props.expirationMonth;

  return (
    <div style={cardStyle}>
      <div className='type'>
        <img
          src={props.type === "Visa" ? "/img/visa.png" : "/img/master-card.svg"}
          alt=''
        />
      </div>
      <div className='number'>{cardNumberHashed}</div>
      <div>
        <span>
          Expires {cardMonth}/{cardYear}
        </span>
        <span className='bank'>{props.bank}</span>
        <div>
          <span className='owner'>{props.owner}</span>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
