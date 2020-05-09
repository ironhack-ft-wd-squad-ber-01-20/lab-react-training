import React, { Component } from "react";

class CreditCard extends Component {
  hashedCardNumber = (number) => {
    let numberArr = [...number];
    for (let i = 0; i < numberArr.length - 4; i++) {
      numberArr[i] = "*";
    }
    return numberArr;
  };

  render() {
    const creditCardStyle = {
      backgroundColor: `${this.props.bgColor}`,
      color: `${this.props.color}`,
    };

    return (
      <div className="card-box">
        <div style={creditCardStyle} className="creditcard-card">
          <div className="card-type">
            <p>{this.props.type}</p>
          </div>
          <div className="card-number">
            <p>{this.hashedCardNumber(this.props.number)}</p>
          </div>
          <div className="data">
            <p>
              Expires {this.props.expirationMonth}/{this.props.expirationYear}{" "}
              {this.props.bank}
            </p>
            <p>{this.props.owner}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;
