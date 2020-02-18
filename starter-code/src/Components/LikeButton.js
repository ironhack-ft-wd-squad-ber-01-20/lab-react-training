import React from "react";

class LikeButton extends React.Component {
  state = {
    count: 0,
    backgroundColor: ""
  };

  handleClick = () => {
    let color = ["purple", "blue", "green", "yellow", "orange", "red"];
    let randomColor = color[Math.floor(Math.random() * color.length)];

    this.setState({
      count: this.state.count + 1,
      style: { backgroundColor: randomColor }
    });
  };

  render() {
    return (
      <button
        className="likeButton"
        onClick={this.handleClick}
        style={this.state.style}
      >
        {this.state.count} Likes
      </button>
    );
  }
}

export default LikeButton;
