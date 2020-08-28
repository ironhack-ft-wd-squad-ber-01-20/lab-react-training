import React, { Component } from 'react'

export default class Dice extends Component {

    state = {
        diceImg: './img/dice5.png'
    }
    
    clickHandler = () => {

        this.setState({
            diceImg: './img/dice-empty.png'
        });
        let randomNum = Math.floor(Math.random() * 6);
        let img = `./img/dice${randomNum}.png`;

        setTimeout(() => {
            this.setState({
                diceImg: img
            })
        }, 1000);

    }  

    render() {
        return (
            <div>
                <img 
                    className="Dice" alt="dice-ramdon"  
                    onClick={this.clickHandler}
                    src={this.state.diceImg} 
                />
            </div>
        )
    }
}