import React, { Component } from "react";

const diceImgs = [
  { number: 0, url: "./img/dice-empty.png" },
  { number: 1, url: "./img/dice1.png" },
  { number: 2, url: "./img/dice2.png" },
  { number: 3, url: "./img/dice3.png" },
  { number: 4, url: "./img/dice4.png" },
  { number: 5, url: "./img/dice5.png" },
  { number: 6, url: "./img/dice6.png" },
];
class Dice extends Component {
  state = {
    number: 0,
  };
  clickHandler = () => {
    this.setState({
      number: 0,
    });
    setTimeout(() => {
      this.setState({
        number: Math.floor(Math.random() * 5 + 1),
      });
    }, 1000);
  };

  render() {
    let dice = diceImgs.filter((elem) => {
      if (elem.number === this.state.number) return true;
      return false;
    });

    return dice.map((elem) => {
      return (
        <img
          onClick={this.clickHandler}
          key={elem.number}
          src={elem.url}
          alt="dice"
        />
      );
    });
  }
}

export default Dice;
