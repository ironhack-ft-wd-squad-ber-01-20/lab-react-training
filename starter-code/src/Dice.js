import React, { Component } from "react";

class Dice extends React.Component {
  state = {
    img: "../img/dice1.png"
  };

  handleClick = () => {
    this.setState({
      img: "../img/dice-empty.png"
    });

    let randomNubmer = Math.random() * 6;
    randomNubmer = Math.floor(randomNubmer);
    let imgName = `../img/dice${randomNubmer}.png`;

    setTimeout(() => {
      this.setState({
        img: imgName
      });
    }, 1000);
  };

  render() {
    const style = {
      width: "100px",
      margin: "10px"
    };

    return (
      <div>
        <img onClick={this.handleClick} src={this.state.img} style={style} />
      </div>
    );
  }
}

export default Dice;
