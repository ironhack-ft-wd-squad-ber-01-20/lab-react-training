import React, { Component } from "react";
import "./CreditCard.css";

class CreditCard extends Component {
  expiryDate = (month, year) => {
    let expStr = "";
    if (month.toString().length === 1) {
      expStr = "0" + month.toString() + "/" + year.toString().substr(-2);
    } else {
      expStr = month.toString() + "/" + year.toString().substr(-2);
    }

    return expStr;
  };

  numberMasker = (number) => {
    let numLen = number.toString().length - 4;
    let mask = new Array(numLen + 1).join("*");
    let lastDigits = number.toString().substr(-4);

    return mask + lastDigits;
  };

  render() {
    return [
      <div
        className="CreditCardPanel"
        key=""
        style={{ background: this.props.bgColor }}
      >
        <div className="CardStyle">
          <div className="CardTop">
            <p>{this.props.type}</p>
          </div>
          <div className="CardMiddle" style={{ color: this.props.color }}>
            <p>{this.numberMasker(this.props.number)}</p>
          </div>
          <div className="CardBottom" style={{ color: this.props.color }}>
            <p>
              Expires{" "}
              {this.expiryDate(
                this.props.expirationMonth,
                this.props.expirationYear
              )}{" "}
              {this.props.bank}
            </p>
            <p>{this.props.owner}</p>
          </div>
        </div>
      </div>,
    ];
  }
}

export default CreditCard;
