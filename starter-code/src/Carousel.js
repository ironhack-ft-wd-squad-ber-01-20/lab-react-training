import React, { Component } from "react";

class Carousel extends React.Component {
  state = {
    imgIndex: 0
  };

  handleClickLeft = () => {
    let index = this.state.imgIndex - 1;
    if (index < 0) {
      index = this.props.imgs.length - 1;
    }
    this.setState({
      imgIndex: index
    });
  };

  handleClickRight = () => {
    let index = this.state.imgIndex + 1;
    if (index >= this.props.imgs.length) {
      index = 0;
    }
    this.setState({
      imgIndex: index
    });
  };

  render() {
    const style = {
      width: "200px",
      margin: "10px"
    };

    return (
      <div>
        <button onClick={this.handleClickLeft}>Left</button>
        <img src={this.props.imgs[this.state.imgIndex]} style={style} />
        <button onClick={this.handleClickRight}>Right</button>
      </div>
    );
  }
}

export default Carousel;
