import React, { Component } from "react";

class Carousel extends Component {
  state = {
    // imgs: this.props.imgs,
    counter: 0,
  };

  changeImgLeft = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  changeImgRight = () => {
    if (this.state.counter < this.props.imgs.length - 1) {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
  };

  render() {
    return (
      <div className="carousel">
        <button onClick={this.changeImgLeft}>Left</button>
        <img src={this.props.imgs[this.state.counter]}></img>
        {/* <img src={this.state.imgs[this.state.counter]}></img>
        works with state too. which is better to use in this case??
         */}
        <button onClick={this.changeImgRight}>Right</button>
      </div>
    );
  }
}

export default Carousel;
