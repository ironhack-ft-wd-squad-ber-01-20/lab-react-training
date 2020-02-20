import React, { Component } from "react";

const imgs = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg"
];
let i = 0;

class Carousel extends React.Component {
  state = { image: imgs[i] };

  clickHandlerLeft = () => {
    i = (i + 1) % imgs.length;

    this.setState({
      image: (this.state.image = imgs[i])
    });
  };

  clickHandlerRight = () => {
    i = (i + 3) % imgs.length;

    this.setState({
      image: (this.state.image = imgs[i])
    });
  };

  render() {
    return (
      <div className="carousel">
        <button onClick={this.clickHandlerLeft}>Left</button>
        <img className="carousel" src={this.state.image} alt="" />
        <button onClick={this.clickHandlerRight}>Right</button>
      </div>
    );
  }
}

export default Carousel;
