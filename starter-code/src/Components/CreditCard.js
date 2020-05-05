import React, { Fragment } from "react";

const CreditCard = (props) => {
  let dioni = "./img/visa.png";
  if (props.type === "Master Card") {
    dioni = "./img/master-card.svg";
  }
  const divStyle = {
    width: "300px",
    color: props.color,
    backgroundColor: props.bgColor,
    display: "flex",
    flexDirection: "column",
    borderRadius: "5%",
    marginLeft: "10px",
  };
  const divStyle2 = {
    display: "flex",
    flexDirection: "row",
  };
  const imgStyle = {
    width: "30%",
  };

  return (
    <Fragment>
      <div style={divStyle}>
        <div>
          <img src={dioni} style={imgStyle} alt="dioni" />
        </div>
        <div>
          <p>{props.number}</p>
        </div>
        <div style={divStyle2}>
          <p>{props.expirationMonth}</p>
          <p>{props.expirationYear}</p>
          <p>{props.bank}</p>
        </div>
        <div>
          <p>{props.owner}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CreditCard;
