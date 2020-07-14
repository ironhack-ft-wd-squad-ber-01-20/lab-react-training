import React from "react";
import "./CreditCard.css";

export default function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  let card = "./img/master-card.svg";

  if (type === "Visa") {
    card = "./img/visa.png";
  }

  const style = {
    width: "400px",
    color: color,
    backgroundColor: bgColor,
    display: "flex",
    flexDirection: "column",
    borderRadius: "5%",
    marginLeft: "10px",
  };

  const imgStyle = {
    width: "30%",
  };

  function maskify(cc) {
    const masked = cc.slice(-4);
    let countNum = "";
    for (let i = cc.length - 4; i > 0; i--) {
      countNum += "*";
    }
    return countNum + masked;
  }

  return (
    <div style={style}>
      <div>
        <img src={card} alt="stupid plastic cards" style={imgStyle} />
      </div>

      <div>
        <p>{maskify(number)}</p>
      </div>

      <div className="flexCardsBox">
        <p>{expirationMonth}</p>
        <p>{expirationYear}</p>
        <p>{bank}</p>
      </div>

      <div>
        <p>{owner}</p>
      </div>
    </div>
  );
}
