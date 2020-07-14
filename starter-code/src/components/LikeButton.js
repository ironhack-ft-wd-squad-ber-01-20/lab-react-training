import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        likes: 0
    }

    likeHandler = () => {
        this.setState((state, props) => ({
            likes: state.likes + 1
        }))
    }

    render() {
        return <button style={{backgroundColor: this.props.color, color: 'white'}} onClick={this.likeHandler}>{this.state.likes}</button>
    }
}
