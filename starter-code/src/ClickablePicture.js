import React, { Component } from "react";

class ClickablePicture extends React.Component {
  state = {
    img: this.props.img
  };

  handleClick = () => {
    if (this.state.img == this.props.img) {
      this.setState({
        img: this.props.imgClicked
      });
    } else if (this.state.img == this.props.imgClicked) {
      this.setState({
        img: this.props.img
      });
    }
  };

  render() {
    const imgStyle = {
      width: "200px"
    };
    return (
      <div>
        <img onClick={this.handleClick} src={this.state.img} style={imgStyle} />
      </div>
    );
  }
}

export default ClickablePicture;
