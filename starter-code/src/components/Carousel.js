import React, { Component } from 'react';

class Carousel extends Component {
    state = {
        counter: 0
    }

    clickHandlerRight = () => {
        // if(this.state.counter > 3) {
        //     this.setState({
        //         counter: 1
        //     })
        // }
        this.setState({
            counter: this.state.counter + 1
        })
    }

    clickHandlerLeft = () => {
        // if(this.state.counter === -1) {
        //     this.setState({
        //         couter: 3
        //     })
        // }
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        let styling = {
            marginLeft: '50px'
        }
        return (
            <div style={styling}>
                <button onClick={this.clickHandlerLeft}>Left</button>
                <img src={this.props.imgs[this.state.counter]} />
                <button onClick={this.clickHandlerRight}>Right</button>
            </div>
        )
    }
}
export default Carousel;