import React, { Component } from "react";

export default class Carousel extends Component {
  state = {
    index: 1000,
  };
  leftClick = () => {
    this.setState({
      index: this.state.index - 1,
    });
  };
  rightClick = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.leftClick}>Left</button>
        <img
          src={this.props.imgs[this.state.index % this.props.imgs.length]}
          alt="carousel"
        />
        <button onClick={this.rightClick}>Right</button>
      </div>
    );
  }
}
