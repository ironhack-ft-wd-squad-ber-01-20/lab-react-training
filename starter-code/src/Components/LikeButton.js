import React, { Component } from "react";
let colors = ["purple", "blue", "green", "yellow", "orange", "red"];

class LikeButton extends Component {
  state = {
    number: 0,
  };
  click = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    let colorf = colors[this.state.number % 6];
    return (
      <div>
        <button
          onClick={this.click}
          style={{
            backgroundColor: colorf,
            color: "white",
          }}
        >
          {this.state.number} likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
