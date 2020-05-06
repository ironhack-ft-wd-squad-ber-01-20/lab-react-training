import React, { Component } from 'react';

class Dice extends Component {
    state = {
        img: "../img/dice1.png"
      };
    
      clickHandler = () => {
        this.setState({
          img: "../img/dice-empty.png"
        });
    
        let random = Math.random() * 6;
        random = Math.floor(random);
        let imgName = `../img/dice${random}.png`;
    
        setTimeout(() => {
          this.setState({
            img: imgName
          });
        }, 1000);
      };
    
      render() {
        const style = {
          width: "100px",
        };
    
        return (
          <div>
            <img onClick={this.clickHandler} src={this.state.img} style={style} />
          </div>
        );
      }
};

export default Dice;