import React, { Component } from "react";

class ClickablePicture extends Component {
  state = {
    imgClicked: false,
  };

  imgHandler = () => {
    this.setState({
      imgClicked: !this.state.imgClicked,
    });
  };

  render() {
    if (this.state.imgClicked) {
      return (
        <img
          src={this.props.imgClicked}
          alt="sunnies"
          onClick={this.imgHandler}
        ></img>
      );
    } else {
      return (
        <img src={this.props.img} alt="img" onClick={this.imgHandler}></img>
      );
    }

    return (
      <div>
        <h1>Clickable Picture</h1>
        <img src={this.props.img} alt="img" onClick={this.imgHandler}></img>
      </div>
    );
  }
}

export default ClickablePicture;
