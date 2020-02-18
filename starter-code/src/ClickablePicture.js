import React, { Component } from "react";

class ClickablePicture extends Component {
  state = {
    imageSrc: "/img/persons/maxence.png"
  };

  toggleImage = () => {
    if (this.state.imageSrc === "/img/persons/maxence.png") {
      this.setState({
        imageSrc: "/img/persons/maxence-glasses.png"
      });
    } else if (this.state.imageSrc === "/img/persons/maxence-glasses.png") {
      this.setState({
        imageSrc: "/img/persons/maxence.png"
      });
    }
  };

  render() {
    return (
      <div>
        <img
          className="image"
          onClick={this.toggleImage}
          src={this.state.imageSrc}
          alt=""
        />
      </div>
    );
  }
}

export default ClickablePicture;
