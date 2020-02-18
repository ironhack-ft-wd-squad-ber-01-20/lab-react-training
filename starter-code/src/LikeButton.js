import React, { Component } from "react";

let colors = ["purple", "blue", "green", "yellow", "orange", "red"];

class LikeButton extends React.Component {
  state = {
    likes: 0,
    colorIndex: 0
  };

  handleClick = () => {
    let newColourIndex = this.state.colorIndex + 1;
    if (newColourIndex > colors.length) {
      newColourIndex = 0;
    }

    this.setState({
      likes: this.state.likes + 1,
      colorIndex: newColourIndex
    });
  };

  render() {
    const buttonStyle = {
      padding: "10px",
      margin: "10px",
      backgroundColor: `${colors[this.state.colorIndex]}`,
      color: "white"
    };
    return (
      <button onClick={this.handleClick} style={buttonStyle}>
        {" "}
        {this.state.likes} Likes{" "}
      </button>
    );
  }
}

export default LikeButton;
