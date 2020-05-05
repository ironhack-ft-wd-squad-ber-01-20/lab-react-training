import React from "react";

export default function CreditCard(props) {
  let logo = "./img/visa.png";
  if (props.type === "Master Card") logo = "./img/master-card.svg";
  let arrNumber = props.number.split("");
  let hiddenNumber = "●●●● ●●●● ●●●● " + arrNumber.splice(12).join("");
  return (
    <div
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        padding: "20px",
        width: "23%",
        margin: "20px",
        borderRadius: "15px",
        flexDirection: "column",
      }}
    >
      <img className="logo" src={logo} alt="logo" />
      <p className="card-number">{hiddenNumber}</p>
      <div className="expire-bank">
        <p className="card-details">
          Expires {props.expirationMonth}/{props.expirationYear}
        </p>
        <p className="card-details">{props.bank}</p>
      </div>
      <p className="card-details">{props.owner}</p>
    </div>
  );
}
