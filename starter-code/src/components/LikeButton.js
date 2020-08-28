import React, { Component } from 'react'


const colors= ["purple", "blue", "green", "yellow", "orange", "red"];

export class LikeButton extends Component {

    state = {
        clickCount: 0,
        liked: false
    }

    LikeHandler = () => {
        this.setState((state) => ({
            clickCount: state.clickCount + 1,
            liked: !state.liked
        }))
    }

    render() {
        let buttonColor = colors[this.state.clickCount % 6]
        return (
            <div>
                <button className="LikeButton" onClick={this.LikeHandler} style={{background: buttonColor}}>{this.state.clickCount} Likes</button>
            </div>
        )
    }
}

export default LikeButton
