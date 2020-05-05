import React, { Component } from "react";

let diceImages = {
  0: "/img/dice-empty.png",
  1: "/img/dice1.png",
  2: "/img/dice2.png",
  3: "/img/dice3.png",
  4: "/img/dice4.png",
  5: "/img/dice5.png",
  6: "/img/dice6.png",
};

class Dice extends Component {
  state = {
    value: 3,
  };

  clickHandler = () => {
    this.setState({
      value: 0,
    });

    setTimeout(() => {
      this.setState({
        value: Math.floor(Math.random() * 6) + 1,
      });
    }, 100);
  };

  render() {
    return (
      <div>
        <img
          className="Dice"
          onClick={this.clickHandler}
          src={diceImages[this.state.value]}
          alt=""
        />
      </div>
    );
  }
}

export default Dice;
