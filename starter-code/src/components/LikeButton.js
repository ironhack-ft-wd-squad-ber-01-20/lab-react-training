import React, { Component } from "react";

const backgroundColors = ["purple", "blue", "green", "yellow", "orange", "red"];

class LikeButton extends Component {
  state = {
    likesCounter: 0,
  };

  clickHandlerCountLikes = () => {
    this.setState({
      likesCounter: this.state.likesCounter + 1,
    });
  };

  render() {
    let background = backgroundColors[Math.floor(Math.random() * 6)];

    return (
      <button
        style={{ backgroundColor: background }}
        className="likes-button"
        onClick={this.clickHandlerCountLikes}
      >
        {this.state.likesCounter} likes
      </button>
    );
  }
}
export default LikeButton;
