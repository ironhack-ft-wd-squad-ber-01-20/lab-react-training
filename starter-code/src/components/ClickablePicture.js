import React, { Component } from "react";

class ClickablePicture extends Component {
  state = {
    isClicked: false,
  };

  clickHandler = () => {
    this.clickHandler.bind(this);
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  };

  render() {
    return (
      <div>
        <img
          onClick={this.clickHandler}
          className="ClickablePicture"
          src={this.state.isClicked ? this.props.imgClicked : this.props.img}
          alt="image"
        />
      </div>
    );
  }
}
export default ClickablePicture;
