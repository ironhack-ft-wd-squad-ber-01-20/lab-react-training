import React from "react";

class Dice extends React.Component {
  state = {
    imgUrl: "/img/dice1.png"
  };

  diceClick = () => {
    let randomNumber = Math.ceil(Math.random() * 6);
    let randomImage = "/img/dice" + randomNumber + ".png";

    this.setState({
      imgUrl: "/img/dice-empty.png"
    });
    setTimeout(() => {
      this.setState({
        imgUrl: randomImage
      });
    }, 1000);
  };

  render() {
    // let imgUrl = "/img/dice" + this.state.number + ".png";
    // console.log(imgUrl);
    return (
      <div className="dice">
        <img src={this.state.imgUrl} alt="dice" onClick={this.diceClick} />
      </div>
    );
  }
}

export default Dice;
