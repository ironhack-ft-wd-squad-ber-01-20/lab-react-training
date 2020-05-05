import React, { Component } from 'react';

class LikeButton extends Component {
    state = {
       clickCount: 0
    };

    clickHandler = () => {
        this.setState(
            {
               clickCount: this.state.clickCount + 1
            })
            };

render() {
    const style = {
      padding: "10px",
      margin: "10px",
      backgroundColor: "blue",
      color: "white"
    };

    return (
        <button onClick = {this.clickHandler} style={style}>
        {" "}
        {this.state.clickCount} Likes {" "}
        </button>
    );
    };
};

export default LikeButton;