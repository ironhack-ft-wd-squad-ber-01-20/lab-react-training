import React, { Component } from "react";

class LikeButton extends Component {
  // constructor and super can also be initialized with 'props' as first argument
  constructor() {
    super();
    this.state = {
      likeCounter: 0,
      color: "whitesmoke",
    };
  }

  clickHandler = (event) => {
    this.setState({ likeCounter: this.state.likeCounter + 1 });
    this.setState({ color: this.randomColor() });
  };

  randomColor = () => {
    const colorArray = ["purple", "blue", "green", "yellow", "orange", "red"];
    let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

    return randomColor;
  };

  render() {
    return [
      <button
        onClick={this.clickHandler}
        key=""
        style={{ background: this.state.color }}
      >
        {this.state.likeCounter} Likes
      </button>,
    ];
  }
}

export default LikeButton;
