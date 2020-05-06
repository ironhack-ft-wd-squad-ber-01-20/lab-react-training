import React, { Component } from "react";

const backgroundColors = ["purple", "blue", "green", "yellow", "orange", "red"];

class LikeButton extends Component {
  state = {
    likes: 0,
  };
  clickHandler = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    let bgColor = backgroundColors[this.state.likes % 6];
    return (
      <div>
        <button
          onClick={this.clickHandler}
          style={{
            backgroundColor: bgColor,
          }}
        >
          {this.state.likes} likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
