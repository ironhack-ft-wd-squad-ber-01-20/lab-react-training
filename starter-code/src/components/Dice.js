import React, {Component} from 'react';

class Dice extends Component {
    state = {
        img: './img/dice3.png'
    }

    clickHandler = () => {
        this.setState({
            img: './img/dice-empty.png'
        });
        let randomNum = Math.floor(Math.random() * 6);
        let img = `./img/dice${randomNum}.png`;

        setTimeout(() => {
            this.setState({
                img: img
            })
        }, 1000);
    }
    render() {
        let imgStyle = {
            marginLeft: '50px',
            width: '200px'
        }
        return(
            <div>
                <img onClick={this.clickHandler} style={imgStyle} src={this.state.img} />
            </div>
        )
    }
}

export default Dice
