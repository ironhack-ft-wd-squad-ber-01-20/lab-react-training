import React, { Component } from 'react'; 

const diceImg=[
    { number: 0, url: "./img/dice-empty.png" },
    { number: 1, url: "./img/dice1.png" },
    { number: 2, url: "./img/dice2.png" },
    { number: 3, url: "./img/dice3.png" },
    { number: 4, url: "./img/dice4.png" },
    { number: 5, url: "./img/dice5.png" },
    { number: 6, url: "./img/dice6.png" },
]; 

class Dice extends Component {
    state= {
        clicked: false, 
    }; 
    clickHandler = () => {
        this.setState({
            clicked: !this.state.clicked, 
        }); 
    }; 
    render() {

        return (
            <div className="container">
            
            </div>
        )  
    }
}

export default Dice; 