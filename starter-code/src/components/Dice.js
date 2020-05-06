import React, { Component } from 'react';

    class Dice extends Component {
        state = {
            imageDisplay : "./img/dice1.png"
        }
        imageHandler = () => {
            let images = ['./img/dice6.png','./img/dice5.png','./img/dice4.png','./img/dice3.png','./img/dice2.png','./img/dice1.png']
                setTimeout(() => {
                        this.setState( {imageDisplay: "./img/dice-empty.png"});
                      }, 1000);
                setTimeout(() => {
                        this.setState( {imageDisplay: images[Math.floor(Math.random() * images.length)]});
                      }, 2000);
              }
        
        render() {
            return (
           <div>
                <img className = "imgDice" onClick = {this.imageHandler}src ={this.state.imageDisplay} />
            </div>
            )
        }
        
      }

export default Dice;