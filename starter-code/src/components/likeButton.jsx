import React from "react";

class LikeButton extends React.Component {
  state = {
    count: 0,
    buttonText: "Likes"
  };

  handleClick = () => {
    let text = "";

    if (this.state.count === 0) {
      text = "Like";
    } else {
      text = "Likes";
    }

    this.setState({
      count: this.state.count + 1,
      buttonText: text
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.count} {this.state.buttonText}
      </button>
    );
  }
}

export default LikeButton;
