import React, { Component } from "react";

class Dice extends Component {
  state = {
    number: 0,
  };
  render() {
    let diceImgs = [
      "./img/dice-empty.png",
      "./img/dice1.png",
      "./img/dice2.png",
      "./img/dice3.png",
      "./img/dice4.png",
      "./img/dice5.png",
      "./img/dice6.png",
    ];
    let ramndomn = Math.round(Math.random() * 5 + 1);

    let randomImgs = diceImgs[ramndomn];
    const click = () => {
      this.setState({ number: ramndomn });
    };

    return (
      <div>
        <img src={randomImgs} onClick={click} style={{ maxWidth: "70px" }}></img>
      </div>
    );
  }
}
export default Dice;