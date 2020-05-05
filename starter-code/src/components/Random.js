import React, { Component } from "react";

class Random extends Component {
  render() {
    let randomValue =
      this.props.min + Math.floor(Math.random() * this.props.max);
    return (
      <div className="box">
        Random value between {this.props.min} and {this.props.max} =>{" "}
        {randomValue}
      </div>
    );
  }
}

export default Random;
