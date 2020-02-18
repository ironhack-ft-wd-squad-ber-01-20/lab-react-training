import React, { Component } from "react";

class Dice extends Component {
  state = {
    img: `img/dice3.png`
  };

  handleClick = () => {
    let randomNum = Math.floor(Math.random() * 6 + 1).toString();
    this.setState({
      img: "img/dice-empty.png"
    });

    setTimeout(() => {
      this.setState({
        img: `img/dice${randomNum}.png`
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <img
          onClick={this.handleClick}
          className="diceImg"
          src={this.state.img}
        ></img>
      </div>
    );
  }
}

export default Dice;
