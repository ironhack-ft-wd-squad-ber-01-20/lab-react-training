import React, { Component } from "react";
import "./IdCard.css";

class IdCard extends Component {
  render() {
    // html, jsx code here
    return [
      <div
        className="IdCardPanel"
        key={this.props.firstName + "" + this.props.lastName}
      >
        <img src={this.props.picture} alt="user-pic" />
        <div className="IdCardPanelText">
          <p>
            <strong>First name: </strong>
            {this.props.firstName}
          </p>
          <p>
            <strong>Last name: </strong>
            {this.props.lastName}
          </p>
          <p>
            <strong>Gender: </strong>
            {this.props.gender}
          </p>
          <p>
            <strong>Height: </strong>
            {this.props.height / 100}m
          </p>
          <p>
            <strong>Birth date: </strong>
            {this.props.birth.toLocaleString()}
          </p>
        </div>
      </div>,
    ];
  }
}

export default IdCard;
