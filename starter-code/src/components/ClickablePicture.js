import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state = {
        imgClicked: false
    }

    clickHandler = () => {
        this.setState((state, props) => ({
            imgClicked: !state.imgClicked
        }))
    }

    render() {
        return (
            <div>
                <img src={this.state.imgClicked ? '/img/persons/maxence-glasses.png' : '/img/persons/maxence.png'} alt="maxence" onClick={this.clickHandler} />
            </div>
        )
    }
}