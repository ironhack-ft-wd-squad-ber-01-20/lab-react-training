import React, { Component } from "react";

class LikeButton extends Component {
  state = {
    count: 0
  };

  handleClick = (count, backgroundColor) => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.count} Likes</button>
      </div>
    );
  }
}

export default LikeButton;
