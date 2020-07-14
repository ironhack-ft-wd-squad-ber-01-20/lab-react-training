import React, { Component } from 'react'

export default class Dice extends Component {
    state = {
        dice: Math.floor(Math.random() * (6-1) + 1)
    }

    diceHandler = () => {
        this.setState((state, props) => ({
            dice: Math.floor(Math.random() * (6-1) + 1)
        }))
        console.log(this.state.dice)
    }

    render() {
        return (
            <div className="dice">
                <img src={'/img/dice' + this.state.dice + '.png'} alt="dice" onClick={this.diceHandler}/>
            </div>
        )
    }
}
