import React, { Component } from "react";
import "./Random.css";

class Random extends Component {
  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  render() {
    return [
      <div className="RandomPanel" key="">
        <p>
          Random value between {this.props.min} and {this.props.max} =>{" "}
          {this.randomNumber(this.props.min, this.props.max)}
        </p>
      </div>,
    ];
  }
}

export default Random;
