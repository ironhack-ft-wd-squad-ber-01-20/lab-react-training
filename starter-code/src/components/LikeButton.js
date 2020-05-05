import React, { Component } from "react";

class LikeButton extends Component {
  state = {
    clickCount: 0,
    bgColor: "whitesmoke",
  };

  clickHandler = () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
      bgColor: this.state.bgColor,
    });
  };

  render() {
    return (
      <div className="likeBox">
        <button
          className="likeButton"
          style={{
            backgroundColor: `${this.state.bgColor}`,
          }}
          onClick={this.clickHandler}
        >
          {this.state.clickCount} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
