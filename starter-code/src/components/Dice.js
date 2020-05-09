import React, { Component } from "react";

const dicePictures = [
  "/img/dice1.png",
  "/img/dice2.png",
  "/img/dice3.png",
  "/img/dice4.png",
  "/img/dice5.png",
  "/img/dice6.png",
];

class Dice extends Component {
  state = {
    pictures: "/img/dice-empty.png",
  };

  clickHandlerDice = () => {
    this.setState({ pictures: "/img/dice-empty.png" });

    setTimeout(() => {
      this.setState({
        pictures: dicePictures[Math.floor(Math.random() * dicePictures.length)],
      });
    }, 1000);
  };

  render() {
    return (
      <div className="dice-container">
        <img
          src={this.state.pictures}
          alt="dice-img"
          onClick={this.clickHandlerDice}
        ></img>
      </div>
    );
  }
}

export default Dice;
