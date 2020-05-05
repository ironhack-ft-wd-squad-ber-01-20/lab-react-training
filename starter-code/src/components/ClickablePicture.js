import React, { Component } from "react";

class ClickablePicture extends Component {
  state = {
    clicked: false,
  };
  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <img
        onClick={this.clickHandler}
        src={this.state.clicked ? this.props.imgClicked : this.props.img}
        alt="maxence"
      />
    );
  }
}

export default ClickablePicture;
