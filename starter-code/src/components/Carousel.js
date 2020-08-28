import React, { Component } from 'react'

export default class Carousel extends Component {
     
    state = {
        counter: 0
    }
 
    ClickHandlerRigth = () => {
        this.setState((state) => ({
            counter: state.counter + 1
        }))
    }

    ClickHandlerLeft = () => {
        this.setState((state) => ({
            counter: state.counter - 1
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.ClickHandlerLeft}>Left</button>
                <img src={this.props.imgs[this.state.counter]} />
                <button onClick={this.ClickHandlerRigth}>Rigth</button>
            </div>
        )
    }
}